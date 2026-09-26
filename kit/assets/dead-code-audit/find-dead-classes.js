#!/usr/bin/env node
// Given a CSS file and the live-file list from find-dead-files.js, report
// which top-level class selectors (`.foo { ... }`) never appear as an exact
// token (word-boundary, not substring - "card" is a substring of
// "card-label" and must not count as a match) in any live file's source.
//
// Usage: node find-dead-classes.js --css app/globals.css [--live /tmp/live_files.json]

const fs = require('fs');

function parseArgs(argv) {
  const args = { css: null, live: '/tmp/live_files.json', out: '/tmp/dead_classes.txt' };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--css') args.css = argv[++i];
    else if (argv[i] === '--live') args.live = argv[++i];
    else if (argv[i] === '--out') args.out = argv[++i];
  }
  if (!args.css) throw new Error('--css <path> is required');
  return args;
}

const { css, live, out } = parseArgs(process.argv.slice(2));

const cssSrc = fs.readFileSync(css, 'utf8');
// Candidate classes: every selector that starts a line with a single class
// token. This under-collects compound/combined selectors on purpose (e.g.
// `.a.b { }` only yields "a") - safe direction of error, since a class this
// misses just survives an audit pass rather than getting wrongly deleted.
const classes = [...new Set((cssSrc.match(/^\.[a-zA-Z][a-zA-Z0-9_-]*/gm) || []).map((m) => m.slice(1)))];

const liveFiles = JSON.parse(fs.readFileSync(live, 'utf8')).filter((f) => fs.existsSync(f));
const content = liveFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

const dead = classes.filter((c) => {
  const re = new RegExp('(^|[^a-zA-Z0-9_-])' + c.replace(/-/g, '\\-') + '([^a-zA-Z0-9_-]|$)');
  return !re.test(content);
});

fs.writeFileSync(out, dead.join('\n'));
console.log(JSON.stringify({ totalClasses: classes.length, liveFiles: liveFiles.length, dead: dead.length, out }, null, 2));
