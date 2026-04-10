# Solaris Analytics

A self-serve analytics workspace for product and growth teams. Solaris Analytics turns raw event data into clear dashboards, cohort views, and ad-hoc explorations — without waiting on the data team.

**Live demo:** https://shaisolaris.github.io/solaris-analytics-demo/

## What's inside

- KPI overview with traffic, conversion, and revenue metrics
- Cohort and retention exploration
- Custom report builder, calendar, and saved views
- Tables, forms, charts, and UI building blocks
- Full light and dark mode
- Responsive layout from mobile to widescreen

## Tech stack

- Next.js 16 (App Router, static export)
- React 19
- Tailwind CSS 4
- TypeScript
- ApexCharts, FullCalendar, jsVectorMap

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
```

Static files are emitted to `out/` and can be hosted on any static host (GitHub Pages, Vercel, Cloudflare Pages, Netlify, S3, etc.).

## Deployment

This repo deploys to GitHub Pages via GitHub Actions on every push to `main`. The workflow lives in `.github/workflows/deploy.yml`.

## Credits

UI scaffolding based on the open-source TailAdmin Next.js admin template, rebranded and extended for the Solaris product suite.
