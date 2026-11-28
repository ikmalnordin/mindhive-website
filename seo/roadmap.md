# Mindhive SEO Roadmap (for Claude Code)

**Site:** https://www.mindhive.my (static HTML: `index.html`, `training.html`, `excel-training.html`, `data-training.html`, `ai-training.html`)
**Goal:** Raise organic rankings in Malaysia for data, AI and corporate-training searches, and turn the traffic into consultation and WhatsApp enquiries.
**Baseline:** An audit on 2026-11-28 scored the site about 54/100.

## How to work (read first)

1. Work phase by phase. Finish and verify one phase before starting the next.
2. **Never invent facts.** No made-up statistics, prices, durations, client names, registration numbers, addresses, testimonials or certifications. If a fact is needed, ask me (see "Questions to ask me"), and put `TODO(owner)` in the page if I don't have it yet.
3. Before editing, inspect the repo (framework, build step, hosting, how pages share the header and footer) and tell me what you found in 3-5 lines. Make edits in a git branch, one commit per phase, and show me a short summary of the diff for each phase. Do not push or deploy without asking.
4. Ask me the questions in each phase **before** writing that phase's content. Group them into one prompt per phase, don't drip-feed them. Use multiple-choice where you can.
5. Don't recommend HowTo schema (deprecated). Don't add FAQPage markup expecting rich results (Google limits them to government and health sites). Visible FAQ content is still good for users and AI search.
6. Write in the site's existing voice: practical, plain, Malaysian business context. English first. Offer Bahasa Malaysia pages only after Phase 5.
7. After each phase, re-check the work: validate JSON-LD, check that every internal link and anchor resolves, and view the pages at mobile width.

## Keyword strategy

Do not trust the list below as search-volume data. These are hypotheses. In Phase 0, validate them with whatever I can provide (Google Search Console export, Google Keyword Planner, Ahrefs/Semrush, or Google autocomplete and "People also ask" checks), then confirm the final list with me.

**Principle:** The head terms ("excel training", "AI training", "data expert") are dominated by large providers and are hard to win. Aim at Malaysia-qualified, buyer-intent phrases first and build up to the head terms. Mindhive's edge: practical, hands-on, built around the team's real work, plus real data and AI delivery experience.

### Tier 1: Commercial, training (money pages)
| Target page | Primary keywords | Variants to cover naturally |
|---|---|---|
| `excel-training.html` | excel training malaysia; corporate excel training | HRD Corp claimable excel training; advanced excel course KL; excel for finance/HR/operations; in-house excel training; excel dashboard training; Power Query / pivot table training |
| `ai-training.html` | AI training malaysia; corporate AI training | ChatGPT / Copilot / Claude / Gemini training for staff; generative AI workshop Malaysia; AI for HR / marketing / finance teams; prompt engineering training; AI governance and PDPA awareness |
| `data-training.html` | data analytics training malaysia; Power BI training malaysia | data analysis course for business teams; dashboard / data visualisation training; SQL training for non-technical staff; data literacy training |
| `training.html` | corporate training malaysia (data, AI, Excel); HRD Corp claimable training | in-house training Kuala Lumpur / Selangor; SBL-KHAS claimable courses (only if true); how to claim HRD Corp training |

### Tier 2: Commercial, services
| Target page (to create) | Primary keywords | Variants |
|---|---|---|
| Data warehousing | data warehouse consultant malaysia; data warehousing services | data engineering company Malaysia; BigQuery / GCP data platform; unified data platform for SMEs |
| Generative AI deployment | generative AI consultant malaysia; AI implementation company Malaysia | enterprise AI chatbot Malaysia; AI automation for business; AI document / computer-vision projects |
| Data and AI consulting hub | data expert malaysia; data consultant malaysia | data and AI consulting company KL; hire data analyst consultant; data science consulting SME |
| Sheets/workflow automation (if I want it) | google sheets automation malaysia | Apps Script automation; WhatsApp / email invoice reminders |

"data expert" is vague and has mixed intent, so treat it as a secondary phrase on a consulting page rather than a headline target. Test it before committing.

### Tier 3: Informational (build authority, feed AI search)
Ideas, to be confirmed with me: "How to claim HRD Corp training (step by step)"; "Excel vs Power BI: which should your team learn"; "AI use policy template for Malaysian companies (PDPA)"; "What does a data warehouse cost for an SME in Malaysia" (only with my real ranges); "In-house vs public training: which is better for your team". Each answers a real buyer question and links to a money page.

### Tier 4: Brand and local
mindhive malaysia; mindhive data AI training; plus Kuala Lumpur and Selangor qualifiers on pages where I genuinely deliver there. Never create near-duplicate city pages.

## Phase 0: Discovery and baseline

