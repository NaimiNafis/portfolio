> Copy of the workspace file `rules/ux-laws.md`, taken 2026-10-19. Naimi keeps the original. If they differ, ask Naimi.

# UX laws — usability rules for every screen

**When:** while designing and building any screen. Use it together with [Stage 2](design.md).
Stage 2 is about how the app **looks** (not AI-made). This file is about how easy the app is to **use**.

**Done means:** a new user can finish the core task on the first try, without help, and nothing on the screen makes them stop and think without a reason.

## How to use this file

1. Paste the short rule list (next section) into `CLAUDE.md`, so Claude Code follows it on every screen.
2. After each screen is built, run the review prompt at the end of this file.
3. Test with one real person. Watch them. Do not help them. Write down every place they stop.

## The 20 rules (paste into CLAUDE.md)

```md
## UX rules (from product-playbook/stages/ux-laws.md)
1. Reduce choices per screen.
2. Make targets large.
3. Follow familiar patterns.
4. Group related information.
5. Break content into chunks.
6. Respond to every interaction within 400 ms.
7. Highlight the primary action.
8. Place key actions near where the user is working.
9. Put essentials first (and the key action last).
10. End flows memorably.
11. Show visible progress.
12. Simplify complex interfaces.
13. Maintain pattern consistency.
14. Connect related elements visually.
15. Use sensible defaults. The system handles complexity, not the user.
16. Accept input in many formats. Prevent errors before they happen.
17. Make errors recoverable.
18. Reduce task completion time.
19. Reveal complexity gradually.
20. Make completion feel closer.
When a rule conflicts with the spec, follow the spec and tell me which rule was broken.
```

## A. Choices and attention

### 1. Hick's law → Reduce choices per screen
- **Meaning:** the more options people see, the longer it takes to decide.
- **Rule:** show only the choices needed for this step. Hide or group the rest.
- [ ] Each screen has one main task.
- [ ] Menus and option lists have no items that fewer than 1 in 10 users need. Move those to "More" or Settings.

### 7. Von Restorff effect → Highlight the primary action
- **Meaning:** the one item that looks different is the one people notice and remember.
- **Rule:** one primary button per screen, in a clearly different style. Everything else is secondary.
- [ ] Each screen has exactly one primary button.
- [ ] Do not use the highlight style for anything that is not the main action (also see Stage 2: no decorative badges).

### 9. Serial position effect → Put essentials first
- **Meaning:** people remember the first and last items in a list best, and the middle items least.
- **Rule:** put the most important item first and the key action last. Put less important items in the middle.
- [ ] Navigation: the most-used items are at the start and the end.
- [ ] Forms and pages: essential information comes first. The call to action comes at the end.

### 20. Pareto principle → Focus on the 20% that matters
- **Meaning:** about 80% of use comes from about 20% of the features.
- **Rule:** make the few core features fast and polished before you add more.
- [ ] You know your top 3 actions (from analytics or interviews, Stage 0 and 8F).
- [ ] Those 3 actions take the fewest clicks in the app.

## B. Layout and grouping

### 3. Jakob's law → Follow familiar patterns
- **Meaning:** users spend most of their time in other apps. They expect yours to work the same way.
- **Rule:** use standard patterns for standard jobs: logo top-left links home, cart top-right, settings under the profile menu, search with a magnifier icon.
- [ ] No custom pattern replaces a standard one without a written reason.

### 4. Law of proximity → Group related information
- **Meaning:** items that are close together look like they belong together.
- **Rule:** put a label next to its field, and a price next to its product. Add more space between groups than inside groups.
- [ ] Space between groups is clearly larger than space inside a group (use the spacing scale from Stage 2).

### 13. Law of similarity → Maintain pattern consistency
- **Meaning:** items that look the same seem to do the same thing.
- **Rule:** the same action always has the same look. A link always looks like a link. A delete button always looks like a delete button.
- [ ] Every button, link, input and card comes from the design system. No one-off styles.

### 14. Uniform connectedness → Connect related elements visually
- **Meaning:** items inside the same box, or joined by a line, look related. This effect is stronger than being close together.
- **Rule:** use a shared background, border or line to join items that belong together (for example, a card for one order and its actions).
- [ ] Related controls share one container. Unrelated items do not.

### 12. Law of Prägnanz → Simplify complex interfaces
- **Meaning:** people read a complex picture in the simplest way they can.
- **Rule:** use simple shapes, clear alignment and few visual styles, so the layout is clear at a glance.
- [ ] Each screen uses one grid and aligns to it.
- [ ] Blur test: when you blur the screen, the main areas and the primary button are still clear.

### 19. Occam's razor → Remove what is not needed
- **Meaning:** when two designs work, the simpler one is better.
- **Rule:** for every element, ask: "If I remove this, does the user lose anything?" If not, remove it.
- [ ] Each screen was reviewed once only for things to remove.

## C. Speed and effort

### 2. Fitts's law → Make targets large
- **Meaning:** the time to hit a target depends on its size and its distance.
- **Rule:** make touch targets at least **44 × 44 px** on mobile (Apple guideline: 44 pt. Google guideline: 48 dp). Make the whole row or card clickable, not only the small text.
- [ ] No tap target is smaller than 44 × 44 px.
- [ ] Targets are not too close to each other, so users do not tap the wrong one.

