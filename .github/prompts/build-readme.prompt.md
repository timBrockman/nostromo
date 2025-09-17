---
mode: 'agent'
description: 'Generate or update the README file for Nostromo CSS'
---
Create or update the `README.md` file in the project root for Nostromo CSS, a minimal, classless CSS framework inspired by the CRT terminals in *Alien* (1979). Follow this structure:

1. **Project Title and Tagline**: "Nostromo CSS: A Minimal, Classless CSS Framework for Retro Terminal Aesthetics."
2. **Description**: Explain the project’s purpose (styles semantic HTML for green-on-black retro terminal displays, fixed-width monospace fonts, and clean ASCII art rendering), target audience (developers building lightweight, text-based, retro-themed interfaces), and key features (classless design, minimal footprint, dark mode by default, support for precise ASCII art display).
3. **Quick Start**: Provide a CDN link (assume jsDelivr) and a basic HTML example with `<link rel="stylesheet" href="css/nostromo.min.css">` and a `<pre>` block with sample ASCII art (e.g., a simple spaceship graphic).
4. **Installation**: Instructions for local use (e.g., copy `/css/nostromo.min.css` or use NPM if available).
5. **Usage**: Highlight classless styling (e.g., style `<pre>`, `<p>` directly with monospace fonts and #00ff00 on #000), tips for ensuring ASCII art alignment in `<pre>`, and customization for terminal-like interfaces.
6. **Contributing**: Reference `/.github/CONTRIBUTING.md` (or suggest creating one); encourage semantic, minimal contributions that preserve the retro aesthetic.
7. **License**: State MIT license (inspired by Pico CSS).

Use Markdown with clear headings. Include a sample ASCII art block in `<pre>` to demo the retro terminal aesthetic (monospace, green-on-black). Ensure the tone is concise, welcoming, and developer-focused. Validate that the file is minimal (<2KB), links to `/css/nostromo.min.css` work, and ASCII art renders accurately in a browser with Nostromo CSS applied. Update existing content to reflect new features or structure changes, keeping the focus on classless, semantic HTML and core retro styling (no scanlines or glow effects).