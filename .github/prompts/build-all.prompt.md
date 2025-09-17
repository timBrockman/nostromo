---
mode: 'agent'
description: 'Build all core files for Nostromo CSS: README, demo page, base styles, and optimize CSS'
---
Execute a comprehensive build process for Nostromo CSS, a minimal, classless framework inspired by the CRT terminals in *Alien* (1979). Run the following prompts in sequence to generate/update the README, demo page, base styles, and optimize the CSS. After each step, verify outputs for completeness, responsiveness, and alignment with the retro-terminal aesthetic (monospace fonts, green-on-black, ASCII art support, no extraneous effects). Follow these steps:

1. **Generate README**: Run `/.github/prompts/generate-readme.prompt.md` to create/update `README.md`. Verify: File size <2KB, includes quick start with CDN link, usage tips for ASCII art, and Alien-themed content; check Markdown rendering and links (e.g., to `/css/nostromo.min.css`).

2. **Generate Demo Page**: Run `/.github/prompts/generate-demo-page.prompt.md` to create `/examples/demo.html`. Verify: Includes all HTML5 tags with nesting and edge cases; content is Alien/Nostromo-themed (e.g., system logs, ASCII art of xenomorph); test responsiveness in a browser (e.g., mobile view handles overflow); ensure classless styling and ASCII art alignment with `/css/nostromo.min.css`.

3. **Generate Base Styles**: Run `/.github/prompts/generate-base-styles.prompt.md` to create/update `/css/nostromo.css` with resets, all HTML5 tag styles, and dark/light modes using CSS variables. Verify: Covers all tags without deprecated ones; responsiveness via media queries and fluid layouts; file size <5KB minified; test ASCII art in <pre>, mode switching (prefers-color-scheme/data-theme), and WCAG 2.1 contrast in a browser.

4. **Optimize CSS**: Run `/.github/prompts/optimize-css-size-performance.prompt.md` to refine `/css/nostromo.css`. Verify: Final size <5KB minified; performance improvements (e.g., low-specificity selectors); re-test demo page and README links with optimized CSS for rendering, responsiveness, and ASCII art fidelity.

Final Verification:
- Load `/examples/demo.html` in a browser with `/css/nostromo.min.css` to confirm all tags, nesting, and edge cases render correctly in dark/light modes.
- Check overall project integrity: No broken links, consistent retro aesthetic, minimal file sizes, and cross-browser compatibility (e.g., Chrome, Firefox).
- If issues found, suggest fixes and re-run affected prompts.

In agent mode, execute sequentially, validate each output, and provide a summary report with diffs or issues. Generate minified files where applicable.---
mode: 'agent'
description: 'Build all core files for Nostromo CSS: README, demo page, base styles, and optimize CSS'
---
Execute a comprehensive build process for Nostromo CSS, a minimal, classless framework inspired by the CRT terminals in *Alien* (1979). Run the following prompts in sequence to generate/update the README, demo page, base styles, and optimize the CSS. After each step, verify outputs for completeness, responsiveness, and alignment with the retro-terminal aesthetic (monospace fonts, green-on-black, ASCII art support, no extraneous effects). Follow these steps:

1. **Generate README**: Run `/.github/prompts/generate-readme.prompt.md` to create/update `README.md`. Verify: File size <2KB, includes quick start with CDN link, usage tips for ASCII art, and Alien-themed content; check Markdown rendering and links (e.g., to `/css/nostromo.min.css`).

2. **Generate Demo Page**: Run `/.github/prompts/generate-demo-page.prompt.md` to create `/examples/demo.html`. Verify: Includes all HTML5 tags with nesting and edge cases; content is Alien/Nostromo-themed (e.g., system logs, ASCII art of xenomorph); test responsiveness in a browser (e.g., mobile view handles overflow); ensure classless styling and ASCII art alignment with `/css/nostromo.min.css`.

3. **Generate Base Styles**: Run `/.github/prompts/generate-base-styles.prompt.md` to create/update `/css/nostromo.css` with resets, all HTML5 tag styles, and dark/light modes using CSS variables. Verify: Covers all tags without deprecated ones; responsiveness via media queries and fluid layouts; file size <5KB minified; test ASCII art in <pre>, mode switching (prefers-color-scheme/data-theme), and WCAG 2.1 contrast in a browser.

4. **Optimize CSS**: Run `/.github/prompts/optimize-css-size-performance.prompt.md` to refine `/css/nostromo.css`. Verify: Final size <5KB minified; performance improvements (e.g., low-specificity selectors); re-test demo page and README links with optimized CSS for rendering, responsiveness, and ASCII art fidelity.

Final Verification:
- Load `/examples/demo.html` in a browser with `/css/nostromo.min.css` to confirm all tags, nesting, and edge cases render correctly in dark/light modes.
- Check overall project integrity: No broken links, consistent retro aesthetic, minimal file sizes, and cross-browser compatibility (e.g., Chrome, Firefox).
- If issues found, suggest fixes and re-run affected prompts.

In agent mode, execute sequentially, validate each output, and provide a summary report with diffs or issues. Generate minified files where applicable.