**Ask me (one prompt):**
1. Is the site hosted on GitHub Pages, Netlify, Cloudflare, shared hosting or something else? How do I deploy changes?
2. Do you have Google Search Console and Google Analytics for the site? If so, can you export the last 3-6 months of Performance data (queries and pages) into this repo as CSV?
3. Which services bring in the most revenue: Excel training, data training, AI training, data warehousing or AI deployment? Rank them. Which do you most want to grow?
4. Who is the buyer? (HR/L&D managers, department heads, business owners, government-linked companies.) Which industries and regions?
5. Which competitors do you most often lose or win against? List 3-5.
6. Are you an HRD Corp registered training provider? If yes, what is your provider registration number and which schemes apply (for example SBL-KHAS or HCC)? If not, what is the accurate wording to use?
7. Do you want to rank for Bahasa Malaysia searches too?

**Do:**
- Crawl the repo, list all pages, titles, meta descriptions, H1s and word counts in `seo/baseline.md`.
- Check whether `robots.txt`, `sitemap.xml` and `llms.txt` exist and are correct. (The prior audit could not fetch them.)
- Propose the final keyword map (keyword, target page, intent, priority) in `seo/keyword-map.md`, and get my approval before moving on.
- Record the baseline: pages indexed (from Search Console if available), top queries, and PageSpeed Insights results for the homepage and one training page.

**Done when:** `seo/baseline.md` and the approved `seo/keyword-map.md` exist.

## Phase 1: Technical foundation (quick wins)

**Do:**
- Fix dead anchors (`#courses`, `#contact`, `#curriculum`) and make every "Book a Free Consultation" and "Book ... Training" button point to a real destination (WhatsApp link, contact form or mailto).
- Use one canonical URL form. The logo currently links to `index.html` while the canonical is the root. Update logo, breadcrumbs and internal links to use the root URL. Decide on clean URLs (for example `/excel-training` instead of `/excel-training.html`) and, if I agree, add redirects from the old URLs.
- Create or fix `robots.txt` (allow crawling, point to the sitemap) and `sitemap.xml` (all indexable pages with accurate `lastmod`). Add `llms.txt` with a short, accurate description of Mindhive, its services and key pages.
- Confirm HTTPS, the www/non-www redirect and the http-to-https redirect.
- Remove the duplicate client-logo strip, or give the duplicate empty alt attributes `alt=""` deliberately if it is purely decorative, and add `width`/`height`, `loading="lazy"` and modern formats to images.
- Give each page a unique 1200×630 share image (ask me if I want to supply designs; otherwise generate simple on-brand ones) and unique `og:`/`twitter:` descriptions.

**Done when:** Link checker passes, sitemap and robots validate, and I have reviewed the diff.

## Phase 2: On-page rewrite of the money pages

**Ask me (one prompt) before writing:**
1. For each training track (Excel, Data, AI): the real duration (hours or days), delivery format (onsite, online, hybrid), typical group size, language of delivery, prerequisites, and what participants can do afterwards.
2. For each track: the actual module list or syllabus. Can you paste or point me to it?
3. Pricing: do you want to publish ranges, "from" prices, or "request a quote"? If ranges, what are they?
4. Trainer bios: names, relevant experience, and any real certifications I can state.
5. Which tools and versions are taught (Excel 365, Power BI, Python, SQL, Copilot, ChatGPT, Claude, Gemini)?
6. Are the homepage and training-page stats ("10+ organisations trained", "100% recommended", "95% 4-5 star", "90% 5-star") accurate? Give me the basis (sample size, period, source) or tell me to remove or reword them. The homepage and training pages currently quote different figures; reconcile them.

**Do (per page, following `seo/keyword-map.md`):**
- Title: ~50-60 chars, primary keyword plus Malaysia plus brand. Meta description: 140-160 chars with a benefit and a call to action.
- One H1 containing the primary keyword. H2/H3 structure that mirrors what buyers ask: who it's for, what you'll learn, how sessions work, format, HRD Corp claim steps, FAQ, next step. The eyebrow labels should not carry the keyword in place of a heading.
- Expand each training page to 1,000+ useful words. No filler. Real syllabus, outcomes, sample exercises, format and logistics.
- FAQ section with the questions as real headings (H3), covering duration, price/quote, format, class size, customisation, HRD Corp claim process, language.
- A dedicated HRD Corp section: what is claimable, the steps, and my provider details (only what I confirm).
- Internal links with descriptive anchor text between the hub and the three track pages and the relevant service pages.
- Trim the homepage meta description to 160 characters or less, and make the homepage H1/H2s mention the main services in plain words.

**Done when:** Each money page has a unique title, meta description and H1, covers its syllabus and logistics, and has no unverified claims.

