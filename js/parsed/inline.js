export function parseInLine(text) {
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  return text;
}

