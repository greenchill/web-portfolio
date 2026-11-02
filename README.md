# David Kitunov — Personal portfolio

A single-page portfolio for networking, systems administration, and network-security career interests. Production: https://davidkitunov.netlify.app/

## Run locally

No installation or build step is required. Serve the repository root with any static HTTP server, for example `python -m http.server 8000`, then open `http://localhost:8000/`.

- `index.html`: content, project links, decorative illustrations, and metadata.
- `styles.css`: design tokens, responsive layout, fonts, reduced-motion and print styles.
- `app.js`: mobile navigation, current-section indicator, and footer year.
- `public/`: local fonts, optimized thumbnails, icons, and the 1200 × 630 social preview.

Content and navigation work without JavaScript. Fonts are self-hosted with `font-display: swap`. The illustrations are decorative and do not represent a deployment or measured project results.

## Content rules

Current title: **NOC Analyst**, Ness Digital Engineering, part-time, January 2026–Present. Engineering and administration roles are career interests. Distinguish professional work, ITQ training, and FortiGate familiarity.

HIT B.Sc. Computer Science: completed October 2026; overall average 90.56/100. ITQ Information Security and Cybersecurity: August 2026–Present, in progress. Do not add honors, certifications, performance metrics, availability dates, or unconfirmed project ownership claims.

Smart Crosswalk is an academic team prototype. SignLangModel is a machine-learning course project. Brogram and Stripe Store are learning projects. Project technologies are not claims of professional experience.

## CV status — replacement required

**The existing `CV.pdf` is outdated and deliberately not linked on the page.** It still describes student/software-engineering positioning, an expected graduation, and an average of 87/100. It is preserved unchanged at the user's request. The user will provide an updated CV later. Restore a download button only after checking the replacement against the facts above.

## Deployment and rollback

Netlify is connected to production branch `main`. Publish the repository root without a build command; retain the existing connection and domain.

Before publishing: review at 360, 768, and 1440 px; check keyboard navigation, reduced motion, contrast, anchors/assets, contact actions, project links, and console errors. Run `node --check app.js`.

Pre-redesign production revision: `f9f441bdc31145dccc730f7ac683d539c5ac60d7`. It remains in Git history. Roll back by reverting the redesign merge commit on `main`, preserving later unrelated changes, or restore the previous deploy in Netlify. Do not force-push production history.

## Assets

Space Grotesk and IBM Plex Sans use the SIL Open Font License; see the license texts in `public/fonts/`. Brogram and Stripe Store thumbnails are optimized versions of existing portfolio images. Social artwork and SVG illustrations are created for this portfolio.
