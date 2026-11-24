import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry: the commit message of an AI coding agent, moments before Friday goes sideways.
// Contains a curly apostrophe (U+2019) and an em-dash (U+2014); keep them as-is.
const ENTRY =
  "chore(deploy): enable \"last_call_before_weekend\" script—it’ll auto-rollback if it fails (it won’t)";

const MIN_CHARS = 1;
const MAX_CHARS = 159;

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

const length = [...ENTRY].length;
if (length < MIN_CHARS || length > MAX_CHARS) {
  throw new Error(`entry length ${length} outside ${MIN_CHARS}-${MAX_CHARS}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8"); // no trailing newline

// Read back and compare bytes.
const expected = Buffer.from(ENTRY, "utf8");
const actual = readFileSync(outFile);
if (!actual.equals(expected)) {
  throw new Error("read-back mismatch: entry.txt is not byte-identical");
}

console.log(`wrote ${outFile}: ${length} chars, ${actual.length} bytes, verified`);
