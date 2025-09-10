---
applyTo: "css/**/*.css"
---
# CSS-Specific Guidelines for Nostromo
Write plain CSS with a focus on minimalism: Reset browsers, style semantic elements directly (e.g., body { font-family: monospace; color: #00ff00; background: #000; }).
- Aesthetics: Emulate CRT terminals—use fixed-width fonts, subtle scanlines (e.g., background-image linear-gradient), text glow (text-shadow: 0 0 5px #00ff00).
- Classless: Avoid defining classes; target HTML tags like pre, code for ASCII art (white-space: pre; overflow: auto).
- Best Practices: Keep file size tiny (<5KB minified); mobile-responsive with fixed-width text wrapping.
- Validation: After edits, check rendering in browsers; ensure ASCII art aligns in monospace.
- Agentic Flow: Generate styles for semantic elements only; suggest minification if file grows.
Emphasize retro terminal feel: Facilitate ASCII art display with preserved formatting and high-fidelity monospace rendering.