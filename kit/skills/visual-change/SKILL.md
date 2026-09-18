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
