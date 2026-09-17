# Strategic Checkpoint 002 — Evidence After Three Experiments

- **Date:** 2026-09-15
- **Project OS version:** v0.1
- **Framework state:** FROZEN
- **Experiments completed:** 3

## Why This Checkpoint Exists

Project OS v0.1 has now been exercised against three materially different
situations:

1. LaunchCity — greenfield development
2. Lastman — adoption into an existing active project
3. Golf Club Tools — same-project knowledge compounding across three
   sequential stages

Checkpoint 001 was written after Experiments 001 and 002 and asked whether
Project OS could improve a single decision inside a project it had just
met. Experiment 003 asks a different question: whether knowledge Project OS
captures at one point in a project's life materially helps it at a later
point, without that knowledge being manually re-supplied.

This checkpoint does not modify Project OS v0.1. It is not a v0.2
specification. It reassesses Checkpoint 001 against three experiments of
evidence instead of two, and makes an explicit recommendation about
whether to design v0.2 now or run a further targeted experiment first.

---

## 1. What Has Now Been Demonstrated Across Experiments 001–003

Taken together, the three experiments demonstrate that Project OS v0.1 can,
within a single project:

- establish sufficient current-state understanding without reconstructing
  full project history (001, 002, 003)
- preserve previously established decisions without relitigating them
  absent new evidence (001, 002, 003)
- distinguish a meaningful decision from routine work and apply
  proportionate evidence to it (001, 002)
- trace an implicit or provisional direction to its material consequence
  and escalate only there (002)
- stop deliberately, more than once, without being told to (001, 002, 003)
- recover previously captured decisions from an accumulated artefact and
  use them to shape later work, within the same project, without the
  decisions being manually restated (003)
- generate new durable knowledge at more than one point in the same
  project's life, with that knowledge available to the next stage (003)

Three experiments are not proof of a general-purpose operating system. They
are sufficient to say that the framework's core decision-and-knowledge
behaviours survive contact with real, materially different project
situations, including — new in Experiment 003 — a situation spanning time
rather than a single point of contact.

---

## 2. Cross-Experiment Evidence Matrix

Each row states what the evidence log for that experiment actually
supports, not what would be convenient to claim. "—" means the dimension
was not meaningfully exercised in that experiment.

| Dimension | 001 LaunchCity | 002 Lastman | 003 Golf Club Tools | Pattern |
|---|---|---|---|---|
| Preservation of prior decisions | Frozen phases held; 3 reopen attempts correctly declined | Inherited decisions (approved-paid entries, autopick, etc.) preserved | Donabate-specific, question-first, bounded scope preserved across B and C | **Repeated (3/3)** |
| Evidence quality / verification | Real upstream API calls, real browser, real deploys reversed assumptions | Fix statically verified only; no live breakglass session run | Stage B claims flagged as unverified; Stage C confirmed inherited knowledge is not automatically authoritative | **Repeated concern (3/3)** — verification depth varies, and gaps were explicitly named each time |
| Stopping unnecessary work | 3 correct declines to reopen frozen surfaces | Stopped repo archaeology once owner intent became the missing evidence; declined general security audit | — (not the focus of this experiment) | **Repeated (2/3 directly evidenced)** |
| Current state vs. reconstructed history | Not applicable (greenfield) | Established current state from existing artefacts without full history reconstruction | Each stage worked from `PROJECT-OS.md`/`docs/MVP.md`, not project archaeology | **Repeated where applicable (2/2)** |
| Accumulated knowledge improving later work | — | — | Stage B used Stage A's captured knowledge; Stage C used A+B's; both without manual restatement | **Single-experiment (1/1)**, but the clearest and most direct evidence of the central Steve 2.0 hypothesis so far |
| Decision boundaries vs. routine approvals | Phase freezes acted as boundaries | Intake → provisional decision → risk check → fix acted as boundaries | Fine-grained approval loop caused friction; large packets at boundaries worked better | **Repeated (3/3)**, and 003 adds a first negative data point about approval granularity |
| Process/framework cost | Low; evidence-gathering did not become a risk in practice | Friction from PROJECT-OS.md seam during adoption | Friction from approval-loop granularity; friction from tooling, not framework | **Emerging pattern** — cost is real but has so far been tooling/process shaped, not core-loop shaped |
| Provenance/freshness of knowledge | — | — | Named directly: some correctness-critical claims could not be authoritatively verified; stop/build tension identified | **Single-experiment (1/1)**, but explicitly named as unresolved by v0.1 |
| Selective retrieval | — | — | Retrieval noise reported low across B and C | **Single-experiment (1/1)** |
| Scope control | Scope & Stop weak against unknown omissions (icon gap survived 6 cycles) | Scope held; adjacent identity/fraud risk deliberately left uninvestigated | Bounded MVP scope held across two further stages | **Repeated (3/3)**, with one known weakness (unknown omissions) carried forward unresolved since 001 |
| Consequential-risk escalation | — | Owner-confirmed provisional direction traced to tenant-isolation risk; one demonstrated defect found and fixed | — | **Single-experiment (1/1)**, strong within that experiment |

