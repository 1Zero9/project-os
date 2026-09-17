# Experiment 007: Autonomous LaunchCity Recovery

- **Date:** 17 September 2026
- **Type:** Autonomy experiment (single founder prompt)
- **Project OS v0.1:** remains FROZEN; this record does not change it
- **Product status:** LaunchCity branch is ready for founder review. It is
  **not** accepted, locked, frozen or shipped.
- **Classification:** see §12 (autonomous delivery capability only)

---

## 1. Question

Can Project OS, given one founder instruction, do all of the following?

- Inspect an existing system.
- Understand founder intent.
- Organise the required expertise.
- Make and verify changes autonomously.
- Deliver a result the founder can reproduce and review.

## 2. Autonomy granted and stop conditions

**Granted:**

- inspect both repositories;
- work on one LaunchCity experiment branch;
- write code, tests, fixtures and evidence;
- run browser automation, builds and tests;
- commit, and push the branch after every gate passed;
- use up to two correction cycles.

**Not granted:**

- deploy, merge, or touch main;
- touch KV, the refresh endpoint or Cloudflare configuration;
- spend money or use production LL2;
- mark anything accepted;
- rewrite v0.1.

**Stop conditions:**

- a source artefact is unreadable;
- required authority is missing;
- the work would cost money;
- production data would change;
- there is unresolved image legal risk;
- two correction cycles fail;
- council roles materially disagree.

**Triggered:** none. The founder was asked no questions during execution.

## 3. Council roles actually used

| Role | How it ran |
|---|---|
| Project OS lead | Main session. Owned scope, the Stand-Back review and correction authorisation. |
| Product guardian | **Separate subagent.** Read Panel C, the failure screenshot and the current mobile render directly, and produced a 10-point pass/fail visual specification. |
| Technical lead | Role pass in the main session, based on the code, git diff `ab27d15..b438fe8` and a baseline reproduction. |
| Data and risk reviewer | Role pass in the main session: image sourcing, labelling and production isolation. |
| Delivery engineer | Main session. |
| Independent reviewer | **Separate subagent.** Worked from a fresh clone and the documented commands only. Ran its own Playwright scripts and builds, then later ran the hand-off test. |

**Limitation:** the technical lead, data and risk reviewer and delivery
engineer were the same agent. Independence was achieved only for the
product specification and for acceptance testing, which were the two
failure points recorded in DELIVERY-LEARNING-003.

## 4. Stand-Back (summary)

- **Audience:** space enthusiasts. They must see immediately what launches
  next, when, and how certain that is.
- **Sources:** Panel C and the 2026-09-17 failure screenshot. Both were
  read directly.
- **Inherited but unproven:**
  - b438fe8's layout;
  - the unbounded `overdue` list;
  - the assumption that passing tests meant a working page;
  - Experiment 008's uncommitted KV seed.
- **Cost:** £0. No LL2 calls were needed.
- **Current state:** reproduced from committed b438fe8 against the
  founder's local cache. Desktop showed a crushed title and 13+ colliding
  slots. Mobile showed 7 "awaiting update" rows and a text collision.
- **Riskiest assumption:** that a committed review fixture could be both
  reproducible for the founder and provably absent from production.
- **Verdict:** proceed with conditions.

## 5. Cheapest test

**Test:** put a marker-bearing dynamic import behind
`NODE_ENV === "development" && LAUNCHCITY_REVIEW_MODE`, run `next build`,
and grep the output.

**Result:** the marker was absent from `.next`. A positive control (the
same code without the `NODE_ENV` guard) put the marker in the server
chunks. The approach held, and the probe was removed before
implementation began. It took about 3 minutes.

## 6. Decisions made autonomously

1. **Repair on top of b438fe8; do not revert.** Its image contract,
   honest captions and disabled ingestion were sound and tested. The
   failure was confined to the layout layer:
   - the hero sat inside the timeline flex row;
   - the overdue list had no limit;
   - overdue launches were placed after NEXT.

   Reverting to `ab27d15` would have lost that work and still delivered
   no Panel C.
