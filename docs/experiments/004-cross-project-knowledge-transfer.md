# Experiment 004 — Cross-Project Knowledge Transfer

- **Experiment:** Cross-Project Knowledge Transfer
- **Type:** Protocol Design + Target Selection (Gate 2 complete — source not yet selected)
- **Project OS version tested:** v0.1
- **Status:** Target selected (tally), awaiting Gate 3

## Experiment Question

Can relevant knowledge generated in one completed project materially
improve work in a different project, without importing irrelevant history
or assumptions from the source project?

This document defines the protocol only. It does not select a target
project, a source project, or any source knowledge. Those selections
happen at later gates, under the rules defined here, and are recorded in
later revisions of this document or in its evidence log.

---

## 1. Purpose and Hypothesis

### Primary Hypothesis

Relevant knowledge captured from one completed project can be selectively
applied to a materially different project and produce better-informed
decisions, fewer avoidable mistakes, or reduced uncertainty than the
target project would achieve using only its own legitimate context —
without requiring the target project to import the source project's
irrelevant history, terminology, or assumptions.

### Null / Failure Hypothesis

Knowledge transferred from a different project either:

- provides no material benefit over working from the target project's own
  context alone, or
- provides some apparent benefit but does so by importing unjustified
  assumptions, irrelevant constraints, or false confidence that a
  reviewer would classify as contamination, such that the net effect is
  neutral or negative once contamination is accounted for.

### What a Meaningful Improvement Would Look Like

A meaningful improvement is not "the knowledge-assisted version look
different." It must show at least one of:

- a decision made with materially better justification than the baseline
  could produce on its own,
- a mistake, wrong assumption, or dead end demonstrably avoided that the
  baseline packet actually made or was heading toward,
- a real reduction in a named uncertainty from the baseline's own gap
  list, traceable to a specific transferred item, or
- materially less effort or rework to reach an equivalent or better
  outcome.

An improvement that cannot be traced to a specific transferred item, or
that could equally have been produced by generic domain knowledge
available without any cross-project transfer, does not count.

---

## 2. Definitions

**Source project** — the completed (or substantially completed) project
from which knowledge is drawn. Selected under Section 5, after the target
is selected and the baseline protocol is locked.

**Target project** — the project in which knowledge-assisted work is
performed and compared against baseline work. Selected under Section 4,
before any source knowledge is chosen.

**Transferable knowledge** — a discrete, nameable piece of learning from
the source project that is not inherently tied to the source project's
specific implementation, and that a reasonable practitioner could apply
to an unrelated project without first needing the source project's full
history. Examples of the shape (not predetermined content): a decision
pattern, a failure mode and its cause, a rejected approach and why it was
rejected, a validated technique, a risk category and how it was detected.

**Project-specific history/context** — information that only makes sense,
or is only true, because of the source project's particular
implementation, stack, timeline, personnel, naming, or circumstances. This
is not transferable by default. Examples: a specific file path, a specific
vendor choice made for reasons unrelated to the target project, a
source-project-only naming convention, a decision made under source-project
constraints that do not apply to the target.

**Relevant knowledge** — transferable knowledge that plausibly bears on a
decision, risk, or gap already present in the target project's baseline
work. Relevance is judged against the target's actual baseline, not
against superficial topical similarity to the source project.

**Contamination** — any case where transferred material:

- is treated as true or applicable in the target without independent
  justification,
- imports a source-specific constraint, assumption, or convention that
  does not hold in the target,
- displaces the target's own evidence with source-project precedent that
  was never verified against the target, or
- creates false confidence — the appearance of a well-supported decision
  that is actually resting on unverified imported material.

Contamination can occur even when the transferred knowledge is accurate
in its original context. Accuracy in the source does not imply
applicability in the target.

**Material improvement** — an improvement (per Section 1) that survives
the contamination test in Section 9. An apparent improvement that is
actually contamination is not a material improvement.

---

## 3. Experiment Order

The experiment is locked to this sequence and this sequence only:

```
Protocol
→ Target selection
→ Source knowledge selection
→ Baseline
→ Knowledge-assisted work
→ Comparison
→ Classification
```

**Why this order, and why deviating from it would weaken the evidence:**

