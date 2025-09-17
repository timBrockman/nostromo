---
mode: 'agent'
description: 'Generate vintage computing theme variations for Nostromo CSS'
---
Create or update `/css/nostromo.css` to include vintage computing theme variations for Nostromo CSS, a minimal, classless framework inspired by the CRT terminals in *Alien* (1979). Extend the existing CSS variables and mode support to add multiple themes, allowing customization of retro-terminal aesthetics (e.g., color schemes like green-on-black, amber-on-black, blue-on-white). Use `data-theme` attributes on `<html>` for manual switching (e.g., `data-theme="amber"`), with fallback to `prefers-color-scheme` for dark/light. Follow these steps:

1. **Define Core Variables** in `:root` (from existing styles):
   - `--font-family: monospace, 'Courier New', Courier;`
   - `--text-color: #00ff00;` (default green for dark mode)
   - `--background-color: #000;` (default black)
   - `--link-hover-color: #00cc00;`
   - `--border-color: #00ff00;`

2. **Add Theme Variations**:
   - **Green (Default Dark)**: Use existing dark mode values.
   - **Amber**: Under `[data-theme="amber"]`: `--text-color: #ffbf00; --background-color: #000; --link-hover-color: #ffa000; --border-color: #ffbf00;`
   - **Blue**: Under `[data-theme="blue"]`: `--text-color: #00bfff; --background-color: #000; --link-hover-color: #0099cc; --border-color: #00bfff;`
   - **White-on-Blue (Light Vintage)**: Under `[data-theme="white-on-blue"]`: `--text-color: #ffffff; --background-color: #000080; --link-hover-color: #e6e6e6; --border-color: #ffffff;`
   - **Integrate with Existing Modes**: Override dark/light with these themes if `data-theme` is set; fall back to `prefers-color-scheme` if no `data-theme`.

3. **Apply to All Tags**:
   - Ensure all styled HTML5 tags (from generate-all-semantic-styles.prompt.md) use these variables (e.g., `body { color: var(--text-color); background: var(--background-color); }`).
   - Maintain ASCII art support in `<pre>` (`white-space: pre; overflow: auto`).

4. **Responsiveness and Performance**:
   - Keep themes responsive (e.g., `@media (max-width: 600px)` adjusts font sizes/padding).
   - Minimize file size increase (<1KB per theme); use low-specificity selectors.
   - Avoid expensive properties or extraneous effects (e.g., no scanlines or glow).

5. **Validation**:
   - Test theme switching (e.g., change `data-theme` and refresh).
   - Verify ASCII art readability and WCAG 2.1 contrast in each theme.
   - Check cross-browser compatibility and responsiveness.

Save under a comment (`/* Vintage Computing Theme Variations */`). In agent mode, plan additions, apply to existing styles, validate, and suggest a diff for review. Generate `/css/nostromo.min.css` if possible.