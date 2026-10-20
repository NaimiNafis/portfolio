# Design rules: which source wins

`rules/design.md` and `rules/ux-laws.md`. They are general playbook rules, not Portfolio rules. A value backed by Apple's Human Interface Guidelines (HIG).

`rules/ux-laws.md` rule 2 (44 x 44 px targets) is for touch screens. The admin panel is desktop first, so dense tables and small buttons are allowed. Every table row stays clickable as a whole.

## Rules learned in the redesign so far
- **Link, do not embed.** No creation form inside another form, no gating questions, no "also create X?" prompts. Link to the other screen.
- **One fact, one home.** Show each fact in one place. No zero counts in colour. Only show text that changes a decision.
- **Redesign, not re-skin.** Start from the page's job (who uses it, what they must decide), not from the dev page's elements. Changing elements one at a time produced a re-skin twice.
- **No `·` separators.** Use one of 4 patterns instead: a small label above each value (different facts side by side); the value with its qualifier smaller on the line below; fixed columns for repeated rows; a short sentence with commas when the facts read as one.
