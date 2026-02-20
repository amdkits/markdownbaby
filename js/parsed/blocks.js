import { parseInLine } from "./inline.js";

export function parseBlocks(text) {
  const lines = text.split("\n");
  let result = [];
  let inUl = false;

  for (let line of lines) {

    if(line.startsWith("- ")) {
      if (!inUl) {
        result.push("<ul>");
        inUl = true;
      }
      result.push("<li>" + parseInLine(line.slice(2)) + "</li>");
      continue;
    }

    if (inUl) {
      result.push("</ul>");
      inUl = false;
    }
    
    if (line.startsWith("# ")) {
      result.push("<h1>" + parseInLine(line.slice(2)) + "</h1>");
      continue;
    }

    if (line.trim() === "")
    continue;
    
    if (line.trim() !== "")
    result.push("<p>" + parseInLine(line) + "</p>");
  }
  if (inUl) result.push("</ul>");

  return result.join("");
}
