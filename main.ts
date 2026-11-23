import { mkdirSync, writeFileSync } from "node:fs";

// Chosen pitch (130 chars, one sentence): it mirrors the task itself — the
// friend already has the skill it asks for (explaining an idea to a friend),
// the agent does the coding, and the idea-holder only brings the idea.
const PITCH =
  "If you can explain your app idea to a friend, you can build it on make.fun — an AI agent does the coding, you just bring the idea.";

// The gate allows 1-240 characters; fail loudly instead of shipping an
// invalid entry if the pitch is ever edited past the limit.
if ([...PITCH].length < 1 || [...PITCH].length > 240) {
  throw new Error(`pitch is ${[...PITCH].length} chars, gate allows 1-240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
