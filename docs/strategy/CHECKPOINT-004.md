# Strategic Checkpoint 004 — Evidence Boundary and v0.2 Decision

- **Checkpoint date:** 2026-09-15
- **Evidence horizon:** Experiment 005 closure, Project-OS commit `0d3e60a`
- **Project OS version tested:** v0.1 (FROZEN throughout)
- **This checkpoint is analysis only.** No framework file was modified in
  producing it.

## Why This Checkpoint Exists

Checkpoint 003 recommended exactly one further experiment — cross-project
transfer of product/architecture-level knowledge, from a genuinely
independent source, under a deliberately leaner protocol — before
reconsidering the v0.1 → v0.2 decision. Experiment 005 has now run and
closed (`docs/evidence/005-evidence-log.md`, classification NOT
SUPPORTED). Five experiments and four checkpoints (including this one)
now exist. This checkpoint asks, conservatively, what that body of
evidence actually supports, what it counsels against, and whether a
bounded v0.2 proposal is now warranted.

---

## 1. Evidence Horizon

Reviewed for this checkpoint:

- `PRINCIPLES.md`, `templates/PROJECT-OS.md`, `ROADMAP.md`
- `docs/strategy/CHECKPOINT-001.md`, `CHECKPOINT-002.md`, `CHECKPOINT-003.md`
- `docs/strategy/EXPERIMENT-005-PREDESIGN.md`
- `docs/experiments/001-launchcity.md` … `005-cross-project-product-architecture-transfer.md`
- `docs/evidence/001-evidence-log.md` … `005-evidence-log.md`

No experiment/evidence document was reopened for modification. Recorded
classifications are used as-is; none are upgraded here.

**Classification summary:**

| Experiment | Subject | Classification |
|---|---|---|
| 001 — LaunchCity | Single-project process discipline (verification, scope & stop) | **SUPPORTED**, with one recorded qualification |
| 002 — Lastman | Existing-project adoption | **SUPPORTED**, with qualifications |
| 003 — Golf Club Tools | Within-project knowledge compounding | **SUPPORTED**, with qualifications |
| 004 — Tally (from LaunchCity + Golf Club Tools) | Cross-project process/verification knowledge transfer | **PARTIALLY SUPPORTED** |
| 005 — RVR2026 (from Marvin) | Cross-project product/architecture knowledge transfer | **NOT SUPPORTED** |

---

## 2. What Has Project OS Demonstrated?

