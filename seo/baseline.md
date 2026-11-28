# SEO Baseline — 2026-11-28

Repo: `ikmalnordin/mindhive-website` · Static HTML, no build step, no templating (each page repeats its own `<head>`, nav and footer markup — there is no shared include/partial system, so any header/footer/schema change must be applied per-file).

Hosting: GitHub Pages, deployed by pushing to `main`. Custom domain `www.mindhive.my` via a `CNAME` file; `mindhive.my` apex redirects to `www`. HTTPS is enforced by GitHub Pages once the certificate provisions.

## Pages (6 total)

| Page | Title | Meta description | H1 | Word count |
|---|---|---|---|---|
| `index.html` | Mindhive — Practical Data, AI & Corporate Training in Malaysia | Mindhive is your strategic partner in digital transformation — data warehousing, generative AI deployment, and HRD Corp claimable Excel, Data & AI training in Malaysia. | Practical Data & AI for businesses ready to move. | 1210 |
| `training.html` | Corporate Excel, Data & AI Training Malaysia \| Mindhive | Hands-on corporate Excel, Data Analytics, and Generative AI training for Malaysian teams. HRD Corp Claimable. | Hands-on training built around real daily work. | 651 |
| `excel-training.html` | Corporate Excel Training Malaysia \| Mindhive | Hands-on corporate Excel training in Malaysia — master modern formulas, Power Query, PivotTables, and automated reporting. HRD Corp Claimable. | Turn messy spreadsheets into automated reporting. | 478 |
| `data-training.html` | Corporate Data Training Malaysia \| Mindhive | Practical corporate data analytics training in Malaysia — data modelling, Power BI dashboards, SQL fundamentals, and automated reporting. HRD Corp Claimable. | Turn raw business data into trusted decisions. | 471 |
| `ai-training.html` | Corporate AI Training Malaysia \| Mindhive | Hands-on corporate Generative AI training in Malaysia — ChatGPT, Claude, Gemini, and Microsoft 365 Copilot workflows for daily work. HRD Corp Claimable. | Help your workforce use AI with speed and judgement. | 490 |
| `404.html` | Page Not Found \| Mindhive | (noindex, intentionally excluded from sitemap) | This page took a wrong turn somewhere. | 123 |

All titles/descriptions/H1s are already unique per page — no duplication found.

## robots.txt / sitemap.xml / llms.txt

- `robots.txt`: **exists, valid.** Allows all crawling, points to sitemap at `https://www.mindhive.my/sitemap.xml`.
- `sitemap.xml`: **exists, valid.** Lists all 5 indexable pages with `lastmod`, `changefreq`, `priority`. (Dated 2026-11-27 — will need bumping when pages are next edited.)
- `llms.txt`: **does not exist.** To be added in Phase 1.

Correction to the prior audit: it flagged `#courses`, `#contact`, `#curriculum` as dead anchors. On inspection, every in-page anchor on every page resolves correctly (verified programmatically — each `href="#x"` has a matching `id="x"` on the same page). Likely a stale read by whatever crawled the site before. No dead anchors found as of this baseline.

## Other Phase 1 candidates confirmed on inspection

- Internal nav logo links use `href="index.html"` on every page, while the homepage's canonical/schema URL is the root `https://www.mindhive.my/`. Minor inconsistency, not a broken link — flagged per roadmap for cleanup.
- `og:image`/`twitter:image` on every page currently reuse the same `logo.png` — no unique 1200×630 share image per page yet.
- No `llms.txt`.
- GA4 is already installed site-wide (`G-8WL5PQEBXZ`). **Search Console verification status is unknown** — not yet confirmed as verified for this domain (see Phase 0 questions).

## Structured data currently present

- `index.html`: `ProfessionalService` (Organization-equivalent) with `name`, `url`, `logo`, `email`, `telephone`, `sameAs` (LinkedIn), `areaServed`, `serviceType`. No `address` (none given).
- `training.html`: `ItemList` of the three course pages, plus `BreadcrumbList`.
- `excel-training.html` / `data-training.html` / `ai-training.html`: `Course` (with `provider` sub-type `Organization`), plus `BreadcrumbList`.
- No `Person` schema for the founder yet (there is a visible "From the Founder" section on the homepage, not yet marked up).
- No `WebSite` schema on the homepage.
- No `offers` (no published pricing).

## PageSpeed / Core Web Vitals

Not run in this pass — recommend pulling this from PageSpeed Insights (https://pagespeed.web.dev/) for `https://www.mindhive.my/` and one training page, or share the report that produced the "~54/100" baseline score mentioned in the roadmap so we're working from the same numbers. Can also attempt a local Lighthouse run on request.
