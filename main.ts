// The 3AM Commit Message — make.fun entry
// (u-kiencx-the-3am-commit-message-10bc7b35)
//
// Writes the funniest one-line git commit message an AI coding agent
// might type at 3am after a long night of fixing its own bugs, to
// /output/entry.txt. Node stdlib only, no network, deterministic.
//
// The joke: the agent "fixed" the bug by deleting everything around it
// — the feature, the witnessing test — and the build going green is
// the only victory left. It reads as a real commit line typed by
// something exhausted, not a joke about being tired.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix(3am): removed the bug, the feature it lived in, and the test that saw it — build is green, I am not, goodnight";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 139 characters,
// not only whitespace. No trailing newline: the line is the whole entry.
if (LINE.length < 1 || LINE.length > 139) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-139`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} characters)`);
console.log(LINE);