| Capability | Strength | Basis |
|---|---|---|
| Recovering current project context without full history reconstruction | **STRONG** | 002 (intake from README/docs/schema/recent history only); 003 (Stage B/C recovery from `PROJECT-OS.md`/`docs/MVP.md`) |
| Preserving established project decisions | **STRONG** | 001 (three successful Scope & Stop preservations); 002 (inherited decisions preserved through adoption); 003 (Donabate-specific scope survived two further stages unmodified) |
| Maintaining scope boundaries (Scope & Stop) | **STRONG, one named weakness** | 001 (three clean saves; one gap — an undecided omission — survived six+ freeze cycles undetected); 002 (deliberately declined general audit, adjacent fixes, spec cleanup) |
| Verification before claiming success | **STRONG** | Present and unbroken in every experiment: 001 (local/remote misread caught only by direct comparison), 002 (static-only verification limit named explicitly), 003 (a reported push not initially visible remotely, caught at a checkpoint), 004 (local/remote discipline, runtime smoke check), 005 (this checkpoint's own review independently re-ran `npm test`, read `app/api/health/route.ts`, and grepped for leaked terminology rather than trusting the Phase 2 commit message) |
| Accumulating knowledge within a project | **STRONG, single project** | 003 only — Stage A → B → C compounding, with the caveat that accumulated knowledge required independent verification, not automatic trust. Not yet replicated in a second project. |
| Using accumulated knowledge later in the same project | **STRONG, single project** | Same basis as above |
| Adopting Project OS into existing (non-native) work | **MODERATE** | 002 only. Successful, but exposed unresolved friction with v0.1's prescribed project-local `PROJECT-OS.md` artefact during adoption. |
| Cross-project process/verification knowledge transfer | **WEAK** | 004 only, PARTIALLY SUPPORTED. One traceable improvement (a runtime smoke check) entangled with a scope deviation the transfer session itself introduced; two of three items showed narrow or plausible-without-transfer effects. |
| Cross-project product/architecture knowledge transfer | **NOT DEMONSTRATED** | 005 only, NOT SUPPORTED. Tested with a methodologically sound, independently verified experiment (no contamination, correct target-native rejection/deferral of both items) and returned no material improvement traceable to transfer. |
| Approval/checkpoint granularity (fine-grained vs. larger packets) | **WEAK** | One positive data point (003: larger packets outperformed a fine-grained relay loop) and one inconclusive data point (004); already judged by Checkpoint 002/003 as largely covered by existing Principle 3/4 rather than needing new machinery. |
| Provenance discipline | **MODERATE** | Demonstrated as achievable by careful manual practice in both cross-project experiments (004's Gate 3 table; 005's Sections C–F), with no failure traceable to its absence. Not shown to require a structural mechanism beyond disciplined practice. |
| Contamination control | **STRONG** | Two independent cross-project transfer attempts (004, 005), different source/target pairs, different knowledge levels — both returned NO CONTAMINATION under explicit, verified checks. This is the single cleanest 2-for-2 result in the whole evidence base. |

---

## 3. The 003 / 004 / 005 Evidence Gradient

The sequence is real and worth stating precisely:

- 003 (knowledge compounding **within** one project): SUPPORTED.
- 004 (knowledge transferred **between** projects, process/verification
  level): PARTIALLY SUPPORTED.
- 005 (knowledge transferred **between** projects, product/architecture
  level): NOT SUPPORTED.

**Does this support a meaningful boundary?** Partially, and only with
careful qualification. The pattern is consistent with — but does not by
itself prove — the hypothesis that *project knowledge becomes less
reliably reusable as contextual distance from its originating project
increases* (same project → different project/process-level →
different project/product-architecture-level).

What the evidence actually supports, stated precisely:

- Each experiment is a **single data point** for its category. 003 has
  not been replicated in a second project; 004 and 005 are each one
  source/target pairing.
- 005's NOT SUPPORTED result is not evidence that product/architecture
  knowledge *cannot* transfer — it demonstrates that, in this one
  well-verified case, the target did not have the problem the source
  knowledge addressed (Item 1) or the target had already substantially
  solved it under different conditions (Item 2's existing `/api/health`).
  A clean negative under good methodology is real evidence, but it is
  evidence about *this pairing*, not a general ceiling on the category.
- 004's PARTIALLY SUPPORTED result is itself entangled with a
  target-native scope deviation (per its own evidence log, Section 9),
  making even the process-level result weaker than a clean PARTIALLY
  SUPPORTED reading would suggest at face value.

**Precise qualification, if stated:** across the three experiments run so
far, transfer-strength evidence has weakened as knowledge moved from
within-project reuse to cross-project process knowledge to cross-project
product/architecture knowledge — but this is a gradient observed in three
specific instances, not a validated general law. It should be treated as
a reason for continued caution and target-native verification when
attempting cross-project transfer, not as grounds to conclude
cross-project transfer is unworkable in general.

---

## 4. Project-Specific vs. Portable Knowledge

Both cross-project experiments operated on an implicit version of this
distinction, and both worked cleanly on the dimension that matters most
(contamination):

- 004's Gate 3 explicitly classified reusable knowledge vs. project
  history vs. implementation-specific detail vs. incidental similarity vs.
  generic advice before selecting a packet.
- 005's Phase 1 Section E explicitly separated "extracted knowledge" from
  "source-specific assumptions that must NOT transfer," per item.
- In both cases, the packet's portable content was treated as a
  **hypothesis to verify against the target**, not as inherited truth:
  004's items were framed and applied with explicit "this proves logic
  only, not production behaviour" language; 005's two items were each
  independently checked against RVR2026's actual code
  (`findMany`/`take` usage; `/api/health/route.ts`'s actual timeout
  behaviour) before being accepted, adapted, or rejected.
- The result, in both cases: **zero contamination**, and in 005, the
  first genuine REJECTED disposition in the evidence base (Item 1) — the
  specific gap Checkpoint 003 named as missing before this discipline
  could be considered proven in both directions (correctly accepting good
  transfer *and* correctly rejecting inapplicable transfer).

**Assessment:** the evidence now reasonably supports formalising this as
an explicit expectation — not a new mechanism, a **clarification of how
existing principles apply when the knowledge under consideration
originates outside the current project.** See Section 8 below: this is
close to already covered by Principle 2 ("current state before
reconstructed history") and Principle 3 ("consequence determines depth"),
and by the template's existing `Use / Adapt / Ignore` column in the
"Relevant Knowledge" table, which does not restrict `Source` to
within-project origin. The evidence supports naming the distinction
explicitly; it does not support building new scoring, ranking, or
retrieval machinery around it.

---

## 5. What Project OS Should Deliberately NOT Do

Evidence-supported boundaries, drawn from the accumulated record:

- **Do not automatically transfer architecture/product decisions between
  projects.** 005 is the direct evidence: both packet items required, and
  received, independent target-native verification before any
  disposition; one was rejected outright once checked. Automatic transfer
  without that check would have introduced an unneeded pagination
  refactor (Item 1) into a target that did not have the underlying
  problem.
- **Do not treat historical or externally-sourced knowledge as current
  truth.** 003 demonstrated this within one project (accumulated
  knowledge still required independent verification); 004 and 005
  demonstrated it across projects (both explicitly declined to assume
  source-project assumptions — volumes, timeouts, entities — applied to
  the target).
- **Do not load entire project histories when a bounded context is
  enough.** Directly and repeatedly demonstrated: 002's intake used a
  bounded document/code set, not full history; 003's Stage B/C worked
  from `PROJECT-OS.md`/`docs/MVP.md` rather than full project
  archaeology. No experiment has found this insufficient.
- **Do not optimise for reuse where target-native investigation is
  cheaper or safer.** This is 005's central finding, stated plainly:
  checking whether RVR2026's `findMany` calls already used `take`
  bounding was cheap, direct, and conclusive — reusing Marvin's
  pagination pattern anyway would have added unneeded complexity to solve
  a problem the target did not have.
- **Do not create approval gates for routine work.** 003 showed
  fine-grained, multi-hop approval loops created disproportionate
  friction relative to the value returned per round trip; larger,
  autonomous work packets at meaningful decision boundaries worked
  better. (This remains a WATCH item at the principle-change level — see
  Section 7 — but the underlying behavioural preference is evidence-based.)
- **Do not confuse evidence-capture ceremony with project progress, and
  watch the experiment apparatus's own cost.** Checkpoint 003 named this
  directly: Experiment 004's apparatus (six gates, an 18-section, ~600
  line evidence log) grew larger than the artefact it tested (seven
  changed files). Experiment 005's leaner three-phase structure
  (a ~166-line evidence log, no formal gate ceremony) tested whether this
  could be cut without losing classification confidence — it mostly
  could, with one specific, named exception (Section 6 below).
- **Do not build elaborate knowledge-scoring, ranking, or automated
  retrieval machinery without evidence it is needed.** No experiment has
  tested retrieval at scale or from an ambiguous candidate pool; every
  cross-project selection so far has been a small, manually curated,
  fully-provenanced pick from a handful of candidates. Nothing in the
  evidence base justifies scoring/ranking machinery, and `ROADMAP.md`
  already correctly parks this under "Later/Unproven."
- **Do not turn every project action into a formal experiment.** The
  ceremony appropriate to a *calibration experiment testing the framework
  itself* (baselines, contamination boundaries, invalidation checklists)
  is not evidence that ordinary project work needs the same apparatus.
  Checkpoint 003 already drew this distinction; nothing in Experiment 005
  weakens it, and 005's own leaner design is itself an example of
  deliberately not over-applying Experiment 004's ceremony by default.

---

## 6. Framework Cost / Ceremony: Experimental Rigour vs. Normal Operation

Direct comparison, 004 vs. 005:

| | Experiment 004 | Experiment 005 |
|---|---|---|
| Structure | Six formal gates | Three phases |
| Project OS documents | Locked protocol doc + evidence log (~18 sections, ~600 lines) | Pre-design + Phase 1 doc + evidence log (~166 lines) |
| Approval points | Gate-by-gate | Phase boundaries only |
| Classification produced | PARTIALLY SUPPORTED, credibly | NOT SUPPORTED, credibly |
| Mechanical baseline/exposure boundary | Explicit (Gate 4 frozen before Gate 3's packet is used in target work) | Weak — packet and baseline task were both present in the same Phase 2 instruction; the executing agent could see the packet before the baseline was frozen |

**Finding:** the leaner structure preserved enough evidence to reach a
confident classification without Experiment 004's six-gate apparatus.
This is a genuine, positive answer to Checkpoint 003's Section 8 cost
concern — ceremony and rigour are not the same thing, and cutting the
former did not visibly cost the latter for the overall classification.

**But it did expose one specific weak spot**, correctly surfaced and
assessed (not minimised) at Experiment 005's own closure: a mechanical
boundary between baseline selection and knowledge-packet exposure was
lost when both were folded into a single Phase 2 instruction. Experiment
005's own temporal-isolation assessment (B — methodological weakness, not
invalidation) is credible on its own terms, because the baseline chosen
(a pre-existing, independently verifiable target-native UAT finding) had
no plausible path back to the packet's content — but the *general*
lesson is that even a leaner protocol needs this one specific mechanical
control if a future transfer experiment is to avoid re-litigating the
same weakness.

**Experimental rigour vs. normal operation, explicitly distinguished:**
gates, frozen baselines, and contamination checklists are appropriate to
a *controlled experiment testing whether the framework itself works* —
not to ordinary project work, where Principle 3 (consequence determines
depth) already governs how much ceremony a decision deserves. Nothing
here recommends applying gate-and-freeze ceremony to normal Project OS
use.

**A minimal mechanical boundary is worth retaining for future transfer
*experiments* specifically** (baseline written and frozen before the
knowledge packet is revealed to the executing step, e.g. a Phase 2A/2B
split) — not as a general Project OS mechanism, and not designed further
here (per Experiment 005's own closure, which recorded this as an
observation, not a redesign).

---

## 7. Promotion Candidate Consolidation

Gathered from Checkpoints 001–003 and Experiments 001–005, deduplicated,
reassessed in light of Experiment 005.

| Candidate | Prior disposition | Disposition now | Why |
|---|---|---|---|
| Verify evidence/knowledge against the actual target/state where consequence warrants it | Checkpoint 003: PROMOTE TO v0.2 PROPOSAL | **PROMOTE TO v0.2 PROPOSAL** (confirmed) | Reinforced a fifth and sixth time by 005 (target-native rejection of Item 1; direct-file verification of Item 2's timeout gap). No counter-evidence across five experiments. Strongest, most consistent finding in the entire evidence base. |
| Inherited/portable knowledge must not be treated as authoritative; explicit accept/adapt/reject with target-native verification | Checkpoint 003: WATCH — explicitly missing a genuine REJECTED case | **PROMOTE TO v0.2 PROPOSAL** (upgraded) | 005 supplies exactly the missing evidence Checkpoint 003 named: a genuinely REJECTED transfer item (Item 1), cleanly reasoned, target-verified, contamination-free. The discipline is now demonstrated working in both directions — accepting/adapting applicable knowledge (004) and rejecting inapplicable knowledge (005) — across two independent source/target pairs. |
| Meaningful decision boundaries / approval granularity | Checkpoint 003: WATCH (downgraded from Checkpoint 002 PROMOTE) | **WATCH**, unchanged | 005 did not test approval-loop granularity (no fine-grained loop was used or compared). No new evidence either way. |
| Provenance/freshness as explicit knowledge metadata | Checkpoint 003: WATCH | **WATCH**, unchanged | 005 again shows disciplined manual provenance works (Phase 1 Sections C–F); still no evidence a structural mechanism is necessary rather than optional good practice. |
| Selective retrieval at scale | Checkpoint 003: WATCH | **WATCH**, unchanged | 005 selected from a small, manually reviewed candidate pool, same as 004. Not tested at scale. |
| Project posture (Checkpoint 001 §6) | DEFER | **DEFER**, unchanged | Untouched by any experiment across all five. |
| Accumulation-without-selection risk | WATCH | **WATCH**, unchanged | Not tested by 005. |
| Stop/build tension under unverifiable information | WATCH | **WATCH**, unchanged | Not tested by 005. |
| Inherited-progress measurement | WATCH | **WATCH**, unchanged | 005 again declined to produce a numerical comparison; no measurement method closer to ready. |
| Bias source-knowledge selection toward process/verification knowledge under appearance-of-targeting risk | Checkpoint 003: WATCH (new from 004) | **DEFER** (downgraded) | 005 deliberately tested the opposite case — product/architecture-level source selection — using a different, more direct control (excluding Marvin's Gate 1 auth content specifically because it was too close to an already-glimpsed target detail) and still achieved clean provenance and zero contamination. This suggests rigorous, item-specific exclusion reasoning can substitute for a blanket knowledge-level bias; the originally proposed bias looks less necessary than Checkpoint 003 judged, though only two data points exist. |
| A worked example distinguishing "pause here" from "log and continue" at a decision boundary | WATCH | **WATCH**, unchanged | Not exercised by 005 — 005 involved no implementation deviation requiring this distinction. |
| Live self-flagging of transfer-vs-scope-deviation entanglement | WATCH | **WATCH**, unchanged | Not applicable to 005 — nothing from the packet was implemented, so no entanglement arose to flag. |
| Eolas implementation | DEFER | **DEFER**, reinforced | Cross-project retrieval — Eolas's core premise — has now been tested twice (004 mixed, 005 negative). This strengthens, not weakens, the case to keep this deferred until a materially stronger transfer result exists. |
| Council implementation | DEFER | **DEFER**, unchanged | Not exercised. |
| Build Profile automation | DEFER | **DEFER**, unchanged | Not exercised; 005's packet was hand-selected per-experiment, same as 004. |
| Automatic agent/workforce orchestration | DEFER | **DEFER**, unchanged | Not exercised. |
| Automatic guardrail activation | DEFER | **DEFER**, unchanged | All guardrail behaviour across all five experiments was explicitly instructed by protocol design, never autonomous. |
| Sophisticated context budgeting / token optimisation | DEFER | **DEFER**, unchanged | Not exercised; 005's context was small and manually scoped. |
| Full lifecycle governance | DEFER | **DEFER**, unchanged | Not exercised. |
| Portfolio automation | DEFER | **DEFER**, unchanged | Untouched since Checkpoint 001. |
| **New from 005:** a minimal mechanical baseline-freeze boundary (e.g. Phase 2A/2B) for future transfer *experiments* | Experiment 005 closure, lean-protocol observation | **WATCH** | A specific, credible refinement to experiment methodology, not to Project OS's applied framework (Section 6). Worth retaining for the next transfer experiment's design, not for general project work. |
| **New from 005:** automated/default cross-project product-architecture transfer as a Project OS behaviour | Experiment 005 result | **REJECT** (as a default behaviour) | The one clean, well-verified test of this specific capability returned NOT SUPPORTED. This is not a rejection of transfer as a concept — target-native verification of externally-sourced knowledge remains promoted (above) — it is specifically a rejection of *automatic or default* transfer of architecture/product decisions without that verification step. |

No candidate is rejected as "actively harmful." REJECT above applies
narrowly to *automatic, unverified* transfer as a default behaviour, not
to the broader knowledge-transfer question.

---

## 8. Principle Coverage — Are the PROMOTE Candidates Actually New?

For each candidate marked PROMOTE:

**Verify evidence/knowledge against the actual target/state where
consequence warrants it.**
Already substantially represented by **Principle 2** ("Current State
Before Reconstructed History") and **Principle 3** ("Consequence
Determines Depth"). What is missing is not new content but explicit
scope: the principles as written read most naturally as being about a
project's *own* history/documentation, not knowledge arriving from
*outside* the project. **Classification: CLARIFICATION.** No new
principle; extend the existing wording to make explicit that "current
state before reconstructed history" applies equally when the
"reconstructed history" in question originated in a different project.

**Inherited/portable knowledge treated as hypothesis, not authoritative,
with explicit accept/adapt/reject.**
Closest existing coverage: **Principle 5** ("Preserve Decisions Until
Evidence Warrants Reopening Them") governs a project's *own* prior
decisions, not externally-sourced knowledge — not a direct match.
`templates/PROJECT-OS.md` Section 2 ("Relevant Knowledge") already has a
`Source | Previous learning | Why it matters here | Use / Adapt / Ignore`
table whose `Source` column is not restricted to within-project origin —
this is close to an existing, if under-specified, mechanism for exactly
this discipline. **Classification: OPERATIONALISATION.** The concept is
not new; what is missing is making explicit, in principle text, that
knowledge from outside the current project defaults to "hypothesis
requiring verification" in that same `Use / Adapt / Ignore` judgment, in
proportion to consequence (Principle 3) — not a new template column, not
new machinery.

**Conclusion:** neither PROMOTE candidate requires a new principle, a new
template section, or new mechanism. Both are, at most, wording
clarifications to principles and template guidance that already exist.
This matters directly for the version decision below.

---

## 9. v0.2 Minimum Delta (If Warranted)

If pursued, the smallest defensible delta consists of exactly two wording
clarifications, not new capability:

**Delta 1 — Cross-project scope for Principle 2/3.**
- *Problem:* Principle 2/3 read as project-internal; nothing in v0.1
  explicitly states they apply to externally-sourced knowledge.
- *Evidence:* 004 and 005, six total instances of target-native
  verification correctly governing whether transferred knowledge was
  used, across two independent source/target pairs, zero counter-evidence.
- *Proposed change:* Add one clarifying sentence to Principle 2 (or 3)
  noting that "reconstructed history" and "current state" apply equally
  to knowledge originating outside the current project.
- *Expected benefit:* Removes ambiguity for future project work (not just
  experiments) about how to treat an externally-sourced pattern,
  precedent, or suggestion.
- *Risk/cost:* Very low — wording only, no new mechanism.
- *Modifies:* `PRINCIPLES.md` (Principle 2 or 3 text). No template change.

**Delta 2 — Externally-sourced knowledge in the `Relevant Knowledge`
table.**
- *Problem:* The template's existing `Use / Adapt / Ignore` mechanism
  does not state that cross-project `Source` entries default to
  "hypothesis, verify before Use" rather than being treated the same as
  in-project prior decisions.
- *Evidence:* Same as Delta 1, plus 005's specific demonstration of a
  correct `Ignore`-equivalent (REJECTED) disposition.
- *Proposed change:* A one-line clarifying note under the existing table
  in `templates/PROJECT-OS.md` Section 2.
- *Expected benefit:* Makes the already-demonstrated discipline visible
  and repeatable in ordinary (non-experimental) project use, not only in
  formal transfer experiments.
- *Risk/cost:* Very low — one line, no new column, no new process step.
- *Modifies:* `templates/PROJECT-OS.md` Section 2 guidance text.

No delta beyond these two is evidence-supported at this checkpoint. Both
are described here only; **neither is implemented by this checkpoint.**

---

## 10. v0.2 Decision

### Recommendation: **A — KEEP v0.1 FROZEN**

This is not chosen by default, and not chosen merely because five
experiments are now complete. It is chosen because the evidence
specifically counsels against B:

1. **The 003 → 004 → 005 gradient trends the wrong way for a
   knowledge-transfer-centred v0.2.** The most recent and most rigorous
   cross-project test (005) returned NOT SUPPORTED. Opening v0.2 design
   now around cross-project transfer would be designing toward a
   hypothesis the newest evidence weakens, not strengthens — precisely
   what Principle 1 and Checkpoint 003's own reasoning warn against.
2. **Every candidate strong enough to promote turns out, on Section 8's
   principle-coverage check, to require no new capability** — both
   PROMOTE-worthy findings are CLARIFICATION/OPERATIONALISATION of
   Principle 2, 3, and the existing template table, not new machinery.
   A "v0.2" built from two wording clarifications to already-existing
   principles is not a meaningful version boundary; it is closer to a
   documentation correction than a framework change, and does not by
   itself justify opening a formal v0.2 design exercise.
3. **The framework-cost signal named at Checkpoint 003 is only partly
   resolved.** Experiment 005 showed ceremony can be cut without losing
   classification confidence, which is a genuine positive — but it also
   surfaced a specific new methodological gap (Section 6), meaning the
   experiment methodology itself is still being calibrated. Opening a
   second, parallel process stream (v0.2 design) while the experiment
   methodology is still adjusting would repeat the exact risk Checkpoint
   003 named: process growing faster than settled, decision-useful
   evidence.
4. **The single strongest, most central Project OS capability — within-
   project knowledge compounding (003) — remains a one-project result.**
   It has not been replicated. Committing to framework changes before
   confirming the framework's best result generalises beyond one project
   would be premature regardless of the cross-project findings.

Recommendation C (consolidate before versioning) was considered and
rejected as the primary recommendation: nothing here requires a
structural rewrite or simplification of the nine principles themselves,
which remain small and evidence-grounded. The repository-hygiene issues
(Section 11) are real but are explicitly classified below as not yet
materially blocking, so they do not on their own justify halting to
consolidate. Recommendation D was considered and rejected: nothing in
five experiments undermines Project OS's foundational assumption (a
lightweight, evidence-gated decision-and-knowledge loop); the evidence
questions *scope and pace of expansion*, not *direction*.

---

## 11. Missing Evidence and Next Experiment (Recommendation A)

**Smallest specific evidence gap:** Project OS's single strongest
demonstrated result — within-project knowledge compounding (Experiment
003, SUPPORTED with qualifications) — exists as exactly one data point in
one project. Every checkpoint since 002 has noted this without it being
addressed, while two cross-project experiments have since been run
instead. Before any further cross-project or framework-expansion work,
this is the more foundational, more central, and currently least-tested
claim in the whole evidence base.

**Recommended single additional experiment:** replicate Experiment 003's
within-project compounding test (knowledge established in one stage,
recovered and built on without manual restatement in a second and third
stage) in a **second, different project**, to determine whether the
result generalises or was specific to Golf Club Tools' circumstances.

This is deliberately not another cross-project transfer experiment.
Cross-project transfer has now been tested twice (004, 005) with a
weakening result each time; the evidence gap that most limits confidence
in Project OS's core premise is not "does transfer work," it is "does
compounding work reliably even within one project, more than once."

---

## 12. Repository Hygiene

Revisiting Checkpoint 003's Section 14 findings against current state:

| Item | Classification | Note |
|---|---|---|
| Manual cross-repository SHA provenance | **DEFER** | Still manual; still required opening a second local repository (RVR2026) to verify Experiment 005's claims for this checkpoint. Flagged at Checkpoints 002 and 003 without action; not yet materially blocking correctness, only reader effort. |
| Evidence-log / experiment-document duplication | **DEFER**, improving | Experiment 005 did not duplicate baseline/transfer documents inside the target repository the way Experiment 004 did (Tally's `experiment-004-baseline.md`/`-transfer.md`); RVR2026 evidence lives in the commit message plus this repository's evidence log only. The leaner protocol appears to have organically reduced this specific cost without a deliberate fix. |
| No experiment → target/source repository index | **DEFER** | Still absent. Still costs a fresh reader time to reconstruct which repository and commits an experiment concerns. Not yet blocking. |
| No unifying entry point across `strategy/`, `experiments/`, `evidence/` | **DEFER** | Still absent; three parallel, cross-referencing directories, no index. |

None are classified FIX BEFORE v0.2 or INCLUDE IN v0.2 DESIGN, since
Recommendation A means no v0.2 design is opening. All four items have now
been flagged at two consecutive checkpoints (003, 004) without action;
if a third consecutive checkpoint reaches the same conclusion, that
itself becomes evidence the deferral judgment should be revisited — noted
here, not acted on.

---

## 13. Roadmap Position

`ROADMAP.md`'s "Existing Project Adoption" entry was updated after
Experiment 002 to record its outcome. No equivalent update exists for:

- **"Compounding Project Knowledge"** (lines ~85–119): still phrased
  entirely as open questions, with no note that Experiment 003 has since
  tested several of them (SUPPORTED, with the accumulated-knowledge-
  requires-verification qualification).
- **Cross-project transfer** generally: the roadmap's "Eolas" entry
  gestures at this direction but nothing records that it has now been
  tested twice (Experiments 004, 005) with a PARTIALLY SUPPORTED then NOT
  SUPPORTED result.

**Recorded, not made:** a future edit to `ROADMAP.md` should (a) note
Experiment 003's outcome under "Compounding Project Knowledge," in the
same style as the existing Experiment 002 update, and (b) add a brief
cross-reference from the "Eolas" entry to Experiments 004 and 005's
results, so a reader of the roadmap does not have to separately discover
that this specific hypothesis now has two data points. `ROADMAP.md` is
not modified by this checkpoint.

---

## 14. Unresolved Questions

- Does within-project knowledge compounding (Experiment 003) replicate in
  a second, different project, or was it specific to Golf Club Tools?
  (Section 11 — the recommended next experiment.)
- Would a mechanical baseline-freeze boundary (Section 6) meaningfully
  change a future transfer experiment's temporal-isolation result, or was
  005's B-level weakness immaterial in practice given its independently
  verifiable target-native baseline?
- Does the "bias source selection toward process knowledge" watch item
  (Section 7) still merit tracking, now that 005's item-specific exclusion
  approach achieved the same protective effect without it — or should it
  be formally retired?
- Whether cross-project product/architecture transfer would perform
  differently with a source project of a different kind (not a
  well-documented personal project like Marvin) remains untested.
- The stop/build tension under unverifiable information (raised at 003)
  remains untouched by both subsequent cross-project experiments.

---

## 15. Next Work Packet

**Design and run a second within-project knowledge-compounding
experiment**, in a different project from Golf Club Tools, testing
whether Experiment 003's SUPPORTED result (accumulated knowledge
recovered and built on across stages without manual restatement) holds a
second time. Use Experiment 003's existing structure as the starting
protocol; apply the same "decide the necessary ceremony before Gate/Phase
1 is written" discipline Experiment 005 already validated, rather than
defaulting to more process than the question requires.

Do not begin this work packet as part of this checkpoint.

---

## 16. Checkpoint Record

- **Checkpoint date:** 2026-09-15
- **Evidence horizon:** Experiment 005 closure, Project-OS commit `0d3e60a`
- **Experiment classification summary:** 001 SUPPORTED (qualified); 002
  SUPPORTED (qualified); 003 SUPPORTED (qualified); 004 PARTIALLY
  SUPPORTED; 005 NOT SUPPORTED.
- **Demonstrated capabilities:** see Section 2 table. Strongest:
  verification-before-claiming-success, contamination control (2/2 clean
  cross-project), current-state recovery, scope preservation. Weakest/not
  demonstrated: cross-project product/architecture transfer (NOT
  DEMONSTRATED, per 005); cross-project process transfer remains WEAK
  (per 004).
- **Evidence gradient assessment:** 003 → 004 → 005 shows a real, but
  single-instance-per-category, weakening trend from within-project to
  cross-project-process to cross-project-product/architecture transfer.
  Treated as grounds for continued caution and target-native verification,
  not as a proven general law (Section 3).
- **Project OS boundaries / things not to do:** see Section 5 in full —
  no automatic cross-project architecture transfer; no treating external
  or historical knowledge as current truth without verification; no full
  history reconstruction when bounded context suffices; no reuse
  preferred over cheaper target-native investigation; no approval gates
  for routine work; no confusing evidence ceremony with progress; no
  knowledge-scoring machinery without evidence; no treating every project
  action as a formal experiment.
- **Consolidated promotion candidates:** see Section 7 table in full. Two
  PROMOTE TO v0.2 PROPOSAL (verify-against-target; portable-knowledge-as-
  hypothesis with accept/adapt/reject), both found on principle-coverage
  review (Section 8) to require only wording clarification, not new
  capability. One candidate downgraded WATCH → DEFER (bias source
  selection toward process knowledge). One new REJECT (automatic/default
  cross-project product-architecture transfer as a behaviour). Remainder
  unchanged WATCH/DEFER.
- **Framework-cost finding:** Experiment 005's leaner protocol preserved
  classification confidence without Experiment 004's six-gate ceremony,
  confirming rigour and ceremony are separable — but it also surfaced one
  specific, real methodological gap (temporal-isolation exposure) that a
  minimal mechanical control (not a return to six gates) should address in
  the *next* transfer experiment specifically, not in general project work
  (Section 6).
- **v0.2 recommendation: A — KEEP v0.1 FROZEN.** Rationale in Section 10.
- **v0.2 boundary:** not applicable (Recommendation A).
- **Repository-hygiene assessment:** all four previously flagged items
  (manual SHA provenance, evidence duplication, missing experiment index,
  missing unifying entry point) remain DEFER — not yet materially
  blocking, though flagged at two consecutive checkpoints now without
  action, and duplication has organically improved via Experiment 005's
  leaner design (Section 12).
- **Unresolved questions:** see Section 14.
- **Next work packet:** design and run a second within-project
  knowledge-compounding experiment, in a different project, replicating
  Experiment 003 (Section 15). Not begun by this checkpoint.
- **Confirmation:** Project OS v0.1 remains **FROZEN**. This checkpoint
  did not modify `PRINCIPLES.md`, `templates/PROJECT-OS.md`, `ROADMAP.md`,
  any experiment document, or any evidence log. No v0.2 framework file was
  created. Experiment 006 was not started by this document.
