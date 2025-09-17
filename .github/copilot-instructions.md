# Project Overview
Nostromo CSS is a ultra-minimal, classless CSS framework inspired by the CRT terminals on the Nostromo spaceship from the 1979 film Alien. It resets and styles semantic HTML for a retro computer aesthetic: green text on black backgrounds, fixed-width monospace fonts to emulate terminals, and clean rendering of ASCII art. Ideal for lightweight prototypes, text-based interfaces, or sci-fi themed sites. Emphasize classless design—style HTML elements directly without classes. Support dark mode by default.

## Tech Stack
- Primary: Plain CSS (no SCSS or preprocessors for minimalism).
- Tools: NPM/Yarn optional for distribution; Prettier for formatting if used.
- No JS required; focus on vanilla HTML/CSS. Supports CDN for instant use.
- Build: Minimal—optional minification via /scripts/; no compilation needed.

## Folder Structure
- /css/: All CSS files (source like nostromo.css, minified variants like nostromo.min.css).
- /scripts/: Optional utilities (e.g., for minification or theme tweaks).
- /.github/: Workflows, contributing guidelines.
- Root files: package.json (basic scripts if any), .prettierrc (formatting), README.md (usage/docs), LICENSE.md (MIT-inspired).

## Coding Guidelines
- Semantic HTML Priority: Style elements like <pre>, <code>, <p> directly; no classes needed for core functionality.
- Fonts and Aesthetics: Always use fixed-width monospace fonts (e.g., font-family: monospace, 'Courier New'); preserve whitespace in <pre> for ASCII art; add retro effects like color: #00ff00, background: black. 
- Formatting: Single quotes, 2-space indentation if Prettier enabled.
- Accessibility: Ensure high contrast for readability; ARIA where semantic gaps exist.
- Testing: Manual browser checks for terminal emulation across devices; validate ASCII art rendering.
- Conventions: Conventional commits for messages; PRs include ASCII art demos or screenshots of CRT-like output.

In agent mode, prioritize minimal changes, enforce classless semantic focus, and validate for monospace/ASCII compatibility.