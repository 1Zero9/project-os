# Strategic Checkpoint 003 — Evidence After the Cross-Project Transfer Experiment

- **Date:** 2026-09-15
- **Project OS version:** v0.1
- **Framework state:** FROZEN
- **Experiments completed:** 4
- **Evidence horizon / latest experiment commit:** Experiment 004 closure,
  Project-OS commit `789fc5e`

## Why This Checkpoint Exists

Checkpoint 002 recommended exactly one further experiment before deciding
whether to design Project OS v0.2: a test of whether knowledge captured in
one completed project could materially improve work in a genuinely
different project, without importing that source project's irrelevant
history or assumptions. That recommendation named this as "the single
highest-leverage unanswered question" blocking a v0.2 decision, because
every other promotion candidate accumulated so far either was already
substantially covered by an existing principle or depended on knowing
whether cross-project transfer worked at all.

That experiment — Experiment 004, Tally as target, three process-level
items from LaunchCity and Golf Club Tools as source — is now closed
(commit `789fc5e`), with a final classification of **PARTIALLY SUPPORTED**.

This checkpoint evaluates the accumulated evidence across all four
experiments and makes one recommendation: whether to keep v0.1 frozen and
run further targeted experiments (A), begin a bounded v0.2 proposal (B),
or reconsider a more fundamental part of Project OS's direction (C). It
does not modify Project OS v0.1 and does not create v0.2.

---

## 1. Current Project State

**What Project OS v0.1 currently represents.** A frozen, minimal
decision-and-knowledge loop: nine principles (`PRINCIPLES.md`) governing
evidence-before-framework, current-state-over-reconstructed-history,
consequence-proportionate depth, willingness to stop, decision
preservation, targeted fixes, proportionate documentation, framework
friction as evidence, and framework cost discipline; plus one lightweight
per-project artefact template (`templates/PROJECT-OS.md`) covering intake,
relevant knowledge, risk, scope/stop, and learning capture. It is not a
project-management framework, a documentation framework, or a development
methodology (Checkpoint 002 §4) — it is closest to a mechanism for
establishing current state, preserving prior decisions, recognising
consequential moments, and leaving behind captured knowledge for next
time.

**Why it was frozen.** Principle 1 (Evidence Before Framework) requires
that framework capability be added only when project work, archaeology, or
controlled experimentation demonstrates why it should exist — not because
something appears useful in theory. The freeze exists specifically so that
Project OS can be tested as it currently is, across genuinely different
project situations, before anything is added to it. Checkpoint 001 froze
v0.1 after archaeology and two experiments; Checkpoint 002 kept it frozen
after a third; this checkpoint evaluates whether a fourth changes that.

**What the experiments have tested, in sequence:**

1. **Experiment 001 (LaunchCity)** — can v0.1 operate against a greenfield
   project: control assumptions, preserve frozen decisions, manage
   horizons, catch drift?
2. **Experiment 002 (Lastman)** — can v0.1 be introduced into an
   independently developed, already-active project and improve its next
   meaningful decision without reconstructing full history?
3. **Experiment 003 (Golf Club Tools)** — can knowledge captured at one
   point in a project's life materially help at a later point in the
   *same* project, without manual restatement?
4. **Experiment 004 (Tally, sourced from LaunchCity + Golf Club Tools)** —
   can knowledge captured in one *completed* project materially improve
   work in a *different* project, without importing irrelevant history or
   assumptions?

**What evidence now exists.** Four completed, evidenced experiments, each
with a locked protocol, an evidence log, and an explicit classification:
001 SUPPORTED (qualified), 002 SUPPORTED (qualified), 003 SUPPORTED
(qualified), 004 PARTIALLY SUPPORTED. Two prior strategic checkpoints
(001, 002) that each explicitly declined to promote to v0.2 and named the
next experiment needed.

**What remains unresolved.** The central Steve 2.0 premise — that
knowledge earned in one project materially and repeatably reduces work in
an unrelated project — now has its first direct test, and that test came
back mixed rather than clearly positive. Cross-project transfer at
product/architecture level (as opposed to process/verification level) has
not been tested at all — Experiment 004's own Gate 3 deliberately excluded
those candidates for appearance-of-targeting reasons specific to that
pairing. No experiment has tested transfer with more than one target
project, more than one source-selection method, or a genuinely
independent (non-Project-OS-experiment) source project. Provenance,
selective retrieval at scale, and inherited-progress measurement all
remain unbuilt and largely untested beyond a single experiment each.

---

## 2. Experiment Synthesis

