import { parseMarkdown } from "./parsed/index.js";

let editor = document.getElementById("editor")
let preview = document.getElementById("preview")

editor.addEventListener("input", function() {
  // preview.textContent = editor.value;
  const markdownText = editor.value;
  const parsed = parseMarkdown(markdownText);
  console.log(parsed);
  preview.innerHTML = parsed;
});

