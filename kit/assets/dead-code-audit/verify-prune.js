#!/usr/bin/env node
// Prove prune-css.js's output changed nothing live: for every selector that
// maps to a still-live class, its declaration body(ies) must appear in the
// pruned file identical and in the same order as the original. Reports any
// mismatch (a real bug) and confirms zero mismatches otherwise - the thing
// to check before applying a dead-CSS removal with no way to render the
// page and look at it.
//
// Usage: node verify-prune.js <original.css> <pruned.css> <dead-classes.txt>

const fs = require('fs');

const origSrc = fs.readFileSync(process.argv[2], 'utf8');
const prunedSrc = fs.readFileSync(process.argv[3], 'utf8');
const deadClasses = new Set(fs.readFileSync(process.argv[4], 'utf8').split('\n').filter(Boolean));

function parseTopLevel(text) {
  const items = [];
  let i = 0;
  const n = text.length;
  while (i < n) {
    if (text.startsWith('/*', i)) {
      const end = text.indexOf('*/', i + 2);
      const stop = end === -1 ? n : end + 2;
      items.push({ type: 'raw', text: text.slice(i, stop) });
      i = stop;
      continue;
    }
    if (/\s/.test(text[i])) {
      let j = i;
      while (j < n && /\s/.test(text[j])) j++;
      items.push({ type: 'raw', text: text.slice(i, j) });
      i = j;
      continue;
    }
    let j = i;
    let depth = 0;
    let sawBrace = false;
    while (j < n) {
      if (text.startsWith('/*', j)) { const e = text.indexOf('*/', j + 2); j = e === -1 ? n : e + 2; continue; }
      const ch = text[j];
      if (ch === '{') { depth++; sawBrace = true; j++; continue; }
      if (ch === '}') { depth--; j++; if (depth === 0) break; continue; }
      if (ch === ';' && depth === 0) { j++; break; }
      j++;
    }
    const chunk = text.slice(i, j);
    if (sawBrace) {
      const braceIdx = chunk.indexOf('{');
      const header = chunk.slice(0, braceIdx);
      const body = chunk.slice(braceIdx + 1, chunk.length - 1);
      items.push({ type: 'block', header, body, raw: chunk });
    } else {
      items.push({ type: 'raw', text: chunk });
    }
    i = j;
  }
  return items;
}

function classTokens(selector) {
  const matches = selector.match(/\.[a-zA-Z][a-zA-Z0-9_-]*/g) || [];
  return matches.map((m) => m.slice(1));
}

function flatten(items, out, mediaPrefix) {
  for (const item of items) {
    if (item.type !== 'block') continue;
    const header = item.header.trim();
    if (/^@media/.test(header)) {
      flatten(parseTopLevel(item.body), out, mediaPrefix + '|' + header);
      continue;
    }
    if (/^@(keyframes|font-face|import|supports|page)/.test(header)) {
      out.push({ key: mediaPrefix + '||ATRULE||' + header, body: item.body.trim() });
      continue;
    }
    const parts = header.split(',').map((s) => s.trim());
    for (const sel of parts) {
      out.push({ key: mediaPrefix + '||' + sel, body: item.body.trim().replace(/\s+/g, ' ') });
    }
  }
}

function isDeadSel(sel) {
  const classes = classTokens(sel);
  return classes.length > 0 && classes.every((c) => deadClasses.has(c));
}

const origFlat = [];
flatten(parseTopLevel(origSrc), origFlat, '');
const prunedFlat = [];
flatten(parseTopLevel(prunedSrc), prunedFlat, '');

// group into ordered lists per key
function groupOrdered(flat, filterLive) {
  const map = new Map();
  for (const { key, body } of flat) {
    const sel = key.split('||').pop();
    if (filterLive && isDeadSel(sel)) continue;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(body);
  }
  return map;
}

const origLive = groupOrdered(origFlat, true);
const prunedAll = groupOrdered(prunedFlat, false);

let mismatches = 0;
for (const [key, bodies] of origLive) {
  const prunedBodies = prunedAll.get(key) || [];
  // pruned should contain, in order, at least these same live bodies (it can't have extra ones for the same key beyond what original had)
  const same = JSON.stringify(bodies) === JSON.stringify(prunedBodies);
  if (!same) {
    mismatches++;
    console.log('MISMATCH key:', key);
    console.log('  orig  :', JSON.stringify(bodies));
    console.log('  pruned:', JSON.stringify(prunedBodies));
  }
}
console.log('total live keys checked:', origLive.size, 'mismatches:', mismatches);