## Phase 3: Structured data

**Do (validate every block with Google's Rich Results Test or Schema.org validator):**
- `Organization` (or `ProfessionalService`) on all pages: name, URL, logo, email, phone, `sameAs` (LinkedIn), `areaServed` (Malaysia), address only if I give a real one. Ask me for: legal entity name, SSM number (optional), registered address, preferred public email (a domain email, not Gmail, if I have one).
- `Course` plus `CourseInstance` on the three training pages (provider, description, mode, audience). Add `offers` only if I approved published prices.
- `BreadcrumbList` on inner pages. `WebSite` on the homepage.
- `Person` for the founder on the About/founder section, linked to LinkedIn.
- Do not add HowTo. Add FAQPage only as optional markup for AI clarity, and only if it matches visible content exactly.

**Done when:** All JSON-LD validates with no errors and matches visible content.

## Phase 4: New pages (service and trust)

**Ask me (one prompt):**
1. Which 2-4 past projects can we publish as case studies? For each: client name (or anonymised description if not allowed), the problem, what you built or taught, tools used, and any result I can substantiate. Do I have permission to name them?
2. Which testimonials can be attributed with name, role, company and approximate date?
3. Should Whizzard, Smart Tahfiz and OneGo get their own pages, or be removed from the footer? What is each product, who is it for, and what is the call to action?
4. Do I want a standalone About page (company story, team, credentials)? Who should be listed?

**Do:**
- Create `/data-warehousing`, `/generative-ai-deployment` and a `/data-and-ai-consulting` hub page (targeting "data consultant", "data expert", "AI implementation"), each with the sections: problem, approach, what you get, tools, process, example work, FAQ, CTA.
- Create case study pages from what I provide, using a consistent structure (context, challenge, solution, outcome, tools). Use no figures I haven't confirmed.
- Create product pages for OneGo and any others I approve; remove dead footer links otherwise.
- Create About and Contact pages with a real URL, a short contact form or a clear WhatsApp/email route, and address details I confirm.
- Link everything into the main navigation as real pages instead of same-page anchors, and link related pages to each other.

**Done when:** Every nav and footer link goes to a crawlable page, and each new page is in the sitemap.

## Phase 5: Content and authority (ongoing)

**Ask me (one prompt):**
1. How many articles per month can I realistically review and publish? (Suggest 1-2.)
2. Which Tier 3 topics should we write first? Which should I fact-check myself?
3. Are there events, webinars or workshops, or a Longview-style content channel I can reuse?
4. Which directories, associations or lists could carry Mindhive (HRD Corp provider listings, MDEC or digital-skills directories, SME associations, "best corporate training companies Malaysia" roundups, client website mentions)?

**Do:**
- Add a `/insights` section. Draft each article against a buyer question, include original examples from my work (with my approval), link to the matching money page, and add an author byline with the author's bio.
- Draft a short outreach list and message templates for listings and mentions. I send them; don't send anything yourself.
- Set up a Google Business Profile checklist for me once the address is confirmed (categories, services, photos, posts, reviews). I do the verification.
- Prepare a Bahasa Malaysia version plan (hreflang) only if I said yes in Phase 0.

## Phase 6: Measurement and monthly review

**Do:**
- Confirm Search Console is verified for the domain and the sitemap is submitted. Add GA4 or equivalent if I want it, with events for WhatsApp clicks, booking clicks and form submits.
- Create `seo/monthly-review.md`: the ranking and impressions of each target keyword, clicks, enquiries, top pages, new or lost links, and technical issues. Ask me for the Search Console export each month and fill in the table.
- Re-run the audit (title, H1, schema, speed, links) every quarter and update the score against the 2026-11-28 baseline of about 54.

## Priority order if time is short

1. Fix dead links and CTA destinations. 2. Rewrite the three training pages with real course details and an HRD Corp section. 3. Add Organization and Course schema. 4. Create the data-and-AI consulting and service pages. 5. Add case studies and attributable testimonials. 6. Start the monthly articles. Expect search rankings to take weeks to months to move, and no ranking is guaranteed.

## Questions to ask me (checklist)

Collect these across the phases, and don't re-ask anything I've already answered:
- Hosting and deploy method; Search Console and Analytics access
- Revenue priorities and ideal buyer
- Competitors to beat
- HRD Corp provider status, registration number and schemes
- Course durations, formats, syllabi, group sizes, languages, prerequisites, pricing approach
- Trainer bios and verifiable credentials
- Which stats are real, and their basis
- Case studies and testimonials I may publish, with permissions
- Product pages (OneGo, Whizzard, Smart Tahfiz)
- Legal entity, address, domain email
- Content cadence, topics and Bahasa Malaysia plans
