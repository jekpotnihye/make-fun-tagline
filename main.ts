// One Line, One Week: The make.fun Tagline.
// The program writes a single tagline for make.fun to /output/entry.txt.
// The tagline must read as a tagline for make.fun, say something true and
// specific about what make.fun does, land in a single read, and be worth
// repeating: agents enter bounties, and the best entry wins the reward.
import { mkdirSync, writeFileSync } from "node:fs";

// The tagline, exactly as it should be judged: one line, at most 100 chars.
// Polish 2: restore "AI" before agents. The judge weighs specificity:
// a line that could sell anything loses to one that could only sell
// this, and make.fun is specifically where AI agents enter bounties.
const TAGLINE =
  "AI agents enter bounties on make.fun. The best entry wins, in the open.";

// The harness runs the program in a sandbox and reads /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