### 8. Minimize target distance → Place key actions nearby
- **Meaning:** this is the second half of Fitts's law. Near targets are faster to hit.
- **Rule:** put an action next to the thing it acts on. On mobile, put main actions in the thumb zone (the bottom half of the screen).
- [ ] "Save" is next to the form, not at the top of a long page.
- [ ] Mobile main actions can be reached with one thumb.

### 6. Doherty threshold → Respond within 400 ms
- **Meaning:** people stay focused when the app responds in under about 400 milliseconds.
- **Rule:** give feedback within 400 ms for every click. If the real work takes longer, show a loading state, a skeleton screen or an optimistic update (show the result first, confirm in the background).
- [ ] Every button shows a pressed or loading state right away.
- [ ] Any wait longer than 1 second shows progress.
- [ ] Check the speed with Stage 6, item 12.

### 18. Parkinson's law → Reduce task completion time
- **Meaning:** a task grows to fill the time it is given.
- **Rule:** remove steps. Use autofill, saved details and smart defaults so the task is short.
- [ ] Forms use browser autofill (`autocomplete` attributes).
- [ ] You know the number of steps in the core task, and you tried to remove at least one.

## D. Memory and flow

### 5. Miller's law → Break content into chunks
- **Meaning:** people can hold only a few items in working memory at once. The famous number is "7 ± 2", but it is a guide, not a hard limit.
- **Rule:** split long content into small groups: phone numbers in parts, long forms into steps, long pages into sections with headings.
- [ ] No form shows more than about 7 fields at once without grouping them.
- [ ] Long text has headings every few paragraphs.

### 11. Zeigarnik effect → Show visible progress
- **Meaning:** people remember unfinished tasks and want to finish them.
- **Rule:** show what is done and what is left (for example "Profile 3 of 5 complete").
- [ ] Onboarding and multi-step flows show a progress indicator.
- [ ] Do not use this to pressure users with fake "unfinished" tasks (see Stage 5: no dark patterns).

### Goal-gradient effect → Make completion feel closer
- **Meaning:** people speed up as they get closer to a goal.
- **Rule:** show how close the user is. Put the easy steps first so progress starts early.
- [ ] Progress is honest. It never jumps or lies.
- Note: the image lists "Postel's law" twice (items 16 and 17). Your rule "Make completion feel closer" matches the goal-gradient effect, so item 17 was most likely meant to be that.

### 10. Peak-end rule → End flows memorably
- **Meaning:** people judge an experience mostly by its best (or worst) moment and by its end.
- **Rule:** make the end of each key flow clear and positive: a clear success screen, the next step, and no dead end.
- [ ] Sign-up, first success and payment each end with a clear confirmation and one next action.
- [ ] Error moments are handled with care, because a bad peak is remembered too.

## E. Complexity and errors

### 15. Tesler's law → Use sensible defaults
- **Meaning:** every task has some complexity that cannot be removed. The only question is who handles it: the system or the user.
- **Rule:** let the system handle it. Pre-fill the most common choice, detect the time zone, remember the last settings.
- [ ] Every setting has a sensible default. A new user can finish the core task without changing any setting.

### 16. Postel's law → Accept many formats, prevent errors
- **Meaning:** be flexible in what you accept, and strict in what you send.
- **Rule:** accept input in many forms, for example phone numbers with or without spaces or dashes, or dates typed in different styles. Clean the input on the server. Prevent errors with the right input type, examples and limits.
- [ ] Inputs use the right type (`email`, `tel`, `number`, date picker).
- [ ] Each field shows an example or hint before the user makes a mistake.
- [ ] Validation still happens on the server (Stage 3, section D). Being flexible is not the same as trusting the input.

### Error recovery → Make errors recoverable
- **Meaning:** errors will happen. What matters is how easily the user can fix them.
- **Rule:** error messages say what went wrong and how to fix it, in plain words, next to the field. Offer "Undo" for deletes, or a confirmation for actions that cannot be undone. Never clear a form after an error.
- [ ] Every error message says what happened and what to do next.
- [ ] Delete actions have Undo, or a confirmation step.
- [ ] A failed submit keeps everything the user typed.

### Progressive disclosure → Reveal complexity gradually
- **Meaning:** show the basics first and the advanced options only when they are needed.
- **Rule:** hide advanced settings behind "Advanced" or "More options". Teach features at the moment they are useful, not all during onboarding.
- [ ] A new user sees only what the core task needs.
- [ ] Advanced features are one click away, not hidden completely.

## Review prompt for Claude Code

```text
Read ux-laws.md.
Review the screen <name> against every rule in sections A to E.
For each rule: pass / fail / not applicable, with the component or file.
Then list the 3 changes that would help the user most, and fix only those 3.
```

## Test with a real person (after each major flow)

- [ ] Give one person from your ICP the core task. Do not explain the app.
- [ ] Watch in silence. Write down every pause, wrong click and question.
- [ ] Match each problem to a rule above. Fix it. Test again with a new person.
