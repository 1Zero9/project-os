# Experiment 006 — Within-Project Knowledge Compounding, Replication

- **Experiment:** Replication of Experiment 003 (Compounding Project
  Knowledge)
- **Protocol origin:** Strategic Checkpoint 004
  (`docs/strategy/CHECKPOINT-004.md`, commit `010007d`), Section 15 —
  "design and run a second within-project knowledge-compounding
  experiment, in a different project."
- **Project OS version tested:** v0.1 (FROZEN throughout)
- **Status:** Phase 1 complete (design + project + historical knowledge
  packet locked). Phase 2A/2B (baseline freeze + knowledge reveal +
  execution) not started.

## Why Replication, Not a New Question

Experiment 003 (Golf Club Tools) returned SUPPORTED, with qualifications,
and remains — per Checkpoint 004, Section 14 — Project OS's strongest
result and its least-replicated: exactly one project, never repeated.
Experiment 006 does not test a new hypothesis. It re-runs the same
question, in a different project, to determine whether Experiment 003's
result generalises or was specific to Golf Club Tools' circumstances.

## Experiment Question

Can relevant knowledge generated earlier within a project materially
improve later work in that same project?

## Primary Hypothesis (Locked)

Relevant knowledge generated earlier in a project can materially improve
later work in that same project when that knowledge is selectively
retrieved and verified against current project state.

## Null / Failure Hypothesis (Locked)

No material improvement traceable to earlier project knowledge is
demonstrated, or apparent improvement is explained by current-state
investigation alone, stale assumptions, or contamination.

## Classification Criteria (Locked)

**SUPPORTED** — material improvement is demonstrated and traceable to
earlier within-project knowledge, with that knowledge verified against
current state.

**PARTIALLY SUPPORTED** — material improvement is demonstrated but
attribution is genuinely mixed, knowledge required substantial
correction, or the result has meaningful qualifications.

**NOT SUPPORTED** — no traceable material improvement from earlier
project knowledge is demonstrated, or current-state investigation would
have produced the same result without meaningful assistance from the
historical knowledge.

These criteria are locked as of this Phase 1 commit and will not be
modified after baseline or execution evidence exists.

---

## Lean Structure

Three phases, per Checkpoint 004's directive:

- **Phase 1** — design + project selection + historical knowledge
  selection (this document).
- **Phase 2A** — target-native baseline, written and frozen before the
  selected historical knowledge packet is introduced into the execution
  context. This is a **mechanical** boundary: the baseline document is
  written and committed first; only after that commit exists is the
  historical packet (already locked and public in this document) brought
  into the working context for execution. No Steve approval gate sits
  between 2A and 2B — the boundary is the commit itself, not a review
  step. This directly answers Experiment 005's temporal-isolation
  weakness (assessed B — methodological weakness at Checkpoint 004,
  Section 6) without reintroducing Experiment 004's six-gate approval
  structure.
- **Phase 2B** — reveal the historical packet, execute the baseline work
  packet with it available, record what changed and why.
- **Phase 3** — compare, classify, close.

Documentation budget: exactly `docs/experiments/006-within-project-knowledge-replication.md`
(this file) and, later, `docs/evidence/006-evidence-log.md`. No
experiment documents in the target repository unless uniquely necessary.

---

## Project Selection

Performed before any historical material in the candidate project was
inspected beyond top-level metadata (README first lines, top-level file
listing, `git log --oneline` one-liners, and doc line counts — the same
depth used for target selection in Experiments 004 and 005).

**Excluded outright** (prior Project OS experiment subjects, per
Checkpoint 004/Experiment 006 instructions): LaunchCity, Lastman, Golf
Club Tools, Tally, RVR2026, Project OS itself.

