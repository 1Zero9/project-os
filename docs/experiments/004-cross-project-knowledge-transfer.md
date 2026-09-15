# Experiment 004 — Cross-Project Knowledge Transfer

- **Experiment:** Cross-Project Knowledge Transfer
- **Type:** Protocol Design + Target + Source Selection (Gate 3 complete)
- **Project OS version tested:** v0.1
- **Status:** Target (tally) and source knowledge packet selected, awaiting Gate 4

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

---

## Gate 3 — Source Knowledge Selection

Performed under Section 5 of this protocol. No part of this selection
inspected tally beyond the information already legitimately recorded at
Gate 2 (household expense/subscription/utility tracker; Next.js + Prisma +
PostgreSQL; substantial and active; existing roadmap/ideas/technical
documentation; and the README excerpt read during Gate 2, which also
described an "editorial light-mode" visual identity, passwordless
magic-code authentication, and shared household workspaces/roles). No
tally source code, issues, TODOs, further roadmap content, or
architecture/UI/security/feature detail was inspected during this
selection.

### Source Projects Considered

| Candidate source | What was examined | Outcome |
|---|---|---|
| **LaunchCity** (Experiment 001) | `docs/evidence/001-evidence-log.md` — explicit, evidenced, previously-extracted knowledge items | Used — see selected packet below |
| **Golf Club Tools** (Experiment 003) | `docs/evidence/003-evidence-log.md` — explicit, evidenced knowledge items | Used — see selected packet below |
| **Lastman** (Experiment 002) | `docs/evidence/002-evidence-log.md` — explicit, evidenced knowledge items | Candidate identified, deliberately not used — see Rejected Knowledge |
| Marvin | Top-level structure of `docs/production-readiness.md` and `docs/operations-runbook.md` (headings and content, not code) | Rich, well-evidenced operational knowledge exists, deliberately not drawn from this round — see Rejected Knowledge |
| Runway | Filenames only in `docs/` (`RUNWAY-CONTROLS.md`, `RUNWAY-BRIEF.md`, etc.) | Not examined in enough depth to extract a clean, well-evidenced knowledge item with confidence; excluded on coverage grounds |
| vecta | Filenames only in `docs/` | Same as Runway — not examined in enough depth this round |
| lucy | Filenames only in `docs/` (`ARCHITECTURE.md`, `SECURITY.md`, `DATA_MODEL.md`, etc.) | Same as Runway — not examined in enough depth this round |

LaunchCity, Golf Club Tools, and Lastman were prioritised because their
knowledge has already been extracted, evidenced, and given explicit
provenance through this repository's own experiment evidence logs — the
exact discipline Section 10 of this protocol requires — rather than
requiring fresh extraction from a project not yet examined for this
purpose.

### Candidate Knowledge Items Considered

| Item | Source | Category (Section 5) |
|---|---|---|
| Local vs. remote operational evidence must be distinguished before acting on it | LaunchCity (001), reinforced independently in Golf Club Tools (003) | Reusable knowledge — a verification discipline, not tied to either project's specific tooling |
| Real-browser/runtime validation catches structural bugs invisible to static checks | LaunchCity (001) | Reusable knowledge — a verification discipline |
| Larger autonomous work packets at meaningful decision boundaries outperform fine-grained approval loops | Golf Club Tools (003) | Reusable knowledge — a process/delegation discipline |
| A frozen visual/creative direction can remain textually compliant while perceptually drifting | LaunchCity (001) | Candidate reusable knowledge — **rejected**, see below |
| A missing role guard on a sensitive server action allowed unintended privilege reach | Lastman (002) | Candidate reusable knowledge — **rejected**, see below |
| Production-readiness gates for authentication, rate-limiting, and session handling | Marvin | Candidate reusable knowledge — **rejected**, see below |
| Golf Club Tools' Donabate-specific, question-first MVP scope | Golf Club Tools (003) | Project history / domain-specific — not a candidate; tied to that project's specific product decision |
| LaunchCity's data-model reversal after live API validation | LaunchCity (001) | Implementation-specific detail — not a candidate; tied to a specific external API LaunchCity depended on |
| "Write tests" / "validate input" style general practice | — | Generic advice — not a candidate; provides no meaningful transfer specific to any project |

### Selected Source Knowledge Packet

Three items, from two source projects, forming a coherent packet about
**verifying and structuring work**, deliberately kept process-level rather
than product- or architecture-level:

#### Item 1 — Distinguish local/remote evidence before acting on it

- **Source project:** LaunchCity (Experiment 001), independently
  reinforced in Golf Club Tools (Experiment 003)
- **Source artefact:** `docs/evidence/001-evidence-log.md` — "Local vs.
  remote operational evidence must be distinguished before acting on it";
  reinforced by `docs/evidence/003-evidence-log.md` — "A reported push did
  not initially appear remotely"
