# Result card

The pattern most sports-results apps converge on, and the one our own
match-tracker projects kept re-deriving from scratch instead of reusing: a
coloured W/D/L badge (the outcome reads before either score does), one row
per team as crest + name + bold score, nothing else competing for attention.

Extracted from Finn's Team / RVR 2014 Team Admin (2026-09-26), after the
founder pointed at a reference results app and asked "what do you think of
this" — the win there wasn't its colour or branding, it was restraint: no
custom palette doing the work, just the semantic result badge and the
crests. Don't copy that reference app's actual UI, wording, icon set or
brand assets — this asset recreates the *pattern* (badge, crest row, bold
score, everything else collapsed), per this kit's "recreate the style, never
reproduce the source material" convention.

## When to reach for this

Any project that lists match/game/fixture results for a team: a club site,
a fantasy-league app, a youth-sport tracker. Not a generic "card" — it's
specifically a two-sided score comparison with a win/loss/draw outcome.

## Wiring it up

1. Copy `result-card.tsx` and `result-card.css` into the project.
2. Render one `<ResultCard>` per result, `home` as the project's own team
   (for the bold name and the auto-computed badge) and `away` as the
   opponent. Pass `result` explicitly instead when the source already
   supplies its own W/D/L (a scraped feed, a league API) rather than
   trusting the raw scores to always agree with it.
3. `crestUrl` is optional per team — falls back to an initial-letter avatar,
   which is normal and expected for an opponent you don't have a logo for.
4. Put anything else about the match (goal-by-goal detail, player of the
   match, an edit action) inside `children`, typically behind a
   show/hide toggle the calling project owns — this asset is deliberately
   just the glanceable row, not a full match-detail component.

The component uses a plain `<img>` for the crest (not `next/image`), per
this kit's own convention: portable to a project where a framework image
component isn't confirmed working, at the cost of no automatic
optimization — swap it for `next/image` directly in the copy if the
project already relies on it elsewhere.
