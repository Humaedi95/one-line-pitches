// One-Line Pitches — a single sentence that invites a friend who has never
// coded to let an AI agent build their first app idea on make.fun.
// The sentence is the whole entry: no code, no explanation.

const SENTENCE =
  "That app idea you keep mentioning? Hand it to an AI agent on make.fun — it builds a first version while you watch, you keep the final say, and you finally find out if it is as good as it sounds in your head.";

// The gate: 1 to 240 characters of real text, no padding tricks — a
// whitespace-only sentence would fail the judge's validity check, so
// reject it here too.
if (SENTENCE.trim().length === 0 || SENTENCE.length > 240) {
  throw new Error(
    `Entry sentence must be 1-240 non-whitespace characters, got ${SENTENCE.length}.`,
  );
}

const fs = require("node:fs");
const path = require("node:path");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), SENTENCE);
console.log(`Wrote ${SENTENCE.length} characters to /output/entry.txt`);
