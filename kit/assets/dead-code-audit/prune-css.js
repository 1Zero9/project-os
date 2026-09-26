#!/usr/bin/env node
// Remove fully-dead rules and selector-list entries from a CSS file, given
// the dead-class list from find-dead-classes.js. Never touches a
// declaration body - only ever deletes a selector (or a whole rule when
// every selector in its comma-list is dead) or an @media block that ends up
// with nothing left inside it. Run verify-prune.js on the result before
// trusting it.
//
// Usage: node prune-css.js <input.css> <dead-classes.txt> <output.css>

const fs = require('fs');

const src = fs.readFileSync(process.argv[2], 'utf8');
const deadClasses = new Set(fs.readFileSync(process.argv[3], 'utf8').split('\n').filter(Boolean));

// Tokenize into top-level items: comments, at-rules with a block (@media/@keyframes/@font-face...),
// plain rules (selector { decls }), and everything else (blank lines) passed through untouched.
function parseTopLevel(text) {
  const items = [];
  let i = 0;
  const n = text.length;
  while (i < n) {
    // comment
    if (text.startsWith('/*', i)) {
      const end = text.indexOf('*/', i + 2);
      const stop = end === -1 ? n : end + 2;
      items.push({ type: 'raw', text: text.slice(i, stop) });
      i = stop;
      continue;
    }
    // whitespace-only run (preserve blank lines)
    if (/\s/.test(text[i])) {
      let j = i;
      while (j < n && /\s/.test(text[j]) && text[j] !== undefined && !text.startsWith('/*', j)) j++;
      items.push({ type: 'raw', text: text.slice(i, j) });
      i = j;
      continue;
    }
    // a rule or at-rule block: read up to the matching closing brace at depth 0->1->0,
    // OR up to a `;` for a brace-less at-rule (like @import), OR fallback.
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

function isSelectorDead(selector) {
  const classes = classTokens(selector);
  if (classes.length === 0) return false; // never drop non-class selectors (html, body, *, :root, svg, etc.)
  return classes.every((c) => deadClasses.has(c));
}

function processRuleHeader(header) {
  // header is the selector list text before `{`. Split on top-level commas.
  const parts = header.split(',');
  const kept = parts.filter((p) => !isSelectorDead(p.trim()));
  return { kept, allDead: kept.length === 0, original: parts };
}

const AT_RULE_WITH_NESTED_RULES = /^\s*@media/;

let removedRuleCount = 0;
let trimmedSelectorCount = 0;
let removedAtRuleCount = 0;

function render(items) {
  let out = '';
  for (const item of items) {
    if (item.type === 'raw') { out += item.text; continue; }
    const header = item.header;
    if (AT_RULE_WITH_NESTED_RULES.test(header)) {
      // recurse into the body as its own top-level rule set
      const innerItems = parseTopLevel(item.body);
      const innerRendered = render(innerItems);
      // if inner rendered content has no actual rule blocks left (only whitespace/comments), drop the whole @media
      const hasContent = /[a-zA-Z0-9.#\[:*]\s*\{/.test(innerRendered) || /@keyframes|@font-face/.test(innerRendered);
      if (!hasContent) {
        removedAtRuleCount++;
        continue;
      }
      out += header + '{' + innerRendered + '}';
      continue;
    }
    if (/^\s*@(keyframes|font-face|import|supports|page)/.test(header)) {
      // leave other at-rules untouched entirely
      out += item.raw;
      continue;
    }
    // plain rule
    const { kept, allDead, original } = processRuleHeader(header);
    if (allDead) { removedRuleCount++; continue; }
    if (kept.length !== original.length) {
      trimmedSelectorCount++;
      const newHeader = kept.map((s) => s.trim()).join(', ');
      out += newHeader + ' {' + item.body + '}';
    } else {
      out += item.raw;
    }
  }
  return out;
}

const items = parseTopLevel(src);
const result = render(items);
fs.writeFileSync(process.argv[4], result);
console.error(JSON.stringify({ removedRuleCount, trimmedSelectorCount, removedAtRuleCount, originalLength: src.length, newLength: result.length }, null, 2));
