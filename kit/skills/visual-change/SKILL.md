---
name: visual-change
description: Change how something looks in an existing project without the review-reject loop — establish the authoritative intent, prove the hard part in isolation and get it confirmed before implementing, then verify against the real surface. Use when asked to match a design, fix a layout, restore a visual concept, or when a visual result has already been rejected once.
---

# Visual Change

Getting a visual result accepted is not a rendering problem, it is an
*interpretation* problem. This skill exists to stop the loop where an agent
reads a design, builds it, shows the founder, and is told "not quite".

## The trap this avoids

LaunchCity's Horizon was rebuilt twice from the same design PNG and rejected
both times, at ~$28 and 107 requests. The recorded root cause:

> An agent-written visual specification, checked by another agent working from
> the same source artefact, does not substitute for a founder checkpoint. Both
> roles shared one interpretation and neither caught the misreading.

Two agents read the same image, agreed with each other, and were both wrong.
**Reading the image again makes you the third.** The fix is not more careful
reading — it is putting the interpretation in front of the founder *before*
it becomes code.

## 1. Find what is actually authoritative

Look for a founder-authored direction document, an original design export, or
a decision register — not a previous implementation and not another agent's
summary. If the intent was never written down, say so: that changes everything
that follows, because there is nothing to be faithful to yet.

If the authoritative artefact is untracked in git, commit it. A clean checkout
that lacks the thing the work is judged against is how drift goes unnoticed.

## 2. Prove the hard part in isolation

Build the *mechanism* — the curve, the animation, the layout relationship —
as a standalone page. No app integration, no codebase changes. Publish it as
an Artifact so it opens on any device.

**Offer calibrated variants, not one guess.** A slider plus three to five
presets lets the founder point at a value instead of describing what is wrong,
and converges in one round instead of three. Print the resulting numbers on
the page so they can be read back to you.

Include a toggle showing the current build alongside the proposal when there
is a live version to beat.

## 3. Get one confirmation

Ask for the specifics you cannot infer, in one message. That is the whole
founder cost: a few minutes looking at something real, rather than a review of
work already done.

The confirmed proof is now the specification. Implementation is mechanical
from here and needs no further check-in until there is something to look at.

## 4. Implement

Carry confirmed values as **named constants**, never inlined — they are the
product's identity, and a reader needs to know that changing them is a product
decision. Reuse existing components rather than writing a parallel
implementation; check whether the thing you need already exists.

Two things a Design-canvas proof cannot tell you, because the canvas doesn't
run the real framework (from F1, 2026-09-19):

- **A background image in the proof is a plain CSS `url()`, because the
  canvas has no image pipeline. In the real app, use the framework's image
  component** (`next/image` etc.) for optimization and a real responsive
  `srcset` — don't carry the raw `url()` over as-is.
- **If the confirmed identity applies to only one page (a landing page, not
  the whole app), check what's shared across every page before porting it.**
  A global footer/header styled for the *old*, neutral look will visually
  clash under a page that now has its own identity. Either scope the shared
  component to skip that route, or give it its own matching variant — don't
  let the mismatch ship unnoticed.

## 5. Verify against the real surface

Passing types, lint and tests means the code compiles, not that the product is
present. Before calling it done:

- [ ] Open it in a real browser at desktop **and** phone width.
- [ ] Console clean — no errors, no hydration mismatch, no key warnings.
- [ ] No horizontal overflow.
- [ ] **Run it against real data, not just fixtures.** Fixtures are chosen to
      be tidy and hide a whole class of bug: "SpaceX" fits where "China
      Aerospace Science and Technology Corporation" collides with everything
      around it. Check the longest, emptiest and most awkward real values.
- [ ] Measure the thing you are claiming. "They do not overlap" is a number
      you can read out of `getBoundingClientRect()`, not a judgement.
- [ ] **Test interactions against the actual production build, not just
      dev.** A dev server and a production build can run different code
      paths for the same feature. Learn2Learn's internal links worked in dev
      after an unrelated fix, then silently did nothing once deployed — a
      framework helper threw inside its own production-only prefetch logic
      and swallowed every click, with no error visible to a visitor. A page
      loading is not evidence a click works; drive the actual interaction
      (`.click()`, not just `.goto()`) against a local production build
      before trusting a deploy.