- **Original purpose/context:** In LaunchCity, Cloudflare KV tooling
  returned local Miniflare-persisted state when run without an explicit
  "remote" flag; this was mistaken for production state and used to
  justify an unnecessary code change. In Golf Club Tools, a push reported
  as successful did not initially appear in the remote repository until
  checked directly.
- **Knowledge extracted:** Before acting on operational evidence (a
  deployment check, a data read, a push/commit confirmation), confirm it
  reflects the actual target environment rather than a local, cached, or
  merely-reported proxy for it.
- **Why potentially transferable:** The discipline is stated independent
  of either project's specific tooling (Cloudflare Miniflare/KV; a git
  push confirmation) and recurred in two unrelated projects — this is
  repeated, not single-experiment, evidence.
- **Source-specific assumptions that must NOT transfer:** LaunchCity's
  specific tool (Cloudflare KV/Miniflare) and flag behaviour; Golf Club
  Tools' specific push/remote workflow. Tally's actual deployment and
  verification tooling is unknown and must not be assumed to behave like
  either.
- **Confidence in extraction:** High — the lesson is stated explicitly in
  both source evidence logs as a named observation, independent of the
  specific incident used as evidence for it.

#### Item 2 — Real-browser/runtime validation catches what static checks miss

- **Source project:** LaunchCity (Experiment 001)
- **Source artefact:** `docs/evidence/001-evidence-log.md` — "Real-browser
  / runtime validation caught structural bugs invisible to type-check,
  lint and build"
- **Original purpose/context:** Two LaunchCity layout bugs (a flex-wrap
  failure at desktop width; a missing wrapper element in an empty-state
  fallback) were found only by deliberately rendering and forcing
  edge/empty states in a real browser; `tsc`/lint/build gave no signal.
- **Knowledge extracted:** Passing static checks (type-check, lint, build)
  is necessary but not sufficient evidence that a UI is correct;
  deliberately exercising edge and empty states in a real rendered
  browser is a distinct verification step, not a redundant one.
- **Why potentially transferable:** The lesson is about the *limits of
  static verification generally*, not about LaunchCity's specific bugs,
  components, or layout.
- **Source-specific assumptions that must NOT transfer:** LaunchCity's
  specific defects (flex-wrap behaviour, a particular wrapper element) or
  its component structure. Only the higher-level verification practice is
  extracted — not an expectation that Tally has the same bugs.
- **Confidence in extraction:** High — the source evidence log states the
  general observation explicitly, separate from the specific bugs offered
  as evidence for it.

#### Item 3 — Prefer fewer, larger checkpoints at decision boundaries over fine-grained approval loops

- **Source project:** Golf Club Tools (Experiment 003)
- **Source artefact:** `docs/evidence/003-evidence-log.md` — "Larger
  autonomous work packets at meaningful decision boundaries outperformed
  fine-grained approval loops"
- **Original purpose/context:** A fine-grained
  ChatGPT → Steve → local-worker → Steve → ChatGPT approval loop created
  operational friction disproportionate to the value returned per round
  trip; larger autonomous work packets, checked at meaningful decision
  boundaries, worked substantially better across the same project.
- **Knowledge extracted:** When structuring how work is delegated and
  checked, prefer fewer, larger checkpoints placed at meaningful decision
  boundaries over frequent fine-grained approval steps.
- **Why potentially transferable:** This is a working-process lesson about
  checkpoint granularity, independent of Golf Club Tools' domain (golf
  club booking) or its specific multi-hop tool chain.
- **Source-specific assumptions that must NOT transfer:** the specific
  ChatGPT-integration/local-worker relay that produced the friction.
  Tally's actual delegation or review workflow is unknown and must not be
  assumed to resemble Golf Club Tools'.
- **Confidence in extraction:** Medium — clearly stated, but a
  single-experiment process observation rather than a technical or
  product finding; "meaningful decision boundary" is itself flagged as a
  Watch item in Strategic Checkpoint 002, not yet a precisely defined
  concept.

### Rejected Knowledge and Reasons

- **A missing role guard on a sensitive server action allowed unintended
  privilege reach (Lastman, Experiment 002).** This is a strong, real,
  well-evidenced finding with clear provenance. It was deliberately
  **not** selected because its plausible relevance to Tally cannot be
  cleanly separated from Gate 2's legitimate but unavoidable exposure to
  Tally's own "Shared Household Workspaces & Roles" feature. Selecting it
  would create an unacceptable risk of the packet looking chosen to
  address a feature already glimpsed in the target, rather than chosen
  independently. This is a protocol-protective exclusion, not a judgement
  that the knowledge lacks merit.
- **A frozen visual/creative direction can remain textually compliant
  while perceptually drifting (LaunchCity, Experiment 001).** Excluded for
  the same reason: Tally's Gate 2 README excerpt described it as an
  "editorial light-mode" application, and this item's relevance is
  specifically about visual/creative-direction fidelity. Excluded to avoid
  the appearance of a source item chosen because of a visual-identity
  detail already visible from Gate 2.
