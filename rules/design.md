> Copy of the workspace file `rules/design.md`, taken 2026-10-19. Naimi keeps the original. If they differ, ask Naimi.

# Design that does not look AI-made

**When:** before the first screen, and in every UI review.

**Done means:** a stranger cannot tell from the look alone that an AI tool built the app.

**Also use:** [ux-laws.md](ux-laws.md). This file is about how the app looks. The UX laws file is about how easy it is to use.

This lists 20 patterns that AI tools produce by default. Each item below is a pattern to **find and remove or replace**. It is not something to add.

## Terms

| Term | Meaning |
|---|---|
| Vibecoded | Built mostly by prompting an AI, with little human design review. |
| Hero | The first big section at the top of a landing page. |
| shadcn/ui | A popular React component library. AI tools use it with default settings. |
| Glassmorphism | Cards that look like frosted glass (blur plus see-through background). |

## A. Color and background

- [ ] **1. Purple-to-blue gradient.** Replace with brand colors from `docs/BRAND.md`.
- [ ] **2. Gradient hero text.** Use solid color text for headlines.
- [ ] **20. Grain texture over a gradient.** Remove, unless the brand doc asks for it.
- [ ] **7. Low-contrast dark mode.** Check text contrast in dark mode (see Stage 6, item 13).

## B. Typography

- [ ] **4. Inter font everywhere.** Pick a font that fits the brand.
- [ ] **19. Space Grotesk + Instrument Serif pairing.** This pair is now a common AI default. Choose your own pair.
- [ ] **18. Serif italic accent words** inside headlines. Remove, or use once with a reason.
- [ ] **3. Emojis in headings.** Remove.

## C. Layout and components

- [ ] **8. Three icon boxes in a row** ("feature cards"). Use a layout that fits your real content.
- [ ] **5. Cards with colored borders.** Remove the colored borders.
- [ ] **6. Glassmorphism cards.** Replace with plain surfaces.
- [ ] **9. Small badge above the headline** (for example "New ✨"). Remove unless it carries real news.
- [ ] **10. Lucide icons everywhere.** Use fewer icons, or a different set that fits the brand.
- [ ] **11. Untouched shadcn/ui.** Change radius, colors, spacing and type so it matches your design system.
- [ ] **15. Inconsistent spacing.** Use one spacing scale (for example 4, 8, 12, 16, 24, 32, 48).

## D. Motion

- [ ] **12. Fade-in on scroll** on every section. Remove, or keep only where it helps.
- [ ] **13. Cursor-following light beam.** Remove.
- [ ] **14. Buttons that only fade on hover.** Give a clear hover and focus state (color change, underline, or outline).

## E. Copy (words)

- [ ] **16. Em dashes (—) everywhere.** Rewrite with periods and commas.
- [ ] **17. Generic buzzword copy** ("seamless", "powerful", "unlock", "supercharge"). Replace with concrete claims about what the product does.


## Prompt for Claude Code

```text
Read design.md.
Scan every page and component. For each of the 20 patterns, list the files where it appears.
Then fix them one group at a time (A to E). Show me a before/after list for each group.
```