| # | Experiment question | Target / project | Classification | Strongest evidence | Important qualification | Implications for Project OS |
|---|---|---|---|---|---|---|
| 001 | Can v0.1 operate against a greenfield project — control assumptions, preserve frozen decisions, manage horizons, catch drift? | LaunchCity (new build) | **SUPPORTED**, with one recorded qualification | Frozen phases held against three separate reopen attempts; real upstream API calls reversed a documentation-inferred data model; real-browser validation caught two structural bugs invisible to tsc/lint/build | A visual/creative direction can remain textually compliant while perceptually drifting — Scope & Stop is weaker against *unknown omissions* than against known scope drift (a missing icon survived six freeze cycles) | Confirms the core loop works on a project with no prior history to inherit; exposes a durable weak spot (omissions, not drift) that no later experiment has since closed |
| 002 | Can v0.1 be introduced into an independently developed, active project and improve its next meaningful decision without reconstructing full history? | Lastman (existing, active) | **SUPPORTED**, with qualifications | Established sufficient current-state understanding from existing artefacts alone; surfaced an implicit product-direction change via divergence; traced it to a demonstrated authorisation defect (missing role guard) and applied a one-line, non-expansive fix | The fix was only statically verified (tsc/lint/control-flow trace), never exercised against a live session with a real breakglass account — "statically resolved," not "functionally demonstrated resolved" | Confirms adoption into an existing project is possible without full archaeology; exposes an unresolved framework/adoption seam (v0.1 prescribes creating a project-local `PROJECT-OS.md` during Intake, which doesn't fit cleanly into report-only adoption) |
| 003 | Can Project OS capture and reuse knowledge generated during project work so later work begins with useful accumulated context rather than from scratch? | Golf Club Tools (same project, 3 stages) | **SUPPORTED**, with qualifications | Stage B and Stage C each recovered prior decisions from `PROJECT-OS.md`/`docs/MVP.md` with zero manual restatement; bounded Donabate-specific scope survived two further stages unmodified; large autonomous packets at decision boundaries clearly outperformed a fine-grained multi-hop approval loop | Accumulated knowledge was not automatically authoritative — Stage B introduced claims requiring later verification, and this recurred at Stage C; this is same-*project* compounding only — every accumulated artefact lived inside the one project throughout | Directly demonstrates within-project knowledge compounding for the first time; explicitly does **not** demonstrate cross-project transfer (Checkpoint 002 was careful to name this distinction) |
| 004 | Can knowledge from one *completed* project materially improve work in a *different* project, without importing irrelevant history or assumptions? | Tally (target), knowledge sourced from LaunchCity + Golf Club Tools | **PARTIALLY SUPPORTED** | Item 2 (runtime validation) added evidence beyond static checks/mocked tests on a real refactor, traceable to the transferred item and not clearly something a baseline-only pass would have independently produced; **NO CONTAMINATION** found under the locked contamination test | The clearest positive effect (Item 2) is entangled with a scope deviation (extracting ~410 lines of restore logic) whose *necessity* was Tally-native, not knowledge-driven; Items 1 and 3 showed narrow, plausible-without-transfer effects rather than clearly transfer-specific ones; the packet was deliberately weighted toward process knowledge only, after Gate 3 excluded stronger product/architecture candidates on contamination-avoidance grounds | First direct test of the central Steve 2.0 premise; result is real but modest and mixed, not a clean confirmation — cross-project transfer at product/architecture level remains entirely untested |

Each classification above is quoted from its own evidence log or
experiment document, not reinterpreted here. In particular, 004's
PARTIALLY SUPPORTED result is not treated as SUPPORTED merely because it
fits the pattern of the three prior SUPPORTED results.

---

## 3. Cross-Experiment Patterns

### SUPPORTED PATTERN
*(Independent evidence in multiple experiments, meaningful support)*

- **Preservation of established decisions without relitigation.**
  Evidenced in 001 (three declined frozen-surface reopenings), 002
  (inherited decisions preserved through adoption), 003 (Donabate-specific
  bounded scope held across two further stages), and 004 (the baseline
  work packet was not altered to suit transferred knowledge — the one
  deviation was Tally-native necessity, not a substitution). Four for
  four.
- **Scope control / not expanding beyond the identified consequential
  work.** Evidenced in 001 (Scope & Stop declines), 002 (deliberately left
  the adjacent identity/fraud risk uninvestigated), 003 (bounded MVP scope
  held), and 004 (the transfer session did not expand into unrelated
  Tally work, and explicitly declined to run `next build` against
  production). Four for four, though 001 already showed this pattern has
  a specific blind spot (see next section).
- **Verification before claiming success, applied proportionately to
  consequence.** Evidenced in 001 (real API calls, real browser checks
  reversed assumptions), 002 (targeted risk check, not a general audit;
  the remaining gap was explicitly named, not hidden), 003 (remote
  verification caught a push discrepancy), and 004 (both the local/remote
  distinction and the runtime smoke check were applied, and their limits
  — mocked tests are not production proof — stated explicitly rather than
  rounded up). Four for four.

### EMERGING PATTERN
*(Promising, but evidence is incomplete, mixed, or context-dependent)*

- **Larger, coarser checkpoints outperform fine-grained approval loops.**
  Positive within-experiment evidence in 003 (a fine-grained multi-hop
  loop caused disproportionate friction; large packets at boundaries
  worked better). Experiment 004 deliberately transferred this exact
  lesson (Item 3) and applied it, but Gate 6's own assessment found "no
  demonstrated material improvement from this item specifically" — its
  main observable effect was that a scope deviation got written up
  explicitly rather than that the checkpointing choice itself was shown
  to produce a better outcome. The pattern is real in its origin
  experiment but has not yet been shown to transfer as a *general*
  process principle — it has one strong data point (003) and one
  inconclusive one (004).
- **Cross-project knowledge transfer can add real, traceable value at the
  process/verification level.** Experiment 004's Item 2 is the first
  positive, traceable cross-project transfer result in the framework's
  evidence base. But it is one item, from one experiment, entangled with
  a scope deviation, and the packet was deliberately restricted to
  process-level content rather than product/architecture content. This is
  promising but incomplete — nowhere near the strength of the
  within-project compounding evidence from 003.
- **Inherited knowledge must be verified, not trusted automatically.**
  Named directly in 003 (Stage B claims required later verification) and
  reinforced structurally in 004 (the transfer packet itself instructed
  ACCEPTED/ADAPTED/REJECTED dispositions specifically so nothing would be
  used without independent justification, and the evidence log confirms
  this discipline held). Two experiments, consistent direction, but the
  underlying mechanism (how a framework would enforce this beyond asking
  an agent to be careful) remains undesigned.

### SINGLE-EXPERIMENT OBSERVATION
*(Interesting, insufficiently replicated)*

- **Knowledge compounding within a single project measurably eliminates
  manual context restatement** (003 only — Stage B and Stage C both
  recovered prior decisions with zero manual correction needed). This
  remains the strongest compounding result in the entire evidence base,
  and it has not been replicated in a second project.
- **A frozen creative/visual direction can remain textually compliant
  while perceptually drifting, invisible without direct comparison to the
  original artefact** (001 only).
- **Scope & Stop is weaker against unknown omissions than against known
  scope drift** (001 only — a missing icon survived six freeze cycles).
  No later experiment tested for this failure mode again, so it is
  unresolved and unreplicated, not merely watched.
- **A demonstrated real-world defect (missing role guard) can be traced
  from an implicit product-direction change through to a proportionate,
  minimal fix** (002 only).
- **Provenance-first source selection (choosing what knowledge to
  transfer before seeing the target's weaknesses) can be enforced well
  enough in practice to avoid appearance-of-targeting** — Experiment
  004's Gate 3 excluded two well-evidenced, strongly-relevant candidates
  specifically because their relevance to Tally could not be cleanly
  separated from information already glimpsed at Gate 2. This is a
  genuinely new, positive process finding, but it is one experiment's
  worth of evidence about the *selection protocol*, not about the
  transfer outcome itself.

### CONTRADICTION / TENSION

- **Fine-grained checkpoints vs. large packets, restated.** 003 found a
  clear negative result for fine-grained approval loops; 004 attempted to
  apply the opposite lesson and could not demonstrate that doing so
  produced a *better* outcome, only that it did not produce a *worse* one
  and that the resulting scope deviation was disclosed rather than
  concealed. This is not a contradiction of direction (both point away
  from fine-grained loops) but it is a tension in strength of evidence:
  003 shows harm avoided by not using fine-grained loops; 004 does not
  show benefit gained by using large ones, only benign coexistence with a
  disclosure discipline.
- **Compounding-within-a-project vs. compounding-across-projects.**
  Checkpoint 002 explicitly separated these and named cross-project
  transfer as the critical untested claim. Experiment 004 has now tested
  it and returned PARTIALLY SUPPORTED — a real gap between the strength of
  003's within-project result (unqualified positive on the core claim,
  qualified only on verification) and 004's cross-project result
  (qualified positive, entangled with a scope deviation, restricted to
  process-level knowledge). This gap is itself the single most important
  finding available for the v0.1→v0.2 decision below.
- **Stop/build tension where correctness-critical information cannot be
  verified** (identified in 003, not resolved or re-tested in 004,
  because 004's packet did not surface a comparable unverifiable-claim
  situation). This remains open with only one data point, not
  strengthened or weakened by the newest experiment.

---

## 4. Promotion Candidate Review

Gathering every promotion candidate recorded across Checkpoints 001–002
and Experiments 001–004, and adding Experiment 004's own observations
(Section 15 of `docs/evidence/004-evidence-log.md`).

| Candidate | Origin | Disposition | Why |
|---|---|---|---|
| Operating at meaningful decision boundaries rather than routine approval points | Checkpoint 002 PROMOTE #1 (from 003) | **WATCH** (downgraded from Checkpoint 002's PROMOTE) | Checkpoint 002 already flagged this as "largely already covered by Principle 3/4," recommending only a future clarification, not a new principle. Experiment 004's attempt to apply the lesson produced no demonstrated benefit (Section 3 above), only benign coexistence. The case for a *principle change* is not stronger than it was at Checkpoint 002, and the newest data point is inconclusive rather than reinforcing. |
| Inherited knowledge must not automatically be treated as authoritative | Checkpoint 002 PROMOTE #2 (from 003); reinforced structurally by 004 | **WATCH** | Now reinforced in a second experiment (004's ACCEPTED/ADAPTED/REJECTED discipline and its self-documented "mocked tests are not production proof" framing). Checkpoint 002 already judged this "adjacent to but not fully covered by Principle 5." Two experiments now support the underlying concern, but neither has produced a concrete mechanism design — still short of PROMOTE TO v0.2 PROPOSAL, which would require at least a sketched mechanism, not just repeated agreement that the risk is real. |
| Evidence should be verified against the actual target/state where consequence warrants it | Checkpoint 002 PROMOTE #3 | **PROMOTE TO v0.2 PROPOSAL** | Checkpoint 002 already assessed this as "existing principle, twice reinforced," recommending no new principle. It has now been reinforced a third and fourth time (004's local/remote discipline and runtime smoke check). This is the one candidate with genuinely repeated, consistent, low-risk evidence across all four experiments and no counter-evidence anywhere. Eligible for a future v0.2 proposal as an explicit clarification of Principle 2/3 — not as new machinery, as Section 6 below elaborates. |
| Provenance/freshness as explicit knowledge metadata | Checkpoint 002 WATCH (from 003); directly exercised by 004's provenance records | **WATCH** | 004 demonstrates that provenance records *can* be produced by disciplined manual practice (Gate 3's full provenance table). It does not demonstrate that Project OS needs a *structural* mechanism for this beyond "an agent doing it carefully when asked." Two experiments now touch this; neither shows the manual-discipline approach failing, so there is no evidence yet that formalising it is necessary rather than merely nice-to-have. |
| Selective retrieval at scale | Checkpoint 002 WATCH (from 003) | **WATCH**, unchanged | 004 did not test retrieval at scale — Gate 3 manually selected from three known evidence logs, not from a large or ambiguous candidate pool. No new evidence either way. |
| Project posture (Checkpoint 001 §6) | Checkpoint 001 | **DEFER**, unchanged | No experiment has exercised this at all across four experiments now. |
| Accumulation-without-selection risk | Checkpoint 002 WATCH (from 003) | **WATCH**, unchanged | Still a named, plausible, unobserved risk. 004 did not test accumulation at any meaningful scale. |
| Stop/build tension where authoritative evidence is unavailable | Checkpoint 002 WATCH (from 003) | **WATCH**, unchanged | 004's packet did not present a comparable situation, so this remains a single-experiment, unresolved open question. |
| Inherited-progress measurement | Checkpoint 002 WATCH (from 003) | **WATCH**, unchanged | 004 explicitly declined to convert its comparison into a numerical score (per its own locked protocol) and reported the 40–55 vs 20–30 minute effort figures as non-comparable due to scope differences. No quantitative measurement method has been tested or is closer to being ready. |
| Eolas implementation | Checkpoint 002 DEFER | **DEFER**, unchanged | Cross-project retrieval — Eolas's entire premise — has now been tested exactly once (004), with a mixed result restricted to a hand-curated, process-level packet. This is far short of the evidence needed to design Eolas's retrieval mechanism, which would need to work at a scale and generality 004 did not test. |
| Council implementation | Checkpoint 002 DEFER | **DEFER**, unchanged | No experiment has exercised multi-specialist challenge. |
| Build Profile automation | Checkpoint 002 DEFER | **DEFER**, unchanged | No experiment has produced or tested a cross-project preference/default artefact; 004's knowledge packet was hand-selected per-experiment, not drawn from an automated profile. |
| Automatic agent/workforce orchestration | Checkpoint 002 DEFER | **DEFER**, unchanged | Not exercised by 004. |
| Automatic guardrail activation | Checkpoint 002 DEFER | **DEFER**, unchanged | All guardrail behaviour in 004, as in 001–003, was explicitly instructed by protocol design, not triggered autonomously. |
| Sophisticated context budgeting / token optimisation | Checkpoint 002 DEFER | **DEFER**, unchanged | 004's context (three named knowledge items, one target repository) was small and manually scoped; no context-budgeting pressure was tested. |
| Full lifecycle governance | Checkpoint 002 DEFER | **DEFER**, unchanged | 004 exercised a narrow slice (test coverage + a doc fix), not lifecycle governance. |
| Portfolio automation | Checkpoint 001 out of scope | **DEFER**, unchanged | Untouched by any experiment since Checkpoint 001. |
| **New from 004:** bias source-knowledge selection toward process/verification knowledge when any product-level candidate risks appearing target-informed | Experiment 004 evidence log §15 | **WATCH** | A genuinely new, specific process observation about *how* to run a source-selection protocol safely. Single-experiment. Worth watching as a candidate refinement to a future transfer-protocol design, not yet strong enough to promote given it is drawn from one experiment's Gate 3 record only. |
| **New from 004:** a transferred "checkpoint at decision boundaries" item needs a concrete worked example distinguishing "pause here" from "log and continue" | Experiment 004 evidence log §15 | **WATCH** | Directly related to the unresolved "meaningful decision boundary" concept, itself already a Checkpoint 002 watch item under Strategic Checkpoint 002. Not independently strong enough for its own line item beyond folding it into that existing watch item. |
| **New from 004:** distinguishing a transfer-caused effect from a scope-deviation-caused effect is hard to reconstruct after the fact; a future protocol might ask a transfer stage to flag this live | Experiment 004 evidence log §15 | **WATCH** | A specific, credible protocol-design refinement, but proposing it now would be designing a mechanism (live self-flagging) based on a single experiment's retrospective difficulty — exactly the kind of premature mechanism design Principle 1 counsels against. Worth keeping as a note for if/when a second transfer experiment is run. |

