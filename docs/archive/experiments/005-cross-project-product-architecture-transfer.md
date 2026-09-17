# Experiment 005 — Cross-Project Product/Architecture Knowledge Transfer

- **Experiment:** Cross-Project Product/Architecture Knowledge Transfer
- **Protocol:** `docs/strategy/EXPERIMENT-005-PREDESIGN.md` (commit `bf87742`)
- **Origin:** Strategic Checkpoint 003 (`docs/strategy/CHECKPOINT-003.md`,
  commit `9254423`)
- **Project OS version tested:** v0.1 (FROZEN throughout)
- **Status:** Phase 1 complete (design + selection locked). Phase 2 (baseline
  + transfer) not started.

## Experiment Question

Can product/architecture-level knowledge generated in a genuinely
independent project materially improve work in a different project without
importing irrelevant history, assumptions, or implementation detail?

## Secondary Observation

Can the deliberately leaner Experiment 005 structure (per the pre-design)
preserve enough evidence to support a credible classification? Recorded as
one paragraph at closure, per the pre-design's Section 10 — not elaborated
further here.

---

## A — Hypothesis

**Primary hypothesis.** A bounded piece of genuine product/architecture
knowledge generated in an independent project can materially improve work
in another project while remaining distinguishable from the source
project's own specific context.

**Failure / null hypothesis.** No material transfer-specific improvement is
demonstrated, or any apparent improvement depends on contamination or
unverified source assumptions rather than genuine relevant transfer.

## B — Classification Criteria (Locked, Reused From the Pre-Design)

**SUPPORTED** — a material improvement is demonstrated and traceable to
transferred knowledge, with no or only minor, self-corrected contamination.

**PARTIALLY SUPPORTED** — a material improvement is demonstrated, but the
result is genuinely mixed or includes contamination of at least moderate
significance that was not self-corrected.

**NOT SUPPORTED** — no traceable material improvement, or any apparent
improvement is explained by contamination rather than genuine relevant
transfer.

These criteria are locked as of this Phase 1 commit and will not be
modified after baseline or transfer work exists.

---

## C — Target Selection

Performed before any source project was inspected for this experiment.

**Candidate pool** (Steve's existing repositories, top-level metadata
only — recent activity, commit count, README where present; prior
Project OS experiment subjects — LaunchCity, Lastman, Golf Club Tools,
Tally — excluded outright, consistent with Experiment 004's Gate 2
practice, since reusing an already-tested subject would not constitute
an independent test):

