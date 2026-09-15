# Experiment 003 — Compounding Project Knowledge

- **Experiment:** Golf Club Tools
- **Type:** Compounding Knowledge (multi-stage same-project evolution)
- **Project OS version tested:** v0.1
- **Status:** Closed

## Provenance

The Golf Club Tools repository is the authoritative evidence source for this
experiment. This document summarises that evidence; it does not restate
Golf Club Tools' product decisions.

- Repository: https://github.com/1Zero9/golf-club-tools
- Stage A commit: `e8632aee05431e737e0cd2e21dc29c7a64376eea`
- Stage B commit: `0a513fa526c8b6256898ecb55003805d9a353292`
- Stage C commit: `7a86ed774ae4b8790f5247c7c14a3ce35f38c1a6`

## Experiment Question

Can Project OS capture and reuse knowledge generated during project work so
that subsequent work begins with useful accumulated context rather than
starting from scratch?

## Hypothesis

If meaningful project knowledge is captured as work progresses and made
available to subsequent work, later tasks should require less rediscovery,
preserve previous decisions more reliably, and make better use of earlier
learning.

## Starting Condition

Golf Club Tools was carried through three sequential stages within the same
project, using Project OS v0.1 unmodified throughout:

- **Stage A** established and captured project knowledge in
  `PROJECT-OS.md`.
- **Stage B** was deliberately started without manually restating Stage A's
  product context, to test whether the accumulated artefact alone was
  sufficient.
- **Stage C** was instructed to consume `PROJECT-OS.md` and `docs/MVP.md`
  rather than being manually given the accumulated product decisions again.

## Adoption Boundary

Allowed:

- inspect and rely on `PROJECT-OS.md` and `docs/MVP.md` as accumulated
  project knowledge
- carry forward prior decisions and constraints into later stages
- generate new durable knowledge at each stage
- flag claims requiring later verification rather than treating all
  inherited knowledge as automatically authoritative

Not allowed by default:

- manually restating Stage A's product/project context at the start of
  Stage B
- manually restating accumulated A+B product decisions at the start of
  Stage C
- redesign or modify Project OS v0.1 during the experiment

## Framework Constraint

Project OS v0.1 is **FROZEN**.

Any difficulty, omission, ambiguity or friction encountered while
accumulating and reusing knowledge across stages is experiment evidence.

It is not permission to change the framework during Experiment 003.

## Intervention

Project OS v0.1 was applied exactly as currently defined across three
sequential stages of the same project, with each later stage deliberately
denied a manual restatement of context that a prior stage had already
captured.

## Evaluation

The experiment evaluates Project OS against:

- **Recall** — whether prior decisions and constraints were recovered from
  accumulated knowledge without being manually restated.
- **Application** — whether recovered knowledge was actually used to shape
  the next stage's work rather than merely being present.
- **Continuity** — whether the product/project scope and character were
  preserved across stages without drift.
- **Compounding** — whether each stage added new durable knowledge that
  became available to the next.

## Success Condition

Experiment 003 is successful if accumulated knowledge materially reduced
rediscovery, was correctly recovered and applied, preserved prior decisions
and scope across stages, and grew stage-over-stage — without requiring
Steve to manually restate context Project OS had already captured.

Producing additional documentation alone is not success.

## Failure Signals

Evidence against the hypothesis includes:

- later stages requiring the product/project context to be manually
  restated
- prior decisions being lost, contradicted, or reopened without new
  evidence
- accumulated knowledge failing to influence subsequent work
- retrieval noise or irrelevant accumulated material crowding out useful
  context
- scope drift introduced by, or despite, accumulated knowledge
- Project OS treating inherited knowledge as automatically authoritative
  without regard to provenance or verification

## Outcome

**SUPPORTED, with qualifications.**

Stage A created knowledge. Stage B consumed Stage A's knowledge and created
new knowledge. Stage C consumed the accumulated Stage A + Stage B knowledge
and produced a stronger, bounded working implementation. Later work
demonstrably did not begin from zero.

Specifically:

- Stage B recovered the existing decisions captured in `PROJECT-OS.md` and
  used them to define a narrower MVP, without Steve needing to restate the
  project's product context.
- Stage B generated additional durable knowledge and explicit verification
  gaps as it worked.
- Stage C consumed `PROJECT-OS.md` and `docs/MVP.md` and produced working
  software from that accumulated context, again without Steve restating
  prior decisions.
- Stage C preserved the Donabate-specific, question-first, deliberately
  bounded scope established earlier in the chain.
- Stage C generated further reusable learning of its own.

This is not a claim that every inherited fact was correct. Stage B
contained factual/rules claims requiring later verification, and Stage C
demonstrated that inherited project knowledge must not automatically be
treated as authoritative truth. Provenance, freshness and verification
matter when accumulated knowledge drives consequential decisions, and this
verification problem is itself part of the experiment result, not a
footnote to it.

Qualitative observations across Stage B/C:

- Context Steve had to repeat during B/C: **None**
- Prior decisions recovered: **Strong**
- Relevant constraints respected: **Strong**
- Retrieval noise: **Low**
- Scope drift caused by accumulated knowledge: **None observed**
- Manual contextual correction by Steve during B/C: **None**
- New durable knowledge created at each stage: **Yes**

Full evidence, including operational friction and open verification
questions, is recorded in:

`docs/evidence/003-evidence-log.md`

## Framework Changes

**NONE.**

Project OS v0.1 remained frozen throughout Experiment 003.