Screenshot both states into the project's evidence directory if it has one.

## Guardrails

- Restart the dev server before trusting a clean console — error overlays
  accumulate across a session and stale counts read as live problems.
- Geometry computed with `Math.sin`/`cos` must be rounded before it reaches
  the DOM, or server and client disagree in the last decimal and React reports
  a hydration mismatch.
- Fixed pixel values tuned at desktop flatten or collapse on a phone. Scale
  them, and check.
- If a shared component looks wrong in a new context, check what surface its
  styles assume before overriding it.
- **When copying a reference implementation, measure the rendered result, not
  the first number in its markup.** A framework's sizing props are often a
  loader hint, not the display size (`next/image`'s `width`/`height` can be
  overridden by a `className`) — copying the visible attribute without the
  override that actually controls it silently halves or doubles the result.
  Confirm with `getBoundingClientRect()` before shipping.
- **CSS specificity is fought per property, not per rule.** A highly specific
  selector that never declares a given property does not block a less
  specific rule that does declare it — the less specific rule simply wins
  that property by default, because nothing else is competing for it. `h1.big
  em { color: red }` looks like it should own everything about that element,
  but a plain `h1 em { font-family: serif }` elsewhere still sets the font,
  silently. If an element is rendering with a property you never set on its
  own rule, look for another selector — of any specificity — that does set
  it, rather than assuming inheritance from the parent.
- **Anything that swaps content in place needs a fixed box.** A dial, carousel,
  tab panel or detail pane fed by real data will resize as the content changes
  and the page will jump under the cursor. Reserve the height and clamp the
  text; keep the full value in a `title` attribute and on its own page, so it
  is abbreviated rather than hidden.
- **When a box resizes, measure its children, not the box.** The obvious
  culprit is usually wrong. A panel swinging 395–530px looked like a long
  title or a long description; both were fixed and it still moved. Logging
  every child's height found it immediately: a wrapping three-item facts row
  that was 55px, 113px or 171px depending on how the values broke.
- **Checking a design against the "avoid AI-generated design" list only by
  literal name misses the trope.** F1's landing page avoided "left-border
  cards" and "cream/terracotta" by name, then shipped near-black-plus-one-
  saturated-accent (the same family as the list's "near-black with a lone
  acid-green or vermilion pop") and an accent bar moved from the card's left
  edge to its top edge — same trope, different edge. Check the underlying
  pattern (one dark ground + one hot accent; a rail signalling "this element
  matters" on any edge of a card), not just whether the exact named example
  is absent.
- **A UI claim needs the rendered page, not the data file that feeds it.**
  Confirming a JSON file has the right value and telling the founder "the
  page already shows this correctly" are two different checks — the second
  needs an actual fetch/read of that page's output. This is Learning
  Register #3 recurring inside a single build: recording a learning does not
  make it automatic on the next similar-looking claim, so treat "is the data
  right" and "does the page render it" as two separate steps every time,
  not one that implies the other.
- **A requested edit is not an opening to add unrequested copy.** Asked to
  place a photo, adding a caption that states a fact (even a true, verified
  one) beside it is scope the founder didn't ask for. Place what was asked;
  offer the addition as a question, don't ship it inline.
- **A list that displays dates must be checked in its rendered order, not
  just for whether all records exist.** RVR 2014 Team Admin (2026-09-20)
  sorted date labels such as `8 Sept 2026` as database text, so newer albums
  appeared below August ones. Sort by a machine-readable timestamp (or parse
  the display value at the presentation boundary) and verify that the newest
  visible item really leads the user-facing list.
- **Uploading a founder's own identifying content (a photo of them, personal
  data) to a hosted tool's asset store is a storage-location decision, not
  just a task completion.** Say plainly where it now lives (e.g. "private
  Artifact asset store, not just local") at the time it happens, don't leave
  it implied by having done the task.
