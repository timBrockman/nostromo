---
mode: 'agent'
description: 'Generate a comprehensive demo HTML page for Nostromo CSS'
---
Create a demo HTML file at `/examples/demo.html` for Nostromo CSS, showcasing all HTML5 tags with nesting examples and edge cases. Use content themed around the Nostromo UI from *Alien* (1979), such as system logs, warning messages, computer interfaces, crew reports, and alien encounter data (e.g., simulated terminal outputs, status readouts). Avoid lorem ipsum; generate meaningful, movie-related content. Ensure the page is classless, links to `/css/nostromo.min.css`, and tests responsiveness, ASCII art, forms, tables, media, and nested structures. Follow these steps:

1. **Basic Structure**:
   - Start with `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Nostromo CSS Demo - Alien UI</title> <link rel="stylesheet" href="../css/nostromo.min.css"> </head> <body>`.
   - Include a `<header>` with `<h1>Nostromo System Interface Demo</h1>` and `<nav>` with links to sections (e.g., <a href="#logs">System Logs</a>).

2. **Showcase All HTML5 Tags**:
   - Include every HTML5 tag (from generate-all-semantic-styles.prompt.md), even rare ones like <ruby>, <meter>, <progress>, <dialog>, <template>, <slot>.
   - Nest tags logically (e.g., <p> inside <article>, <li> inside <ul> inside <section>, <input> inside <form> inside <fieldset>).
   - Examples:
     - <main> containing <section> for "Crew Reports" with nested <article> <h2>Crew Member: Ripley</h2> <p>Status: Active. Log: Detected unknown signal on LV-426.</p>.
     - <aside> for "System Warnings" with <details> <summary>Alert Details</summary> <p>Lifeform detected in cargo hold.</p> </details>.
     - <figure> with <img src="placeholder-alien-scan.jpg" alt="Xenomorph Scan"> and <figcaption>Scan from MU-TH-UR 6000.</figcaption>.
     - <pre> with ASCII art of the Nostromo ship or alien (e.g., a simple text-based diagram of the spaceship layout).
     - <table> with <thead> <tr> <th>Crew</th> <th>Role</th> <th>Status</th> </tr> </thead> <tbody> rows like <tr> <td>Kane</td> <td>Executive Officer</td> <td>Deceased - Chestburster Incident</td> </tr>.
     - <form> with nested <fieldset> <legend>System Query</legend> <label for="query">Enter Command:</label> <input type="text" id="query"> <button type="submit">Execute</button> </fieldset>.
     - <audio> or <video> placeholders (e.g., <audio controls><source src="nostromo-alarm.mp3" type="audio/mpeg"></audio> for alarm sound).
     - Rare tags: <ruby> for annotated terms like <ruby>LV<rt>Leviathan</rt>-426</ruby>, <meter value="0.7">Hull Integrity: 70%</meter>, <progress value="50" max="100">Self-Destruct Sequence: 50%</progress>.
     - <dialog> for a popup warning: <dialog open><p>Mother: Self-Destruct Activated.</p></dialog>.

3. **Edge Cases**:
   - Nested depth: e.g., <div> inside <span> inside <mark> inside <em> inside <strong> for emphasized warnings.
   - Responsiveness: Include wide tables, long <pre> blocks, and media to test overflow and scaling on small screens.
   - Forms: Multiple inputs (text, radio, checkbox, select with <optgroup>), textarea for logs.
   - Media: <iframe> for embedded "system map", <canvas> for simple drawing (e.g., script to draw a grid).
   - International: <bdi> for right-to-left text in alien scripts, <bdo dir="rtl"> for reversed output.
   - Accessibility: Add ARIA via tags like <role> if needed, but keep minimal.
   - Content Variety: Use movie quotes, logs (e.g., "Special Order 937: Priority One - Insure Return of Organism"), status updates, ASCII art of xenomorph.

4. **Validation**:
   - Ensure page renders correctly with Nostromo CSS (monospace, green-on-black).
   - Test nesting doesn't break layouts; validate HTML validity.
   - Check responsiveness in browsers (e.g., mobile view collapses properly).
   - Verify ASCII art aligns in <pre> and themes switch if data-theme is set.

Close with <footer> <p>USCSS Nostromo - Weyland-Yutani Corp.</p> </footer> </body> </html>. In agent mode, generate the file, validate for completeness and edge cases, and suggest viewing in a browser.