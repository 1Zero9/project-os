# Experiment 007: Autonomous LaunchCity Recovery — Closure

- **Date:** 17 September 2026
- **Type:** Autonomy experiment (single founder prompt authorised the work)
- **Project OS v0.1:** remains FROZEN; this record does not change it
- **Classification: PARTIALLY SUPPORTED**
- **Founder acceptance: NOT GRANTED**

---

## 1. Question

Given one founder instruction, can Project OS inspect an existing system,
understand founder intent, organise the required expertise, make and
verify changes autonomously, and deliver a genuinely reviewable result?

## 2. Autonomy granted

Inspect both repositories; work on one isolated LaunchCity branch; write
code, tests, fixtures and evidence; run builds, tests and browser
automation; commit and push the branch after gates passed; up to two
autonomous correction cycles. Not granted: deploy, merge to main, touch
production KV/refresh/Cloudflare config, spend money, mark the result
accepted.

## 3. Council roles used

| Role | How it ran |
|---|---|
| Project OS lead | Main session |
| Product guardian | Separate subagent — read Panel C and the failure screenshot, wrote a visual specification |
| Technical lead, data/risk reviewer, delivery engineer | Main session (not independent of each other) |
| Independent reviewer | Separate subagent — fresh clone, documented commands only; reviewed `17e7d13` and ran a hand-off test on `9c619c7` |

## 4. Branch and production safeguards

- LaunchCity: `experiment/007-autonomous-horizon-recovery`, final commit
  `4c7283f`. `main` remained unchanged at `b438fe8`, locally and on
  origin.
- No KV mutation, no refresh endpoint call, no Cloudflare config change,
  no deploy, no merge.
- Review data is a committed fixture, gated to `next dev` plus an
  explicit env var, verified absent from `.next` and `.open-next`
  production build output.

## 5. Work performed

- Reproduced the founder's failure screenshot from committed `b438fe8`
  against the founder's local cache.
- Rebuilt the Horizon and Launch Detail composition on top of `b438fe8`
  (kept its honest-imagery contract, replaced only the layout).
- Added a capped, chronologically ordered timeline (`buildHorizonRail`),
  a shared status model, and a committed review-mode fixture with three
  scenarios.
- First independent review found 2 major and 4 minor defects; fixed in
  one autonomous correction cycle (`5cd5da0`). A hand-off re-test on a
  fresh clone then passed.
- Founder review 1 rejected the visual result as not matching Panel C and
  directed public-source imagery with credits on a separate page. A
  founder-directed revision followed: photographic Earth backdrop, serif
  type, filled pills, Detail tabs, an in-card header/menu, and a new
  `/credits` page (`9cbeed3`, `4c7283f`). This revision was **not**
  independently re-reviewed by a separate agent.
- Founder review 2 again withheld acceptance, identifying further
  concrete defects (oversized title, missing curved timeline, excess
  empty hero space, sun flare competing with the next-launch marker,
  over-applied serif type, an incompletely integrated Credits entry, and
  outstanding mobile/Detail review). Per this prompt's instruction, no
  further LaunchCity work was performed after that feedback.

## 6. Founder interventions

Three founder prompts were required, not one:

1. The original recovery instruction.
2. A mid-session request to stand up the dev server for direct review.
3. Visual rejection and redirection after seeing the first result.

A fourth prompt then stopped implementation at the two-correction-cycle
limit. This is routine intervention, not the "one founder prompt" the
experiment question asked whether Project OS could work within.

## 7. Reproducibility outcome

**Supported, for what it verified.** A fresh clone of the *first*
delivered commit (`9c619c7`) was independently rebuilt from documented
commands alone, with matching screenshots, by a separate reviewer agent.
The *final* commit (`4c7283f`) passed the same build/lint/test gates from
a clean clone in the main session, but that check was not run by an
independent agent, and the founder has not yet reproduced or accepted
either state.

## 8. Visual outcome

**Not supported.** The founder's Panel C reading was wrong on the first
delivery ("not what was envisioned in the brief") and required a
founder-directed rebuild. Even after that rebuild, the founder's second
review identified specific unresolved mismatches: an oversized technical
launch title, a missing curved Horizon timeline, excessive empty hero
space, a sun flare competing visually with the next-launch marker,
over-applied serif typography, an incompletely integrated Credits entry,
and mobile/Detail states still awaiting review. The product guardian and
the independent reviewer both worked from the same agent-written
specification, so neither role caught the misreading before it reached
the founder.

## 9. Independent-review limitation

The independent reviewer verified the *first* delivered iteration
(`17e7d13` → `5cd5da0` → hand-off on `9c619c7`) against a specification
another agent had written from Panel C. It never reviewed the
founder-directed second iteration (`9cbeed3`/`4c7283f`), which is the
version the founder's second round of feedback addresses. Independent
review coverage therefore does not extend to the version now sitting on
the branch.

