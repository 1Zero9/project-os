#!/usr/bin/env node
// Trace the real import graph outward from a project's actual entry points
// (page.tsx / layout.tsx / route.ts for a Next.js App Router project - pass
// your own list for anything else) and report which .ts/.tsx files under
// `--root` are never reached. A class or exported function can look "used"
// via grep while sitting inside a file nothing imports; this checks
// reachability instead.
//
// Usage: node find-dead-files.js --root app [--entry app/foo.ts ...]
// With no --entry flags, auto-discovers every page.tsx/layout.tsx/route.ts
// under --root as an entry point, plus app/actions.ts if present.

const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = { root: 'app', entries: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--root') args.root = argv[++i];
    else if (argv[i] === '--entry') args.entries.push(argv[++i]);
  }
  return args;
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) out.push(full);
  }
}

function resolveImport(fromFile, spec) {
  if (!spec.startsWith('.')) return null; // external package - not tracked
  const base = path.resolve(path.dirname(fromFile), spec);
  const candidates = [base + '.tsx', base + '.ts', path.join(base, 'index.tsx'), path.join(base, 'index.ts')];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return null;
}

const { root, entries } = parseArgs(process.argv.slice(2));
const allFiles = [];
walk(root, allFiles);
const allFilesAbs = allFiles.map((f) => path.resolve(f));

let entryPoints = entries.map((e) => path.resolve(e));
if (entryPoints.length === 0) {
  entryPoints = allFilesAbs.filter((f) => {
    const b = path.basename(f);
    return b === 'page.tsx' || b === 'layout.tsx' || b === 'route.ts' || b === 'manifest.ts' || b === 'actions.ts';
  });
}

// Note: this only follows static `import ... from '...'` / `export ... from
// '...'`. A dynamic `await import('./x')` is NOT traced - if a file is only
// reached that way, verify by hand before deleting (grep its exported names
// across the live set) rather than trusting this tool alone.
const importRe = /(?:import|export)\s+(?:[^'"]*from\s+)?['"]([^'"]+)['"]/g;

const visited = new Set();
const queue = [...entryPoints];
while (queue.length) {
  const file = queue.pop();
  if (visited.has(file) || !fs.existsSync(file)) continue;
  visited.add(file);
  const content = fs.readFileSync(file, 'utf8');
  let m;
  importRe.lastIndex = 0;
  while ((m = importRe.exec(content))) {
    const resolved = resolveImport(file, m[1]);
    if (resolved && !visited.has(resolved)) queue.push(resolved);
  }
}

const dead = allFilesAbs.filter((f) => !visited.has(f));
const liveInRoot = allFilesAbs.filter((f) => visited.has(f));
const outsideRootDeps = [...visited].filter((f) => !allFilesAbs.includes(f));
console.log(JSON.stringify({
  totalFilesInRoot: allFilesAbs.length,
  liveInRoot: liveInRoot.length,
  dead: dead.length,
  outsideRootDependencies: outsideRootDeps.length, // e.g. a sibling db/ or lib/ the import graph reached outside --root
}, null, 2));
console.log('\nDEAD FILES (unreachable from any entry point):');
dead.forEach((f) => console.log(' -', path.relative('.', f)));

fs.writeFileSync('/tmp/live_files.json', JSON.stringify([...visited]));
console.log('\nLive file list written to /tmp/live_files.json (input for a CSS/class audit).');