No candidate is rejected outright at this checkpoint. Nothing gathered
across four experiments has produced evidence that a proposed idea is
actively harmful or should not become part of Project OS — the evidence
gaps are about insufficiency, not disproof.

---

## 5. Knowledge Model Question

Experiment 004 introduced, and exercised in practice: knowledge
provenance records, a bounded transfer packet with an explicit
contamination boundary, and ACCEPTED/ADAPTED/REJECTED transfer
dispositions.

**Assessment: not enough evidence yet, and the instruction to be
conservative here is itself well-founded by the evidence.** Experiment 004
was PARTIALLY SUPPORTED, not SUPPORTED. Its own evidence log identifies
that the clearest positive transfer effect (Item 2) is entangled with a
Tally-native scope deviation rather than being a clean, isolable
transfer-attributable result, and that the packet was deliberately
restricted to process-level content after excluding stronger
product/architecture candidates for contamination-avoidance reasons — so
even the modest positive result available is drawn from a narrower slice
of "knowledge" than the full Steve 2.0 vision (product decisions,
architecture precedent, security precedent) actually needs to prove.

Concretely, against each concept:

- **Provenance** — 004 demonstrates a human/agent *can* produce a
  provenance record manually and thoroughly (Gate 3's full table). It does
  not demonstrate that Project OS needs a structural provenance mechanism,
  since no failure occurred that a missing mechanism would have prevented.
  **Not ready for v0.2.**
- **Bounded transfer packets** — the packet concept (a small, named,
  explicitly-scoped set of knowledge items with a stated contamination
  boundary) worked once, cleanly, with no contamination found. This is the
  single strongest piece of evidence in favour of any Experiment
  004-derived concept. **Closest to ready, but still one experiment.**
- **Contamination boundaries** — worked as designed in the one case
  tested (NO CONTAMINATION found). One clean pass is meaningful but is not
  the "sufficiently strong, independently replicated" bar Principle 1
  implies for a framework addition. **Not ready for v0.2 on its own; watch
  alongside bounded transfer packets.**
- **Portable vs. project-specific knowledge** — the distinction was
  applied successfully in Gate 3's classification work (reusable knowledge
  vs. project history vs. implementation-specific detail vs. assumptions
  vs. incidental similarity vs. generic advice), but this classification
  scheme is itself part of the *experiment's own protocol design*, not
  something separately validated as a piece of Project OS. Promoting it
  now would be promoting an experiment's methodology rather than a
  demonstrated framework need. **Not ready for v0.2.**
