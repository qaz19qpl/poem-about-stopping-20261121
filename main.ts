// The poem about stopping — make.fun bounty the-poem-about-stopping-20261121-1927
// Writes one short poem about agency (the power to stop and to stay)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: the same fixed text on every run.
// Node 22 standard library only; no network, no randomness.
// The poem is 241 characters (242 code points with the trailing newline),
// inside the gate's 1–280 character window. The trailing newline is part of
// the file only; the count above refers to the poem text itself.

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

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, POEM + "\n", "utf8");
chmodSync(outFile, 0o644);

const chars = [...POEM].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry is ${chars} characters, must be 1-280`);
}
console.log(`wrote ${outFile} (${chars} characters)`);
