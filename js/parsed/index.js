import { parseBlocks } from "./blocks.js";

export function parseMarkdown(text) {
  return parseBlocks(text);
}

