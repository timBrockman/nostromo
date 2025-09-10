---
applyTo: "scripts/**/*.js"
---
# Scripts-Specific Guidelines for Nostromo Builds
/scripts/ for optional tasks like CSS minification—keep ultra-minimal, Node.js based if used.
- Standards: Simple utilities (e.g., minify nostromo.css to nostromo.min.css); no complex dependencies.
- Conventions: Error handling; integrate with package.json scripts (e.g., "minify": "node scripts/minify.js").
- Agentic Behavior: Suggest scripts only if needed; test for output validity (e.g., check file size).
- Best Practices: Lightweight code; focus on preserving retro styles post-minification.
Ensure any scripts support the classless, monospace emphasis without adding overhead.