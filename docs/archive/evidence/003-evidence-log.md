# Experiment 003 Evidence Log — Golf Club Tools Compounding Project Knowledge

Evidence extracted from Experiment 003. All entries are single-project
observations. None are promoted into Project OS framework rules by this
log.

Source: Experiment 003 / Golf Club Tools —
see [`003-compounding-project-knowledge.md`](../experiments/003-compounding-project-knowledge.md)
for provenance (repository and stage commits).

## Provenance

- Project OS repository: https://github.com/1Zero9/project-os
- Target repository: https://github.com/1Zero9/golf-club-tools
- Project OS version: v0.1
- Project OS state: FROZEN
- Stage A commit: `e8632aee05431e737e0cd2e21dc29c7a64376eea`
- Stage B commit: `0a513fa526c8b6256898ecb55003805d9a353292`
- Stage C commit: `7a86ed774ae4b8790f5247c7c14a3ce35f38c1a6`

## Experiment Question

Can Project OS capture and reuse knowledge generated during project work so
that subsequent work begins with useful accumulated context rather than
starting from scratch?

---

## Stage-by-Stage Evidence

### Stage A — Knowledge Establishment

Stage A established and captured project knowledge in `PROJECT-OS.md`.

This artefact became the accumulated project-knowledge substrate that
Stage B and Stage C were later required to rely on instead of a manual
restatement of context.

### Stage B — First Reuse

Stage B was deliberately started without manually restating Stage A's
product context.

Evidence:

- Stage B recovered the existing decisions captured during Stage A and
  used them to define a narrower MVP.
- Steve did not need to restate the project/product context at the start
  of Stage B.
- Stage B generated additional durable knowledge as it worked.
- Stage B also generated explicit verification gaps — claims made during
  Stage B required later verification rather than being treated as settled
  fact.

### Stage C — Second, Compounded Reuse

Stage C was instructed to consume `PROJECT-OS.md` and `docs/MVP.md`
directly, rather than being manually given the accumulated product
decisions a second time.

Evidence:

- Stage C produced working software from the accumulated A + B context.
- Stage C preserved the Donabate-specific, question-first, deliberately
  bounded scope established earlier in the chain, without drift.
- Stage C generated further reusable learning of its own, extending the
  accumulated knowledge base beyond what A and B had produced.
- Accumulated knowledge materially influenced subsequent work rather than
  merely being present alongside it.

---

## Retained Evidence

### Accumulated knowledge can substitute for manually restated project context

**Source:** Experiment 003 / Golf Club Tools.
**Observation:** Stage B and Stage C each recovered prior product/project
context from `PROJECT-OS.md` (and, for Stage C, `docs/MVP.md`) without
Steve manually restating it.
**Evidence:** Stage B commit `0a513fa526c8b6256898ecb55003805d9a353292`;
Stage C commit `7a86ed774ae4b8790f5247c7c14a3ce35f38c1a6`. Zero manual
context restatement or contextual correction by Steve was required during
either stage.
**Status:** NOT PROMOTED.

### Inherited project knowledge must not automatically be treated as authoritative

**Source:** Experiment 003 / Golf Club Tools.
**Observation:** Stage B introduced factual/rules claims that required
later verification rather than being settled fact, and Stage C's
consumption of accumulated knowledge demonstrated the same risk: knowledge
compounding forward does not itself certify correctness.
**Evidence:** Verification gaps recorded during Stage B; the general
pattern recurred when Stage C built on that accumulated (partially
unverified) knowledge.
**Status:** NOT PROMOTED.

### Provenance, freshness and verification matter when accumulated knowledge drives consequential decisions

**Source:** Experiment 003 / Golf Club Tools.
**Observation:** As knowledge accumulates and compounds across stages, the
question of where a given claim came from and whether it is still current
becomes load-bearing, not incidental.
**Evidence:** Some correctness-critical information encountered during the
experiment could not be authoritatively verified online, creating a
stop/build tension that Project OS v0.1 does not explicitly resolve.
**Status:** NOT PROMOTED.

### Accumulation without selection is a plausible failure mode, though not one that materially occurred here

**Source:** Experiment 003 / Golf Club Tools.
**Observation:** A framework that only ever adds knowledge without any
selection or pruning mechanism could in principle accumulate retrieval
noise that crowds out useful context.
**Evidence:** Retrieval noise was observed to be low across Stage B and
Stage C in this experiment; this risk is recorded as a named risk to watch
for, not as an observed failure.
**Status:** NOT PROMOTED.

### Larger autonomous work packets at meaningful decision boundaries outperformed fine-grained approval loops

**Source:** Experiment 003 / Golf Club Tools.
**Observation:** A fine-grained ChatGPT → Steve → local-worker → Steve →
ChatGPT approval loop created excessive operational friction relative to
the value returned per round trip.
**Evidence:** Larger autonomous work packets, delivered and checked at
meaningful decision boundaries, worked substantially better than the
fine-grained loop across the same experiment.
**Status:** NOT PROMOTED.

### Direct GitHub file creation through the ChatGPT integration failed and required a local execution path

**Source:** Experiment 003 / Golf Club Tools.
**Observation:** An attempted direct file-creation path through the
ChatGPT integration did not work.
**Evidence:** The attempt returned HTTP 403, requiring the work to be
executed locally instead.
**Status:** NOT PROMOTED.

### A reported push did not initially appear remotely

**Source:** Experiment 003 / Golf Club Tools.
**Observation:** A push reported as successful was not initially visible in
the remote repository.
**Evidence:** Remote verification at a meaningful checkpoint was what
surfaced the discrepancy; without that check, the missing push would have
gone unnoticed.
**Status:** NOT PROMOTED.

---

## Material Value

- Stage B recovered inherited decisions and narrowed MVP scope without any
  manual context restatement.
- Stage C consumed accumulated A + B knowledge and produced a stronger,
  bounded working implementation, again without manual context restatement.
- The Donabate-specific, question-first, deliberately bounded scope
  survived two further stages of work unmodified.
- Each stage produced new durable knowledge available to the next,
  demonstrating compounding rather than flat reuse.
- Remote verification at a checkpoint caught a push discrepancy that would
  otherwise have gone undetected.

## Material Cost

- Fine-grained multi-hop approval loops (ChatGPT → Steve → local-worker →
  Steve → ChatGPT) created disproportionate operational friction relative
  to the value of each round trip.
- A direct GitHub file-creation path failed (HTTP 403) and had to be
  substituted with local execution.
- Stage B and Stage C both carried claims that could not be authoritatively
  verified, leaving a stop/build tension unresolved by v0.1.

## Experiment Result

**SUPPORTED, with qualifications.**

Stage A created knowledge. Stage B consumed Stage A's knowledge and created
new knowledge of its own. Stage C consumed the accumulated Stage A + Stage
B knowledge and produced a stronger, bounded working implementation. Later
work demonstrably did not begin from zero.

This is not a claim that every inherited fact was correct — Stage B
generated claims requiring later verification, and Stage C confirmed that
accumulated knowledge cannot be treated as automatically authoritative.
These verification problems are part of the experiment's result, not a
qualification that can be set aside from it.

## Framework Changes

**NONE.**

Project OS v0.1 remained frozen throughout Experiment 003.