### Evidence Discipline Applied to the Matrix

- **Repeated evidence**: preservation of prior decisions; scope control;
  decision boundaries over routine approval.
- **Single-experiment evidence**: accumulated knowledge improving later
  work; provenance/freshness naming; selective retrieval; consequential-risk
  escalation.
- **Emerging pattern**: process/framework cost tracks tooling and
  approval-granularity choices more than the core loop itself.
- **Hypothesis (not yet evidenced by any experiment)**: cross-project
  knowledge transfer; inherited-progress measurement; automatic retrieval
  without an explicit instruction to consult a named artefact.

No finding above is marked as demonstrated by an experiment whose evidence
log does not actually support it. In particular, Experiment 003 evidences
same-project retrieval and reuse only — in every stage, the accumulated
artefacts (`PROJECT-OS.md`, `docs/MVP.md`) already lived inside the one
project being worked on.

---

## 3. Reassessing Strategic Checkpoint 001

Checkpoint 001 (Section 14, "What Is Emerging") listed:

> - Project OS may reduce repeated zero-to-project work
> - previous projects may provide meaningful reusable precedent

Both were classified as emerging patterns requiring further evidence, not
demonstrated behaviour.

Experiment 003 moves the first of these two claims part of the way to
demonstrated status, but only in a narrower form than Checkpoint 001's
wording:

**Moved from hypothesis/emerging pattern to demonstrated, within a single
project:**

> Knowledge captured in a project at one point in time can be recovered and
> applied at a later point in the same project, without that knowledge
> being manually restated, and this measurably reduced rediscovery
> (recall: strong; application: strong; manual correction needed: none).

**Still emerging, not demonstrated:**

> Project OS reduces repeated *zero-to-project* work — i.e. work starting a
> genuinely new, unrelated project benefits from precedent earned
> elsewhere.

**Still hypothesis, untested by any experiment to date:**

> Previous *projects* (plural, distinct) provide meaningful reusable
> precedent to *each other*.

This distinction matters. Experiment 003 tested same-project compounding —
Stage A, B and C were all stages of one project (Golf Club Tools). It did
not test whether knowledge earned in Golf Club Tools, LaunchCity or Lastman
would usefully transfer into an unrelated fourth project. Checkpoint 001's
broader claim about cross-project reuse remains exactly where it was: an
unvalidated hypothesis, and the central untested assumption underneath the
larger Steve 2.0 proposition.

Other Checkpoint 001 items reassessed:

- "Decision boundaries may be more valuable than rigid process phases"
  (§14) — reinforced by 003's finding that large autonomous packets at
  decision boundaries outperformed fine-grained approval loops. Still an
  emerging pattern, now with a second, independent data point (a negative
  one, about the cost of the wrong-grained boundary) rather than a
  positive one.
- "Project history can be selectively retrieved rather than reconstructed"
  (§14) — 003 provides a second form of this: selective retrieval from a
  captured artefact rather than from raw repository history. Strengthened,
  still not universal.
- Checkpoint 001 §17's framework status is unchanged: v0.1 remains frozen,
  and this checkpoint does not alter that.

---

## 4. The Smallest Demonstrated Project OS Loop

Checkpoint 001 proposed no single operational loop; it proposed a layered
architecture (Steve, Project OS, Eolas, Build Profile, Council, Skills).
With three experiments of evidence now available, a narrower question can
be asked directly: what is the smallest loop the evidence actually
supports, independent of any of those unbuilt layers?

The candidate loop offered for testing was:

