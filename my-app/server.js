/*
 *  server.js
 *  -----------------
 *  A tiny Express server that serves the simple calculator.
 *  It serves the static files (index.html, style.css, app.js) from the
 *  current directory and listens on port 3000 (or the value of
 *  process.env.PORT).
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory (index.html, style.css, app.js)
app.use(express.static(path.resolve(__dirname)));

// For any route that isn't a file, send back index.html so the browser
// can load the calculator page. This technique is handy when you want
// to support client‑side routing but in our case it’s just a safety
// net.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Simple Calculator server running on http://localhost:${PORT}`);
});

// If you want to run the server you can do:
//   $ node server.js
// Then open http://localhost:3000 in your browser.
