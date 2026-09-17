# Intent Baseline — v0.2 Candidate Template

**Status:** EXPLORE candidate; not part of frozen Project OS v0.1.  Complete
this before a material delivery pass, or use the lightweight form below for a
small, low-risk change.

## Invocation

Run the full baseline before visual/product delivery, a new feature with
founder-authored direction, a material correction cycle, or hand-off. Run the
lightweight form for a bounded bug fix or internal change with no changed user
intent: record the source, affected requirements, acceptance evidence and
founder-visible checkpoint (if any). Do not use a lightweight form to omit an
authoritative visual, structural or behavioural requirement.

## Header

| Field | Record |
|---|---|
| Project / delivery | |
| Baseline version and date | |
| Owner preparing it | |
| Founder / decision authority | |
| Delivery budget (time, cost, request/pass ceiling) | |
| Founder-visible checkpoint (what, when, how reproduced) | |
| Approval event (person, date, source/link) | |

## Authoritative sources

List only sources approved by the named authority.  A repeated document,
implementation convenience, or assistant interpretation does not become an
authority by repetition.

| Source ID | Source and stable location | What it authoritatively decides | Authority | Approval event |
|---|---|---|---|---|
| SRC-01 | | | | |

## Product frame

| Field | Record |
|---|---|
| Product objective | |
| Primary user outcome | |
| Required structure | |
| Required behaviour | |
| Visual invariants | |
| Content and data requirements | |
| Explicit exclusions | |
| Adaptable areas | |
| Open decisions and owner/date due | |

## Requirement register

Use one row per independently assessable requirement. IDs must remain stable
across correction cycles. Importance is **CORE** or **SUPPORTING**. Status is
only **PRESENT**, **PARTIAL**, **MISSING**, **FOUNDER-DEFERRED**, or
**SUPERSEDED**.

| ID | Requirement | Source | Authority | Importance | Evidence method | Status | Evidence / gap | Approved replacement or founder decision |
|---|---|---|---|---|---|---|---|---|
| IB-001 | | SRC-01 | | CORE | committed-state run, screenshot, interaction test, or founder review | MISSING | | |

Rules:

- `FOUNDER-DEFERRED` needs the explicit founder decision, scope and date;
  absence of a decision is `MISSING` or `PARTIAL`.
- `SUPERSEDED` needs a traceable approved replacement requirement and approval
  event; otherwise retain the original status.
- Evidence must identify how a reviewer can reproduce it from committed state.

## Acceptance evidence and checkpoint

- [ ] Exact committed revision and documented run/review commands are recorded.
- [ ] Visual evidence assesses composition/invariants independently of
  behavioural evidence.
- [ ] Behavioural evidence covers the required browse, select, input or state
  transitions.
- [ ] No temporary fixture, local seed, browser cache or uncommitted state is
  necessary for final hand-off evidence.
- [ ] Founder-visible proof is scheduled or recorded before a completion claim.
- [ ] The authority named above has accepted, deferred, or superseded each
  non-present CORE item.

## Lightweight form

Record: source/authority; objective; changed or affected requirement IDs;
acceptance evidence; committed revision; budget; and whether a founder-visible
checkpoint is required. If any CORE requirement is unknown, visual, structural,
or founder-authored, stop and complete the full form.