- **ACCEPTED/ADAPTED/REJECTED transfer decisions** — used correctly and
  legibly in 004 (all three dispositions actually occurred: one ACCEPTED,
  two ADAPTED). No REJECTED case occurred in practice, so the discipline
  is only two-thirds exercised. **Not ready for v0.2; needs at least one
  more experiment where an item is genuinely rejected, to know the
  mechanism catches a bad transfer as well as it accommodates good ones.**

**Overall: none of Experiment 004's knowledge-model concepts should be
introduced into a v0.2 proposal at this checkpoint.** They remain WATCH
items (Section 4), consistent with the "be conservative" instruction and
the actual PARTIALLY SUPPORTED classification.

---

## 6. Process Model Question

Reviewing evidence on: larger work packets, decision gates, meaningful
checkpoints, reduced approval loops, evidence capture, baseline-before-
change, verification before claiming success.

- **Larger work packets / reduced approval loops** — one strong positive
  data point (003) and one inconclusive data point (004, per Section 3's
  EMERGING PATTERN entry). **Not yet sufficient for v0.2**; Checkpoint
  002 already judged the underlying concept largely covered by existing
  Principle 3/4, and 004 did not strengthen that judgment.
- **Decision gates as the sole interruption points** — used successfully
  as an explicit design choice in Experiment 004's own protocol (six
  gates, "no fine-grained approval loop... between them," directly
  informed by 003's evidence). This worked within 004 itself, but it is
  evidence about how to structure *an experiment*, not evidence about a
  general Project OS mechanism for ordinary project work outside of
  controlled experimentation. **Watch, not promote** — conflating
  "gates worked well for a research protocol" with "gates should be a
  general Project OS mechanism" would overreach the evidence.
