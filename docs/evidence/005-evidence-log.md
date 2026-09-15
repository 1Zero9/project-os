# Experiment 005 — Evidence Log

- **Experiment question.** Can product/architecture-level knowledge
  generated in a genuinely independent project materially improve work in
  a different project without importing irrelevant history, assumptions,
  or implementation detail?
- **Target:** RVR2026 (`rivervalleyrangers.ie`), Phase 1 lock commit
  `4cc9be0`.
- **Independent source:** Marvin, commit `c4e0d9f`
  (`docs/production-readiness.md`, Gates 4 and 5).
- **Knowledge packet (locked, Phase 1):**
  1. Push aggregation/pagination into the database as per-tenant data
     volume grows.
  2. Separate liveness/readiness health checks, readiness gated on real
     dependency health within a bounded timeout.
- **Target Phase 2 implementation commit:** `a3d609aa2c870349e7820b5ecb47360e65d9b8eb`.

## Baseline

Selected from RVR2026-native evidence alone: `docs/uat/sitewide-uat.md`
UAT-008 (P1 — a competition state-transition action reachable without its
own server-side authz check), predating the Phase 2 commit, plus thin authz
test coverage relative to the admin surface area. Neither knowledge-packet
item addresses authorization; the baseline packet did not draw on Marvin.

## Implementation (verified)

- `lib/admin/require-admin.ts` and `lib/competitions/auth-helpers.ts`:
  role/assignment checks extracted into pure predicates
  (`isSiteAdminRole`, `isSuperAdminRole`, `isAuthorizedEventAssignment`,
  `isAuthorizedPitchAssignment`), separated from `redirect`/session/DB
  side effects.
- `tests/authz-helpers.test.ts`: new suite, including an explicit UAT-008
  regression case.
- Verified directly: `npm test` → 14/14 passing (8 new authz tests among
  them). No Marvin terminology, entities, or domain concepts
  (recipe/cookbook/household) found in the changed files.

## Per-item transfer result

**Item 1 (DB-side pagination/aggregation) — REJECTED.**
Phase 2 reasoning: RVR2026's largest `findMany` calls already use `take`
bounding; no evidence of unbounded per-tenant data growth. Verified:
exactly one `findMany`-using file combines `findMany` with `take` in a
spot check, consistent with bounding already being present; no
implementation change resulted.

**Item 2 (liveness/readiness split) — ADAPTED / DEFERRED.**
Phase 2 reasoning: RVR2026 already has `GET /api/health`, which combines
environment-variable presence and a DB `SELECT 1` check into one
liveness-and-readiness-like response. Verified directly (`app/api/health/route.ts`):
the DB check has no explicit bounded timeout — it relies on whatever
default the Prisma/driver connection uses, not an application-level
timeout as Marvin's item specifies. Not implemented, to avoid expanding
frozen baseline scope.

## Counterfactual analysis

**Would the authorization extraction/tests have happened without
Marvin's packet?** Yes. The trigger (UAT-008, thin authz coverage) is
target-native and predates the Phase 2 commit in the repository's own
history. The authorization improvement is therefore excluded from
evidence of cross-project transfer, per the locked protocol.

**Item 1 — did rejection provide material value beyond observing the
target lacked the source problem?** No. The check performed (confirming
existing `take` bounding) is useful selectivity — it avoided
introducing unneeded complexity — but it is not itself a material
improvement to RVR2026; nothing changed as a result.

**Item 2 — does identifying the unbounded health-check timeout
constitute material improvement?** No. It is a useful but unimplemented
insight: a real, specific, verified gap was correctly identified
(confirmed by direct inspection of `app/api/health/route.ts`), but
nothing in RVR2026 changed. Under the locked classification model,
discovery without implementation does not meet "material improvement
demonstrated."

## Contamination

No Marvin-specific terminology, entities, domain concepts, page-size
constants, index definitions, or timeout values were found in the
changed or referenced RVR2026 files. Both packet items were discussed
only at the level of their portable, source-agnostic extraction
(Section E of the Phase 1 document), consistent with the contamination
boundary. **Result: no contamination found.**

## Temporal-isolation issue

The complete Phase 2 instruction contained both the baseline task and
the two knowledge-packet items in the same context, so the executing
agent was exposed to the packet before the baseline was frozen. The
packet itself was locked before Phase 2 began (satisfying Phase 1's
ordering requirement); the issue is exposure timing within Phase 2's
single-pass execution, not selection-order.

Assessment: **B — methodological weakness.** There is no mechanical
boundary (e.g., a committed baseline-selection marker written before the
packet was revealed) proving the baseline choice was uninfluenced by
seeing the packet. However, target-native baseline provenance is strong
independent of the agent's self-report: UAT-008 and the authz test gap
are pre-existing, independently verifiable RVR2026 facts (UAT-008 predates
this commit in the repo's own history), and neither transferred item
addresses authorization at all — there is no plausible mechanism by which
exposure to the packet could have produced this specific baseline choice.
This keeps classification credible but the boundary is weaker than an
enforced mechanical separation would provide, and is recorded as a
protocol weakness rather than waved away on the agent's self-report alone.

## Classification

**NOT SUPPORTED.**

No material improvement traceable to transferred knowledge was
demonstrated. The one concrete implementation (authorization
extraction/tests) is excluded from consideration by the counterfactual
result above — it would have happened regardless of the packet. Item 1
was rejected with no resulting change. Item 2 produced a correctly
identified but unimplemented insight, which the locked classification
model does not treat as material improvement. No contamination occurred,
so the null hypothesis is not explained by contamination either — it is
explained by the packet simply not producing a materially different or
better outcome in the target, within the scope this Phase 2 was willing
to expand.

## Limitations

- Single-pass Phase 2 execution combined baseline and packet in one
  instruction (see temporal-isolation assessment, B).
- Item 2's "would be useful" judgment is itself an assessment, not an
  implemented and observed outcome — it remains unverified whether adding
  a bounded timeout would have surfaced any real operational value.
- Packet is two items from one source project; findings do not generalize
  to packets of different size, domain, or source.

## Lean-protocol observation

The three-phase / two-document structure (pre-design, single locked Phase
1 document, this Phase 3 evidence log) preserved enough evidence to reach
a confident classification without Experiment 004's six-gate apparatus.
Ceremony successfully removed: no per-gate commit-and-review cycle was
needed to reach a defensible NOT SUPPORTED result. The control that
turned out to be too weak: nothing enforced a hard boundary between
baseline selection and packet exposure within Phase 2 — the single
combined instruction let the executing agent see both before freezing
either. A future lean experiment could plausibly add a small mechanical
baseline-freeze boundary (baseline written to a committed marker before
the packet is revealed, Phase 2A/2B) without reinstating Experiment 004's
full gate model; this is recorded as an observation only, not a proposed
framework change.

## Promotion / watch / defer

- **DEFER** — bounded dependency-timeout on health checks (Item 2):
  real, specific, verified gap in RVR2026's `/api/health`, correctly
  identified but out of this experiment's scope to implement.
- **REJECT** — DB-side pagination/aggregation (Item 1) for RVR2026 as
  currently understood: no evidence of the triggering condition
  (unbounded per-tenant growth) existing in the target.
- **WATCH** — mechanical baseline-freeze boundary for future lean
  experiments (Phase 2A/2B split), per the lean-protocol observation
  above; not a promotion candidate, a process note for a future
  experiment design only.
- No PROMOTION CANDIDATE identified for Project OS v0.1. v0.1 remains
  FROZEN; no framework file was read for modification or modified in
  producing this log.
