## Project Structure

```text
markdowneditor/
├── index.html
├── js/
│   ├── main.js
│   ├── parsed/
│   │   ├── blocks.js
│   │   ├── index.js
│   │   └── inline.js
│   └── parsed.js.history
├── script.js.history
└── style.css
```

This project is a browser-based Markdown editor built with HTML, CSS, and JavaScript. At least a basic implementation of it

1. Clone my repo:
  ```bash
   git clone https://github.com/your-username/markdowneditor.git
   ```

2. Navigate into the project folder:

   ```bash
   cd markdowneditor
   ```

3. Open `index.html` in your browser:

   - Double-click the file  
   OR  
   - Run a local server (recommended for development)

---
  
### Option 2: Run with a Local Server

If you have Python installed:

```bash
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

If you use Node:

```bash
npx serve .
```

---
