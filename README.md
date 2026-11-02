# David Kitunov — Personal portfolio

A single-page portfolio for networking, systems administration, and network-security career interests. Production: https://davidkitunov.netlify.app/

## Run locally

No installation or build step is required. Serve the repository root with any static HTTP server, for example `python -m http.server 8000`, then open `http://localhost:8000/`.

- `index.html`: semantic content, project links, inline icons, and metadata.
- `tokens.css`: shared color, type, spacing, and layout values.
- `base.css`: local fonts, element defaults, focus, reduced motion, and responsive token values.
- `styles.css`: page composition and responsive component styles.
- `app.js`: mobile navigation, current-section indicator, and footer year.
- `public/`: local fonts, optimized thumbnails, icons, and the 1200 × 630 social preview.

Content and navigation work without JavaScript. Fonts are self-hosted with `font-display: swap`. The Smart Crosswalk image shows the public team prototype, not deployed road infrastructure. No simulated interface or invented operational data is added to the portfolio.

## Design system

The whole page follows [Editorial Tech from MengTo/Skills](https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/editorial-tech/SKILL.md), with [Hallmark](https://github.com/Nutlope/hallmark) structure and preservation checks and [Impeccable](https://github.com/pbakaus/impeccable) responsive, typographic and review guidance. A two-line name and large career-focus links open the page. Professional experience occupies a compact navy passage, technical foundations use a two-by-two open grid, education uses two parallel records, and projects share one card system. The approved off-white/navy/blue identity remains. See `DESIGN.md` for the implemented visual rules and `PRODUCT.md` for factual constraints.

All four projects use the same `.project` component inside `.projects-grid`. Media panels are 380px on desktop, 240px at widths up to 1000px, and 220px up to 640px. Each uses a soft-blue mat, inset image window and short caption. All source images use consistent top-centered `cover` crops in a taller window; their original pixels remain unchanged. Cards align within each desktop row while rows and mobile cards size naturally to their content. Technology lists and links align at the bottom of each pair. Keep the learning-project labels explicit.

Section spacing is 72/64/48px across the desktop/tablet/mobile breakpoints. Career-focus links collapse automatically at enlarged text sizes. Versioned CSS URLs ensure an already-open browser receives the current styles after deployment.

## Content rules

Current title: **NOC Analyst**, Ness Digital Engineering, part-time, January 2026–Present. Engineering and administration roles are career interests. Distinguish professional work, ITQ training, and FortiGate familiarity.

The latest CV places DNS and GPO in systems training/familiarity and VMware vSphere and VMware Workstation in virtualization familiarity. Keep these labels separate from professional experience; do not imply production administration of these technologies.

HIT B.Sc. Computer Science: completed October 2026; overall average 90.56/100. ITQ Information Security and Cybersecurity: August 2026–Present, in progress. Do not add honors, certifications, performance metrics, availability dates, or unconfirmed project ownership claims.

Smart Crosswalk is a HIT team graduation prototype. David's Frontend Developer role and React frontend responsibilities are confirmed by the updated CV supplied on November 2, 2026. Its listed technologies describe his contribution: React, JavaScript, Tailwind CSS, and REST APIs. SignLangModel is a machine-learning course project. Brogram and Stripe Store are learning projects. Project technologies are not claims of professional experience.

## Current CV

`CV.pdf` is the updated PDF supplied by David on November 2, 2026, published unchanged after checking its current role, degree, average, and training against the portfolio. Download links appear in the hero and contact section. The previous PDF remains in Git history. Replace this file when David supplies an updated version, and check that the page and CV remain consistent.

Latest replacement: the supplied `David Kitunov - Networking Systems Security CV (3).pdf`, preserved byte-for-byte as `CV.pdf`. SHA-256: `8c0a6d9556f6ff3bdb1beaa110f8b36c08839571e801aee99420fbc8562fbb8f`.

## Deployment and rollback

Netlify is connected to production branch `main`. Publish the repository root without a build command; retain the existing connection and domain.

Before publishing: review at 360, 768, and 1440 px; check keyboard navigation, reduced motion, contrast, anchors/assets, contact actions, project links, and console errors. Run `node --check app.js`.

Previous production revision for the earlier complete style rebuild: `1bb997a4720a37827315ecd3c3d215e969599d65`, retained as `rollback/pre-complete-redesign-2026-11-02`. The original pre-portfolio revision is also retained as `rollback/pre-portfolio-rebuild-2026-11-02`. Roll back by reverting the relevant merge on `main`, preserving later unrelated changes, or restore the previous deploy in Netlify. Do not force-push production history.

The final redesign was checked at 360, 390, 768, 1280, 1440 and 1920px without horizontal overflow. Hallmark static lint passed and retained all 19 destinations and four script hooks. CUA browser inspection replaces Hallmark's separate browser renderer in this environment. Axe reported no violations on the audited tablet and mobile views. Keyboard skip, menu Escape and focus transfer, JavaScript-free content/navigation, reduced-motion rules and 200% text reflow were checked. LinkedIn rejects automated link requests with HTTP 999; its existing URL is retained. Other external project/source links returned HTTP 200.

## Assets

Space Grotesk and IBM Plex Sans use the SIL Open Font License; see `public/fonts/`. Brogram and Stripe Store thumbnails are existing optimized project images. `smart-crosswalk.jpg` is a CUA capture of the public demo, and `signlang-report.jpg` is page 1 of the linked project report, rendered with Poppler. Social preview and favicons retain the existing matching brand and factual positioning. No stock portraits or AI-generated project interfaces are used.

## Compact editorial refinement

The November 2 refinement retains all 19 prior destinations, the current CV bytes and all factual content. The previous production revision is `54c6802edf030a90d30beb9dbefaaaaff45adaf4`, retained in the merge history and rollback tag. Desktop page height at 1440px decreased from 5258px to 4570px; mobile at 360px decreased from 7484px to 7043px. These are layout measurements, not portfolio achievement claims.
