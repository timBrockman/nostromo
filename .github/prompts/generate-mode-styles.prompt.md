---
mode: 'agent'
description: 'Generate dark and light mode styles for Nostromo CSS'
---
Add dark and light mode styles to `/css/nostromo.css`, using CSS variables and `prefers-color-scheme` for automatic mode switching, with a manual override via `data-theme="light"` on `<html>`. Build on `:root` variables from semantic styles.

1. **Default Dark Mode** (retro-terminal):
   - Use `:root` variables: `--text-color: #00ff00;`, `--background-color: #000;`, `--link-hover-color: #00cc00;`, `--border-color: #00ff00;`.
   - Ensure `<pre>` supports ASCII art (`white-space: pre; overflow: auto`).

2. **Light Mode**:
   - Define under `[data-theme="light"], @media (prefers-color-scheme: light)`:
     - `--text-color: #000;`
     - `--background-color: #e0e0e0;` (light gray)
     - `--link-hover-color: #0033cc;`
     - `--border-color: #000;`
   - Apply to all semantic tags using variables.

3. **Responsiveness**:
   - Ensure modes adapt to screen sizes (e.g., `@media (max-width: 600px)` adjusts padding/font sizes).
   - Verify media elements (e.g., `<img>`) scale correctly.

4. **Performance and Size**:
   - Minimize duplication (<1KB contribution).
   - Use low-specificity selectors.

5. **Validation**:
   - Test mode switching (browser settings or `data-theme`).
   - Verify ASCII art readability and WCAG 2.1 contrast.
   - Check responsiveness.

Save under a comment (`/* Dark and Light Modes */`). In agent mode, validate and suggest a diff. Generate `/css/nostromo.min.css` if possible.