> Understand current state → retrieve relevant knowledge → preserve
> established decisions → identify the meaningful decision → gather
> proportionate evidence → act inside established boundaries → stop at
> consequential boundaries → capture material learning → allow subsequent
> work to begin ahead of zero

Checked against the evidence:

- **Understand current state** — evidenced in 001 (greenfield intake), 002
  (existing-repo intake), 003 (reading `PROJECT-OS.md`/`docs/MVP.md`
  instead of the raw project). Holds.
- **Retrieve relevant knowledge** — evidenced narrowly in 003 only, and
  only because the target artefact was named explicitly (`PROJECT-OS.md`,
  `docs/MVP.md`), not discovered by the framework unprompted. This step
  should be read as "consult the named accumulated artefact," not
  "autonomously retrieve relevant precedent from anywhere." The latter
  remains hypothesis.
- **Preserve established decisions** — evidenced in all three.
- **Identify the meaningful decision** — evidenced in 001 and 002
  directly; less central to 003, which focused on knowledge continuity
  rather than a single consequential decision.
- **Gather proportionate evidence** — evidenced in 001 (real data over
  documentation assumptions) and 002 (targeted risk check, not a general
  audit); 003 shows the inverse risk (unverified claims propagating
  forward) more than it shows this step working well.
- **Act inside established boundaries** — evidenced in all three (frozen
  phases in 001; inherited decisions in 002; bounded MVP scope in 003).
- **Stop at consequential boundaries** — strongly evidenced in 001 and 002;
  not directly exercised in 003.
- **Capture material learning** — evidenced in all three via each
  experiment's own evidence log and, in 003, via `PROJECT-OS.md` itself
  functioning as the capture point.
- **Allow subsequent work to begin ahead of zero** — evidenced in 003
  only, and only same-project.

**Assessment:** the candidate loop is largely supported, with one
correction. "Retrieve relevant knowledge" should not yet be described as
an autonomous retrieval capability — the evidence only supports "consult a
named, already-accumulated artefact when instructed to." Framed that way,
the loop is a reasonable synthesis of what has actually been observed
rather than a predetermined framework change, and it is adopted here as a
description, not a specification.

### What Is Project OS Becoming?

Based on evidence, not aspiration, Project OS is functioning primarily as
a **decision-and-knowledge loop**, not:

- a *project-management framework* — it does not track tasks, timelines or
  resourcing; nothing in any experiment exercised that.
- a *documentation framework* — documentation (PROJECT-OS.md, MVP.md,
  evidence logs) is a byproduct and a carrier of state, not the objective;
  Principle 7 already states this, and the experiments are consistent with
  it.
- a *development methodology* — it does not prescribe how code gets
  written; it prescribes when to stop, what to preserve, and what counts
  as a meaningful decision.

It is closest to a **decision-and-knowledge loop**: a lightweight
mechanism for establishing current state, preserving prior decisions,
recognising consequential moments, and leaving behind exactly enough
captured knowledge that the next pass through the same loop — so far,
demonstrated only within the same project — starts ahead of zero.

---

## 5. Candidate Disposition

### PROMOTE CANDIDATES

These have sufficiently repeated or material evidence to justify
consideration for a future principle change. This checkpoint does not
change PRINCIPLES.md or v0.1.

1. **Operating at meaningful decision boundaries rather than routine
   approval points.** Evidenced positively in 001/002 and negatively in
   003 (fine-grained approval loops caused disproportionate friction;
   larger packets at boundaries worked better). This is largely already
   covered by Principle 3 (Consequence Determines Depth) and Principle 4
   (Stop Work as Readily as Start It). Recommendation: on any future
   principles revision, clarify Principle 3/4 to explicitly address
   *approval granularity*, not only analysis depth — the new evidence is
   about how often to interrupt, not only how hard to think.

2. **Inherited knowledge must not automatically be treated as
   authoritative.** Evidenced in 003 (Stage B claims required later
   verification; Stage C confirmed the general risk). This is adjacent to
   but not fully covered by Principle 5 (Preserve Decisions Until Evidence
   Warrants Reopening Them), which addresses *whether to reopen* a
   decision, not *whether to trust* an inherited claim in the first place.
   Recommendation: on a future revision, consider whether Principle 5
   needs a companion clause distinguishing "preserve a decision" from
   "verify a claim before relying on it," rather than inventing a new
   principle.

