# Trendora — Design direction

## Brand
A contemporary luxury accessories boutique for style-conscious shoppers. The storefront's job is to make the collection feel curated and desirable, then guide visitors into category discovery.

## Visual system
- Porcelain: #F4EDE4 — warm editorial canvas.
- Ink: #171A16 — deep near-black for primary text and controls.
- Forest: #14231D — signature dark green.
- Champagne: #C8A979 — restrained metallic accent.
- Muted: #766F65 — secondary copy.
- White: #FFFCF7 — elevated surfaces.

Typography pairs Cormorant Garamond for editorial headlines with DM Sans for navigation, utility copy, and controls. The signature device is the oversized editorial hero: a fashion portrait on the right, typography on the left, with a floating product detail and quiet champagne highlights.

## Layout
A narrow shipping announcement, centered desktop navigation, full-bleed hero, four editorial category tiles, dark newsletter panel, and compact footer. Desktop uses generous negative space; mobile becomes a compact stacked storefront with touch-friendly controls.

## Motion and depth
Use a restrained GSAP entrance sequence and pointer-aware hero parallax. Product cards lift slightly with layered shadows; the hero image has a subtle perspective shift. All motion respects prefers-reduced-motion. Avoid perpetual motion and excessive glass effects.

## Interaction
Navigation anchors scroll to page sections. Category tiles navigate to their collection anchors. Newsletter validates an email and provides an inline confirmation; no backend subscription is implied. Search, wishlist, and bag controls provide honest local interaction feedback only.