- **Production-readiness gates for authentication, rate-limiting, and
  session handling (Marvin).** Marvin's `docs/production-readiness.md` and
  `docs/operations-runbook.md` contain detailed, mature, well-evidenced
  operational practice on the same technology stack as Tally
  (Next.js/Prisma/Postgres). Excluded because its content — authentication
  hardening, rate limiting, session handling — overlaps closely with
  authentication/session details already visible in Tally's Gate 2 README
  excerpt (passwordless magic-code authentication, PostgreSQL session
  management). Using it would create the same appearance-of-targeting risk
  as the two items above.
- **Golf Club Tools' Donabate-specific, question-first MVP scope.**
  Classified as project history / domain-specific decision, not
  transferable knowledge — it is a specific product-scope decision tied to
  that project's own circumstances, not a generalisable lesson.
- **LaunchCity's data-model reversal after live API validation.**
  Classified as implementation-specific detail — the lesson is tightly
  coupled to a specific external API LaunchCity depended on; the general
  form of the lesson ("validate assumptions against real varied data") was
  judged too close to generic advice to add distinct value as a discrete
  transfer item on top of Items 1 and 2 above, which already cover
  verification discipline.
- **Generic practice statements** (e.g. "write tests," "validate input")
  were not treated as candidates at all — Section 5 of this protocol
  explicitly excludes generic advice with no meaningful project-specific
  transfer value, regardless of how correct the advice is.

### Contamination Boundary

Explicitly **not** being transferred into Tally:

- LaunchCity's Cloudflare/Miniflare-specific tooling, its KV data model,
  or any of its domain content (a city/local-data application)
- LaunchCity's specific UI defects, component names, or layout structure
- Golf Club Tools' domain (golf club booking/competition management),
  branding, or feature requirements
- Golf Club Tools' specific ChatGPT-integration/local-worker approval-chain
  tooling
- Any assumption that Tally's actual verification tooling, deployment
  process, or delegation/review workflow resembles either source
  project's
- Any inference about Tally's architecture, authentication implementation,
  UI framework specifics, or feature set beyond what Gate 2 already
  legitimately recorded — this packet was not chosen to address, and
  should not be read as addressing, any such detail
- Lastman's and Marvin's rejected items above are excluded in full,
  including any partial or adapted form of them

### Known Limitations / Biases

- The candidate pool was effectively limited to this repository's own
  three completed Project OS experiments, plus a brief structural glance
  at four other mature repositories (Marvin, Runway, vecta, lucy). The
  latter three were not examined in enough depth to extract a
  well-evidenced knowledge item with confidence, so nothing was drawn from
  them this round — a coverage limitation, not a finding that they lack
  useful knowledge.
- Two strong, well-evidenced candidates (Lastman's role-guard finding;
  LaunchCity's visual-drift finding) and one rich candidate source
  (Marvin's production-readiness/operations documentation) were
  deliberately excluded specifically because Gate 2's legitimate exposure
  to Tally's README made their relevance impossible to cleanly separate
  from target knowledge. This is a conservative, protocol-protective
  choice. It may have excluded genuinely transferable knowledge out of
  caution, and it means the selected packet is weighted toward
  process/verification discipline rather than product or architecture
  knowledge — a consequence of contamination avoidance, not a claim that
  process knowledge is the only valid transfer category.
- Item 3's underlying concept ("meaningful decision boundary") is itself
  an unresolved Watch item from Strategic Checkpoint 002; using it as
  transferred knowledge does not resolve that ambiguity, and the
  knowledge-assisted work packet (Gate 5) should not assume the concept is
  more precisely defined than it currently is.

### Invalidation Check

- Was tally inspected for weaknesses after Gate 2? **No** — only the
  information already recorded at Gate 2 was referenced.
- Was source knowledge chosen to solve a discovered tally problem? **No**
  — the selected packet is process/verification discipline, deliberately
  kept independent of tally's specific features. Two knowledge items and
  one source project were explicitly excluded, rather than adapted or
  softened, because their relevance could not be cleanly separated from
  Gate 2 information — the conservative direction (exclude), not the
  permissive one (use anyway), was taken in every ambiguous case.
- Were evaluation criteria changed? **No** — Sections 1–14 of this
  document are unmodified by this update.
- Was source knowledge selected after seeing baseline output? **No** — no
  baseline has been produced.
- Was Project OS v0.1 modified to accommodate the experiment? **No.**

No contamination condition was found. The experiment proceeds to Gate 4
only in a subsequent, separate task.

### Confirmation

- tally was not inspected beyond the information already legitimately
  recorded at Gate 2.
- The tally baseline has not been performed and has not started.
- No tally files were modified.
- Project OS v0.1 remains FROZEN; no framework file was modified in
  performing this selection.

## Status at Gate 3

Source knowledge selected: three items (two from LaunchCity/Experiment
001, one from Golf Club Tools/Experiment 003), recorded above with full
provenance. Gate 4 (baseline) has not begun.
