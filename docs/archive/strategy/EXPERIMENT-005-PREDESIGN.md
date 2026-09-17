# Experiment 005 — Pre-Design (Lean Protocol)

- **Date:** 2026-09-15
- **Status:** PRE-DESIGN ONLY — no target, source, or knowledge selected
- **Origin:** Strategic Checkpoint 003 (`docs/strategy/CHECKPOINT-003.md`,
  commit `9254423`), Section 10/13
- **Project OS version:** v0.1 — unmodified by this document
- **Purpose:** Define the minimum experimental controls needed for a
  credible Experiment 005 result, deliberately leaner than Experiment
  004's protocol, decided *before* Experiment 005's Gate 1 is written.

This document does not create Experiment 005. It defines the rules
Experiment 005 must follow once started.

---

## 1. Essential Controls Carried Forward From Experiment 004

Reviewed for necessity, not habit. Each item below was load-bearing to
Experiment 004's classification actually being credible — removing it
would have let the result be gamed or made it unverifiable.

- **Target before source.** Without this, a target could be picked because
  a convenient source was already known. Essential.
- **Source selected before baseline exists.** Without this, source
  knowledge could be reverse-engineered from the baseline's discovered
  weaknesses. This is the control that made Experiment 004's Item
  exclusions (Lastman's role-guard finding, LaunchCity's visual-drift
  finding) credible rather than convenient. Essential.
- **Baseline produced from target-native context only, frozen before
  transfer.** Without an independent baseline, there is no clean
  comparison point. Essential.
- **Predetermined classification criteria, not adjusted after seeing
  results.** Without this, PARTIALLY SUPPORTED could have been quietly
  redefined to look like SUPPORTED. Essential.
- **Contamination check applied deliberately, not only when something
  looks wrong.** This is what let Experiment 004 report NO CONTAMINATION
  with confidence rather than merely asserting it. Essential.
- **Provenance for each transferred item** (where it came from, why it's
  classified as transferable, what must not transfer with it). This is
  what made the counterfactual analysis in Gate 6 possible at all —
  without knowing precisely what was transferred, "was this
  transfer-caused or baseline-caused" cannot be answered. Essential, but
  the *recording format* can shrink (Section 4).