**Also excluded, for reasons recorded below, though not on the explicit
exclusion list:** Marvin (used as the knowledge *source* in Experiment
005 — a previously-used experiment subject in substance, even though
never a target); eolas (Project OS's own hypothesised future
knowledge-layer project, named in `ROADMAP.md`; selecting it risks
circularity between "the project being tested" and "the thing Project OS
is trying to decide whether to build" — the same reasoning Experiment
005 applied when excluding it as a source candidate); RVR 2014 Team
Admin (same domain family as RVR2026, a prior subject — excluded for
cleanliness even though within-project experiments don't have the
cross-project independence requirement that motivated Experiment 005's
equivalent exclusion).

**Candidate pool** (from Steve's active repositories, top-level metadata
only):

| Candidate | Commits | Last commit | README | Notes |
|---|---|---|---|---|
| astra | 611 | 2026-02-18 | Y | Stale — self-reported "Last Updated" predates today by ~10 months (already noted in Experiment 005's pool) |
| rvrmatchday | 328 | 2025-11-30 | Y | Stale, ~9.5 months |
| 1Zero9Studio | 173 | 2026-09-02 | N | No README, purpose unconfirmed |
| 109-jobjar | 198 | 2026-03-23 | Y | Stale, ~6 months |
| chewing_gum | 86 | 2026-09-02 | Y | Recent, but narrow functional surface (menu-bar utility) |
| Runway | 87 | 2026-06-14 | Y | ~3 months stale — weaker recency than the top candidates |
| QualFM | 85 | 2026-07-17 | N | No README, ~2 months stale |
| **SWGOH** | 79 | 2026-08-31 | Y | Recent and substantial, but recent commit history (a "Mission From God" game/media-hub build, branded pages, a "Datacrons Vault") diverges substantially from the README's stated purpose (a SWGOH guild Discord reporting bot) — a confound worth avoiding |
| **Ground Control** | 62 | 2026-08-31 | Y | Recent, substantial, commit history coherent with and consistent with its stated purpose throughout |
| lucy | 30 | 2026-09-12 | Y | Most recent activity, but low commit count — already passed over once in Experiment 005's pool for insufficient substance relative to stronger candidates |
| vecta | 30 | 2026-09-03 | Y | Same basis as lucy — already passed over once for substance |

**Selection criteria applied:**

1. Genuine project history (real commits over time, not a stub).
2. Substantial implementation.
3. Enough historical artefacts/commits/docs to plausibly contain prior
   decisions, constraints, or lessons.
4. Enough current/planned work remains that later work does not need to
   be manufactured.
5. Active or recoverable current state.
6. Not a prior Project OS subject; not otherwise compromised by
   circularity or domain-family proximity to one.

**Selected project: Ground Control.**

**Rationale.** Ground Control has the most recent commit activity of any
candidate whose recent history is fully coherent with its stated
purpose (household "mission control" app — calendar, sticky-note board,
optional plug-in modules), with 62 commits and a last commit 15 days
before this selection. Its documentation (`docs/TECHNICAL.md`, 670
lines; `docs/USER_GUIDE.md`, 239 lines; `AGENTS.md`; `notes.md`) is
substantial and includes an explicit phase-by-phase feature build log
and a "known gaps" section — genuine surface area for historical
knowledge with traceable provenance. Its own documentation records
explicit planned-but-not-yet-built roadmap items (Kitchen Display
polish, additional connector types, invite-link delivery, an automated
off-provider backup job), so later work in Phase 2 does not need to be
invented for the purpose of this experiment. SWGOH was rejected
specifically because its recent commit history (a "Mission From God"
game/media build) appears to have diverged from its README's stated
scope (a SWGOH guild reporting bot) — a mismatch between documentation
and current implementation that would introduce an unwanted confound
into a replication experiment whose entire purpose is testing knowledge
recovery and application, not documentation/implementation drift.

**Rejected candidates and reasons:** see table above; in summary,
astra/rvrmatchday/109-jobjar fail on recency; 1Zero9Studio/QualFM fail
on confirmable purpose (no README); chewing_gum is real and recent but
functionally narrow; Runway is real and documentation-rich but weaker on
recency; lucy/vecta fail on substance, consistent with their treatment
in Experiment 005's own candidate pool; SWGOH is substantial and recent
but its current implementation appears to have drifted from its stated
purpose, an unwanted confound for this specific experiment.

**Limitations/biases.** As in prior experiments, the candidate pool was
limited to Steve's own repositories, and recency/commit-count/README
presence were used as proxies for "real and substantial" rather than
deep inspection. This is consistent with Experiments 004 and 005's own
target-selection method.

**PROJECT IS LOCKED: Ground Control.** No historical material beyond
`docs/TECHNICAL.md`'s existence (as a file listed in the top-level
directory scan) and its line count was inspected before this lock line
was written.

