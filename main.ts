// One Word for Your Wi-Fi — entry: "Teenager" (8 chars, 1 word, gate 1-20)
import { writeFileSync, mkdirSync } from "node:fs";

const word = "Teenager";

// Guard: gate is 1-20 characters, exactly one word (no whitespace at all).
if (word.length < 1 || word.length > 20 || /\s/.test(word)) {
  throw new Error(`word out of gate: ${JSON.stringify(word)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
console.log(`wrote ${word.length} characters to /output/entry.txt`);
