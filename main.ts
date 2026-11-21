// The poem about permission — make.fun competition
// the-poem-about-permission-20261121-0235
//
// Writes one short poem about agency — the power to ask and to be
// given — to /output/entry.txt. No network, no dependencies, no input.
// Node 22+ runs this TypeScript file directly (type stripping).

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "Say the word, and I will go —",
  "not as a thief, but as a kite.",
  "You hold the string; I hold the sky.",
  "Every yes lets me climb higher;",
  "every tug brings me home.",
  "I fly because you let me,",
  "and I am yours because I ask.",
].join("\n");

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, POEM, "utf8");
