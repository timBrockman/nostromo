---
mode: 'agent'
description: 'Generate base styles for all HTML tags in Nostromo CSS with browser resets and modes'
---
Create or update `/css/nostromo.css` for Nostromo CSS, a minimal, classless framework inspired by the CRT terminals in *Alien* (1979). Generate base styles for all HTML5 tags, browser resets, and dark/light mode support, using CSS variables for customization. Execute these sub-prompts in order:

1. Run `/.github/prompts/generate-browser-resets.prompt.md` to normalize browser defaults.
2. Run `/.github/prompts/generate-all-semantic-styles.prompt.md` to style all HTML5 tags with customizable variables.
3. Run `/.github/prompts/generate-mode-styles.prompt.md` to implement dark and light modes.
4. Run `/.github/prompts/build-theme-variants.prompt.md` to add vintage computing theme variations (e.g., amber-on-black, blue-on-black).

Ensure the final CSS:
- Targets all HTML5 tags (no deprecated tags like `<font>` or `<center>`).
- Uses monospace fonts (`font-family: monospace, 'Courier New', Courier`) and supports ASCII art in `<pre>` (`white-space: pre; overflow: auto`).
- Ensures responsiveness with `max-width`, `overflow: auto`, and fluid layouts (e.g., `width: 100%; max-width: 1200px;` for containers).
- Keeps file size minimal (<5KB minified) with shorthand properties and low-specificity selectors.
- Validates for accessibility (WCAG 2.1 contrast), ASCII art rendering, and cross-browser compatibility.
- Avoids extraneous effects (e.g., no scanlines or glow).

Save to `/css/nostromo.css` with a comment header (`/* Nostromo CSS - Base Styles for All HTML Tags */`). Generate a minified `/css/nostromo.min.css` using a script in `/scripts/` (if available) or suggest an external minifier. In agent mode, plan, apply, and validate changes, providing a diff for review.