3. **Evidence should be verified against the actual target/state where
   consequence warrants it.** Already substantially covered by Principle 2
   (Current State Before Reconstructed History) and Principle 3
   (Consequence Determines Depth), and directly reinforced by 001's
   local/remote evidence-misread mistake and 003's reported-push
   discrepancy. Recommendation: no new principle; this is existing
   principle, twice reinforced.

### WATCH

Promising findings that need more evidence before any framework action.

- **Provenance/freshness as explicit knowledge metadata** — named directly
  in 003 as unresolved by v0.1 (some correctness-critical information
  could not be authoritatively verified). Needs more than one experiment
  before treating it as a structural gap rather than a one-off.
- **Selective retrieval** — 003 reported low retrieval noise, but only two
  named artefacts were involved in a single project. This says nothing yet
  about retrieval at the scale Eolas envisions (many projects, many
  candidate precedents).
- **Project posture** (Checkpoint 001 §6) — still an unvalidated
  hypothesis; no experiment has yet exercised it.
- **Accumulation-without-selection risk** — named as a plausible failure
  mode in 003's evidence log but explicitly not observed to occur. Worth
  watching as accumulated knowledge volume grows, not worth acting on now.
- **Stop/build tension where authoritative evidence is unavailable** — 003
  surfaced a real case (correctness-critical information not verifiable
  online) that v0.1 does not resolve. This is a genuine open question, not
  yet a pattern, since it has only been observed once.
- **Inherited-progress measurement** — Checkpoint 001 posed "how much
  solved work can Project OS prevent us from solving again?" 003 provides
  the first qualitative answer (recall: strong; manual correction: none)
  but no quantitative measure exists. Watch, don't build a metric yet.

### DEFER

Insufficiently evidenced, or would prematurely expand Project OS.
Deferred, not rejected — there is not enough evidence to build these now.

- **Eolas implementation** — no experiment has tested cross-project
  retrieval, which is Eolas's entire premise. Building it now would be
  designing to a hypothesis rather than to evidence, in direct tension
  with Principle 1.
- **Council implementation** — no experiment has exercised multi-specialist
  challenge; 002's risk escalation was handled without a Council
  construct.
- **Build Profile automation** — no experiment has generated or tested a
  cross-project preference/default artefact; 003's `PROJECT-OS.md` was
  project-local, not a portable profile.
- **Automatic agent/workforce orchestration** — no experiment has required
  more than one working agent role at a time.
- **Automatic guardrail activation** — all guardrail behaviour observed so
  far was explicitly instructed by experiment design, not triggered
  autonomously.
- **Sophisticated context budgeting** — no experiment has hit a context
  constraint that required active budgeting; 003's retrieval noise was
  reported low with a naive "read the two named files" approach.
- **Token optimisation** — not exercised or measured in any experiment.
- **Full lifecycle governance** — no experiment has spanned more than a
  narrow slice of the lifecycle described in Checkpoint 001 §5.
- **Portfolio automation** — explicitly out of scope per Checkpoint 001
  §10 and untouched by any experiment since.

---

## 6. Separating Framework Friction From Tooling Friction

### Framework/Process Friction

- **Existing-project `PROJECT-OS.md` seam** (002) — v0.1 prescribes
  creating this artefact during Intake; adopting into an existing active
  project created a repeated seam. Still unresolved; recorded again here,
  not fixed.
- **Approval-granularity mismatch** (003) — the fine-grained
  ChatGPT → Steve → local-worker → Steve → ChatGPT loop created
  disproportionate friction relative to value per round trip. This is a
  process-design friction, not a tooling defect: the framework does not
  currently say how coarse or fine approval checkpoints should be.
- **Unresolved stop/build tension** (003) — v0.1 has no explicit answer
  for what to do when correctness-critical information cannot be
  authoritatively verified. This is a genuine framework gap, not a tool
  failure.
- **Knowledge authority/provenance ambiguity** (003) — v0.1 does not
  currently ask an agent to record where a piece of inherited knowledge
  came from or how fresh it is. This is a framework gap, evidenced once.

### Tooling/Operational Friction

- **GitHub integration HTTP 403** (003) — a specific integration path
  failed; local execution was substituted. This is a tooling limitation,
  not evidence that Project OS's decision loop is broken.