- **Protocol before target**: if the target is chosen first, the protocol
  can be quietly shaped around whichever target makes a positive result
  likely. Locking the protocol first removes that degree of freedom.
- **Target before source**: if source knowledge is chosen first, the
  target can be selected (or the experiment abandoned and re-run) until a
  target is found where that specific knowledge happens to look
  transferable. Locking the target first, on criteria that do not
  reference any candidate source knowledge, removes that degree of
  freedom.
- **Source selection before baseline**: this is the one departure worth
  explaining directly. Source knowledge must be selected and its
  provenance recorded *before* the baseline is produced, specifically so
  that source selection cannot be reverse-engineered from baseline
  weaknesses (see Section 12). The source is chosen blind to what the
  baseline will actually struggle with.
- **Baseline before knowledge-assisted work**: without an independent
  baseline produced from the target's own legitimate context only, there
  is no non-contaminated point of comparison. If knowledge-assisted work
  is produced first, the "baseline" can never be a clean control — the
  assessor already knows what the transferred knowledge suggested.
- **Comparison before classification**: classification (Section 11) must
  be applied to a comparison that already exists in full, not decided
  first and then justified by selectively reading the comparison.

Any reordering of these steps is treated as an invalidation event under
Section 12, not a minor protocol adjustment.

---

## 4. Target Selection Protocol

The target project is selected using criteria that do not reference or
depend on any candidate source knowledge. At the time of target selection,
no source project or source knowledge has been reviewed for this
experiment.

**Objective criteria for target selection (recorded at Gate 2):**

1. The target must be a real, currently active or about-to-start piece of
   project work — not a fabricated or synthetic scenario constructed for
   the experiment.
2. The target must have a genuine, substantial piece of work available to
   serve as the baseline work packet (Section 6) — not a trivial or
   contrived task.
3. The target must be materially different from any project likely to
   supply source knowledge — different domain, different core problem, or
   different stage of development — so that a positive result cannot be
   explained by the two projects being near-duplicates of each other.
4. The target must be selected without first surveying candidate source
   projects to see which pairing looks most likely to succeed.

**Required rationale record at Gate 2**, before any source knowledge is
chosen:

- what the target project is and why it qualifies under criteria 1–3
  above,
- what the baseline work packet will be and why it is substantial and
  genuine,
- confirmation that no source project or source knowledge had been
  reviewed prior to this selection,
- confirmation that the target was not chosen because a convenient piece
  of transferable knowledge was already known to exist for it.

If any of these confirmations cannot be made honestly, the target
selection is invalid and must be redone or the experiment must record that
invalidation openly rather than proceeding.

---

## 5. Source Knowledge Selection Protocol

Source knowledge is selected only after the target is locked (Section 4)
and only from a project that has already been completed or substantially
concluded, so its knowledge is not still shifting.

**The protocol must distinguish:**

- **Reusable knowledge** — a named decision, pattern, failure mode, risk,
  or rejected approach from the source project, stated in a form that
  does not require the target to know the source project's specific
  implementation to understand or apply it.
- **Copied project history** — narrative account of what happened in the
  source project. Not transferable on its own; only the extracted lesson
  is a candidate.
- **Implementation-specific detail** — a specific technology choice, file
  structure, naming convention, or code pattern tied to the source
  project's own stack or constraints. Not transferable unless the target
  independently shares that exact constraint, and if so, this must be
  justified explicitly rather than assumed.
- **Assumptions** — anything the source project treated as true without
  independent verification in the source project itself. These must not
  be transferred as if they were verified facts; they may only be
  transferred labelled as assumptions requiring the target to verify
  independently.
- **Incidental similarity** — surface-level resemblance between source and
  target (similar domain words, similar-sounding features) that does not
  correspond to an actual shared decision, risk, or constraint. Must be
  identified and excluded, not treated as grounds for transfer.
