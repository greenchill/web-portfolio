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
    fontSize: "clamp(3.25rem, 7.6vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  display-mobile:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(3.25rem, 12vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.5rem, 2.1vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: "-0.03em"
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
    padding: "28px"
  credentials:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "28px 0"
  foundation-row:
    textColor: "{colors.ink}"
    padding: "32px 0"
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
- **Soft Blue** (`accent-soft`): selected text background.

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
- **Image Black** (`image-black`): the dark image surround used by the workout-planner screenshot.

**The One Accent Rule.** Use blue for actions, focus, active navigation and selected factual labels. Keep body copy and large page fields in the paper-and-navy family.

## Typography

**Display Font:** Space Grotesk, with sans-serif fallback.

**Body Font:** IBM Plex Sans, with sans-serif fallback.

Both faces are locally hosted variable WOFF2 files with `font-display: swap`. Display text uses medium weight and tight tracking. The body stays regular, with selective medium emphasis. There is no separate mono family or fixed scale ratio; the larger roles use independent fluid clamps.

### Hierarchy

- **Display:** the name masthead uses `typography.display`; at the mobile breakpoint it uses `display-mobile` and a maximum width of 9ch.
- **Headline:** section headings use `typography.headline`. The mobile contact heading uses its own observed clamp (2.25rem, 9vw, 3rem).
- **Title:** project and education headings use `typography.title`. Ledger headings and the current-position title have contextual size overrides rather than a new general scale.
- **Statement:** the short introductory statement uses `typography.statement`; its mobile size is `clamp(1.625rem, 7.4vw, 2.5rem)`.
- **Body:** standard text uses `typography.body`. Unclassed paragraphs are capped at 65ch; supporting hero and contact copy have narrower contextual measures.
- **Lead:** longer introductory and inverse-section support text uses `typography.lead`; mobile hero and contact supporting copy return to body size.
- **Label:** navigation, dates, category descriptions and technology lists use `typography.label`. Category labels use medium weight; they remain sentence case.

Headings balance their wrapping and allow long words to break. Paragraphs use pretty wrapping. The education score uses tabular numerals.

**The Two Voices Rule.** Use Space Grotesk for display hierarchy and IBM Plex Sans for reading and metadata; preserve their sans-serif fallbacks.

## Layout

The centered container has a maximum width of 1376px, including its horizontal padding. Default gutters are 64px and column gaps are 32px. The principal section rhythm is 112px of vertical padding. Compact spacing follows the frontmatter's observed 4px-based steps.

The layout combines two-column introductions, approximately one-to-two heading/content divisions, a three-column credentials record and a two-column project grid. These are content relationships rather than a universal twelve-column grid. The project grid stretches desktop rows to equal height, while each card's technology list and links settle toward the bottom.

Responsive changes are inclusive maximum-width queries:

| Viewport | Container and rhythm | Composition |
| --- | --- | --- |
| Above 1000px | 64px gutters, 32px column gaps, 112px section padding | Open asymmetric columns; 88px minimum header height. |
| 641–1000px | 32px gutters, 32px column gaps, 88px section padding | Tighter ratios; dates move below the position heading; responsibility rows stack internally; projects remain two columns. |
| 640px and below | 20px gutters, 20px column gaps, 64px section padding | Main content grids become one column; project rows use natural height; 72px minimum header height. |

On mobile the role and degree occupy separate lines. Hero actions share the row, and the credentials record becomes three ruled rows with label/value columns. Section heading/support pairs stack. Project media heights remain equal across all cards at each viewport: 280px by default, 240px at the middle breakpoint and 210px on mobile. Card-body padding changes from 28px to 24px, then to 24px vertically and 20px horizontally.

The sticky header is accounted for by document scroll padding: 112px by default and 88px on mobile. Main navigation changes at the same 640px boundary used by the script.

## Elevation & Depth

The system is flat. There are no box shadows, text shadows, blur layers or elevated hover cards. Depth comes from paper-tone changes, the navy inverse passage, thin outlines and image framing. The sticky header sits above content by stacking order, without a shadow.

**The Flat Surface Rule.** Separate adjacent content with tone, whitespace or a fine rule; keep the shipped surfaces and interaction states shadow-free.

## Shapes

Project frames use the `card` radius and clip their image/content edges. Buttons use the smaller `button` radius. Editorial rows, section backgrounds and navigation remain square and open. Borders are thin (1px); the keyboard focus outline is deliberately stronger (3px, offset 4px).

Arrow and download marks are stroke SVGs, normally 20px square with a 1.6 stroke width. Project links use 16px icons. The mobile menu mark is formed by two CSS border lines, not a font glyph.

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

Blue text and a stroke arrow create lightweight navigation. Standard text links have a 44px minimum target height; their underline becomes visible on hover. Project links use label-sized text and smaller icons. The contact email is a larger Space Grotesk link, with a rule-colored underline at rest that becomes blue on hover. Long email text may wrap anywhere.

### Cards / Containers

Project cards are consistent frames rather than floating tiles. Each has a fine border, the card radius, clipped overflow, a fixed-height media region and a flex column body. All four use the same structure and responsive media heights. Screenshots normally fill the media frame from the top; the report cover and workout screen use containment to preserve their content. The report uses the paper surround; the workout image uses image black.

Descriptions, plain technology lists and a ruled link row follow the title and contextual description. Technology names are unboxed text, not interactive chips. Cards have no whole-card hover or click state; their actual links provide interaction.

### Navigation

A sticky paper header pairs the compact `dk.` wordmark with sentence-case navigation. Desktop links have 48px minimum targets and label-sized text. A fine underline grows from the left on hover; the current location uses the same underline plus blue text.

At 640px and below, enhanced navigation exposes a Menu/Close button and a wrapping link area. The menu closes after an anchor choice, on Escape or on an outside click; Escape returns focus to the button. Anchor selection transfers focus to the destination. Resizing prevents focus from remaining on a hidden control. Without JavaScript, navigation links remain visible and the toggle stays hidden.

### Credentials and factual ledgers

The credentials record uses quiet labels, medium-weight facts and secondary metadata. A fine top rule groups the three desktop columns; mobile rows add their own bottom rules.

Technical-foundation rows use an open heading/content split with a top rule and two factual categories. Their category names use blue medium-weight body text to distinguish the origin of evidence. On mobile both the outer row and the inner categories stack. Responsibility and education records use the same discipline of clear hierarchy and rules, with inverse colors where the surrounding surface is navy.

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
