# Margins — Editorial design direction

## Product
Margins is an independent literary journal and reading library. Its audience is curious readers, fiction lovers, and people who enjoy discovering thoughtful writing. The website's primary job is editorial discovery: help a visitor find a story, explore a book, and settle into a calm reading experience. It is not a shop.

## Visual identity
A contemporary literary journal with the atmosphere of a well-loved reading room: tactile paper, ink, soft daylight, quiet forest green, and a restrained rust accent.

### Tokens
- Paper — #F3EEE5: warm page background.
- Parchment — #E9E1D5: subtle section contrast.
- Ink — #22251F: primary text.
- Forest — #1D3028: editorial anchor and primary action.
- Moss — #687466: secondary green.
- Brass — #B89A70: restrained detail.
- Rust — #A45F46: occasional editorial accent.
- White — #FCFAF5: reading surfaces.

### Typography
- Display: Cormorant Garamond for expressive editorial headlines and titles.
- Reading: Literata for long-form prose and article body.
- Interface: DM Sans for navigation, metadata, labels, and utility copy.
- Long-form text stays at a comfortable 68–72 character measure, generous line-height, and restrained weight.

## Composition
The home page uses an editorial hero with a quiet reading photograph and asymmetric type/image balance, a small typographic ribbon, one featured story, a three-column recent-story grid, and a deep forest library feature. Stories and books have independent archive routes and individual detail routes. Story detail pages prioritize readable prose over decoration; book detail pages give the cover a clear, gallery-like stage.

## Signature
The visual signature is the "reading-room margin": small uppercase editorial notes, thin rules, and a single rust-colored asterisk that recurs like a printer's mark. It connects archive cards, article bylines, and the footer without turning into decoration.

## Motion and depth
GSAP orchestrates restrained entry and scroll reveals. Hero imagery responds to pointer movement with a very slight depth shift. Cards lift subtly on hover. All animation respects prefers-reduced-motion and never delays reading access.

## Navigation and content
Primary navigation is Home, Stories, Books, About. Story and book entries live in separate Astro content collections and generate static detail routes. All internal links point to real pages or meaningful section anchors. Content is authored in Markdown with validated frontmatter. No commerce, checkout, cart, payment, or product-purchase affordances exist.


## Interaction and responsive additions
- 3D depth is a tactile affordance on home story/book cards, primary buttons, theme control, and social links. Tilt is pointer-only, subtle, and disabled for reduced-motion and touch layouts.
- Light/dark theme uses semantic surface/text tokens, follows the operating-system preference initially, and remembers an explicit reader choice locally.
- Floating up/down reading controls appear after the reader scrolls and remain keyboard-operable with clear accessible labels.
- Responsive composition targets compact phones (320px+), phones, tablets, laptops, desktop, and wide television displays. Content measures stay readable as screens grow; wide layouts increase whitespace and image scale rather than stretching paragraphs.
