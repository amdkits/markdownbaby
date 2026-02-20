## Project Structure

```text
.
├── index.html
├── js
│   ├── main.js
│   └── parsed
│       ├── blocks.js
│       ├── index.js
│       └── inline.js
├── README.md
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

3. Do Not Open `index.html` in your browser:
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
