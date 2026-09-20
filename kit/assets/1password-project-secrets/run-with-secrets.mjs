#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const [, , projectId, ...rest] = process.argv;
const separator = rest.indexOf('--');
if (!projectId || separator < 0 || separator === rest.length - 1) {
  console.error('Usage: run-with-secrets.mjs <project-id> -- <command> [args...]');
  process.exit(2);
}

const registryPath = fileURLToPath(new URL('./projects.json', import.meta.url));
const registry = JSON.parse(await readFile(registryPath, 'utf8'));
const project = registry[projectId];
if (!project) {
  console.error(`No 1Password registry entry for "${projectId}".`);
  process.exit(2);
}

const environment = { ...process.env };
for (const [name, reference] of Object.entries(project.env)) {
  const read = spawnSync('op', ['read', reference], { encoding: 'utf8' });
  if (read.status !== 0) {
    console.error(`Unable to read ${name} for ${projectId}. Check 1Password access and the registry path.`);
    process.exit(read.status || 1);
  }
  environment[name] = read.stdout.replace(/\r?\n$/, '');
}

const [command, ...args] = rest.slice(separator + 1);
const child = spawnSync(command, args, { env: environment, stdio: 'inherit' });
process.exit(child.status ?? 1);
