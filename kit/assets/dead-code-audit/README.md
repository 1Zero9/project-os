# Dead-code audit

A project that got simplified (fewer routes, a pivoted scope, a "strip it
back to the essentials" pass) almost never has its old CSS and helper files
cleaned up in the same commit. They just sit there. Grepping for a class
name or function name doesn't find this reliably — it can look "used"
because it's referenced inside a component that is itself never imported by
anything live.

Built and proven on Finn's Team (2026-09-26): `globals.css` had grown to
~7,100 lines carrying an entire earlier app (public marketing homepage,
photo gallery, gamification, nutrition, training, staff admin) after the
app was cut down to 5 routes. This audit found 6 dead files, 3 dead server
actions, and pruned the stylesheet to ~2,000 lines — with every removal
mechanically proven not to touch anything still live, since no browser was
available in that session to check by eye.

## The four scripts, in order

1. **`find-dead-files.js`** — traces the real import graph outward from a
   project's actual entry points (`page.tsx`/`layout.tsx`/`route.ts` by
   default) and reports every `.ts`/`.tsx` file under `--root` that's
   unreachable. Writes the live-file list to `/tmp/live_files.json`.

   ```
   node find-dead-files.js --root app
   ```

   Delete the reported dead files, **then check what called into them** —
   an orphaned file's exports (a server action, a component) may still be
   defined in an otherwise-live file (Finn's Team's `actions.ts` had two
   dead server actions whose only real dependency was a file this script
   found dead). Remove those exports and their now-unused imports too.

   This only follows *static* `import ... from '...'`. A dynamic
   `await import('./x')` isn't traced — if a candidate is only reached that
   way, verify its caller is itself live by hand before deleting.

2. **`find-dead-classes.js`** — given a CSS file and that live-file list,
   reports which class selectors never appear as an exact token (not a
   substring — `"card"` inside `"card-label"` doesn't count) in any live
   file.

   ```
   node find-dead-classes.js --css app/globals.css
   ```

3. **`prune-css.js`** — removes fully-dead rules and selector-list entries.
   Never touches a declaration body: it only deletes a selector, a whole
   rule (when every selector sharing its block is dead), or an `@media`
   block left with nothing inside. `@keyframes`/`@font-face`/other at-rules
   are left untouched entirely — cheap enough to skip auditing.

   ```
   node prune-css.js app/globals.css /tmp/dead_classes.txt /tmp/pruned.css
   ```

4. **`verify-prune.js`** — proves step 3 didn't change anything live: every
   selector mapping to a still-used class must have byte-identical
   declaration bodies, in the same order, before and after. Report zero
   mismatches before applying the pruned file, always — this is what makes
   "I deleted what I believe is dead" into "I proved nothing live changed,"
   checkable without a screenshot tool.

   ```
   node verify-prune.js app/globals.css /tmp/pruned.css /tmp/dead_classes.txt
   ```

   Zero mismatches → `cp /tmp/pruned.css app/globals.css`, then run the
   project's own typecheck/lint/build and hit every real route once before
   committing.

## What this doesn't do

It won't catch a class used only via a computed/dynamic string the source
doesn't spell out literally (`className={styles[variant]}` from a lookup
object, for instance) — read a candidate's surrounding code before trusting
the automated list on anything non-obvious. And it's conservative by
construction (candidate classes are only collected from selectors starting
with a single class token, so compound selectors like `.a.b` under-report) —
false "still alive" survivors are the safe failure mode here, not false
deletions.
