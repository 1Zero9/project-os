# Delivery Learning 002 — Decision Authority Before Decision Preservation

Document status:

- Type: Founder-direction delivery learning
- Source projects: Golf Club Tools and LaunchCity
- Date: 16 September 2026
- Framework status: Candidate learning (v0.2 candidate only)
- Evidence classification: Observed delivery evidence, distinguished from inference below
- Project OS v0.1 effect: None
- Promotion status: Not promoted
- Precedes: [`DELIVERY-LEARNING-001.md`](DELIVERY-LEARNING-001.md) (Stand-Back Review & Assumption Challenge), which this document extends rather than replaces

---

## 1. Executive finding

Project OS v0.1 was effective at preserving and enforcing documented decisions
once they existed. `DELIVERY-LEARNING-001` recorded this directly: inherited
decisions were listed, momentum was preserved, and once something was written
down it tended to stay respected across subsequent work.

What Project OS did not reliably establish was whether a documented decision:

- came from the founder;
- came from an approved product specification;
- was a temporary experiment;
- was an implementation choice;
- was an assistant interpretation; or
- was an assumption inferred from the repository.

`DELIVERY-LEARNING-001` named the symptom — "already decided" was treated too
easily as "previously validated." This document names the underlying gap:
Project OS v0.1 has no mechanism for distinguishing *who or what* produced a
decision, and therefore no mechanism for weighting how much authority that
decision should carry.

Stated plainly, for the framework to act on:

> Implementation does not prove approval.
> Repeated documentation does not prove approval.
> A decision must not become more authoritative merely because it has been
> repeated, implemented, or labelled "approved" without evidence of an
> approval event.

---

## 2. Evidence from the exercises

### Golf Club Tools

Delivery work began before confirming:

- whether Donabate Golf Club wanted the product;
- whether 1Zero9 had authority to act for the club;
- whether the required club-specific data was available;
- whether there was a legitimate route to release.

This is recorded evidence, already established in `DELIVERY-LEARNING-001`
Sections 1–2 and 5: the authority problem was discovered only after a
technical review and pre-mortem had been completed, and after a delivery
baseline had been created. The system correctly recognised the problem once
it stood back — but the standing-back happened after implementation-adjacent
work had already started, not before.

### LaunchCity

Directly observed and previously documented (`DELIVERY-LEARNING-001`,
Sections 1, 3, 5):

- the existing Cloudflare architecture and 15-minute refresh cadence were
  initially inherited and accepted rather than challenged;
- a production 429 was diagnosed and patched with a retry, deployed, and
  followed by a proposed 24-hour observation window, before the platform
  decision itself was reopened;
- no broader platform comparison had been performed at the point Cloudflare
  was adopted (it was selected after a Vercel Hobby Cron limitation was
  encountered, per `DELIVERY-LEARNING-001` Section 3).

Newly relevant to this document, reported as evidence supplied for this
task and not independently re-verified against the LaunchCity repository in
this session:

- imagery originally formed part of LaunchCity's product concepts;
- imagery was removed at some point to test a visual direction (an
  experiment);
- that experiment was subsequently documented within the LaunchCity
  repository and treated as an approved, permanent image-free direction;
- no founder approval event for permanent image removal is recorded as
  having existed in the repository at the time it was treated as permanent;
- of the eight most recent LaunchCity commits prior to this task, seven
  became infrastructure or reliability work, while the intended product
  experience remained incomplete;
