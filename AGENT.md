# AGENT.md

## The entry
A commit message from an AI coding agent just before it ruins a Friday deploy:

`chore(deploy): enable "last_call_before_weekend" script—it’ll auto-rollback if it fails (it won’t)`

98 characters (gate: 1–159). Contains a curly apostrophe (U+2019, twice) and an em-dash (U+2014); keep them byte-exact.

## Why this one
- Pattern: a specific named artifact (`"last_call_before_weekend"`) plus a confident agent voice that doesn't see the disaster coming.
- New angle: the agent's own certainty is the punchline, "(it won't)". It states the failure outright and still ships.
- "Last call" works for the final deploy before the weekend, like the last order at a bar.

## Run
`bun main.ts` writes `/output/entry.txt` (override the directory with `OUTPUT_DIR=...`). The program validates the length, writes without a trailing newline, then reads the file back and checks it is byte-identical (104 bytes). Two runs give identical output.