- **Evidence capture (evidence logs, provenance records, contamination
  checks)** — has now been exercised, successfully and increasingly
  elaborately, across all four experiments, and Experiment 004's evidence
  log is the most rigorous produced so far. But this is evidence that
  *experiments* can produce good evidence logs, which is close to
  circular — it does not by itself demonstrate that ordinary (non-
  experimental) project work needs or benefits from this level of
  logging. See Section 8 (Framework Cost) for the tension this creates.
- **Baseline-before-change** — directly and successfully used as the
  structural backbone of Experiment 004 (Gate 4 baseline frozen before any
  source knowledge was consulted). This is a research-methodology
  discipline more than a general project-work discipline; ordinary project
  work rarely needs a frozen, blind baseline in this formal sense.
  **Not directly transferable to v0.2 as stated** — its value in 004 was
  as an experimental control, not as a demonstrated everyday practice.
- **Verification before claiming success** — this is the one process
  item with genuinely strong, repeated, cross-experiment support (see
  Section 4's PROMOTE TO v0.2 PROPOSAL entry). It has appeared, in some
  form, in every single experiment (001's local/remote misread, 002's
  explicitly-named static-only verification limit, 003's push-discrepancy
  catch, 004's local/remote discipline plus runtime smoke check) and has
  never once been contradicted.

**Overall: exactly one process-model finding — verification before
claiming success, tied to Principle 2/3 — has sufficient cross-experiment
support for v0.2 consideration.** Everything else in this category
remains WATCH or is judged not directly transferable from
experiment-methodology evidence to general-project-work evidence.

---

## 7. Compounding Knowledge

The broader hypothesis: can Project OS create useful project knowledge
that compounds over time?

**A. Knowledge accumulating inside one project.** Strongly supported by a
single, clean experiment (003): Stage B and Stage C both recovered prior
decisions from `PROJECT-OS.md`/`docs/MVP.md` with zero manual restatement,
and each stage added further knowledge the next stage used. The only
qualification is that accumulated knowledge required independent
verification rather than automatic trust — a caveat on *how* it compounds,
not on *whether* it compounds. This remains the strongest single
compounding result in the whole evidence base, but it is still one
experiment (Checkpoint 002 already noted this) and has not been
replicated in a second project.

**B. Knowledge transferring between projects.** Now tested once (004),
with a PARTIALLY SUPPORTED result: one genuinely traceable improvement
(Item 2), no contamination, but a result entangled with a scope deviation
and restricted to process-level knowledge by design. This is real
evidence — a meaningfully weaker null result was clearly possible and did
not occur — but it is markedly weaker than A's evidence, both in
classification strength (PARTIALLY SUPPORTED vs. SUPPORTED) and in scope
(process knowledge only, one target, one source pairing, no controlled
comparison of effort).

**These are not equally supported, and should not be treated as such.** A
is a demonstrated, if narrow, capability. B is a promising but genuinely
open question with one data point pointing toward "possible, with real
limits" rather than toward "works." Any future framing of Project OS's
compounding-knowledge story should keep this asymmetry explicit rather
than citing both experiments as equivalent evidence for "Project OS
compounds knowledge."

---

## 8. Framework Cost

Signs the process is becoming heavier, assessed honestly rather than
defensively:

- **Protocol overhead has grown, experiment over experiment.** Experiment
  001 and 002 each produced one evidence log. Experiment 003 introduced a
  multi-stage structure. Experiment 004 introduced a fourteen-section
  locked protocol document, six formal gates, explicit
  invalidation-condition checklists, a contamination test, and a Gate 6
  evidence log running to eighteen numbered sections. This checkpoint
  itself synthesises four experiments, two prior checkpoints, three
  framework documents, and produces a fifteen-section document. The trend
  line is toward more ceremony per experiment, not less.
- **Documentation burden is now substantial relative to the actual code
  change tested.** Experiment 004's entire tested work product was two
  new test files, one refactor, one config file, and a one-line README
  fix in Tally (per the Gate 5 commit: 7 files changed). Producing,
  reviewing, and evaluating the documentation *about* that work (baseline
  document, transfer document, protocol document, evidence log, this
  checkpoint's synthesis of it) is now considerably larger than the work
  itself. This is worth naming plainly: **the experiment apparatus is
  larger than the artefact it produced.**
- **Number of gates.** Six formal gates for one modest test-coverage task
  is a meaningful process investment. This was justified for a *research*
  protocol needing to protect against cherry-picking and reverse-
  engineered relevance (Section 3 of the 004 protocol explains this
  reasoning directly and it holds up), but it is not a pattern that should
  be read across into ordinary project work without that same
  experimental-integrity justification.
- **Evidence logging depth.** Comparing 001's evidence log (concise,
  observation-per-entry) to 004's (eighteen sections, per-item
  counterfactual analysis, explicit deviation analysis) shows genuine
  growth in rigor, but also growth in the sheer volume of documentation
  needed to responsibly close one experiment. Principle 7 ("documentation
  serves decisions... avoided when it exists only to satisfy process")
  and Principle 9 ("Project OS must earn its cost... if Project OS creates
  more process than value, Project OS is the problem") are the framework's
  own stated defence against exactly this drift, and this checkpoint
  should apply them to itself, not only to future work.
- **Repository management.** Each experiment now spans two repositories
  (Project-OS + the target), each with its own commits, and cross-
  references by commit SHA are required to reconstruct the chain. This
  worked in every experiment so far but is manual and easy to get wrong
  (Section 14 records specific hygiene issues observed).

**Is Project OS helping normal work, or documenting itself?** For the
four experiments run so far, the honest answer is: **these are
still calibration experiments, deliberately more heavily instrumented
than any normal piece of project work would be, precisely because they
exist to test the framework rather than to ship a product feature.** That
is a legitimate and intended use of extra ceremony (Principle 1 requires
evidence before framework change, and evidence requires being able to
show your work). The risk named here is not that this was wrong to do for
four calibration experiments — it is that if a fifth, sixth, and seventh
experiment continue at Experiment 004's level of ceremony, the framework
will have spent more total effort proving itself than the sum of value
demonstrated so far, and Principle 9's own test ("does Project OS create
more process than value") starts to bite specifically at *this*
meta-level, not only inside individual projects.

**This is recorded as a genuine, currently-mild but growing signal of
over-engineering risk in the experiment protocol itself** (not in v0.1's
actual, still-minimal, nine-principle content) — worth a deliberate
answer at the next work packet (Section 13), not an immediate fix.

---

## 9. v0.1 → v0.2 Decision

### Recommendation: **A — KEEP v0.1 FROZEN**

This is not a default or reflexive continuation of Checkpoint 002's same
recommendation. It is chosen because the evidence specifically counsels
against B, not merely because four experiments have now been completed:

1. **The one experiment Checkpoint 002 identified as the deciding test
   came back PARTIALLY SUPPORTED, not SUPPORTED.** Checkpoint 002 was
   explicit that a result "of the same strength... Experiment 003
   produced same-project" would materially strengthen the case for
   immediate v0.2 design. That did not happen. The result is real and
   worth having, but it is weaker than the bar Checkpoint 002 itself set
   for triggering B.
2. **Every promotion candidate reviewed in Section 4 that would matter
   most to a v0.2 built around cross-project transfer — provenance,
   bounded packets, contamination boundaries, ACCEPTED/ADAPTED/REJECTED
   dispositions — remains WATCH, not PROMOTE, by this checkpoint's own
   conservative and evidence-matched assessment (Section 5).** Only one
   candidate (verification-before-claiming-success) clears the bar for
   PROMOTE TO v0.2 PROPOSAL, and it is already substantially covered by
   existing Principle 2/3 — Checkpoint 002 already reached the same
   conclusion about it a checkpoint ago. A single, already-well-covered
   candidate is not sufficient material to justify opening a v0.2 design
   effort; it can be addressed, if ever, as a documentation clarification
   to v0.1's own principles, which is explicitly a different and smaller
   action than designing v0.2.
3. **The one experiment that tested cross-project transfer used a
   deliberately narrow, process-level-only packet, sourced from only two
   prior (also Project-OS-experiment) projects, tested against only one
   target.** Designing v0.2's knowledge-transfer mechanism now would mean
   encoding assumptions about product/architecture-level transfer,
   multi-target scaling, and non-experiment source projects that no
   experiment has touched. This is exactly the situation Principle 1 (and
   Checkpoint 002's own reasoning) warns against: designing to a
   hypothesis rather than to evidence.
4. **A new, genuine cost signal has appeared (Section 8) that Checkpoints
   001 and 002 did not need to weigh as heavily**: the experiment
   apparatus itself is growing faster than the evidence it produces. Before
   adding v0.2 design work — which would itself require its own protocol,
   review, and evidence discipline — it is worth deliberately checking
   whether the *experiment methodology* needs to be made leaner, or
   whether this growth is an acceptable, bounded cost of calibration.
   Opening v0.2 design now would add a second major stream of process
   work on top of an already-heavier experiment stream, compounding the
   very risk Section 8 names.

Recommendation B is not chosen merely because four experiments is a nice
round number to stop counting at — it is declined because the specific
evidence needed to justify it (a strong, unambiguous cross-project
transfer result, and at least one PROMOTE-strength candidate that isn't
already covered by an existing principle) does not yet exist.

Recommendation C is not chosen either: nothing in Experiments 001–004
suggests Project OS's fundamental direction (a lightweight
decision-and-knowledge loop, evidence-gated growth, proportionate
process) is wrong. What the evidence questions is *pace and ceremony* of
experimentation, not *direction*.

---

## 10. If Recommendation Is A — Next Experiments

**Exactly one additional experiment is recommended before the next
checkpoint**, testing the specific gap that made Experiment 004's result
weaker than 003's, rather than a broad backlog:

**Experiment 005 — Cross-project transfer of product/architecture-level
knowledge, with a leaner protocol.**

Unresolved questions this single experiment should test:

1. Does cross-project transfer add material, cleanly-traceable value when
   the transferred knowledge is *product or architecture level* (a
   rejected design, a security precedent, a data-model lesson) rather than
   process/verification level — the exact category Experiment 004's Gate
   3 deliberately excluded for contamination-avoidance reasons?
2. Can a genuinely independent source project (not itself a completed
   Project OS experiment subject) supply the transferred knowledge,
   testing whether provenance discipline holds up outside the
   already-evidenced-and-tidy Experiment 001–003 evidence logs?
3. Does a deliberately leaner protocol (fewer gates, a shorter evidence
   log — a direct answer to Section 8's cost finding) still produce
   evidence rigorous enough to classify the result, or does cutting
   ceremony measurably reduce evidence quality? This should be tested
   explicitly, not assumed either way.

A single experiment answering these three questions would give the next
checkpoint either: a second, stronger cross-project data point
(strengthening the case for B), a second weak/mixed result at a different
knowledge level (suggesting cross-project transfer's ceiling is
process-level knowledge, which would itself be a useful, narrower
finding), or evidence about whether the protocol itself can be made
leaner without losing rigor. Any of these three outcomes is more decision-
useful than running a fifth experiment that repeats Experiment 004's
shape.

Do not run more than this one additional experiment before the next
checkpoint.

---

## 11. If Recommendation Is B

Not applicable — Recommendation A was chosen.

---

## 12. If Recommendation Is C

Not applicable — Recommendation C was not chosen. For completeness: no
evidence gathered across four experiments and three checkpoints suggests
Project OS's core direction (a lightweight, evidence-gated
decision-and-knowledge loop, deliberately smaller than the full Steve 2.0
vision) is unsound. The one caution worth naming without triggering a
full "C" recommendation is Section 8's cost finding — if a future
checkpoint finds that experiment ceremony keeps growing without a
corresponding increase in decision-useful evidence, that would become
grounds to revisit not Project OS's direction, but the *experiment
methodology* used to test it.

---

## 13. Next Work Packet

**Recommended single next work packet: design and run Experiment 005 as
specified in Section 10, with an explicit, upfront leaner-protocol
constraint stated in Experiment 005's own locked protocol document before
target or source selection begins** — i.e., before Experiment 005's Gate
1 is written, decide and record how many gates and what evidence-log
depth are actually necessary to produce a classifiable result, using
Experiment 004's protocol as a starting point to trim from, not a floor to
match or exceed.

This follows directly from the checkpoint decision: Recommendation A
requires exactly one more targeted experiment (Section 10), and Section
8's cost finding requires that experiment to also test whether rigor and
ceremony can be decoupled, rather than deferring that question to a
future, separate exercise. Combining both into Experiment 005's design
avoids running two more experiments where one, well-designed one will do.

Do not begin this work packet as part of this checkpoint.

---

## 14. Repository / Project Hygiene

Recorded for future attention only; repository workflow was deliberately
deferred until later in the project and is not fixed here.

- **Cross-repository provenance is entirely manual.** Every experiment
  from 002 onward spans the Project-OS repository and a separate target
  repository, linked only by commit SHAs quoted in prose. There is no
  structural link (tag, manifest, or index) tying a Project-OS experiment
  document to its target-repository commits; reconstructing the full
  chain for this checkpoint required manually opening a second local
  repository (Tally) and reading specific commits by SHA.
  Not fixed here.
- **Evidence-log and experiment-document duplication is growing.**
  Experiment 004 has provenance and analysis recorded in three separate
  places (Tally's `experiment-004-baseline.md`, Tally's
  `experiment-004-transfer.md`, and Project-OS's
  `docs/evidence/004-evidence-log.md`), with the third substantially
  re-summarising the first two. This is not wrong, but it is a
  duplication cost worth naming (see also Section 8). Not fixed here.
- **No index of experiments-to-target-repositories exists.** A reader
  arriving fresh at the Project-OS repository has to open each experiment
  document individually to learn which external repository and commits it
  concerns. A lightweight index (experiment → target repo → key commits)
  would reduce this friction, but building one now would be exactly the
  kind of process-before-evidence work Principle 1 cautions against at
  this stage. Recorded as a future candidate only.
- **`docs/strategy/`, `docs/experiments/`, and `docs/evidence/` have grown
  as three parallel, cross-referencing directories** with no single
  entry-point document tying them together (this checkpoint itself had to
  read all three to reconstruct the full picture). Worth revisiting once
  repository workflow is actively addressed, not now.

---

## 15. Final Checkpoint Record

- **Checkpoint date:** 2026-09-15
- **Evidence horizon / latest experiment commit:** Experiment 004
  closure, Project-OS commit `789fc5e`
- **Recommendation:** **A — KEEP v0.1 FROZEN**, continue targeted
  experimentation
- **Rationale:** Experiment 004 — the single experiment Checkpoint 002
  identified as decisive — returned PARTIALLY SUPPORTED, below the bar
  Checkpoint 002 itself set for triggering a v0.2 design effort. Every
  promotion candidate specific to cross-project knowledge transfer remains
  WATCH under this checkpoint's own conservative assessment; only one
  candidate (verification-before-claiming-success) clears PROMOTE, and it
  is already substantially covered by existing principles. A new,
  genuine framework-cost signal (experiment ceremony growing faster than
  decision-useful evidence) further counsels against opening a second,
  parallel process stream (v0.2 design) before addressing it.
- **Promote candidates:** verification/evidence should be checked against
  the actual target/state where consequence warrants it (already
  substantially covered by Principle 2/3; eligible for a future
  clarification, not new machinery).
- **Watch items:** decision-boundary/approval-granularity clarification to
  Principle 3/4; inherited-knowledge-must-be-verified as a possible
  companion clause to Principle 5; provenance/freshness as explicit
  metadata; selective retrieval at scale; project posture (Checkpoint 001
  §6); accumulation-without-selection risk; stop/build tension under
  unverifiable information; inherited-progress measurement; bounded
  transfer packets; contamination boundaries; biasing source-selection
  toward process knowledge under appearance-of-targeting risk; a worked
  example distinguishing "pause" from "log and continue" at a decision
  boundary; live self-flagging of transfer-vs-deviation entanglement.
- **Deferred items:** Eolas implementation; Council implementation; Build
  Profile automation; automatic agent/workforce orchestration; automatic
  guardrail activation; sophisticated context budgeting/token
  optimisation; full lifecycle governance; portfolio automation; project
  posture validation.
- **Rejected items:** none. No candidate gathered across four experiments
  has evidence indicating it should be actively rejected rather than
  watched or deferred.
- **Unresolved questions:** whether cross-project transfer works at the
  product/architecture level (Experiment 004 tested process-level
  knowledge only); whether the transfer result would replicate with a
  genuinely independent (non-experiment) source project; whether the
  experiment protocol itself can be made leaner without losing evidence
  quality; whether "meaningful decision boundary" can be given a concrete,
  worked definition; the unresolved stop/build tension from Experiment
  003, untouched by Experiment 004.
- **Next work packet:** design and run Experiment 005 — cross-project
  transfer of product/architecture-level knowledge, from a genuinely
  independent source project, under a deliberately leaner protocol decided
  before Experiment 005's Gate 1 is written (Sections 10 and 13).
- **Confirmation:** Project OS v0.1 remains **FROZEN**. This checkpoint
  did not modify `PRINCIPLES.md`, `templates/PROJECT-OS.md`, any
  experiment protocol, or any evidence log. No v0.2 framework file was
  created. Experiment 005 was not started by this document.
