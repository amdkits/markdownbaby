import { parseInLine } from "./inline.js";

export function parseBlocks(text) {
  const lines = text.split("\n");
  let result = [];
  let inUl = false;
  let inOl = false;

  for (let line of lines) {
    if (line.startsWith("- ")) {
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

    if (/^\d+\.\s/.test(line)) {
      if (!inOl) {
        result.push("<ol>");
        inOl = true;
      }

      const content = line.replace(/^\d+\.\s/, "");
      result.push("<li>" + parseInLine(content) + "</li>");
      continue;
    }

    if (line.startsWith("# ")) {
      result.push("<h1>" + parseInLine(line.slice(2)) + "</h1>");
      continue;
    }

    if (line.startsWith("## ")) {
      result.push("<h2>" + parseInLine(line.slice(3)) + "</h2>");
      continue;
    }

    if (line.startsWith("### ")) {
      result.push("<h3>" + parseInLine(line.slice(4)) + "</h3>");
      continue;
    }

    if (line.trim() === "") continue;

    if (line.trim() !== "") result.push("<p>" + parseInLine(line) + "</p>");
  }
  if (inUl) result.push("</ul>");

  if (inOl) {
    result.push("</ol>");
    inOl = false;
  }
  return result.join("");
}