- **Local/remote push discrepancy** (003) — a reported push did not
  initially appear remotely; caught by remote verification at a
  checkpoint. This is a tooling reliability issue. It does, however,
  reinforce the already-principled behaviour (Principle 2, and the
  general lesson from 001's local/remote evidence misread) of verifying
  against the real remote state rather than trusting a reported result —
  no framework change indicated, the existing discipline already covers
  it.
- **Execution-tool limitations generally** — the multi-hop approval loop
  in 003 was partly a tooling constraint (separate systems requiring
  round trips) layered on top of the process-design friction above. The
  process-design half is framework evidence (see above); the mechanical
  hop-count is tooling evidence and is not, by itself, grounds to change
  Project OS.

No tooling defect identified above is being used here to justify a
framework change. Where a tooling issue and a framework gap co-occurred
(the approval loop), only the framework-relevant portion is carried into
Section 5.

---

## 7. v0.1 vs. v0.2 Decision

**Recommendation: B — keep Project OS v0.1 frozen through another targeted
experiment.**

Rationale, from the evidence rather than from the shape of this prompt:

- The strongest new evidence in this checkpoint — same-project knowledge
  compounding — is genuinely one experiment deep. It is also the single
  most important data point for the Steve 2.0 proposition, because the
  proposition's value is proportional to how well knowledge transfers,
  and transfer has only been shown *within* one project's own boundary so
  far.
- The larger Steve 2.0 proposition (Checkpoint 001, throughout) depends on
  knowledge moving *between different projects*. That is currently
  untested. Every "PROMOTE" and "WATCH" item above is either already
  substantially covered by an existing principle or is not yet evidenced
  strongly enough to justify a v0.2 principle change — there is no
  backlog of validated, un-adopted framework changes waiting on v0.2.
  Designing v0.2 now would mean encoding assumptions about cross-project
  retrieval, provenance and Eolas-shaped mechanisms before any experiment
  has tested whether those mechanisms are even the right shape.
- The observed friction (Section 6) splits cleanly into one tooling
  category that needs no framework response, and a framework category
  (approval granularity, the PROJECT-OS.md adoption seam, provenance, and
  the stop/build tension) that is real but is evidenced from single
  experiments each. Principle 1 (Evidence Before Framework) counsels
  against acting on single-experiment evidence when it can be
  strengthened by one more targeted test.
- Running the cross-project experiment first is very likely to produce
  sharper, more specific evidence about exactly which v0.2 mechanism (if
  any) is needed — e.g., whether the gap is retrieval, provenance,
  selection, or something not yet named — rather than guessing at v0.2's
  shape now and re-litigating it after the cross-project result arrives
  anyway.

This is not a default or reflexive choice to keep v0.1 frozen. If the
cross-project experiment below produces the same strength of result that
Experiment 003 produced same-project, that would materially strengthen the
case for v0.2 design immediately afterward.

---

## 8. Candidate Experiment 004

**Proposed research question:**

> Can relevant knowledge generated in one completed project materially
> improve work in a different project, without importing irrelevant
> history or assumptions from the source project?

**Why this is next:** it is the single highest-leverage unanswered
question raised by this checkpoint. Every remaining PROMOTE/WATCH item
that matters to the larger Steve 2.0 proposition — provenance, selective
retrieval, inherited-progress measurement, and whether Eolas-shaped
retrieval is even the right mechanism — depends on knowing whether
cross-project transfer works at all before any of those mechanisms can be
usefully designed.

**What uncertainty it resolves:** whether the compounding behaviour
demonstrated in Experiment 003 is a general Project OS capability or an
artefact of working inside a single continuous project where the
accumulated knowledge was never at risk of being irrelevant, stale, or
wrongly transplanted. A positive result would convert Checkpoint 001's
still-hypothetical claim ("previous projects may provide meaningful
reusable precedent") into demonstrated evidence for the first time. A
negative or mixed result would identify exactly what selection or
provenance mechanism is missing, which is precisely the information v0.2
design would otherwise have to guess at.

This checkpoint does not design Experiment 004 in detail. No Experiment
004 files are created by this document.

---

## 9. Framework Status

Project OS v0.1 remains:

**FROZEN**

This checkpoint records strategic learning from Experiments 001–003. It
does not alter PRINCIPLES.md, templates/PROJECT-OS.md, ROADMAP.md, any
existing experiment, or any existing evidence log. Any future v0.2
proposal should be evaluated against the full evidence base recorded here
and in Checkpoint 001, not against this checkpoint's synthesis alone.