| Candidate | Last commit | Commits | Notes |
|---|---|---|---|
| **RVR2026** | 2026-08-27 | 334 | Production Next.js/Prisma/Postgres platform for a sports club: public site, fixtures, registrations, campaigns, safeguarding workflows, announcements, role-based admin, season rollover, cron jobs. Active, substantial, well-documented (README + SETUP.md). |
| rvrmatchday | 2025-11-30 | 328 | Substantial but stale (~9.5 months since last commit). |
| rivervalley-rangers-cms | 2025-09-15 | 1 | Effectively unstarted/abandoned; same domain family as RVR2026. |
| RVR 2014 Team Admin | 2026-09-12 | 36 | Recently active but small; same domain family as RVR2026. |
| 1Zero9Studio | 2026-09-02 | 173 | Recent, substantial commit count, but no README — purpose cannot be confirmed against criteria without deeper inspection than a target-selection pass should require. |
| chewing_gum | 2026-09-02 | 86 | Recent, real (native macOS Swift menu-bar utility), but narrow in functional surface — a sticky-note utility, less scope for genuine architecture-decision work than a multi-workflow production platform. |
| Ground Control | 2026-08-31 | 62 | Recent, real (household calendar/mission-control app with plug-in modules). Legitimate candidate, but domain-adjacent to already-used household-management subjects (Tally, and — before selection below — Marvin), which would have made the eventual candidate pool for source knowledge topically crowded. |
| QualFM | 2026-07-17 | 85 | No README; over two months since last commit relative to today (2026-09-15) — weaker on recency than RVR2026. |
| Marvin | 2026-08-05 | 135 | Real, substantial, well-documented — reserved as a **source** candidate below rather than target, given the depth of its dedicated architecture/production documentation. |
| vecta | 2026-09-03 | 30 | Real and active but small commit history; already passed over as an Experiment 004 target candidate for the same reason (insufficient substance relative to stronger candidates). |
| lucy | 2026-09-12 | 30 | Same as vecta — small, already passed over once for this reason. |
| 109-jobjar | 2026-03-23 | 198 | Substantial but stale (~6 months since last commit). |
| astra | 2026-02-18 (repo); Nov 2025 (README's own "Last Updated") | 611 | Largest commit count in the pool but clearly stale by its own self-reported status. |

**Selection criteria applied** (consistent with Experiment 004):

1. Real, currently active project.
2. Meaningful implementation already exists.
3. Substantial further product/architecture work is plausible.
4. Enough native context exists to produce a genuine baseline.
5. Suitable domain/complexity for product/architecture-level decisions
   (not merely a small utility).
6. Independent enough from likely source material for a genuine
   cross-project test (assessed only via what Section 4 already
   establishes — no source candidates were inspected before this point).

**Selected target: RVR2026.**

**Rationale.** RVR2026 has the most recent substantial commit activity of
any strong, non-prior-subject candidate (334 commits, last commit 19 days
before this selection), a real production deployment
(`rivervalleyrangers.ie`), and a functional scope — registrations,
campaigns, safeguarding workflows, role-based administration, season
rollover — wide enough to plausibly contain genuine, non-trivial
architecture and product decisions worth testing transfer against. It was
not selected because any convenient source knowledge was already known to
apply to it — no source project had been reviewed at the point this
selection was made.

**Rejected candidates and reasons:** see table above; in summary,
rvrmatchday/109-jobjar/astra fail on recency; rivervalley-rangers-cms
fails on substance; 1Zero9Studio/QualFM fail on confirmable purpose;
chewing_gum/Ground Control are real and active but narrower in scope or
domain-adjacent to material likely to matter for later source selection;
vecta/lucy fail on substance (already passed over once for the same
reason in Experiment 004); Marvin and RVR 2014 Team Admin were reserved
rather than rejected outright — Marvin for its documentation depth
(assessed only after target lock, see Section D), RVR 2014 Team Admin
excluded specifically because it shares a domain family with RVR2026 and
would not test independence.

**Limitations/biases.** As in Experiment 004, the candidate pool was
limited to Steve's own repositories and recency/commit-count were used as
proxies for "real and substantial" — imperfect but consistent with prior
practice. Assessor familiarity with all candidates cannot be fully
eliminated; the criteria-first, table-based method is intended to make
that reasoning auditable rather than to claim it away.

**TARGET IS LOCKED: RVR2026.** No source project was reviewed, searched
for, or considered before this point. This selection is not changed by
anything discovered afterward.

---

## D — Source Selection

Performed only after Section C above was written. RVR2026 was not
inspected beyond its README and the one-line SETUP.md pointer already
quoted in Section C ("environment variables, authentication, cron jobs,
and season rollover") — no further RVR2026 file was opened, and no
RVR2026 weakness was sought, before the source below was chosen.

**Candidate source pool** (excluding prior Project OS experiment subjects
and the RVR-family repositories already excluded in Section C on
independence grounds — rvrmatchday, rivervalley-rangers-cms, RVR 2014
Team Admin, and RVR2026 itself):

1Zero9Studio, Bookworm, Clenicacare, Ground Control, IMS, Learn2Learn,
LearningThroughMotion, **Marvin**, QualFM, Runway, SWGOH,
Tieronesportsevents, Ultra Health Optimiser 3000, astra, chewing_gum,
dashboard, eolas, life-admin-system, lucy, vecta, WinstonOnLine, Vision,
109-jobjar.

**Selection method.** Candidates were assessed only on whether they
plausibly satisfy the pre-design's independent-source definition
(`EXPERIMENT-005-PREDESIGN.md` §7), specifically on the criterion most
distinguishing among them at a top level: whether genuine
product/architecture knowledge with **traceable, already-articulated
provenance** exists, without requiring deep inspection of every
candidate. Of the pool, Marvin stands out uniquely on this dimension: it
maintains a dedicated, dated, gate-structured
`docs/production-readiness.md` recording specific, checked-off
architecture and operational decisions with their rationale, in the same
spirit as Experiment 004's preference for sources with
"already-extracted, evidenced" knowledge. No other candidate in the pool
was observed (at README level) to carry an equivalent dedicated
architecture-decision artefact — `eolas` was deliberately not considered
further, despite being plausible on paper, because its own purpose (a
prototype knowledge/reuse layer for Project OS itself) risks a confusing
circularity between "the source of transferred knowledge" and "the thing
Project OS is trying to decide whether to build"; excluding it is a
conservative, protocol-protective choice, not a finding about its merit.

**Independence check against `EXPERIMENT-005-PREDESIGN.md` §7:**

1. **Not a previous Project OS experiment subject.** Confirmed — Marvin
   has never been a target or source in Experiments 001–004.
2. **Developed independently of the target, no shared lineage.**
   Confirmed — Marvin (household cooking/meal-planning) and RVR2026
   (sports club administration platform) are unrelated in domain,
   origin, and codebase. Both happen to use Next.js/Prisma/PostgreSQL,
   which is a common personal technology preference across many of
   Steve's projects, not evidence of a shared codebase, template, or
   direct copying between these two specific projects.
3. **Contains genuine, project-generated product/architecture
   knowledge.** Confirmed — `docs/production-readiness.md`'s gate items
   are stated as specific, dated, checked-off decisions tied to real
   encountered problems (e.g., unbounded per-household data growth), not
   generic advice.
4. **Sufficient provenance exists.** Confirmed — every item selected
   below is traceable to a specific named gate and bullet in
   `docs/production-readiness.md`, at Marvin commit `c4e0d9f`.
5. **Not selected because its features conveniently match a known target
   weakness.** Confirmed — RVR2026 was not inspected beyond its README
   before Marvin was chosen, and the specific items selected below (see
   Section E) deliberately exclude Marvin's Gate 1
   (authentication/rate-limiting) content precisely because RVR2026's
   README/SETUP.md pointer already visibly mentions "authentication" —
   selecting Marvin's auth-hardening content would risk exactly the
   appearance-of-targeting problem Experiment 004's Gate 3 was built to
   avoid. This exclusion is recorded here as a deliberate, conservative
   choice, consistent with that precedent.

**Selected independent source: Marvin** (commit `c4e0d9f`, 2026-08-05).

---

## E — Product/Architecture Knowledge Packet (Two Items)

### Item 1 — Push aggregation and pagination into the database as per-tenant data volume grows

- **Source artefact:** Marvin `docs/production-readiness.md`, Gate 4
  ("Performance, UX, and accessibility"), commit `c4e0d9f`.
- **Original problem/context.** Marvin's cooking-history and cookbook
  data grow without bound per household. Loading the full history into
  the server process to compute summaries (or to render a full index)
  created a scaling risk as that data grew. The resolution: paginate
  index/history views, compute cooking summaries directly in PostgreSQL
  instead of loading every log row into the server process, and add
  trigram/compound indexes to support the relevant search and lookup
  paths.
- **Extracted knowledge.** When a data set backing a list view or a
  computed summary can grow unboundedly per tenant or user, push
  pagination and aggregation into the database query itself, rather than
  loading the full result set into the application process to compute it
  there.
- **Why it appears portable.** Stated independent of Marvin's specific
  domain (recipes, cookbooks) — it is a general data-volume/query-
  architecture lesson about *where* aggregation work should happen as
  per-tenant data grows, applicable to any multi-tenant app with
  growing per-tenant history (a sports club's fixtures, registrations,
  or season-over-season records are a plausible analogous case, but this
  is not assumed true of RVR2026 — see contamination boundary below).
- **Source-specific assumptions that must NOT transfer.** Marvin's
  specific entities (recipes, cookbook, cooking history), its specific
  page size (100 rows), and its specific trigram/compound index
  definitions. Whether RVR2026 has any comparable growing per-tenant data
  set, and what its actual volumes are, is unknown and must be
  independently verified in the target, not assumed from Marvin.
- **Confidence in extraction:** High — stated as a completed, specifically
  described, checked-off gate item, not aspirational advice.

### Item 2 — Separate liveness and readiness health checks, with readiness gated on real dependency health within a bounded timeout

- **Source artefact:** Marvin `docs/production-readiness.md`, Gate 5
  ("Operations and controlled release") and the "Required deployment
  configuration" section's "Runtime probes," commit `c4e0d9f`.
- **Original problem/context.** Marvin needed to distinguish "the
  application process can respond at all" from "the application's real
  dependencies are actually healthy," and implemented this as two
  distinct endpoints: `GET /api/health/live` (process-alive only, no
  dependency calls) and `GET /api/health/ready` (returns `200` only when
  core configuration is present and PostgreSQL responds within three
  seconds).
- **Extracted knowledge.** A production service benefits from two
  distinct health signals — a dependency-free liveness check, and a
  separate readiness check that actively verifies real dependencies
  within an explicit timeout — rather than one conflated "health"
  endpoint that cannot distinguish "process is up" from "service can
  actually do its job."
- **Why it appears portable.** A general operational/architecture pattern
  for any deployed service with external dependencies, stated
  independently of Marvin's specific hosting platform beyond the general
  shape of "has a database dependency with a timeout."
- **Source-specific assumptions that must NOT transfer.** Marvin's
  specific three-second timeout value, its specific dependency
  (PostgreSQL via Prisma), and its specific configuration-presence
  checks. Whether RVR2026 currently has any health-check endpoints at
  all, what its actual dependencies are, and what timeout would be
  appropriate, are unknown and must be independently verified, not
  assumed.
- **Confidence in extraction:** Medium-high — explicitly documented as an
  implemented mechanism, though this is a single-source item without a
  second, independent project corroborating it (unlike Experiment 004's
  Item 1, which had two-source reinforcement).

---

## F — Provenance Summary

| Item | Source project | Source artefact | Confidence |
|---|---|---|---|
| 1 | Marvin (commit `c4e0d9f`) | `docs/production-readiness.md`, Gate 4 | High |
| 2 | Marvin (commit `c4e0d9f`) | `docs/production-readiness.md`, Gate 5 / Runtime probes | Medium-high |

Both items were selected without inspecting RVR2026 beyond the
information already legitimately recorded in Section C.

---

## G — Contamination Boundary

Explicitly **not** being transferred into RVR2026:

- Marvin's domain, branding, or product concepts (cooking, meal-planning,
  cookbooks, recipes, households-as-cooking-units).
- Marvin's specific personas, feature set, or UI.
- Marvin's Gate 1 authentication/rate-limiting/session-hardening content
  — deliberately excluded in full, including any adapted or partial form,
  because RVR2026's own README/SETUP.md pointer already visibly mentions
  authentication; using this content would create an unacceptable
  appearance of the packet being chosen to address a feature already
  glimpsed in the target (Section D).
- Marvin's specific entity/table names, page-size constants, index
  definitions, or timeout values (see Section E's per-item exclusions).
- Any assumption that RVR2026's actual data volumes, deployment platform,
  dependency set, or growth patterns resemble Marvin's.
- Any inference about RVR2026's architecture, feature set, or
  implementation beyond what Section C already legitimately recorded
  (public site, team/fixture data, registrations, campaigns, safeguarding
  workflows, announcements, role-based administration, cron jobs, season
  rollover) — this packet was not chosen to address, and should not be
  read as addressing, any detail beyond that.

---

## Running Invalidation Check

- [ ] classification criteria changed after evidence — **clear**, Section
      B is unmodified since being written
- [ ] source inspected before target locked — **clear**, Section D began
      only after Section C's target-lock line was written
- [ ] target weaknesses inspected before source selection — **clear**,
      no RVR2026 file beyond the README/SETUP.md pointer already quoted
      in Section C was opened before or during Section D
- [ ] source selected to solve a discovered target problem — **clear**,
      Marvin was selected on provenance-depth grounds (Section D); the
      one place target-visible information mattered was to *exclude*
      Marvin's auth-related content (Section G), the conservative
      direction, not the permissive one
- [ ] baseline performed before knowledge packet locked — **clear**, no
      RVR2026 baseline work has been performed; this document ends before
      Phase 2 begins
- [ ] Project OS v0.1 modified — **clear**, no framework file was read
      for modification purposes or modified in producing this document

All conditions remain clear as of this Phase 1 commit.

---

## Phase 1 Review

- **Is the target legitimate?** Yes — RVR2026 is a real, active,
  substantial production platform selected on criteria that did not
  reference any source knowledge.
- **Is the source genuinely independent?** Yes, against every element of
  the pre-design's §7 definition (Section D above).
- **Is the knowledge genuinely product/architecture-level?** Yes — both
  items are data/query-architecture and operational-architecture
  decisions with stated rationale, not process discipline, generic
  advice, or branding/style.
- **Is provenance adequate?** Yes — both items trace to a specific,
  dated, named artefact and gate in the source repository.
- **Was ordering preserved?** Yes — target was locked (Section C) before
  any source project was inspected (Section D), and no baseline work has
  been performed.
- **Is the packet bounded?** Yes — two items, from one source project.
- **Is contamination distinguishable?** Yes — Section G names specific,
  concrete exclusions, including one item (Marvin's auth/rate-limiting
  content) excluded specifically because of its proximity to
  already-visible target information.

This assessment does not evaluate whether transfer is likely to succeed —
only whether the combination constitutes a legitimate test. It does.

---

## Status at Phase 1

Phase 1 is complete. Target (RVR2026), independent source (Marvin), and
a two-item product/architecture knowledge packet are locked, with
provenance and a contamination boundary recorded above. Phase 2 (baseline
+ transfer, in the RVR2026 repository) has not begun. Project OS v0.1
remains FROZEN; no framework file was modified in producing this
document.

---

## Phase 3 — Closure

**Classification: NOT SUPPORTED.**

The RVR2026 authorization extraction/tests (target implementation commit
`a3d609aa2c870349e7820b5ecb47360e65d9b8eb`) were selected from
target-native evidence (UAT-008, thin authz coverage) that predates this
commit and would have happened without Marvin's packet — this result is
excluded from evidence of transfer under the locked counterfactual
discipline. Item 1 (DB-side pagination) was rejected with no resulting
change; RVR2026's existing `findMany` calls already use `take` bounding.
Item 2 (liveness/readiness split) produced a correctly identified but
unimplemented insight — RVR2026's `/api/health` lacks a bounded timeout
on its DB check — which the locked classification model does not treat
as material improvement. No traceable material improvement was
demonstrated; the result is not explained by contamination either, since
none was found.

**Contamination result:** none found. No Marvin-specific terminology,
entities, domain concepts, constants, or assumptions entered the changed
or referenced RVR2026 files.

**Temporal-isolation assessment: B — methodological weakness.** The
packet was locked before Phase 2 began (satisfying Phase 1's ordering
requirement), but the single combined Phase 2 instruction exposed the
executing agent to the packet before the baseline was frozen, with no
mechanical boundary enforcing separation. Classification remains credible
because the baseline (UAT-008, pre-existing in RVR2026's own history) is
independently verifiable as target-native and neither packet item
addresses authorization — but the boundary is weaker than an enforced
separation would provide.

**Lean-protocol result:** the three-phase / two-document structure
preserved enough evidence for a confident classification without
Experiment 004's six-gate apparatus. The control found too weak: no
mechanical baseline-freeze boundary within Phase 2. Recorded as an
observation only (see evidence log) — no framework change made.

**Evidence log:** `docs/evidence/005-evidence-log.md`.

**Final status: CLOSED. NOT SUPPORTED.** Project OS v0.1 remains FROZEN;
`PRINCIPLES.md` and `templates/PROJECT-OS.md` were not modified.
