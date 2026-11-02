---
name: "David Kitunov"
description: "A contemporary editorial portfolio in warm paper, navy and restrained blue."
colors:
  paper: "#f5f3ee"
  paper-2: "#eceae3"
  ink: "#111f32"
  ink-2: "#46566a"
  muted: "#536276"
  rule: "#cbcfd3"
  accent: "#3157d5"
  accent-ink: "#f5f3ee"
  focus: "#3157d5"
  inverse-muted: "#bbc7d8"
  inverse-rule: "#3c4a5d"
  accent-soft: "#e4e9f8"
  image-black: "#080a0d"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(4rem, 7.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  display-mobile:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(3.5rem, 15vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.5rem, 2.1vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  career-focus:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  position:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 3vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(1.125rem, 1.25vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  button: "4px"
  card: "12px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  20: "20px"
  lg: "24px"
  28: "28px"
  32: "32px"
  xl: "40px"
  48: "48px"
  2xl: "64px"
  88: "88px"
  112: "112px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.button}"
    padding: "8px 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent-ink}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "8px 20px"
  button-quiet-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  project-card:
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
  training-note:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "20px 0"
  foundation-row:
    textColor: "{colors.ink}"
    padding: "24px 0 0"
---

# Design System: David Kitunov

## Overview

**Creative North Star: "Editorial Tech"**

A readable professional record in a strong editorial frame. Warm paper, deep navy and restrained blue support clear typography and generous space. Space Grotesk supplies the geometric voice; IBM Plex Sans makes the factual detail easy to scan.

The system is composed from open columns, fine rules, tonal section changes and consistent project frames. Visual weight comes from type and contrast. Motion stays within brief interaction feedback, and content remains visible and usable without JavaScript.

**Key Characteristics:**

- Geometric display type with calm, readable body text.
- Warm paper surfaces, navy contrast and restrained blue actions.
- Open columns and fine rules for factual records.
- Consistent rounded project frames with equal media heights.
- Visible keyboard focus and restrained, reduced-motion-aware states.

This record derives from the implemented `tokens.css`, `base.css`, `styles.css`, `index.html` and `app.js`. The frontmatter is normative; responsive exceptions and component behavior are recorded below. The companion sidecar contains preview snippets and extension metadata.

Sidecar tonal strips are synthesized OKLCH preview aids, not additional shipped colors. Its component snippets bind to the source custom properties with fallback values; locally hosted fonts must be available to the preview host. The project-card preview leaves its media region blank to avoid an external asset dependency, and the navigation preview shows its link group without reproducing script-controlled menu state.

## Colors

The palette pairs warm paper neutrals with a cool navy foundation and one blue accent.

### Primary

- **Restrained Blue** (`accent`): primary actions, text links, active navigation and evidence-category labels.
- **Focus Blue** (`focus`): the keyboard focus outline; a semantic alias of the accent.
- **Soft Blue** (`accent-soft`): shared project-cover mat and selected text background.

### Neutral

- **Warm Paper** (`paper`): page and sticky-header background, plus text on navy.
- **Soft Paper** (`paper-2`): tonal section backgrounds, ordinary image framing and quiet-button hover.
- **Deep Navy** (`ink`): primary text, outlined controls, the inverse experience surface and primary-button hover.
- **Slate Text** (`ink-2`): supporting copy and descriptive text.
- **Muted Slate** (`muted`): dates, institutions' supporting metadata, labels and technology lists.
- **Fine Rule** (`rule`): page dividers, card outlines and image separators.
- **Action Paper** (`accent-ink`): primary-action text, preserving a separate semantic role despite matching paper.
- **Inverse Slate** (`inverse-muted`): secondary text on the navy surface.
- **Inverse Rule** (`inverse-rule`): separators inside the navy surface.
- **Image Black** (`image-black`): retained legacy image token; the current covers share the soft-blue mat.

**The One Accent Rule.** Use blue for actions, focus, active navigation and selected factual labels. Keep body copy and large page fields in the paper-and-navy family.

## Typography

**Display Font:** Space Grotesk, with sans-serif fallback.

**Body Font:** IBM Plex Sans, with sans-serif fallback.

Both faces are locally hosted variable WOFF2 files with `font-display: swap`. Display text uses medium weight and tight tracking. The body stays regular, with selective medium emphasis. There is no separate mono family or fixed scale ratio; the larger roles use independent fluid clamps.

### Hierarchy

- **Display:** the two-line name uses `typography.display`; at the mobile breakpoint it uses `display-mobile`.
- **Headline:** section headings use `typography.headline`. The mobile contact heading uses its own observed clamp (2.25rem, 9vw, 3rem).
- **Title:** project and education headings use `typography.title`. Ledger headings and the current-position title have contextual size overrides rather than a new general scale.
- **Career focus:** three prominent blue links use `typography.career-focus`. On mobile the duplicate focus navigation is omitted: the adjacent career-interest sentence names all three directions, and main navigation still links to the complete foundation section.
- **Body:** standard text uses `typography.body`. Unclassed paragraphs are capped at 65ch; supporting hero and contact copy have narrower contextual measures.
- **Lead:** longer introductory and inverse-section support text uses `typography.lead`; mobile hero and contact supporting copy return to body size.
- **Label:** navigation, dates, category descriptions and technology lists use `typography.label`. Category labels use medium weight; they remain sentence case.

Headings balance their wrapping and allow long words to break. Paragraphs use pretty wrapping. The education score uses tabular numerals.

**The Two Voices Rule.** Use Space Grotesk for display hierarchy and IBM Plex Sans for reading and metadata; preserve their sans-serif fallbacks.

## Layout

The centered container has a maximum width of 1376px including padding. Desktop gutters are 64px and ordinary column gaps are 32px. Section padding is 72px above 1000px, 64px from 641–1000px, and 48px on mobile. Gutters reduce to 32px and then 20px.

The hero pairs a two-line name and direct contact actions with three large career-focus links. The links navigate to real networking, systems and security records; they are career interests, not claimed job titles. The blue full stop echoes the existing wordmark. On mobile role and degree use separate lines, the actions share a row, and LinkedIn/GitHub links follow. A single ITQ training note replaces the repeated credentials overview. Employer, degree completion, average and dates remain in their detailed records.

Experience uses a full-width role record and three parallel responsibility columns. Technical foundations form a two-by-two open grid; each item keeps its experience/training/familiarity labels. Education uses two parallel records. These sections stack at 640px. At tablet widths the foundation evidence categories already stack within each column.

Projects support the infrastructure career story with a compact two-column grid, becoming one column at 740px. Every card has an image beside its title, then the full description, technology list and source/demo links below. Desktop image panels are 200px wide and 148px high; at 1000px and below they are 128px wide and 116px high, reducing to 112px wide at 640px. All four panel and image heights match at each breakpoint. Images use containment in a soft-blue mat. Card titles are 24px on desktop and 20px at tablet/mobile. Bodies use 20px padding, reducing to 16px on mobile.

The sticky header is accounted for by document scroll padding: 112px by default and 88px on mobile. Main navigation changes at the same 640px boundary used by the script.

## Elevation & Depth

The system is flat. There are no box shadows, text shadows, blur layers or elevated hover cards. Depth comes from paper-tone changes, the navy inverse passage, thin outlines and image framing. The sticky header sits above content by stacking order, without a shadow.

**The Flat Surface Rule.** Separate adjacent content with tone, whitespace or a fine rule; keep the shipped surfaces and interaction states shadow-free.

## Shapes

Project frames use the `card` radius and clip their image/content edges. Buttons use the smaller `button` radius. Editorial rows, section backgrounds and navigation remain square and open. Borders are thin (1px); the keyboard focus outline is deliberately stronger (3px, offset 4px).

Download marks and Feather LinkedIn/GitHub icons are 20px stroke SVGs with a 1.6 stroke width. Social icons accompany visible labels and are hidden from assistive technology. The Feather MIT notice is retained in public/feather-LICENSE.txt. Text links carry no repeated arrow suffixes. The mobile menu mark is formed by two CSS border lines, not a font glyph.

## Components

### Buttons

Compact, plainly labeled actions pair medium-weight body text with a restrained outline.

- **Primary:** blue fill and border, paper text, frontmatter padding and small radius; minimum height 48px.
- **Quiet:** transparent background, navy border and text; the same shape and sizing as primary.
- **Hover:** primary fill and border turn navy; quiet fill becomes soft paper.
- **Focus:** the global visible outline applies to both variants.
- **Pressed / disabled:** a pressed control moves down 1px. Disabled button elements use half opacity and a not-allowed cursor; the current hero actions are anchors and do not claim a disabled state.
- **Motion:** background and text color transition over 180ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Mobile:** hero actions flex equally, use label-sized text, smaller horizontal padding and a narrower icon gap.

### Text links

Blue text creates lightweight navigation. Standard text links have a 44px minimum target height; their underline becomes visible on hover. Project links use label-sized text. Social links retain icons and visible labels. The contact email is a larger Space Grotesk link, with a rule-colored underline at rest that becomes blue on hover. Long email text may wrap anywhere.

### Cards / Containers

Project cards are compact, consistent frames. Their image/title row carries identification; their full-width body retains every factual description, technology and link. Card bodies stretch to align links within each pair. The real Brogram workout capture shows exercises and weight inputs. SignLangModel uses the landmark extraction illustration from page 5 of its course report; it is not a live inference screenshot. No recognition screenshot was found in the repository or report, so none is invented.

Plain technology names remain unboxed text. Cards have no whole-card click action.

### Navigation

A sticky paper header pairs the compact `dk.` wordmark with sentence-case navigation. Desktop links have 48px minimum targets and label-sized text. A fine underline grows from the left on hover; the current location uses the same underline plus blue text.

At 640px and below, enhanced navigation exposes a Menu/Close button and a wrapping link area. The menu closes after an anchor choice, on Escape or on an outside click; Escape returns focus to the button. Anchor selection transfers focus to the destination. Resizing prevents focus from remaining on a hidden control. Without JavaScript, navigation links remain visible and the toggle stays hidden.

### Training note and factual ledgers

The hero closes with one compact, ruled ITQ training note. The NOC role and degree are already visible above it; full professional and education records follow without hiding facts behind controls.

Technical-foundation items use a two-by-two open grid, each with a top rule, heading and factual categories. Their category names use blue medium-weight body text to distinguish the origin of evidence. On mobile both the outer row and the inner categories stack. Responsibility and education records use the same discipline of clear hierarchy and rules, with inverse colors where the surrounding surface is navy.

### Shared access and motion behavior

Every interactive element receives the visible keyboard outline. The skip link moves into view on focus. Content never waits for an entrance animation or observer before becoming visible. Reduced-motion preferences reduce animation and transition durations to 0.01ms, allow one animation iteration and force automatic scrolling. No form fields, dialogs, filter chips or loading components are implemented on this surface.

## Do's and Don'ts

### Do:

- **Do** preserve the warm-paper, navy and restrained-blue palette and the two established font families.
- **Do** use fine rules, clear labels and open spacing to organize factual content.
- **Do** keep every project in the same card structure with equal media heights at each breakpoint.
- **Do** keep keyboard focus visible, mobile controls reachable and content available without JavaScript.
- **Do** preserve the distinction between work experience, training and familiarity when styling records.

### Don't:

- **Don't** introduce a second accent family or replace the locally hosted type pairing.
- **Don't** add shadows or decorative motion to the recorded flat surfaces.
- **Don't** make information depend on scrolling animations, hover or an unopened mobile menu.
- **Don't** treat ordinary technology names as selectable chips when no selection behavior exists.