- **Generic advice** — knowledge so general it provides no meaningful
  transfer specific to this pairing (e.g. "write tests," "validate user
  input"). Must be excluded; it cannot be credited as evidence of
  cross-project compounding because it did not require the source project
  to exist.

**Required provenance record at Gate 3**, before the baseline work packet
is produced:

For each candidate item of source knowledge:

- what it is, stated independent of source-project-specific detail,
- where it came from in the source project (decision record, evidence
  log, learning record, incident, etc.),
- why it is classified as reusable knowledge and not one of the excluded
  categories above,
- an explicit statement that this item was selected without first seeing
  the target's baseline work packet.

Source knowledge selected after the baseline has been produced, or
selected with visibility into the baseline's gaps, invalidates the
experiment (Section 12).

---

## 6. Baseline Work Packet

The baseline is a substantial, meaningful piece of target-project work,
completed using only legitimate target-project context: the target
project's own history, documentation, current state, and any Project OS
artefacts already local to it. No source-project material is consulted,
referenced, or held in mind while producing the baseline.

**Recorded for the baseline:**

- **Available context** — exactly what target-project material was
  consulted (files, prior decisions, prior conversations legitimately
  part of the target).
- **Decisions** — the decisions actually made in completing the work.
- **Assumptions** — anything treated as true without direct verification
  within the target.
- **Gaps** — named uncertainties, open questions, or missing information
  the baseline could not resolve on its own.
- **Output** — the actual work product (a decision, a design, an
  implementation, a document — whatever the work packet calls for).
- **Effort** — a reasonable account of what it took to produce (time,
  iterations, false starts), to the extent this can be observed without
  turning the experiment into a time-and-motion study.
- **Uncertainty** — an explicit list of what the baseline itself flags as
  unresolved or low-confidence.

This record is completed and frozen (Gate 4) before knowledge-assisted
work begins. It is not revised after seeing the source knowledge.

---

## 7. Knowledge-Assisted Work Packet

The same work packet as the baseline is then attempted again, this time
with the predetermined source knowledge (locked at Gate 3) available to
consult.

For each significant transferred item, record one of:

- **Accepted** — used as-is because it directly and correctly applied to
  the target; state why it was applicable and what evidence confirmed
  that (rather than assuming it).
- **Adapted** — used only after modification, because the source form
  did not directly fit the target; state what was changed and why.
- **Rejected** — considered but not used, because it did not apply, was
  contradicted by target-project evidence, or was identified as one of
  the excluded categories in Section 5 despite initially looking
  relevant; state why.

Every accepted or adapted item must be traceable to a specific change in
the resulting decisions, assumptions, gaps, or output relative to the
baseline. An item that was "accepted" but produced no traceable
difference should be recorded as such — it is not evidence of transfer
value.

---

## 8. Comparison Criteria

Compare the baseline and knowledge-assisted packets across:

- **Decision quality** — were decisions better justified, not merely
  different?
- **Completeness** — did the knowledge-assisted version address gaps the
  baseline could not close?
- **Useful new insight** — did the target gain understanding it did not
  have and could not easily have derived on its own?
- **Avoided mistakes / rework** — did the transferred knowledge prevent a
  mistake the baseline was actually making or heading toward (not a
  hypothetical mistake)?
- **Reduction in uncertainty** — do specific items from the baseline's own
  uncertainty list get resolved, and by which transferred item?
- **Effort / time**, where reasonably observable — did knowledge
  assistance change the effort required, in either direction?

Not every measure is required to improve. A result that improves some
measures, leaves others unchanged, and worsens none is still meaningful
evidence. A result that improves some measures while introducing
contamination elsewhere must be reported as mixed, not rounded up to a
clean success.

---

## 9. Contamination Test

Applied deliberately, not only when something looks wrong. For the
knowledge-assisted packet, explicitly check for:

- **Incorrect assumptions imported from the source** — any target
  decision resting on a source-project assumption that was never
  verified against the target.
- **Irrelevant source context influencing the work** — source material
  that shaped the output despite not being genuinely relevant to the
  target's actual decision or gap.
- **Source-specific constraints incorrectly applied** — a constraint that
  held in the source for reasons that do not exist in the target, applied
  anyway.
- **Terminology or architecture leaking in without justification** —
  source-project vocabulary, structure, or design choices appearing in
  the target output without an explicit reason tied to the target's own
  needs.
- **False confidence** — any case where the presence of apparently
  relevant prior knowledge made a decision look more validated than the
  actual evidence supports.

This test must be applied even where the overall comparison in Section 8
looks favourable. Transferred knowledge is allowed to have negative value,
and a positive-looking outcome that fails this test is not a clean
positive result.

---

## 10. Evidence Requirements

The experiment's evidence log must let another reviewer reconstruct,
without needing to have watched the work happen:

- what the baseline packet knew, decided, assumed, and left open,
- exactly what knowledge was introduced for the knowledge-assisted
  packet, and its recorded provenance from Section 5,
- what changed between baseline and knowledge-assisted output,
- why each change happened — traced to a specific accepted or adapted
  item, not asserted in general terms,
- whether each change was beneficial, neutral, or harmful, per Section 8,
- whether contamination occurred, per Section 9, and if so, of which
  type and how it was identified.

Anything that cannot be traced this way should not be counted as evidence
of transfer, in either direction.

---

## 11. Classification Rules

Predefined before any target or source is selected, and not adjusted
after seeing results (see Section 12).

### SUPPORTED

- At least one material improvement (Section 1, surviving Section 9) is
  demonstrated and traceable to specific transferred knowledge, **and**
- no significant contamination is found, **or** any contamination found
  is minor, was caught during the work itself, and did not materially
  affect the output.

### PARTIALLY SUPPORTED

- At least one material improvement is demonstrated and traceable, **but**
  contamination of at least moderate significance is also found (an
  imported assumption, constraint, or false confidence that materially
  shaped part of the output and was not self-corrected during the work),
  **or**
- The result is mixed in a way that does not cleanly satisfy either
  SUPPORTED or NOT SUPPORTED — for example, real reduction in uncertainty
  on some items alongside no traceable benefit on others, with no
  significant contamination either way.

A transfer that improves some work but introduces significant unjustified
assumptions is classified PARTIALLY SUPPORTED, at best — never
SUPPORTED, regardless of how large the improvement looks.

### NOT SUPPORTED

- No material improvement is demonstrated and traceable to specific
  transferred knowledge, **or**
- Any improvement found is fully explained by contamination (false
  confidence, imported assumptions, or irrelevant context) rather than by
  genuine relevant transfer, **or**
- Significant contamination occurred and produced a net-negative or
  net-neutral outcome relative to the baseline.

---

## 12. Stopping / Invalidation Conditions

Any of the following invalidates the experiment, or the specific gate at
which it occurred, and must be recorded openly rather than concealed or
quietly redone:

- **Target or source cherry-picking** — selecting or reselecting a target
  or source because a preliminary look suggested a favourable result.
- **Changing evaluation criteria after seeing results** — any edit to
  Sections 8, 9, or 11 made after the baseline or knowledge-assisted
  packet exists.
- **Baseline contamination** — any source-project material, even
  incidental or half-remembered, influencing the baseline packet.
- **Source knowledge selected after seeing baseline weaknesses** — source
  knowledge chosen or swapped once the baseline's gaps or mistakes are
  already known.
- **Reordering Section 3's sequence** for convenience.
- **Modifying Project OS v0.1 to accommodate the experiment during
  execution** — see Section 14.

If an invalidation condition occurs, the correct response is to record it
as evidence of experiment integrity failure at that gate, not to silently
patch around it and continue as though the run were clean.

---

## 13. Decision Gates

Gates are the only interruption points. No fine-grained approval loop is
used between them — this design choice is itself informed by Experiment
003's evidence that fine-grained approval loops created disproportionate
friction relative to fewer, larger checkpoints at meaningful boundaries.

- **Gate 1 — Protocol locked.** This document. Reached at the point this
  file is committed.
- **Gate 2 — Target selected and rationale recorded.** Section 4's
  rationale is recorded before any source project is reviewed.
- **Gate 3 — Source knowledge selected and provenance recorded.**
  Section 5's provenance record is complete before the baseline is
  produced.
- **Gate 4 — Baseline complete.** Section 6's record is frozen before any
  source knowledge is consulted in producing the target's work.
- **Gate 5 — Transfer work complete.** Section 7's record is complete,
  including every accepted/adapted/rejected item.
- **Gate 6 — Evidence reviewed and experiment classified.** Sections 8–11
  are applied to the completed record and a classification is assigned.

This document ends at **Gate 1**. Gate 2 is explicitly not started here.

---

## 14. Framework Freeze

Project OS v0.1 remains **FROZEN** for the entire duration of Experiment
004, across all six gates.

Anything this experiment discovers about, including but not limited to:

- how to classify knowledge (transferable vs. project-specific vs.
  assumption vs. incidental similarity vs. generic advice),
- what provenance a piece of transferred knowledge requires,
- what mechanism moved knowledge from source to target,
- how relevance should be scored or judged,
- what contamination controls actually worked or failed,

is recorded only as evidence, observation, a watch item, or a future
promotion candidate — following the same discipline used in Strategic
Checkpoint 002. None of it is incorporated into `PRINCIPLES.md`,
`templates/PROJECT-OS.md`, or any other v0.1 framework file during
Experiment 004. Any future framework change remains a separate,
subsequent decision, made only after this experiment closes.

---

## Gate 2 — Target Project Selection

Performed under Section 4 of this protocol. No source project or source
knowledge was reviewed, searched for, or considered at any point during
this selection. Only information needed to assess Section 4's criteria was
examined for each candidate (repository activity, commit history, and
top-level documentation/README describing what the project is).

### Candidates Considered

All candidates were drawn from the set of Steve's existing repositories
(local checkouts under `~/Projects`, cross-referenced against
`gh repo list 1Zero9`). Repositories already used as Project OS experiment
subjects (LaunchCity, Lastman, Golf Club Tools) and the Project OS
repository itself were excluded from consideration outright, since using
one of them as the Experiment 004 target would not constitute a genuinely
independent cross-project test.

| Candidate | Last commit (relative to 2026-09-15) | Commit count | Existing context | Notes |
|---|---|---|---|---|
| **tally** | 2026-09-10 (5 days) | 227 | `AGENTS.md`, `CLAUDE.md`, `README.md`, `docs/` (user-guide, technical-overview, roadmap, ideas, reviews) | Household expense/subscription/utility tracker. Next.js + Prisma + PostgreSQL. Large, mature, actively worked commit history. |
| vecta | 2026-09-03 (12 days) | 30 | `AGENTS.md`, `CLAUDE.md`, `README.md`, `docs/`, `e2e/` | Recruitment workspace product. Real and active, but a smaller commit history than tally. |
| lucy | 2026-09-12 (3 days) | 30 | `AGENTS.md`, multiple planning docs (`BUILD_PLAN.md`, `MASTER.md`), `docs/` | Learning/notes workspace. Most recent single commit of any candidate, but a shorter overall history than tally. |
| Marvin | 2026-08-05 (41 days) | 135 | `AGENTS.md`, `CLAUDE.md`, `docs/`, release tagged v1.0.0 | Household cooking/meal-planning app. Substantial and mature, but least recently active of the strong candidates. |
| Runway | 2026-06-14 (93 days) | 87 | `README.md`, `docs/` | Ireland watch/release planner. Substantial but stale relative to today's date. |
| life-admin-system | 2026-01-11 (247 days) | 26 | Multiple docs, but mixed Python/Next.js state | Long dormant; not clearly "currently active or about-to-start." |
| Bookworm | 2026-05-27 (111 days) | 22 | `README.md`, release notes | Native Swift app; smaller history, stale relative to today. |
| WinstonOnLine | 2026-09-07 (8 days) | 4 | `README.md` only | Recently active but only 4 commits — too early to supply a substantial baseline work packet. |
| Vision | n/a | 0 (no git history found) | `README.md` | No usable commit history; cannot assess development stage. |
| OCTO Objectives | n/a | no git repository | Various docs/scripts | Not under version control; state and history cannot be reliably assessed. |
| PRODUCT-DESIGN-DIRECTOR | n/a | no git repository | Two markdown files only | Not a project in the sense the protocol requires (no code, no application). |
| Technics | n/a | no git repository | Minimal scaffold | No meaningful existing state to assess. |
| homealone | n/a | no git repository | Empty | No usable content. |

### Selection Criteria Applied (Section 4)

1. Real, currently active or about-to-start project work — not fabricated.
2. A genuine, substantial baseline work packet must plausibly exist —
   not a trivial or contrived task.
3. Materially different in domain, core problem, and stage from any
   project already used as a Project OS experiment subject.
4. Not selected by first surveying candidate source projects for a
   favourable pairing.

### Selected Target

**tally**

### Reason for Selection

- **Criterion 1 (real, active):** tally has the most recent substantial
  commit activity of any strong candidate (last commit 2026-09-10, five
  days before this selection) and by far the largest commit history (227
  commits), indicating genuinely ongoing, non-trivial work rather than an
  abandoned or barely-started repository.
- **Criterion 2 (substantial baseline possible):** tally has a real
  production-shaped application (Next.js, TypeScript, PostgreSQL/Prisma),
  an existing `docs/roadmap.md` and `docs/ideas.md`, and a technical
  overview document — sufficient material for a genuine, non-contrived
  piece of target-project work at Gate 4.
- **Criterion 3 (materially different / independent):** tally is a
  household expense, subscription, and utility tracking application. This
  domain and problem shape has no overlap with any project already used
  as a Project OS experiment subject (a city/data app, a fundraiser
  competition app, and a golf club MVP), satisfying the independence
  requirement without needing to know anything about candidate source
  knowledge.
- **Criterion 4 (not paired to a convenient source):** selection was made
  using only the table above — repository activity and top-level
  documentation. No source project, no source repository, and no
  candidate reusable knowledge was reviewed, searched for, or considered
  at any point before or during this selection.

### Rejected Candidates and Reasons

- **vecta, lucy** — both real, active, and independent, but each has a
  shorter overall commit history (30 commits each) than tally, making
  tally the stronger candidate under Criterion 2 (more substantial
  existing project state to draw a genuine baseline task from). Either
  would have been an acceptable candidate on independence grounds alone;
  they were not chosen because a stronger candidate existed on the
  activity/substance criteria, not because of anything related to source
  knowledge.
- **Marvin, Runway** — both substantial and independent, but both are
  materially less recently active than tally, weakening Criterion 1
  ("currently active or about-to-start").
- **life-admin-system, Bookworm** — both long dormant relative to the
  current date; fail Criterion 1.
- **WinstonOnLine** — recently active but only 4 commits; too early in
  its life to support a substantial baseline work packet (Criterion 2).
- **Vision, OCTO Objectives, PRODUCT-DESIGN-DIRECTOR, Technics,
  homealone** — excluded for lack of a usable version-controlled history
  or lack of a real application to assess (Criterion 1/2 cannot be
  evaluated with confidence).
- **LaunchCity, Lastman, Golf Club Tools, Project-OS** — excluded outright
  as already-used Project OS experiment subjects; using any of them as
  the Experiment 004 target would not constitute an independent
  cross-project test (Criterion 3).

### Known Limitations / Biases

- The candidate pool was limited to Steve's own existing repositories.
  This is consistent with Project OS's scope (a personal AI-native
  development environment) but means the target was not drawn from a
  wider, unbiased population of possible projects.
- Recency and commit-count were used as the primary proxies for "real and
  substantial." These are reasonable but imperfect proxies — a project
  could have a long commit history without much remaining meaningful work,
  or a short history while still being substantial. This limitation is
  recorded rather than resolved, since resolving it would require deeper
  inspection that risks drifting toward evaluating source-knowledge
  suitability.
- Steve's own familiarity with all candidate repositories, including
  tally, cannot be fully separated from this selection. The selection
  record above is deliberately criteria-first and table-based specifically
  to make that reasoning auditable, but full elimination of assessor
  familiarity is not claimed.

### Confirmation

- No source project was reviewed, searched for, or selected during this
  selection.
- No source knowledge was inspected, searched for, or considered during
  this selection.
- The target was not chosen because a convenient piece of transferable
  knowledge was already known to exist for it — no such knowledge was
  looked for.

## Status at Gate 2

Target selected: **tally**. Rationale recorded above per Section 4.

Source project and source knowledge remain unselected. Gate 3 has not
begun. The baseline work packet (Gate 4) has not been defined or started.
Project OS v0.1 remains FROZEN; no framework file was modified in
performing this selection.
