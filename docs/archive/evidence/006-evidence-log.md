# Experiment 006 Evidence Log — Ground Control Within-Project Knowledge
# Replication

Evidence extracted from Experiment 006, a replication of Experiment 003.
All entries are single-project observations. None are promoted into
Project OS framework rules by this log.

Source: Experiment 006 / Ground Control — see
[`006-within-project-knowledge-replication.md`](../experiments/006-within-project-knowledge-replication.md)
for Phase 1 provenance (project selection, historical knowledge packet).

## Provenance

- Project OS repository: this repository (local), Project OS v0.1, FROZEN
  throughout.
- Target repository: Ground Control (local, `/Users/stephencranfield/Projects/Ground Control`).
- Historical knowledge packet: three items drawn from Ground Control's own
  `docs/TECHNICAL.md`, each traced to a specific prior commit (`a2034b3`,
  `05652fd`/`9fcb47e`/`0053b72`/`8b25c94`/`aec594b`, `1de4e41`), 15+ days
  before this experiment. See Phase 1 for full text.
- Mechanical blind baseline commit: `666744068dcd05fbe9210bddca3f220652c75579`
  (`.experiment-006-baseline.md`, Ground Control).
- Implementation commit: `6bd945df722d6bc327682865265915b4dc6a8db6`
  ("Add email verification on signup", Ground Control).
- Baseline was committed before the historical knowledge packet was brought
  into the execution context — confirmed by the two commits' sequential
  position in Ground Control's history (baseline immediately precedes
  implementation, same session, no intervening commit) and by the
  baseline document itself containing a full counterfactual implementation
  plan with no reference to the three packet items.

## Question

Can relevant knowledge generated earlier within a project materially
improve later work in that same project? (Replication of Experiment 003.)

---

## Per-Item Result

### Item 1 — Schema-change workflow (`db:generate` → `db:migrate`, not `db:push`)

Phase 2B disposition: ACCEPTED.