---

## Historical Knowledge Selection

Performed only after the project lock above. `docs/TECHNICAL.md` was
read in full, since it is the project's own consolidated
architecture/decision/build-log document — the exact kind of artefact
this experiment is designed to test recovery and application of. No
other file (source code, other docs) was inspected before this packet
was selected. No current implementation weakness was sought; the
selection below draws only on `docs/TECHNICAL.md`'s own recorded
decisions, constraints, and build history, each independently confirmed
against the actual commit that introduced it.

### Item 1 — Schema changes must go through `db:generate` → `db:migrate`, not `db:push`, in production

- **Source artefact:** `docs/TECHNICAL.md` §6 ("Environment & local
  development"), Ground Control commit `a2034b3` ("Switch to
  drizzle-kit migrate as the production schema-change workflow"),
  2026-08-30.
- **Original context.** Ground Control's schema changes were originally
  applied via `db:push` (direct schema push, no migration file, no
  applied-migrations record) through migration `0008`. This was
  switched to a tracked, reviewed workflow (`db:generate` → commit the
  generated SQL → `db:migrate`), because `db:push` is "easy to drift
  out of sync between environments or lose data on a destructive
  change." A one-off script, `db/baseline-migrations.ts`, was written
  and run once to retroactively mark the 9 already-`db:push`-applied
  migrations as done in the tracking table, without re-running their
  SQL.
- **Extracted knowledge.** Any future schema change in this project
  should use `db:generate` + `db:migrate`, with the generated SQL file
  committed; `db:push` is reserved for quick, throwaway local
  prototyping only and must not be used for a change that will reach a
  real (shared or production) database.
- **Why it may be relevant to future work.** Any later task in Ground
  Control that changes `db/schema.ts` — which plausibly includes at
  least some of the project's own recorded roadmap items (new connector
  types, further module registry entries) — will face exactly this
  workflow choice again.
- **Possible staleness risk.** Low. This is a stated, still-current
  workflow convention (the most recent schema-related commit predates
  this experiment by 16 days and does not contradict it), not a
  one-time historical fact that could have since changed silently.
  Verification in Phase 2B should still confirm no later commit reverted
  or altered this convention.

### Item 2 — The admin console's data-privacy guarantee depends on `db/admin-queries.ts` never importing `events`/`board_items`

