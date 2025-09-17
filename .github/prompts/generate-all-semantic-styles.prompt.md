---
mode: 'agent'
description: 'Generate base styles for all HTML5 tags in Nostromo CSS'
---
Add base styles for all HTML5 tags to `/css/nostromo.css`, using CSS variables for customization and a classless approach. Include all tags: `<html>`, `<head>`, `<title>`, `<base>`, `<link>`, `<meta>`, `<style>`, `<script>`, `<body>`, `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>`, `<a>`, `<abbr>`, `<address>`, `<area>`, `<audio>`, `<b>`, `<bdi>`, `<bdo>`, `<blockquote>`, `<br>`, `<button>`, `<canvas>`, `<caption>`, `<cite>`, `<code>`, `<col>`, `<colgroup>`, `<data>`, `<datalist>`, `<dd>`, `<del>`, `<dfn>`, `<dialog>`, `<div>`, `<dl>`, `<dt>`, `<em>`, `<embed>`, `<fieldset>`, `<form>`, `<h1>`–`<h6>`, `<hr>`, `<i>`, `<iframe>`, `<img>`, `<input>`, `<ins>`, `<kbd>`, `<label>`, `<legend>`, `<li>`, `<map>`, `<menu>`, `<meter>`, `<noscript>`, `<object>`, `<optgroup>`, `<option>`, `<output>`, `<p>`, `<param>`, `<picture>`, `<pre>`, `<progress>`, `<q>`, `<rp>`, `<rt>`, `<ruby>`, `<s>`, `<samp>`, `<select>`, `<slot>`, `<small>`, `<source>`, `<span>`, `<strong>`, `<sub>`, `<sup>`, `<table>`, `<tbody>`, `<td>`, `<template>`, `<textarea>`, `<tfoot>`, `<th>`, `<thead>`, `<tr>`, `<track>`, `<u>`, `<ul>`, `<var>`, `<video>`, `<wbr>`.

1. **Define CSS Variables** in `:root`:
   - `--font-family: monospace, 'Courier New', Courier;`
   - `--text-color: #00ff00;` (dark mode default)
   - `--background-color: #000;` (dark mode default)
   - `--link-hover-color: #00cc00;`
   - `--border-color: #00ff00;`

2. **Style All Tags**:
   - Base: `body { font-family: var(--font-family); color: var(--text-color); background: var(--background-color); width: 100%; max-width: 1200px; margin: 0 auto; }`.
   - Headings: `h1 { font-size: 1.5rem; } h2 { font-size: 1.3rem; } h3 { font-size: 1.2rem; } h4 { font-size: 1.1rem; } h5 { font-size: 1rem; } h6 { font-size: 0.9rem; }`.
   - Text: `p, blockquote, address, cite, q, samp, var, dfn, abbr, small, sub, sup { margin-bottom: 1rem; }`.
   - ASCII Art: `pre, code, kbd { white-space: pre; overflow: auto; font-size: 14px; }`.
   - Links: `a { text-decoration: underline; color: var(--text-color); } a:hover { color: var(--link-hover-color); }`.
   - Forms: `input, button, select, textarea, optgroup, option { border: 1px solid var(--border-color); background: var(--background-color); color: var(--text-color); padding: 0.5rem; width: 100%; max-width: 100%; box-sizing: border-box; }`.
   - Lists: `ul, ol, menu { margin-bottom: 1rem; } li { margin-left: 1.5rem; } ul li { list-style: disc; } ol li { list-style: decimal; }`.
   - Tables: `table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid var(--border-color); padding: 0.5rem; }`.
   - Media: `img, video, audio, canvas, embed, object, iframe, picture, source { max-width: 100%; height: auto; display: block; }`.
   - Layout: `header, main, footer, section, article, aside, nav, figure, details, dialog { padding: 1rem; width: 100%; box-sizing: border-box; }`.
   - Other: `hr { border: 1px solid var(--border-color); } mark { background: var(--text-color); color: var(--background-color); } summary { cursor: pointer; }`.

3. **Responsiveness**:
   - Use `width: 100%`, `max-width`, and `overflow: auto` for fluid layouts.
   - Ensure media elements scale (`max-width: 100%; height: auto;`).
   - Apply `@media (max-width: 600px)` for small screens: reduce font sizes (e.g., `h1 { font-size: 1.3rem; }`) and padding (e.g., `padding: 0.5rem;`).

4. **Performance**:
   - Use shorthand properties and low-specificity selectors.
   - Avoid expensive properties (e.g., no `box-shadow`, `filter`).
   - Keep contribution <3KB.

5. **Validation**:
   - Test ASCII art in `<pre>` across browsers.
   - Verify WCAG 2.1 contrast and responsiveness.
   - Ensure no classes are used.

Save under a comment (`/* Base Styles for All HTML Tags */`). In agent mode, validate rendering and suggest a diff.