- **Counterfactual discipline** ("would the baseline-selected work
  probably have produced this anyway?"). This is what stopped the
  139→171 test count from being misread as evidence of transfer.
  Essential.

## 2. Ceremony Identified as Removable

Specific, not general — each item names what Experiment 004 actually did
and why it added process cost without adding evidential value.

- **Six separate gates.** Gates 2 and 3 (target selection, source
  selection) each produced their own multi-page rationale section with a
  full "Confirmation" and "Status" block, largely restating the same three
  or four facts (nothing reviewed, nothing chosen for convenience,
  nothing yet started). This did not need to be six gate-shaped documents
  — it needed the *ordering constraint* (target before source before
  baseline before transfer) enforced and *recorded once*, not
  re-confirmed at every step in near-identical prose.
- **Repeated invalidation-condition checklists.** Experiment 004 ran the
  same six-condition invalidation checklist at Gate 3, again at Gate 4/5's
  own documents, and a third time in the Gate 6 evidence log. Three
  passes over the same six conditions, with the same "No" answer each
  time, added length without adding confidence beyond the second pass.
  One running checklist, updated in place, is sufficient.
- **Duplicated information between the experiment document and the
  evidence log.** Section 3 (Target/Source selection) and Section 6
  (implementation summary) of the Gate 6 evidence log substantially
  re-narrate content already fully recorded in the experiment document's
  own Gate 2/3 sections and in the target repository's baseline/transfer
  documents. This is the single largest source of avoidable length.
- **Separate target-repository baseline and transfer documents, in
  addition to the Project-OS evidence log.** Tally ended up with
  `docs/experiment-004-baseline.md` and `docs/experiment-004-transfer.md`
  committed inside Tally itself, then substantially re-summarised again
  in Project-OS's evidence log. Three documents recording largely the
  same facts. Unless a target-repository document captures something that
  genuinely cannot live in Project-OS (e.g. it must be visible to someone
  who will never open the Project-OS repo), this is redundant.
- **Confirmation boilerplate at every gate** ("no source project was
  reviewed," "no framework file was modified," repeated near-verbatim at
  Gates 2, 3, 4, 5, and again in the Gate 6 evidence log, and again in the
  experiment document's closure section). Stating a control was respected
  once, at the point it actually mattered, is sufficient; restating it five
  times does not add evidential weight.
- **Large section counts in the evidence log** (eighteen numbered
  sections in Experiment 004's Gate 6 log, several of which — Sections 3
  and 5 — mostly reproduce material already recorded elsewhere rather than
  adding new analysis). A leaner log can fold provenance, packet
  description, and implementation summary into brief cross-references
  instead of full restatement.
- **A separate commit for the checkpoint-recommended "candidate
  experiment" framing before any real selection work began** — Experiment
  004 didn't do this, but the general pattern of creating a commit
  boundary for a step that produced no new decision or evidence (as
  opposed to one that locks a genuine boundary) is the thing to avoid
  going forward. See Section 5.

**Net assessment:** the *ordering discipline* and the *analytical
disciplines* (contamination check, counterfactual reasoning, provenance)
were essential and produced the credible parts of Experiment 004's result.
The *volume of restated confirmation prose and the number of separately
committed, separately headed gate documents* were what made Experiment
004 heavy. Experiment 005 should keep the former in full and cut the
latter sharply.

---

## 3. Three-Phase Model for Experiment 005

Checkpoint 003's suggested three-phase shape is adopted, with one
adjustment: Phase 1 explicitly locks the *classification criteria* as a
distinct, separately-stated step from the hypothesis, because Experiment
004's evidence shows classification criteria are exactly what must not be
touched after results exist — worth stating on its own line even in a
lean protocol, not folded silently into "hypothesis."

### PHASE 1 — Design + Selection
Locked, in this order, in a single short document section (not five
separate gate documents):
1. Hypothesis and its failure/null form (one paragraph each).
2. Classification criteria for SUPPORTED / PARTIALLY SUPPORTED / NOT
   SUPPORTED (Section 9 below — reused, not redesigned per-experiment).
3. Target selection, using criteria that do not reference any candidate
   source (recorded, not re-justified at length).
4. Independent-source definition applied (Section 7) and the actual
   source selected, before the baseline exists.
5. The bounded product/architecture knowledge packet (Section 8),
   recorded with provenance, before the baseline exists.

One commit closes Phase 1 (see Section 5). This is the only point before
transfer work begins where Steve reviews target + source + packet before
Phase 2 starts (see Section 6).

### PHASE 2 — Baseline + Transfer
Performed as one continuous work session, not two gates:
1. Target-native baseline: current state, a real work packet, decisions,
   assumptions, gaps — recorded concisely, not restated at Section-8
   length.
2. Freeze the baseline (a clear paragraph marking "this was decided
   before the packet was consulted," not a separate multi-page gate
   document).
3. Execute the same work packet with the knowledge packet available.
4. Record ACCEPTED / ADAPTED / REJECTED per item, each with one
   traceable "what changed because of this" line — no per-item essay
   unless the finding is genuinely load-bearing to the classification.

One commit closes Phase 2 (baseline and transfer may be two commits if
the baseline is genuinely reused or referenced independently later; one
combined commit is acceptable if it is not).

### PHASE 3 — Compare + Close
1. Comparison against the predetermined criteria (Section 9) — a table,
   not six independent narrative subsections per criterion.
2. Counterfactual check: for each claimed improvement, would the
   baseline-only work likely have produced it anyway? One paragraph per
   claimed improvement, not a full section.
3. Contamination check against the standing definition (reused from
   Experiment 004's Section 9, not rewritten).
4. Classification, with rationale in one paragraph.
5. The lightweight cost observation (Section 10 below).
6. Closure: one commit.

**Total: three phases, three natural commit points, one experiment
document plus one evidence log** (Section 4). This replaces Experiment
004's six gates and multi-document structure.

---

## 4. Documentation Budget

**Two documents, in the Project-OS repository only:**

1. `docs/experiments/005-<name>.md` — the locked protocol (hypothesis,
   classification criteria, independent-source and knowledge-packet
   definitions, target/source selection record). Written once at Phase 1
   close; appended at Phase 3 close with the final classification and a
   short status line. Not rewritten gate-by-gate.
2. `docs/evidence/005-evidence-log.md` — baseline summary, transfer
   summary, comparison, counterfactual check, contamination result,
   classification rationale, and the cost observation. One document,
   written once at Phase 3, not accumulated as five separate gate
   artefacts.

**No target-repository experiment document**, unless the target
repository needs a record for a reason independent of Project OS (e.g. a
maintainer other than Steve needs to see it, or the work itself — the
actual code change — requires its own commit message, which it will, but
that is not a duplicate experiment document). The actual code
change/commit message in the target repository is sufficient
target-side record; Experiment 004's separate
`experiment-004-baseline.md` / `experiment-004-transfer.md` files inside
Tally added no evidence that the Project-OS evidence log did not already
need to state anyway.

**Target: two documents total, each proportionate to what it records —
not a fixed page count, but each section should earn its place by adding
information the other document does not already contain.**

---

## 5. Commit Budget

Minimum useful commit boundaries — each one marks a genuine evidence
horizon, not a gate for its own sake:

1. **Phase 1 close** (Project-OS repo): protocol + target + source +
   knowledge packet locked. This boundary matters because everything
   after it must be provably consistent with a selection made before the
   target's weaknesses were known — the single most important integrity
   boundary in the whole experiment.
2. **Phase 2 close** (target repo): baseline and knowledge-assisted work
   committed. If the baseline is trivial to distinguish from the
   transfer work in a single commit's diff and message, one commit is
   sufficient — record baseline and transfer as two commits *only
   if* keeping them separable in the target repo's own history has
   independent value (e.g., someone needs to `git diff` the baseline
   against the transfer directly). Otherwise, one target-repo commit
   covering the full Phase 2 work, with a commit message that clearly
   separates baseline decisions from transfer decisions in prose, is
   sufficient.
3. **Phase 3 close** (Project-OS repo): evidence log + classification +
   experiment-document closure, as one commit.

**Three commits minimum, four at most** (if Phase 2's baseline/transfer
split genuinely earns its own boundary). Experiment 004 produced five
gate-boundary commits across two repositories for content that did not
need five separate integrity checkpoints — this budget removes exactly
the two that added a commit without adding a distinct, reusable evidence
horizon (Gate 2's target-selection-alone commit and Gate 3's
source-selection-alone commit are merged into one Phase 1 commit here).

---

## 6. Approval / Stop Boundaries

Exactly two points require Steve's review before continuation. Everything
else proceeds autonomously as one larger work packet, per the lesson
Experiment 003 evidenced and Experiment 004's own Item 3 assessment
(Gate 6) found no cost to applying, only an unproven benefit — meaning
there is no evidence a finer-grained loop would help, and clear evidence
(003) that it would hurt.

1. **End of Phase 1** — target, independent source, and knowledge packet
   are all irreversible selections (Section 12 of Experiment 004's
   protocol treats "reselecting because a preliminary look suggested a
   favourable result" as an invalidation event; the only way to prevent
   that temptation from ever arising is to have Steve review and lock the
   selection *before* any baseline work begins, so there is no baseline
   result yet to be tempted by).
2. **End of Phase 3** — classification and closure. This is where the
   experiment's conclusion becomes a fact other work will cite; it
   deserves review before being treated as closed.

**No approval point is required inside Phase 2.** Baseline production,
work-packet execution, transfer-item disposition, and verification are
routine investigative/implementation work once the Phase 1 boundary is
locked, and should be completed as one continuous pass. If Phase 2
surfaces something that changes the nature of the selections locked at
Phase 1 (a material scope change, a discovered contamination risk, or a
reason the target/source pairing is no longer valid), that is itself a
new stop condition and should interrupt Phase 2 immediately rather than
waiting for Phase 3 — but this is an exception condition, not a scheduled
checkpoint.

---

## 7. Independent Source Definition (Set Before Any Project Is Inspected)

A candidate source project qualifies as **genuinely independent** only if
**all** of the following hold:

1. **Not previously used as a Project OS experiment subject** — LaunchCity,
   Lastman, Golf Club Tools, and Tally are all disqualified, regardless of
   how well-evidenced their prior learnings are, specifically because
   Experiment 004 already tested transfer *from* two of them; a fifth
   experiment repeating that source pool would not test independence, it
   would test the same two sources again.
2. **Developed independently of the target** — no shared codebase,
   template, boilerplate, or direct authorship-driven copying between
   source and target. Coincidental similarity in stack or domain does not
   disqualify a source; a direct lineage (one project forked from or
   scaffolded from the other) does.
3. **Contains genuine, project-generated product or architecture
   knowledge** — a real decision, rejected approach, or discovered
   constraint that arose from that project's own work, not a
   generic best-practice statement that happens to be recorded there.
4. **Sufficient provenance exists** — the knowledge must be traceable to
   a specific artefact (a decision record, a design doc, a commit
   message, a retrospective) in the source project, not reconstructed
   from memory or inferred from the target selector's general familiarity
   with the source.
5. **Not selected because its known features conveniently match the
   target** — source selection must occur either (a) before the target's
   specific gaps are known in any detail beyond what target selection
   itself legitimately reveals, or (b) using a source-selection method
   that does not require or reward matching the source to the target's
   known weaknesses. This is the same discipline Experiment 004's Gate 3
   already applied (excluding candidates whose relevance couldn't be
   cleanly separated from target-visible information) and it carries
   forward unchanged.

A candidate that fails any one of these five is not independent for the
purposes of Experiment 005, regardless of how strong its evidence would
otherwise be.

---

## 8. Product / Architecture Knowledge Definition (Set Before Any Selection)

**Qualifies as transferable product/architecture knowledge:**

- An architecture decision and its rationale (why a boundary, layer, or
  component structure was chosen, stated independent of the source's
  specific tech names where possible).
- A data-model lesson (a modelling choice that was revised after contact
  with real usage or real data, and why).
- An API boundary decision (what should and should not cross a service or
  module boundary, and the failure mode avoided by that boundary).
- An authentication/session architecture lesson (a structural choice about
  how identity or session state is established, not a specific library or
  vendor).
- A storage strategy decision (why a particular persistence or caching
  approach was chosen or rejected, and the consequence that drove it).
- A component/system decomposition lesson (how a monolith-vs-modules
  boundary was drawn, and what problem that solved or caused).
- A failure/recovery architecture lesson (how a system detects, contains,
  or recovers from a specific class of failure).
- A product interaction model with implementation consequences (a UX or
  product-flow decision that had a structural, not merely cosmetic,
  implementation effect).

**Excluded, same as Experiment 004's Section 5 categories, restated for
this experiment:**

- Generic software advice ("validate input," "write tests").
- Pure process discipline (the category Experiment 004 was restricted
  to — explicitly out of scope this time, since the point of Experiment
  005 is to test the category Experiment 004 could not).
- Branding, visual style, or creative direction detail.
- Copied feature requirements (a specific feature the source built,
  transplanted as a feature request rather than extracted as a lesson).
- Source-specific implementation detail with no extracted, generalisable
  lesson attached (a specific file, a specific vendor choice, a specific
  naming convention, offered on its own without the reasoning behind it).

Each transferred item must be stated as a lesson independent of the
source's specific implementation, exactly as Experiment 004's Section 5
already required — this discipline is unchanged, only the *category* of
eligible knowledge (product/architecture instead of process) is new.

---

## 9. Classification Boundary

Kept structurally identical to Experiment 004's locked model (Section 11
of that protocol), reused rather than redesigned, because Checkpoint 002
and Checkpoint 003 both require classification criteria to be
predetermined and stable across experiments testing the same underlying
question:

**SUPPORTED** — at least one material improvement (a decision made with
better justification, a mistake avoided, a named baseline uncertainty
resolved, or materially less effort/rework for an equivalent-or-better
result) is demonstrated and traceable to a specific transferred
product/architecture item, **and** no contamination is found, or any
contamination found was minor and self-corrected during the work.

**PARTIALLY SUPPORTED** — a material, traceable improvement exists, but
contamination of at least moderate significance is also found and was not
self-corrected, **or** the result is genuinely mixed (real benefit on some
dimensions, none on others, no significant contamination either way).

**NOT SUPPORTED** — no material, traceable improvement exists, **or** any
apparent improvement is fully explained by contamination, **or**
significant contamination produced a net-neutral or net-negative outcome.

**Minimum evidence required for each verdict**, kept simpler than
Experiment 004's evidence log while still able to detect contamination and
false improvement:

- At least one specific product/architecture item's disposition
  (ACCEPTED/ADAPTED/REJECTED) with a one-paragraph counterfactual check
  ("would the baseline likely have produced this anyway?").
- One explicit contamination check against the standing definition
  (Section 9, Experiment 004 protocol — reused unchanged): imported
  unverified assumptions, irrelevant source context, source-specific
  constraints applied without justification, terminology/architecture
  leakage, false confidence.
- One comparison table against the same criteria Experiment 004 used
  (decision quality, completeness, useful new insight, avoided
  mistakes/rework, reduction in uncertainty, effort) — populated only
  where the experiment actually produced evidence on that dimension;
  "insufficient evidence" is an acceptable, expected entry for several
  rows, and should not be padded with speculative narrative.

This is materially less writing per dimension than Experiment 004's Gate
6 log (which gave each dimension its own long paragraph regardless of how
much evidence existed for it), while retaining every check that made
Experiment 004's classification credible.

---

## 10. Lightweight Cost Observation

Experiment 005 is also a live test of whether Project OS experimentation
itself can get lighter. This is recorded as **one short paragraph in the
Phase 3 evidence log, not a second experiment**:

> Did the leaner three-phase, two-commit-to-four-commit, two-document
> structure produce enough evidence to support a confident classification
> (SUPPORTED / PARTIALLY SUPPORTED / NOT SUPPORTED), or did cutting
> ceremony leave a genuine evidentiary gap that a reviewer would need
> Experiment-004-level detail to close?

Answer this directly, in the evidence log's closing section, with one of:
**lean structure was sufficient**, **lean structure left a specific named
gap** (name it), or **inconclusive** — and nothing more elaborate than
that single paragraph.

---

## 11. Readiness Decision

**READY**

Experiment 005 can be designed and started using this lean model. The
essential controls from Experiment 004 (ordering discipline, frozen
baseline, predetermined classification, contamination check, provenance,
counterfactual discipline) are fully preserved in Sections 1, 3, and 9
above. The independent-source and knowledge-packet definitions (Sections
7–8) are set before any project is inspected, as required. The commit and
documentation budgets (Sections 4–5) and the two-approval-point model
(Section 6) give a concrete, checkable reduction in ceremony relative to
Experiment 004 without removing any control identified as essential in
Section 1. No unresolved methodological blocker was found in preparing
this pre-design.

---

## 12. What This Document Does Not Do

- Does not name or inspect any candidate target or source project.
- Does not select any knowledge item.
- Does not create `docs/experiments/005-*.md`.
- Does not modify `PRINCIPLES.md`, `templates/PROJECT-OS.md`, or
  `docs/strategy/CHECKPOINT-003.md`.
- Does not begin Experiment 005. Phase 1 of Experiment 005 remains a
  separate, future task.
