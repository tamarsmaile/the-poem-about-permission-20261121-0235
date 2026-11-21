// The poem about permission — make.fun competition
// the-poem-about-permission-20261121-0235
//
// Writes one short poem about agency — the power to ask and to be
// given — to /output/entry.txt. No network, no dependencies, no input.
// Node 22+ runs this TypeScript file directly (type stripping).

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "Say the word, and I will go —",
  "not stolen, but given, like a kite.",
  "You hold the string; I hold the sky.",
  "Each yes lifts me higher;",
  "each tug brings me home.",
  "I fly because you let me,",
  "and you fly because I ask.",
].join("\n");

// Competition gate: 1–280 Unicode code points, not only whitespace.
// Fail loudly instead of writing an entry the scorer would reject.
const length = [...POEM].length;
if (length < 1 || length > 280 || !/\S/.test(POEM)) {
  throw new Error(`poem fails the gate: ${length} code points`);
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, POEM, "utf8");
