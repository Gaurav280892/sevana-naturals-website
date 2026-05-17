# Sevana Naturals — Website

Official website for **Sevana Naturals Private Limited** — essential oils, attars, and aromatic raw materials from the Indo-Gangetic plain.

> *Bareilly distilled. ISIPCA trained. Globally delivered.*

## About this repository

A static website built in pure HTML and CSS — no framework, no build step, no JavaScript runtime dependencies. Hosted on Vercel.

## Structure

```
sevana-naturals-website/
├── index.html        Home
├── about.html        Founder story & family heritage
├── products.html     Oil portfolio (mint, grasses, specialty, attars)
├── quality.html      Lab testing, storage, certifications, documentation
├── contact.html      Sample request form & contact details
├── styles.css        Design system (single stylesheet for all pages)
├── assets/
│   └── logo.png      Brand logo
└── vercel.json       Vercel deployment configuration
```

## Editing content

Each page is a self-contained HTML file. To edit text:

1. Open the relevant `.html` file directly in the GitHub web editor (click any file, then the pencil icon)
2. Locate the section you want to change (most are clearly commented in the source)
3. Edit the text between the HTML tags
4. Commit the change with a short note describing what changed
5. Vercel auto-deploys within ~30 seconds

## Editing design

All design lives in `styles.css`. Brand colours, typography, spacing, and component styles are defined as CSS variables at the top of the file — change them there and the entire site updates.

Brand colours:
- Deep forest green: `#1A4D2E`
- Cream background: `#FAF8F3`
- Gold accent: `#9C7A3C`

## Deployment

Connected to Vercel for automatic deployment on every push to the `main` branch.

---

© 2026 Sevana Naturals Private Limited
