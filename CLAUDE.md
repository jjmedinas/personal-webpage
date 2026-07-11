# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Juan Medina's personal portfolio — a single-page static site. Plain HTML/CSS/JS, **no build step, no dependencies, no framework**.

- `index.html` — all markup, one page: nav, hero, about, projects, footer
- `styles.css` — all styling; CSS custom properties in `:root`, single mobile breakpoint
- `script.js` — mobile nav toggle only

## Running

Open `index.html` directly in a browser (`file://` works — all paths are relative except the Google Fonts CDN link). A server is not required. If one is wanted: `python3 -m http.server`.

No tests, no lint, no build.

## Conventions

- **Responsive**: single breakpoint at `max-width: 720px` in `styles.css`. The desktop nav links hide and the hamburger (`.nav__toggle`) shows; the project grid collapses to one column. Match the prototype's mobile branch — do not introduce a JS-driven width check; keep responsiveness in CSS.
- **Colors/type**: change the CSS variables in `:root` rather than hardcoding. Accent is coral `--accent: #e5533c`. Type is Geist / Geist Mono (Google Fonts).
- **Class naming**: BEM-ish (`block__element`, e.g. `card__meta`, `nav__mobile`).
- Project cards and footer links are hardcoded HTML in `index.html` — edit them there.

## Origin

The site was ported from a Claude Design prototype (`Juan Medina - Site Prototype.dc.html`) in the claude.ai/design project "Modern founder portfolio website". That source uses a proprietary reactive template framework (`<x-dc>`, `sc-for`, `sc-if`, `{{ }}`, `DCLogic`); this repo is the plain-web translation of it. To re-sync from the design source, use the DesignSync tool / `/design-sync` skill.
