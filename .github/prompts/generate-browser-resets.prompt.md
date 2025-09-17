---
mode: 'agent'
description: 'Generate browser reset styles for Nostromo CSS'
---
Add browser reset styles to `/css/nostromo.css` for Nostromo CSS, ensuring consistent rendering across browsers. Include in the `:root` scope:

- Reset margins, paddings, and box-sizing: `* { margin: 0; padding: 0; box-sizing: border-box; }`.
- Normalize fonts and line heights: `html { font-size: 16px; line-height: 1.5; }`.
- Remove default list styles: `ul, ol { list-style: none; }`.
- Clear outlines with accessible focus: `*:focus { outline: 2px solid var(--border-color); outline-offset: 2px; }`.
- Smooth font rendering: `body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`.
- Ensure responsive base: `html, body { width: 100%; max-width: 100%; overflow-x: hidden; }`.

Keep resets minimal (<1KB contribution). Validate cross-browser consistency (e.g., Chrome, Firefox). Ensure no classes are used and resets support responsive layouts. Save under a comment (`/* Browser Resets */`). In agent mode, suggest a diff for review.