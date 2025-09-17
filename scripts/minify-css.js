// Minify nostromo.css to nostromo.min.css
// Usage: node minify-css.js

const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../css/nostromo.css');
const outputPath = path.join(__dirname, '../css/nostromo.min.css');

function minifyCSS(css) {
  return css
    .replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '') // Remove comments
    .replace(/\s{2,}/g, ' ') // Collapse whitespace
    .replace(/\s*([:;{},])\s*/g, '$1') // Remove space around selectors
    .replace(/;}/g, '}') // Remove unnecessary semicolons
    .trim();
}

fs.readFile(inputPath, 'utf8', (err, css) => {
  if (err) throw err;
  const minified = minifyCSS(css);
  fs.writeFile(outputPath, minified, err => {
    if (err) throw err;
    console.log('Minified CSS written to', outputPath);
  });
});
