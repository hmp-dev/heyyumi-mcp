#!/usr/bin/env node
// One version number for every manifest in this repo.
//   node scripts/version.mjs          check that all manifests share server.json's version (CI runs this)
//   node scripts/version.mjs 1.0.7    set every manifest to 1.0.7
// server.json is the source of truth because the official MCP Registry publishes from it.
import { readFileSync, writeFileSync } from 'node:fs';

const MANIFESTS = [
  'server.json',
  '.claude-plugin/plugin.json',
  '.cursor-plugin/plugin.json',
  'gemini-extension.json',
  'plugin.json',
];

// A directory review can restart when the version changes, so these stay put until the listing is live.
const HELD = {
  '.claude-plugin/plugin.json': 'Claude plugin directory review in progress (since 2026-10-06). Remove this line and run the setter once it is live.',
};

const read = (f) => JSON.parse(readFileSync(f, 'utf8'));
const target = process.argv[2];

if (target) {
  if (!/^\d+\.\d+\.\d+$/.test(target)) {
    console.error(`not a semver: ${target}`);
    process.exit(1);
  }
  for (const f of MANIFESTS) {
    if (HELD[f]) {
      console.log(`held  ${f} (${HELD[f]})`);
      continue;
    }
    const raw = readFileSync(f, 'utf8');
    const next = raw.replace(/("version"\s*:\s*")[^"]*(")/, `$1${target}$2`);
    if (next === raw && read(f).version !== target) throw new Error(`no "version" field in ${f}`);
    writeFileSync(f, next);
    console.log(`set   ${f} -> ${target}`);
  }
}

const expected = read('server.json').version;
let bad = 0;
for (const f of MANIFESTS) {
  const v = read(f).version;
  if (v === expected) console.log(`ok    ${f} ${v}`);
  else if (HELD[f]) console.log(`held  ${f} ${v} (expected ${expected} once released)`);
  else {
    console.error(`DRIFT ${f} ${v} != server.json ${expected}`);
    bad++;
  }
}
process.exit(bad ? 1 : 0);
