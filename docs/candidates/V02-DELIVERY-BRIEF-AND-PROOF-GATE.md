# v0.2 Candidate — Delivery Brief and Proof-and-Stop Gate

**Status:** Explore candidate. This does not alter frozen Project OS v0.1.

## Purpose

This is the smallest candidate loop for moving a founder-owned idea toward an
accepted working result without mistaking activity, documentation, or technical
checks for product delivery. It consolidates the useful parts of the prior
Intent Baseline, Fidelity Gate and Rebaseline Trigger; those records remain
unchanged as evidence.

Use it for a material founder-directed feature, visual/product delivery, or
correction cycle. For a small internal or reversible bug fix, record only the
source, intended outcome, proof, and any stop condition.

## Part 1 — Delivery Brief

Complete this before material implementation. It must fit on one page.

| Field | Record |
|---|---|
| Founder / decision authority | |
| Authoritative source(s) | |
| User outcome | |
| Three to five core requirements | |
| Explicit exclusions / adaptable areas | |
| Smallest founder-visible structural proof | |
| Acceptance evidence and committed-state review command | |
| Time / cost / pass budget | |
| Founder checkpoint | |

Rules:

- An implementation, repeated documentation, or assistant interpretation never
  becomes an authoritative requirement.
- Each core requirement must be observable in the structural proof or final
  hand-off.
- If source, authority, or desired outcome is unclear, ask the founder before
  implementation.

## Part 2 — Proof-and-Stop Gate

Run after the structural proof, after every material correction, and before a
completion claim.

- [ ] The founder can review the structural proof from committed state.
- [ ] Visual/structural requirements and behavioural requirements have each
  been checked; passing technical checks are supporting evidence only.
- [ ] Every core requirement is PRESENT, explicitly founder-deferred, or has a
  traceable founder-approved replacement.
- [ ] No local seed, temporary fixture, browser cache, or uncommitted state is
  needed to reproduce final evidence.
- [ ] The delivery remains within the agreed boundary and budget.

### Decision

| Condition | Result | Action |
|---|---|---|
| Core requirements and reproducible proof are present | **PROCEED / PASS** | Implement or complete within the approved boundary. |
| Founder explicitly defers a non-critical item | **PASS WITH FOUNDER DEFERRAL** | Record the decision and remaining scope. |
| Evidence is absent, ambiguous, or cannot be reproduced | **INSUFFICIENT EVIDENCE** | Recreate proof from committed state; do not claim completion. |
| Founder says it misses the brief; a core item is missing; two corrections are unaccepted; or budget is exceeded without accepted value | **STOP AND REBASELINE** | Stop implementation, preserve evidence, reread authoritative sources, make the smallest corrected structural proof, and obtain founder approval before resuming. |

An agent must not call work complete, accepted, or ready to deploy while a core
requirement is unresolved.

## Retention during rebaseline

Do not discard working code automatically. Keep logic, data handling,
accessibility work, and tests only where they still support the reconfirmed
brief; otherwise mark them adapt or remove.

## What this deliberately does not do

It does not require a council, scoring system, knowledge search, separate
decision register, automated model routing, or a full specification. Those
remain hypotheses until a delivery test demonstrates their value.