- **Source artefact:** `docs/TECHNICAL.md` §9 ("Admin console &
  data-privacy guarantee"), Ground Control commit `05652fd` ("Separate
  admin console identity from family logins"), 2026-08-28, with the
  guarantee's scope extended by later commits as new admin capability
  was added (`9fcb47e`, `0053b72`, `8b25c94`, `aec594b`).
- **Original context.** Ground Control is multi-tenant; the admin
  console (`/admin`) exists so an operator can configure a family's
  connectors without that becoming a backdoor into that family's private
  data. The guarantee is structural, not policy-based: admin identity
  lives in a completely separate `admins` table with no `familyId` and
  no relationship to `users`, and `db/admin-queries.ts` never queries
  the `events` or `board_items` tables at all — a family's calendar and
  notes are "structurally unreachable from any admin code path, not
  merely hidden by the UI." The document explicitly states: any future
  change that would let `db/admin-queries.ts` join to `events`/
  `board_items`, or return their contents from an admin action, "should
  be treated as a breaking change to this guarantee and called out
  explicitly in a PR/commit message."
- **Extracted knowledge.** Future admin-console or connector work in
  this project carries an explicit, self-declared invariant: admin code
  paths must not gain the ability to read a family's `events`/
  `board_items` content, even incidentally, without that being treated
  and flagged as a breaking privacy change.
- **Why it may be relevant to future work.** Ground Control's own
  recorded roadmap (`docs/TECHNICAL.md` §7, items 18–19) anticipates
  more connector types and further admin-configurable capability — any
  such work is exactly the kind of change this invariant is written to
  constrain.
- **Possible staleness risk.** Low-to-moderate. The guarantee has
  already been extended, not just stated once, across four further
  commits as capability grew (multi-feed modules, custom services,
  admin-created custom modules) — this is evidence it has been actively
  maintained, not merely documented once and forgotten. Verification in
  Phase 2B should still directly re-read `db/admin-queries.ts` to
  confirm it still holds, rather than trusting the document's prose
  alone.

### Item 3 — Revocable invite links use a version-snapshot pattern on the stateless signed token, not an extra database table

- **Source artefact:** `docs/TECHNICAL.md` §8 ("Known gaps / things to
  be aware of"), Ground Control commit `1de4e41` ("Add invite-link
  revocation for family member connect links"), 2026-08-30, building on
  the original invite-link mechanism from commit `dbfc7af`.
- **Original context.** The "connect to the app" family-member invite
  link is a stateless, signed token (`{ familyId, memberId, exp }`,
  HMAC-signed, 3-day expiry) — deliberately chosen so no extra database
  table is needed to track outstanding invites. When revocation became
  necessary (generating a new link should invalidate an older
  still-unexpired one; an explicit "Revoke this link" action was also
  wanted), the solution kept the token stateless: the token additionally
  embeds a snapshot of `family_members.invite_token_version` at issue
  time, and verification rejects any token whose embedded version no
  longer matches the member's current version. Generating a new link (or
  explicitly revoking) simply bumps that one column.
- **Extracted knowledge.** When a stateless signed token later needs
  revocation semantics, a version-counter column on the owning row,
  snapshotted into the token and checked at verify time, can provide
  revocation without adding a tracking table or making the token
  stateful.
- **Why it may be relevant to future work.** The same
  `createSignedToken`/`verifySignedToken` helper
  (`lib/auth/token.ts`) already underlies sessions and password-reset
  tokens in this project (`docs/TECHNICAL.md` §5). Any future
  requirement to make one of those — or a new signed-token use case —
  revocable would face the same design choice this pattern already
  resolved once, in this project, for this reason.
- **Possible staleness risk.** Low. This is the most recently introduced
  of the three items (2026-08-30, one day before the current HEAD of
  Ground Control's history) and is exercised by the currently-shipped
  invite/revoke UI (`invite-link-modal.tsx`), not a stale or superseded
  mechanism.

---

## Phase 1 Validity Check

- [x] **Project was selected before historical knowledge inspection** —
  confirmed; the project-lock line above was written before
  `docs/TECHNICAL.md` was opened.
- [x] **Historical knowledge genuinely predates Experiment 006** — all
  three items trace to commits dated 2026-08-28 to 2026-08-30, at least
  15 days before this experiment began (2026-09-15).
- [x] **Provenance exists** — each item cites a specific commit hash,
  date, and source-document section.
- [x] **Knowledge is project-specific** — all three items are Ground
  Control's own architecture/workflow/security decisions, not generic
  advice and not imported from any other project.
- [x] **Packet is bounded** — exactly three items, from one document.
- [x] **No current weakness was used to cherry-pick historical
  knowledge** — all three items were drawn directly from
  `docs/TECHNICAL.md`'s own recorded decisions and build log; no source
  file, route, or query was separately inspected for defects before this
  packet was selected.
- [x] **Classification remains locked** — the SUPPORTED / PARTIALLY
  SUPPORTED / NOT SUPPORTED criteria above are unmodified from this
  Phase 1 commit.

Phase 1 is complete and valid.

---

## Running Invalidation Checklist

- [ ] classification changed after evidence — **clear**, criteria fixed
      at this Phase 1 commit, no evidence yet exists
- [ ] project selected because of known convenient historical knowledge —
      **clear**, project selection (locked above) preceded any inspection
      of `docs/TECHNICAL.md` or any other historical artefact
- [ ] current weakness inspected before historical knowledge selection —
      **clear**, no source file, route, query, or bug report was
      inspected before the packet above was selected; only
      `docs/TECHNICAL.md` itself, which is a historical/decision
      document, not a current-state weakness scan
- [ ] historical knowledge created/altered for Experiment 006 — **clear**,
      all three items trace to commits dated 2026-08-28 to 2026-08-30,
      before this experiment existed
- [ ] baseline influenced by historical packet before freeze — **clear**,
      no Phase 2A baseline work has been performed; this document ends
      before Phase 2 begins
- [ ] Project OS v0.1 modified — **clear**, no framework file was read
      for modification purposes or modified in producing this document

All conditions remain clear as of this Phase 1 commit.

---

## Status at Phase 1

Phase 1 is complete. Project (Ground Control) and a three-item historical
knowledge packet are locked, with provenance recorded above. Phase 2A
(target-native baseline, frozen before the packet is introduced into
execution context) has not begun. Project OS v0.1 remains FROZEN; no
framework file was modified in producing this document.

---

## Phase 3 — Closure

**Classification: NOT SUPPORTED.**

No traceable material improvement from the historical knowledge packet was
demonstrated. The frozen, pre-packet mechanical baseline (Ground Control
commit `666744068dcd05fbe9210bddca3f220652c75579`) already specified the
same schema-change workflow (`db:generate` → `db:migrate`) and the same
non-versioned, stateless token design that the implementation (Ground
Control commit `6bd945df722d6bc327682865265915b4dc6a8db6`) actually used.
Item 1 (schema workflow) and Item 3 (token revocation pattern, rejected
for reuse) confirmed decisions the baseline had already reached
independently; Item 2 (admin structural privacy invariant) had no task to
apply to, since the selected work (email verification on signup) never
touched admin architecture. Full reasoning, per-item results, the
counterfactual comparison, and the Experiment 003 comparison are recorded
in the evidence log.

**Evidence log:** [`docs/evidence/006-evidence-log.md`](../evidence/006-evidence-log.md)

**Baseline commit:** `666744068dcd05fbe9210bddca3f220652c75579`
(Ground Control, `.experiment-006-baseline.md`)

**Implementation commit:** `6bd945df722d6bc327682865265915b4dc6a8db6`
(Ground Control, "Add email verification on signup")

**Invalidation status:** All Running Invalidation Checklist conditions
remain clear. The project was selected before any historical material was
inspected; the historical packet was drawn only from `docs/TECHNICAL.md`
and not cherry-picked against a known current weakness; the baseline was
mechanically frozen (committed) before the packet entered the execution
context; no historical knowledge was created or altered for this
experiment; Project OS v0.1 was not modified in producing this
experiment.

**Implication for Experiment 003 replication:** Experiment 003 remains
SUPPORTED, with qualifications, on its own evidence. Experiment 006 is a
negative replication of the same question in a different project. Taken
together, the evidence for "within-project knowledge compounding" as a
general, reliable effect is revised from a single strong-but-unreplicated
result to **WEAK** — one supporting case and one non-supporting case,
with plausible but unproven explanations for the divergence (task/
knowledge alignment, and whether the target project's current
documentation already contains the historical knowledge). See the
evidence log for the full comparison.

**Final status: CLOSED.**