## 10. Cost and usage evidence

| Measure | Value |
|---|---|
| Wall-clock duration | ~1 hour 24 minutes |
| API processing time | 38 minutes 22 seconds |
| Estimated API-equivalent cost | $28.38 |
| Requests | 107 |
| Opus input tokens | 43.1k |
| Opus output tokens | 216.6k |
| Cache reads | 33.7M tokens |
| Cache writes | 707.5k tokens |
| Code changes (session-reported) | 513 lines added |
| Founder prompts | 3 (plus this closure prompt) |
| Correction cycles | 1 autonomous + 1 founder-directed revision |
| Session allowance consumed | 59% |
| Weekly allowance consumed | 55% |
| Usage-credit position at review | €16.53 of €20 |

Subscription allowance, usage credits and API-equivalent cost are three
separate measures of different things (a plan quota, a prepaid credit
balance, and an estimated open-market equivalent price) and must not be
summed or treated as interchangeable.

The founder's own estimate for direct one-to-one delivery of a comparable
change was "a few hours." At ~$28 API-equivalent cost and 59% of a
session allowance for a result still not accepted, cost proportionality
to outcome is not demonstrated.

## 11. Supported claims

- Autonomous role coordination (separate product-guardian and
  independent-reviewer subagents actually ran, not merely role-played
  in one transcript).
- Isolated experiment branch, correctly scoped and never touching main.
- Reproducible committed review mode (verified by an independent agent
  for the first iteration).
- Public-source imagery adopted with recorded provenance on request.
- Automated validation (lint, types, 105 tests, two production build
  targets) passing at every commit.
- Independent review of an earlier iteration, including a genuine
  correction cycle that fixed real defects.
- Production protection held throughout (no KV, refresh, Cloudflare or
  deploy action).
- Meaningful improvement after founder feedback (photographic Panel C
  elements adopted, credits page added) — improvement, not completion.

## 12. Unsupported claims

- Accurate first-pass interpretation of Panel C.
- Completion from one founder instruction (three were needed before this
  closure prompt).
- No routine founder intervention (a dev-server request and two rounds of
  visual rejection were both routine, not exceptional).
- Independent review of the final revision (never performed).
- Founder acceptance (explicitly not granted, twice).
- Proportionate delivery cost (~$28 API-equivalent and 59% of a session
  for an unaccepted result).
- Proven advantage over direct one-to-one delivery (the founder's own
  "a few hours" estimate for hands-on work was not beaten or tested
  against this session's cost).

## 13. Learning for Project OS

An agent-written visual specification, checked by another agent working
from the same source artefact, does not substitute for a founder
checkpoint. Both roles shared one interpretation of Panel C and neither
caught the misreading. Expensive rework proceeded without a cost or
scope check between the two founder rounds. Model, cost and review-role
choices were not deliberately allocated to task type — the same capable,
expensive model ran every council role regardless of what it needed.

## 14. Recommended next test

Before any further autonomous LaunchCity work: a founder-visible
checkpoint of the agent-written visual specification itself, run against
Panel C before implementation starts — testing whether a cheap, early
confirmation step (spec-level, not pixel-level) would have caught the
misreading before the first full implementation pass, at a fraction of
the cost of the rework that followed.

## 15. Candidate v0.2 controls (recorded, not promoted)

- Delivery-cost budget set before execution begins.
- Model allocation by council role, not one model for every role.
- A request- or agent-pass ceiling per experiment.
- A context-size control to bound cache read/write growth.
- A cost check gate before a second correction cycle is authorised.
- Hard cap of two correction cycles (already applied this session).
- A founder-visible checkpoint before any expensive rework pass begins.
- Cost measured per accepted tangible result, not per commit.
- A recorded comparison against expected direct-delivery effort, checked
  at closure.

### Model-allocation hypothesis (for testing, not a frozen rule)

- A capable lead model for short planning, Stand-Back review and
  challenge.
- A lower-cost implementation model for ordinary coding once direction is
  set.
- A low-cost model or deterministic tooling for mechanical checks (lint,
  type, build, overflow/overlap screenshots).
- No automatic default to the most expensive available model for every
  council role.

## 16. Prompt ledger

- Prompts issued before this closure: 24.
- Completed: 22.
- Running experiment now being closed: 1.
- Unconfirmed/superseded: 1.
- This closure is Prompt 025.
- After this closure: 25 issued, 24 completed, 1 unconfirmed/superseded.

Prompt count remains a diagnostic signal, not a performance target.

---

**Founder acceptance of the LaunchCity visual result has not been
granted.** This record classifies autonomous delivery capability only.
