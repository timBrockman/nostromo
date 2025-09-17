---
mode: 'agent'
description: 'Optimize CSS for size and performance in Nostromo CSS'
---
Optimize `/css/nostromo.css` for minimal file size (<5KB minified) and performance, adhering to Nostromo CSS’s classless, retro-terminal aesthetic (monospace fonts, #00ff00 on #000, ASCII art support). Follow these steps:

1. **Minimize Size**:
   - Remove unused or redundant rules/selectors.
   - Use shorthand properties (e.g., `margin` instead of `margin-top`, `margin-bottom`).
   - Eliminate comments and unnecessary whitespace.
   - Avoid complex selectors (e.g., prefer `pre` over `pre > code`).

2. **Enhance Performance**:
   - Target semantic HTML elements only (e.g., `<pre>`, `<p>`, `<body>`); no classes.
   - Use simple, low-specificity selectors to reduce CSS parsing time.
   - Ensure monospace fonts (e.g., `font-family: monospace, 'Courier New'`) for ASCII art (`white-space: pre; overflow: auto`).
   - Optimize for fast rendering: Avoid expensive properties (e.g., `box-shadow`, `filter`); use high contrast colors.
   - Support responsiveness with minimal rules (e.g., `max-width`, `overflow: auto`).

3. **Validation**:
   - Check file size after optimization (<5KB minified).
   - Validate ASCII art rendering in `<pre>` across browsers (e.g., Chrome, Firefox).
   - Ensure high contrast for accessibility (WCAG 2.1 compliance).
   - Test responsiveness on mobile and desktop viewports.

4. **Output**:
   - Save optimized CSS to `/css/opt-nostromo.css`.
   - Generate a minified version as `/css/opt-nostromo.min.css` using a script in `/scripts/` (if available) or suggest an external minifier.
   - Preserve retro aesthetic (green-on-black, monospace) and ASCII art alignment.

In agent mode, plan changes, apply optimizations, and validate output. If updating existing rules, maintain classless design and retro-terminal styling without adding extraneous effects (e.g., no scanlines or glow). Suggest a diff of changes for review.