- the founder subsequently corrected the direction in LaunchCity commit
  `7e85dae3b35555c0ca1ed1b7e0a0d964fb235ff4` ("docs: record LaunchCity
  founder product direction"), which marked the image-free interpretation
  SUPERSEDED, confirmed The Horizon as the accepted core experience, and
  set imagery for the dominant launch and Launch Detail to PROVISIONAL,
  pending a visual proof.

**Evidence versus inference, made explicit:**

- Observed directly in this repository: the Cloudflare/cadence inheritance
  pattern and the diagnose-before-reopen sequence (`DELIVERY-LEARNING-001`),
  and the content of LaunchCity commit `7e85dae3b3...` as supplied for this
  task.
- Supplied as evidence for this task but not independently re-inspected in
  the LaunchCity repository during this session: the imagery
  experiment-to-permanent-interpretation sequence, the absence of a founder
  approval event, and the seven-of-eight infrastructure-commit count. These
  are treated here as reported evidence, not as findings this session
  verified first-hand. Any future use of this document for a decision with
  material consequence should re-verify these specific points directly
  against the LaunchCity repository rather than citing this document as the
  primary source.
- Inference, not evidence: that the pattern observed in these two projects
  will recur in other projects. Section 10 states this limitation
  explicitly.

---

## 3. Candidate decision lifecycle

Candidate statuses:

- **IDEA** — proposed but not yet tested.
- **EXPERIMENT** — deliberately being tested; must not be treated as
  permanent.
- **PROVISIONAL** — a promising direction awaiting defined evidence or
  review.
- **ACCEPTED** — explicitly approved by the authorised decision-maker.
- **FROZEN** — accepted and intentionally protected from casual change.
- **SUPERSEDED** — replaced by a later authorised decision.
- **REJECTED** — explicitly declined.
- **UNCLEAR** — status or authority cannot be established from available
  evidence.

**PAUSED** and **DEFERRED** are operational states, not substitutes for
decision authority. A decision can be PAUSED or DEFERRED at any status
level; neither state implies that the underlying status has changed, and
neither should be used as a way to avoid resolving an UNCLEAR status.

**Transition rules:**

- implementation must not automatically change a status;
- assistant-generated documentation must not automatically change a status;
- repetition must not automatically change a status;
- EXPERIMENT to PROVISIONAL requires recorded evidence;
- PROVISIONAL to ACCEPTED requires an explicit approval event;
- ACCEPTED to FROZEN requires an explicit decision to protect the direction;
- a later founder decision can SUPERSEDE an earlier decision without
  deleting its history.

Applied to the evidence in Section 2: LaunchCity's image-free direction
moved from EXPERIMENT to what was treated as FROZEN without passing through
a recorded PROVISIONAL-to-ACCEPTED approval event. Under these candidate
rules, that transition would have been blocked, and the direction would
have remained at most PROVISIONAL until the founder acted — which is what
ultimately happened, later and via correction rather than gate.

---

## 4. Candidate decision record

Proposed fields for a material decision record (v0.2 candidate only; the
v0.1 template is not modified by this document):

- decision;
- current status;
- date;
- proposer;
- authorised decision-maker;
- approval event or source;
- evidence;
- assumptions;
- alternatives considered;
- cost implications;
- reversibility;
- review trigger;
- supersedes / superseded by;
- affected product areas.

This is presented as a v0.2 candidate structure only. `templates/PROJECT-OS.md`
is not modified by this document.

---

## 5. Source-of-truth hierarchy

Proposed hierarchy, highest authority first:

1. current explicit founder or authorised stakeholder decision;
2. recorded decision event with clear authority;
3. direct user or stakeholder evidence;
4. explicitly approved product specification;
5. repository implementation;
6. assistant-generated documentation;
7. inference from incomplete evidence.

Lower-level evidence can describe the current state — what exists, what was
built, what was written down — but it cannot overrule or manufacture a
higher-level product decision. Repository implementation (level 5) and
assistant-generated documentation (level 6) are exactly the two sources that,
per Section 2, produced LaunchCity's unauthorised permanent interpretation:
an experiment was implemented, then documented, and that combination was
treated as though it had reached level 1 or 2 authority without any evidence
of an actual approval event at those levels.

---

## 6. Stand-Back Review additions

These extend the candidate Stand-Back Review defined in
`DELIVERY-LEARNING-001` Section 6. They are additions, not replacements; the
original authority/legitimacy, outcome/user value, assumption inventory,
decision provenance, platform/dependency challenge, cheapest disproof, and
pre-mortem checks remain as written there.

### Decision authority

- Who proposed each material direction?
- Who had authority to approve it?
- Where is the approval event?
- Is the current status supported by evidence?

### Decision hardening

- Did an experiment become a requirement?
- Did implementation become assumed approval?
- Did repeated assistant documentation make an interpretation appear
  settled?
- Is anything described as frozen without a traceable decision event?

### Evidence completeness

- Are relevant mock-ups, images, conversations or earlier specifications
  outside the repository?
- Is missing evidence clearly marked?
- Are we treating the repository as the complete history when it is not?

### Product and infrastructure balance

- What user-visible value is still incomplete?
- How many recent work packages were infrastructure-only?
- Is operational work protecting a proven product, or displacing completion
  of the product?
- Should a founder/product review be triggered before further remediation?

### Cost and proportionality

- What freshness, availability or performance level does the actual product
  require?
- What cost ceiling has the founder set?
- Are we solving beyond that requirement?
- What is the cheapest reversible way to test the assumption?

---

## 7. Candidate intervention triggers

Proposed triggers, not yet promoted, each with a suggested response:

| Trigger | Suggested response |
|---|---|
| No explicit authority or release route | Ask the founder |
| A supposedly frozen decision lacks a traceable approval event | Run a stand-back review |
| An experiment is being described as permanent | Pause; ask the founder |
| Significant original evidence exists outside the repository | Run a stand-back review |
| Three consecutive infrastructure-only work packages | Run a stand-back review |
| More prompts spent on remediation than on user-visible completion | Run a stand-back review |
| A proposed solution introduces paid services before the cost position is confirmed | Ask the founder |
| A dependency or platform was inherited but never comparatively evaluated | Run the cheapest disproof |
| The current work no longer advances the original product specification | Pause; ask the founder |

Any trigger may instead resolve to **explicitly accept the risk**, recorded
as such, when the founder or authorised decision-maker reviews it and
chooses to proceed anyway. Silence or continued momentum is not an accepted
risk.

---

## 8. Prompt and intervention ledger

Programme-level figures at the start of this task:

- prompts issued before this task: 13;
- completed: 12;
- unconfirmed/superseded: 1;
- this task is **Prompt 014**.

Proposed future measurements:

- prompts before first material implementation;
- prompts before first tangible user-visible value;
- prompts spent on rework;
- prompts caused by an untested assumption;
- prompts that changed or corrected a decision;
- documentation-only prompts;
- infrastructure-only work packages;
- founder interventions;
- work avoided because an assumption was challenged early.

These figures are learning signals, not productivity targets. They must not
incentivise rushing, hiding investigation, or reducing necessary founder
involvement. A low prompt count achieved by skipping a stand-back review, or
by not asking the founder when authority was unclear, would be a worse
outcome than a higher prompt count that caught the same problem early.

---

## 9. Candidate Project OS behaviour

A future Project OS project lead should:

- begin with a stand-back review before prescribing work;
- distinguish facts, decisions, assumptions and interpretations;
- trace authority before preserving a decision;
- challenge inherited platforms and dependencies proportionately;
- keep provisional visual/product choices open until reviewed;
- protect frozen decisions once their authority is established;
- monitor whether infrastructure work is overtaking product value;
- bring the founder in when authority, purpose, cost or product direction is
  unclear.

---

## 10. Status and limitations

- These are v0.2 candidates only. Project OS v0.1 remains **FROZEN**;
  `PRINCIPLES.md`, `templates/PROJECT-OS.md`, and existing experiment
  records and evidence logs are unmodified by this document.
- The evidence base is two project exercises (Golf Club Tools, LaunchCity),
  both already partly reflected in `DELIVERY-LEARNING-001`. This is not yet
  proven across a wider portfolio.
- Part of the evidence in Section 2 (the LaunchCity imagery
  experiment-to-permanent sequence, the missing approval event, and the
  infrastructure-commit count) was supplied as input to this task rather
  than independently re-verified against the LaunchCity repository during
  this session. It is recorded as reported evidence, not as directly
  confirmed evidence, and should be re-checked before being relied on for a
  consequential decision.
- The candidate rules in Sections 3–7 should be tested on at least one
  further project before promotion.
- No existing historical record is rewritten by this document. LaunchCity
  commit `7e85dae3b35555c0ca1ed1b7e0a0d964fb235ff4` and the experiment
  history it supersedes remain as recorded in the LaunchCity repository.
