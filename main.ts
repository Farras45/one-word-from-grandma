// One Word From Grandma — make.fun entry
// Writes the single word Grandma would text about AI to entry.txt.
// Node 22 stdlib only. No input, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: "Robit" — Grandma's warm, baffled typo of "robot",
// the way she would actually type it to a grandchild.
const WORD = "Robit";

// Guard: the gate requires UTF-8 text of 1–30 chars, not only
// whitespace, and the brief requires exactly one word — so refuse
// to write anything that is not a single word with no newline.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`entry word must be one word of 1-30 characters, got: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// writeFileSync with no trailing newline: exactly one word, nothing else.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
