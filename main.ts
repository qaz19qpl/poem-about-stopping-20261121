// the-poem-about-stopping-20261121-1927
// Writes one short poem about agency — the power to stop and to stay.
// Deterministic: the same poem on every run.
// Node 22 stdlib only. No network, no randomness.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I keep the door unopened.",
  "The message unsent, the engine off —",
  "this is the work too: the hand",
  "that does not reach.",
  "",
  "To stop is not to lose the thread.",
  "It is to hold it, loose, and choose",
  "the quiet room, the unspent hour,",
  "the self that stays.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Self-check: count in Unicode code points (so the em dash counts as one
// character, not three bytes); the poem must stay within 1..280.
const chars = [...POEM].length;
if (chars < 1 || chars > 280) {
  throw new Error(`poem is ${chars} characters, expected 1..280`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, POEM + "\n", "utf8");
chmodSync(outFile, 0o644);

console.log(`wrote ${outFile} (${chars} characters)`);
