let editor = document.getElementById("editor")
let preview = document.getElementById("preview")

editor.addEventListener("input", function() {
  // preview.textContent = editor.value;
  const markdownText = editor.value;
  const parsed = parsedMarkdown(markdownText);
  preview.innerHTML = parsed;
});

function parsedMarkdown(text) {
  // split into lines
  let lines = text.split("\n");

  let result = lines.map(line => {
    
    // heading
    if (line.startsWith("## ")) 
      return "<h2>" + line.slice(3) + "</h2>";
    
    if (line.startsWith("# "))
      return "<h1>" + line.slice(2) + "</h1>";

    // bold
    line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

    // paragraph
    return "<p>" + line + "</p>"

  })

  return result.join("");
}