**Finding: confirmation, not material improvement.** The frozen baseline
plan (written before the packet was revealed) already specified, step 1,
"run `npm run db:generate` to produce the migration, then `npm run
db:migrate`." The implementation commit's migration
(`drizzle/0011_nice_natasha_romanoff.sql` + `drizzle/meta/0011_snapshot.json`
+ journal entry) shows this path was followed. Nothing in the
implementation differs from what the baseline already planned. Historical
knowledge confirmed current baseline reasoning; it did not change a
decision.

### Item 2 — Admin structural privacy invariant

Phase 2B disposition: ACCEPTED.

**Finding: irrelevant to the selected task.** The implementation commit's
file list contains no admin-related file; `git show --stat` for the
implementation commit returns zero matches for "admin". The email-
verification feature never touches `db/admin-queries.ts` or admin
architecture. The knowledge was accepted as still-valid but had no
task to apply to.

### Item 3 — Revocable stateless token / version-snapshot pattern

Phase 2B disposition: REJECTED FOR REUSE.

**Finding: explicit rejection, consistent with the baseline's own prior
reasoning, no material change.** The frozen baseline already proposed a
plain, non-versioned token for email verification (`{ userId, exp }`,
step 2 of the baseline plan) without reference to the invite-link
revocation pattern. The implementation's actual token helper
(`lib/auth/email-verification.ts`) and its commit message explicitly
reason through why the version-snapshot pattern does not apply here
("unlike the member-invite token... a plain signed 24-hour token is
enough"), and `docs/TECHNICAL.md`'s updated §7 item 18 repeats the same
reasoning. This is a documented, correct decision — but it is the same
decision the baseline had already reached independently, made more
explicit rather than materially changed. Recording a considered rejection
is useful hygiene, not evidence of a decision the current-state baseline
would not have reached on its own.

---

## Counterfactual

Comparing baseline (`6667440`) against implementation (`6bd945d`) directly:

- Schema change mechanism: identical (`db:generate` → `db:migrate`),
  planned in the baseline before the packet was revealed.
- Token design: identical (plain signed `{ userId, exp }`, 24h expiry, no
  version/revocation state), planned in the baseline before the packet was
  revealed.
- File/area list: implementation touches exactly the files and areas the
  baseline predicted (`db/schema.ts`, `lib/auth/email-verification.ts`,
  `lib/auth/actions.ts`, `app/verify-email/page.tsx`,
  `db/auth-queries.ts`, `lib/email.ts`, profile-view banner,
  `docs/TECHNICAL.md`/`docs/USER_GUIDE.md` updates).
- No admin-architecture code was touched, so Item 2 had nothing to act on.

**Phase 2B's claim of NONE is verified.** No material implementation,
design, or verification decision in the implementation commit differs
from what the frozen, pre-packet baseline plan already specified. Success,
tests, migration safety, and correct token semantics are all present in
the result, but they were already present in the baseline's plan and are
not attributable to the historical knowledge packet.

---

## Classification

**NOT SUPPORTED.**

No traceable material improvement from earlier project knowledge is
demonstrated. Current-state investigation (the mechanical baseline) alone
produced the same implementation, design, and verification plan that the
historical-knowledge-informed execution actually delivered. Item 1 and
Item 3 confirmed decisions the baseline had already made; Item 2 had no
task to apply to. This satisfies the locked NOT SUPPORTED criterion
directly: "current-state investigation would have produced the same
result without meaningful assistance from the historical knowledge."

---

## Comparison with Experiment 003

**Why historical knowledge helped in Experiment 003 but not here — supported
explanations (directly evidenced by this experiment and its baseline):**

- **Task/knowledge alignment differed.** Experiment 003's later stages
  (Stage B, Stage C) directly consumed and extended the same product/scope
  decisions the earlier stage had produced — the knowledge and the task
  were the same subject matter by construction. In Experiment 006, the
  selected task (email verification) was chosen from the project's own
  documented roadmap independently of the historical packet, and only one
  of three packet items (schema workflow) touched the task's actual
  mechanics at all; a second (admin privacy) was topically unrelated, and
  the third (token revocation) was topically related but not applicable.
- **Baseline documentation quality already contained the relevant
  knowledge.** Ground Control's own current-state artefacts (`docs/
  TECHNICAL.md`, the existing `lib/auth/token.ts`/`password-reset.ts`
  patterns visible in the codebase) already encoded the schema-workflow
  convention and the precedent for a stateless-token design well enough
  for a plain current-state investigation (the baseline) to reach the
  same conclusions unaided. Experiment 003's Stage A knowledge, by
  contrast, was not otherwise recoverable from current project state
  because it was itself the only record of prior product decisions.

**Plausible but unproven explanations:**

- Experiment 003 may have captured a favourable case for within-project
  compounding specifically because its "knowledge" was product/scope
  decisions with no other durable record, whereas Ground Control's
  `docs/TECHNICAL.md` functions as living, current documentation that is
  kept in sync with the codebase — meaning the same information is
  available through ordinary current-state reading, not only through
  historical retrieval. This is plausible given the evidence but not
  established across a wider sample.
- Project maturity/documentation discipline may generally reduce the
  marginal value of historical-knowledge retrieval specifically because
  well-maintained current docs already contain it. Only two data points
  exist; this cannot be treated as a general pattern from Experiments 003
  and 006 alone.

---

## Implication for Project OS

Checkpoint 004 flagged Experiment 003's within-project compounding result
as important but unreplicated (exactly one project, never repeated).

Experiment 006 is that replication and returns NOT SUPPORTED.

**Revised evidence strength for within-project knowledge compounding:
WEAK.**

One SUPPORTED result (Experiment 003) and one NOT SUPPORTED replication
(Experiment 006) do not establish a reliable, generalisable effect. The
two results are not contradictory once task/knowledge alignment and
baseline-documentation quality are accounted for (see comparison above),
but that account is itself only plausible, not proven, across a two-point
sample. Project OS should not treat within-project knowledge compounding
as a demonstrated general benefit going into any v0.2 design work.

No modification to Project OS v0.1 is made or implied by this entry.

---

## Knowledge-Value Distinction

The evidence in this experiment supports recording a distinction between:

**CURRENT AND CORRECT** — all three historical items remained accurate and
unreverted at time of use (verified directly: the migration workflow was
followed, the admin-queries file was untouched and unmodified, the token
design reasoning was explicitly restated and still held).

**DECISION-USEFUL** — a piece of knowledge changes what gets built,
without which the baseline result would have differed.

None of the three items were decision-useful in Experiment 006, despite
all three being current and correct. This is a meaningful distinction:
verifying that inherited knowledge is still true is not the same claim as
verifying that it mattered to the outcome.

Separately, the evidence also supports distinguishing **"saved rediscovery
effort"** from **"materially improved work."** Item 1 and Item 3 may have
saved the kind of effort a from-scratch investigation would spend
re-deriving the same convention/precedent — but the mechanical baseline in
this experiment was itself a from-scratch, current-state-only
investigation, and it reached the identical conclusions without the
historical packet. That is direct evidence, not inference, that no
rediscovery cost was actually avoided here: current-state investigation
was already sufficient. Reduced rediscovery effort is therefore NOT
credited as material improvement in this experiment, per the locked
classification criteria.

---

## Methodology Observation

The Phase 2A → Phase 2B mechanical baseline-freeze boundary (baseline
document committed before the historical packet enters the execution
context, with no approval gate between them) directly addressed
Experiment 005's temporal-isolation weakness: because the baseline is a
committed artefact with its own timestamp and commit hash, its
independence from the historical packet is verifiable after the fact
(as done in this log), not merely asserted. Without this boundary, the
counterfactual comparison in this experiment would rest entirely on
self-report ("I would have done X anyway"), which is materially weaker
evidence for a NOT SUPPORTED result — a null result is exactly the
classification most vulnerable to being produced by after-the-fact
rationalization rather than genuine independence. The boundary did not
add excessive ceremony: it required one extra commit and no additional
approval round-trip. This experiment's classification would be
substantially less credible without it. This is recorded as
experiment-method evidence only and is not promoted into normal Project
OS operation.

---

## Limitations

- Single replication. Two data points (Experiment 003 SUPPORTED,
  Experiment 006 NOT SUPPORTED) are not enough to establish a general
  pattern for when within-project knowledge compounding helps or doesn't.
- The selected task (email verification) was chosen, per Phase 1's own
  method, from the target project's documented roadmap before the packet
  was inspected — this avoided cherry-picking a favourable task, but also
  means task/knowledge alignment was not controlled for or guaranteed.
- Only one of three packet items had a plausible causal path to the
  selected task's core mechanics (schema workflow); the packet's
  topical breadth relative to the task was not itself a controlled
  variable.
- Verification of the implementation (typecheck/lint/test/build/migration/
  token round-trip) was reported by the executing session and re-checked
  here only via the resulting migration file and diff, not by independently
  re-running the full verification suite.

---

## Promotion / Watch / Defer / Reject Observations

- **REJECT** for promotion into Project OS v0.1 or v0.2 design: "within-
  project knowledge retrieval materially improves later work" as a general
  claim. Evidence strength is now WEAK, not strong, across two
  experiments.
- **WATCH**: the CURRENT-AND-CORRECT vs. DECISION-USEFUL distinction. This
  is a reusable framing for evaluating future knowledge-transfer
  experiments (within- or cross-project) and should be applied explicitly
  next time rather than rediscovered.
- **WATCH**: task/knowledge alignment and baseline-documentation quality
  as candidate moderating variables for when historical knowledge is
  decision-useful. Plausible but unproven; worth deliberately varying in
  any future replication rather than treating as settled.
- **DEFER**: any decision about whether the Phase 2A/2B mechanical
  baseline-freeze structure should become a standard Project OS experiment
  method. It worked well here (see Methodology Observation) but this is
  recorded as evidence only, per the experiment's own scope constraints —
  not adopted into normal operation by this log.