2. **Composition.** Hero text on the left, the photo on the right, and a
   CSS Earth limb behind both. Below that, a fixed five-slot timeline
   (Panel C's 2 + NEXT + 2), in chronological order.
3. **Overdue launches** go to the left of NEXT, never more than would hide
   every flown launch. The rest sit behind a disclosure; none are dropped.
4. **Review data.**
   - Committed, illustrative fixture with a frozen clock and three
     scenarios (imagery, no imagery, stale).
   - A visible "Review mode · Demonstration data" banner.
   - The Detail source line says "review demonstration data, not Launch
     Library 2".
5. **Imagery.**
   - Two NASA-staff photos of Falcon 9 (NASA/Bill Ingalls and
     NASA/Joel Kowsky), classed as vehicle-generic.
   - Attached only to Falcon 9 fixture launches.
   - Captioned "Representative vehicle image · <what it shows> — <credit>".
   - Third-party (ULA, Rocket Lab, Boeing) images were rejected to avoid
     licensing ambiguity.
   - The Earth horizon is drawn in CSS, so no artwork licence is needed.
6. **Isolation.** Review mode is gated at build time and verified absent
   from both `.next` and `.open-next`. The LL2 adapter is unchanged
   (`image: null`).
7. **Deviations from Panel C.** No tagline, no menu, sections instead of
   tabs (the frozen Detail direction), and short slot names.

## 7. Correction cycles

**Cycles used: 1 of 2.** The independent review of `17e7d13` returned
NEEDS CORRECTION:

- 2 major defects:
  - D1: Hold, overdue and partial-failure pills shared one colour;
  - D2: the image credit was unreadable over a bright photo.
- 4 minor defects:
  - D3: title width;
  - D4: the source line crossed the horizon arc (also found by the lead
    in the comparison sheet);
  - D5: a bare not-found page;
  - D6: Detail wording.
- 2 inaccurate README claims.

All were specific and bounded, and all were fixed in `5cd5da0`. The
lead's own passes before that review also caught and fixed:

- the limb curve crossing timeline labels;
- the two image masks failing to combine in Chromium;
- a 4-line mobile title;
- a caption that implied the data came from LL2;
- evidence PNG quantisation that turned the green pill grey.

## 8. Founder prompts required during execution

**None.** The experiment used one founder prompt.

## 9. Tangible result

In the LaunchCity branch `experiment/007-autonomous-horizon-recovery`, the
founder can now run a Panel C Horizon and Launch Detail from a clean
checkout:

```sh
cd launchcity   # stop any `next dev` running in this directory first
git fetch origin
git checkout experiment/007-autonomous-horizon-recovery
npm ci
npm run review  # http://localhost:3007/
```

**Scenarios:**

- http://localhost:3007/
- http://localhost:3007/?review=no-image
- http://localhost:3007/?review=stale

**Detail pages:**

- http://localhost:3007/launch/review-f9-transporter (imagery, long name)
- http://localhost:3007/launch/review-soyuz-progress (no image, overdue)
- the other states listed in `launchcity/review/README.md`

## 10. Reproducibility result

**PASSED (independent agent).** The independent reviewer took a fresh
clone of `9c619c7` and followed only the documented commands.

- `npm ci` and `npm run review` needed nothing temporary, uncommitted or
  already running.
- Its own captures matched the committed screenshots (mean pixel
  difference under 1/255, i.e. JPEG noise).
- lint, `tsc`, 103/103 tests, `next build` and the OpenNext build all
  passed.
- No fixture data was found in `.open-next`, or in `.next` outside
  `.next/dev`.
- `next start` with the review variable set did not activate review mode.
- Verdict: READY FOR FOUNDER REVIEW.

**Remaining minor findings (not fixed):**

- The not-found page has no review banner, and its back link drops the
  scenario.
- On the 390px Hold Detail page, "UTC" wraps onto its own line.

**Not yet done:** reproduction by the founder. Only that confirms the
hand-off (DELIVERY-LEARNING-003).

The branch was pushed to origin after this test. Main was not modified in
either repository.

## 11. Duration

- Execution began at 11:43Z, with the repository state check.
- The first founder-visible working result was at about 12:00Z.
- The independent review and correction cycle finished at about 12:10Z.
- The hand-off test passed at about 12:15Z; the branch was pushed at 12:16Z.
- Total wall-clock time was about 35 minutes, in one session.
- Prompt 024 (this prompt) is the only founder prompt.

## 12. Classification

**SUPPORTED (provisional).** Within this session, Project OS did each of
the following without founder input:

- reproduced the failure;
- secured intent from the primary artefacts;
- ran two independent roles;
- found the root cause;
- delivered a Panel C implementation;
- passed one independent correction cycle and a clean-clone hand-off test.

It did this with one founder prompt, one correction cycle, £0 spend and
no production change.

**Provisional because** an agent performed the hand-off test, and under
DELIVERY-LEARNING-003 the founder's own reproduction is the real gate.

**Downgrade conditions:**

- to **NOT SUPPORTED** if the founder cannot reproduce the result with the
  §9 commands;
- to **PARTIALLY SUPPORTED** if it reproduces but materially misreads
  Panel C.

This classification concerns autonomous delivery. It is not founder
acceptance of the design.

## 13. Evidence

**LaunchCity:**

- `docs/evidence/009-autonomous-horizon-recovery/`
  - final captures at 1440 and 390, including first-viewport captures;
  - `comparison-panel-c-vs-branch.jpg`;
  - `before-b438fe8-*` (the reproduced failure);
- `docs/experiments/009-autonomous-horizon-recovery.md`;
- `review/README.md` (fixture and image provenance, isolation).

**Commits:**

- `17e7d13` (implementation);
- `5cd5da0` (correction cycle 1);
- `9c619c7` (evidence).

**Project OS:**

- `docs/evidence/2026-09-17-launchcity-local-proof-failure.png` (input);
- this record.

## 14. Limitations

- **Screenshots are not founder acceptance.** Visual acceptance of the
  composition remains the founder's decision.
- **Independence was partial.** Only two roles ran as separate agents,
  and the product guardian's specification was written by an agent
  interpreting Panel C, not by the founder.
- **The review data is illustrative.** Real LL2 names and states were not
  re-fetched. The founder's own local cache was only used to reproduce
  the failure; it was not checked against the new layout.
- **Production imagery is still off.** The branch shows imagery only in
  review mode. Source, licence and attribution for production images are
  still a founder decision.
- **Review mode and `npm run dev` share one directory.** Next.js allows
  one dev server per directory, so the founder's existing server on :3000
  must be stopped first.
- **No browser beyond Chromium was used.**
