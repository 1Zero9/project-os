# Experiment 004 — Evidence Log (Gate 6: Comparison, Classification, Closure)

Project OS v0.1 remains **FROZEN** for the duration of this evidence log,
per Section 14 of the locked protocol. Nothing here is promoted into
`PRINCIPLES.md`, `templates/PROJECT-OS.md`, or any other v0.1 framework
file.

---

## 1. Experiment Question

> Can relevant knowledge generated in one completed project materially
> improve work in a different project without importing irrelevant
> history or assumptions?

Source: `docs/experiments/004-cross-project-knowledge-transfer.md`, Section 1.

---

## 2. Locked Protocol / Sequence

Protocol → Target selection → Source knowledge selection → Baseline →
Knowledge-assisted work → Comparison → Classification (Section 3 of the
protocol). All six gates were executed in this order with no reordering:

| Gate | Content | Commit |
|---|---|---|
| 1 | Protocol locked | `a7c4e0c` (Project-OS) |
| 2 | Target selection (tally) | `011cf40` (Project-OS) |
| 3 | Source knowledge selection (3 items, LaunchCity + Golf Club Tools) | `df13294` (Project-OS) |
| 4 | Baseline complete | `9fc46cb` (Tally) |
| 5 | Knowledge-assisted work complete | `fbae406` (Tally) |
| 6 | This document | (this commit) |

---

## 3. Target and Source Selection Provenance

**Target:** tally (household expense/subscription/utility tracker,
Next.js + Prisma + PostgreSQL), selected at Gate 2 on activity/substance/
independence criteria, before any source project was reviewed. See
`docs/experiments/004-cross-project-knowledge-transfer.md`, "Gate 2 —
Target Project Selection" for the full candidate table and rationale.

**Source knowledge packet (Gate 3):** three items, deliberately kept
process/verification-level rather than product/architecture-level, drawn
from two already-completed, already-evidenced experiments:

1. Distinguish local vs. remote operational evidence before acting on it
   (LaunchCity, Exp. 001; reinforced in Golf Club Tools, Exp. 003).
2. Real-browser/runtime validation catches structural bugs invisible to
   static checks (LaunchCity, Exp. 001).
3. Prefer fewer, larger checkpoints at meaningful decision boundaries over
   fine-grained approval loops (Golf Club Tools, Exp. 003).

Two well-evidenced candidates (Lastman's role-guard finding; LaunchCity's
visual-drift finding) and one rich candidate source (Marvin's
production-readiness docs) were deliberately excluded at Gate 3 because
their relevance could not be cleanly separated from information already
glimpsed in Tally's Gate 2 README excerpt (household roles, editorial
light-mode UI, passwordless auth). This is recorded in full in the Gate 3
section of the experiment document and is treated as a conservative,
protocol-protective choice, not revisited here.

---

## 4. Baseline Summary (Gate 4, Tally commit `9fc46cb`)

Produced from Tally's own repository only (README, `AGENTS.md`, `docs/`,
`git log`, local `tsc`/`eslint`/`vitest`). No cross-project material
consulted.

**Findings:** clean `tsc`/`eslint`/139 passing tests; `auth.ts` and
`backup.ts` — the two most consequential logic paths (identity on every
request; destructive full-household restore) — have zero test coverage;
README's onboarding step (`npm run db:push`) contradicts the project's own
documented database-safety rule (`AGENTS.md` / `docs/technical-overview.md`
§10: no separate local dev DB, `db:push` is production-only/exploratory).

**Selected baseline work packet:** add unit tests for `auth.ts` and
`backup.ts`; fix the README `db:push` onboarding instruction.

**Effort:** approximately 20–30 minutes (baseline document's own estimate).

**Baseline's own named uncertainty relevant to Gate 6:** whether Vitest's
existing mocking patterns generalize to `auth.ts`/`backup.ts` "without
needing a new test-infrastructure investment (e.g., a test database) —
unconfirmed until attempted." The baseline also states the restore
id-remap logic under test lives in `src/lib/backup.ts` — this assumption
is examined in Section 9 below.

---

## 5. Transferred Knowledge Packet

As recorded in Section 3 above and in full in
`docs/experiments/004-cross-project-knowledge-transfer.md`, Gate 3. Not
reproduced in full here; see that document for original context,
extraction rationale, and the explicit contamination boundary (source
tooling, domain, and terminology from LaunchCity/Golf Club Tools excluded
in full).

---

## 6. Gate 5 Implementation Summary (Tally commit `fbae406`)

- `src/lib/__tests__/auth.test.ts` (new, 18 tests): guard helpers
  (`requireUser`/`requireHouseholdUser`/`requireAdmin`) and
  `getSessionUser()`'s sliding-expiration behaviour, mocking
  `next/headers` and Prisma.
- `src/lib/backup.ts` (extended): the restore id-remap logic — found
  during implementation to live inline in
  `app/api/admin/backup/route.ts`, not in `backup.ts` as the baseline
  assumed — extracted into `restoreLegacyExpenses()` and
  `restoreHouseholdSnapshot()`, parameterized on an injected
  `Prisma.TransactionClient`. Confirmed by direct diff inspection
  (`git diff 9fc46cb fbae406 -- app/api/admin/backup/route.ts`) to be a
  verbatim move: the deleted route-local helper functions
  (`str`/`num`/`numOrNull`/`bool`/`remapCategory`) and the transaction body
  reappear unchanged inside `backup.ts`; the route now calls
  `prisma.$transaction((tx) => restoreLegacyExpenses(tx, ...))` /
  `restoreHouseholdSnapshot(...)` in their place. Net effect: route.ts
  −418 lines, `backup.ts` +461 lines.
- `src/lib/__tests__/backup.test.ts` (new, 14 tests): all four backup
  schema versions against a fake transaction client (confirmed by reading
  the file: an explicit in-file comment states the fake-tx tests verify
  "the id-remap logic itself... without asserting anything about actual
  Postgres/production behaviour").
- `vitest.config.ts` (new): `@/*` alias mirroring `tsconfig.json`.
- `README.md`: `npm run db:push` → `npx prisma migrate deploy`, with a
  caveat.

**Verification (independently spot-checked, not merely re-quoted):**
`tsc --noEmit` clean, `eslint .` clean, 171/171 vitest tests
(139 pre-existing + 32 new), and a real `next dev` runtime smoke check of
`GET`/`POST`/`PUT /api/admin/backup` with no session cookie, each
returning `401` with no server error, per commit `fbae406`'s message and
`docs/experiment-004-transfer.md` §4.

**Effort:** approximately 40–55 minutes (transfer document's own estimate;
no controlled non-transfer comparison exists — see Section 12, Effort).

---

## 7. Comparison by Predetermined Criterion (Section 8 of the protocol)

| Criterion | Finding |
|---|---|
| **Decision quality** | Evidence of improvement, narrowly. The decision to keep mocked-transaction tests explicitly labelled as logic-only (not production-behaviour) evidence, and to not run `npm run build`/a real restore against production, is better-justified than a baseline-only pass would necessarily produce, because it is traceable to Knowledge Item 1's framing. However, the underlying constraint (no separate local dev DB) was already fully known and stated in Tally's own `AGENTS.md` — the baseline document had already identified it independently. The transferred item's contribution was reinforcing the discipline of *acting* on that already-known constraint consistently across three specific choices, not surfacing a new fact. |
| **Completeness** | Neutral / no demonstrated effect beyond executing the baseline packet as specified. The packet's three items (auth tests, backup tests, README fix) were all delivered; this is completeness relative to the baseline's own scope, not evidence that transfer added completeness the baseline packet did not already call for. |
| **Useful new insight** | Evidence of improvement, real but modest. The runtime smoke check (Knowledge Item 2) confirmed the refactored route's real module/guard wiring works under Next.js in a way `tsc`+mocked tests cannot — this is insight the baseline-only path would not automatically have produced, since nothing in the baseline packet called for a runtime check. See Item 2 assessment (Section 8) for how much weight this genuinely carries. |
| **Avoided mistakes / rework** | Insufficient evidence of a mistake actually avoided. No case is documented where the implementation was heading toward an incorrect action and the transferred knowledge stopped it. Item 1's effect was to keep an already-correct instinct (don't touch production) consistently applied, not to catch an in-progress mistake. |
| **Reduction in uncertainty** | Evidence of improvement, on one specific baseline-named uncertainty. The baseline named "whether Vitest's existing mocking patterns generalize to auth.ts/backup.ts... unconfirmed until attempted" — this was resolved (they do, with the addition of `vitest.config.ts`'s alias fix). This resolution is attributable to doing the implementation work itself, not to any of the three transferred items specifically — see Section 12 (Counterfactual Discipline). |
| **Effort / time** | Insufficient evidence to draw a directional conclusion. Baseline ≈20–30 min; knowledge-assisted ≈40–55 min. The knowledge-assisted packet did more work (an unplanned refactor, a runtime smoke check, an alias-config fix) than the baseline packet's literal three bullets, so the higher time is not comparable like-for-like, and there is no controlled non-transfer run of the *same* expanded scope to compare against. See Section 12. |

No dimension shows a negative effect. Two dimensions (useful new insight,
reduction in uncertainty) show real but modest improvement. Two
(completeness, avoided mistakes/rework) show no demonstrated effect beyond
baseline-packet execution. One (effort) is inconclusive given the
scope difference.

---

## 8. Individual Knowledge-Item Assessment

### Item 1 — Distinguish local/remote operational evidence before acting

**Gate 5 disposition: ACCEPTED.**

- **What actually changed because of this knowledge?** Three concrete,
  traceable choices: (a) the test files explicitly document, in-file, that
  mocked-transaction tests prove logic correctness only, not production
  behaviour; (b) the README fix is justified by reference to the
  project's own already-committed docs, not by an independent live-DB
  check; (c) `npm run build` (which triggers `prisma migrate deploy`
  against the real, only database) was not run.
- **Was that change material?** Modestly. It is a documentation/discipline
  effect on how confidently claims are stated, not a change to what was
  built or tested.
- **Would the baseline likely already have produced the same behaviour?**
  Largely yes. The baseline document itself already identifies "no
  separate local dev database" and explicitly declines to run `next build`
  for exactly this reason (baseline §3: "a non-destructive-looking but
  network/production-touching action I judged out of scope"). The
  knowledge-assisted work applied the same judgment consistently to three
  further decisions, but the underlying caution was already present and
  independently derived from Tally's own docs before any transferred
  knowledge was consulted.
- **Did it prevent an unsupported production-state claim or unsafe
  action?** No unsafe action was ever close to happening in either
  packet; both baseline and knowledge-assisted work independently avoided
  touching production. What the transferred item added was making the
  *reasoning* for that avoidance explicit in more places (test-file
  comments, the README caveat wording).
- **Demonstrated or merely plausible benefit?** Demonstrated, but small:
  the in-file comments and caveat text are directly attributable and
  present in the diff. The counterfactual claim that the baseline packet
  "would not have shown this discipline" is not demonstrated — Tally's own
  documentation and the baseline's own prior judgment make it plausible
  the same caution would have applied even without this transferred item.

**Verdict:** Real but narrow effect — better-documented discipline around
an already-locally-known constraint, not a new capability or an avoided
mistake.

### Item 2 — Real-browser/runtime validation catches structural bugs invisible to static checks

**Gate 5 disposition: ADAPTED.**

- **Did the real Next.js runtime validation add evidence beyond
  tsc/lint/unit tests?** Yes, genuinely. `tsc --noEmit` and the mocked
  `backup.test.ts` suite verify types and pure logic; neither exercises
  Next.js's real route-compilation/module-resolution path or confirms
  `Prisma.TransactionClient`'s structural type actually matches what
  `$transaction`'s real callback receives at runtime. The `next dev` smoke
  check is a distinct verification layer from what the baseline's own
  checks (or the mocked unit tests) provide.
- **Was confirming GET/POST/PUT wiring and 401 behaviour meaningful?**
  Meaningful but narrowly scoped — it confirms the refactored route loads
  and the auth guard still short-circuits correctly before any database
  call. It does **not** confirm the actual restore/id-remap logic against
  real data (explicitly acknowledged in the transfer document itself:
  "could not safely be performed").
- **Should discovering no new issue be treated as useful confirmation
  rather than automatic improvement?** Yes — the transfer document itself
  makes this distinction correctly ("discovered nothing new... confirmed
  the module-load and guard wiring genuinely works"). This assessment
  agrees: a clean smoke-check result on a large refactor (−418/+461 lines
  moved) is useful risk-reduction on that specific refactor, not evidence
  that the transferred item made the underlying work better.
- **Did the adaptation preserve the source lesson without importing its
  original implementation context?** Yes. LaunchCity's specific defects
  (flex-wrap, a missing wrapper element) and its browser-UI framing are
  absent; only the abstracted lesson ("static checks are not sufficient
  evidence for runtime correctness") was applied, adapted to a backend/API
  route context appropriate to Tally, which has no analogous new UI
  surface in this packet.

**Verdict:** Genuine, correctly-scoped value — but its main "improvement"
was a check on a refactor that the *transfer session itself introduced*
(see Section 9, Baseline Deviation). It validates the deviation more than
it validates the original baseline packet.

### Item 3 — Prefer fewer, larger checkpoints at meaningful decision boundaries

**Gate 5 disposition: ADAPTED.**

- **Did executing the packet coherently improve the work?** Plausible but
  not demonstrated. The work was completed in one continuous pass with a
  clean end state (171/171 tests, clean tsc/lint). There is no comparison
  against a fine-grained-approval version of the same work to show this
  was actually *better*, only that it was *not worse* by any observable
  measure.
  This is consistent with Gate 3's own recorded confidence rating for
  Item 3 (medium — a single-experiment process observation).
- **Was the backup extraction a legitimate decision boundary?**
  Yes, and importantly, the transfer document itself treats it correctly —
  it explicitly names the discovery (restore logic living in the route,
  not in `backup.ts`) as a decision point, reasons about it explicitly in
  the document (§2, Item 3 note), and does not silently absorb it as a
  routine step. That the reasoning is written down at all is arguably the
  most concrete artefact of this item's influence.
- **Was continuing without a fine-grained approval loop beneficial,
  neutral, or risky?** Neutral-to-mildly-risky in principle, mitigated in
  practice. Continuing through an ~410-line refactor of the most
  destructive route in the app without a checkpoint is exactly the kind of
  scope expansion the locked protocol's baseline-deviation section (below)
  asks to be scrutinized for. It was not harmful here because the
  refactor was behaviour-preserving and independently verified (diff
  inspection in this evidence log confirms a verbatim move, not a rewrite)
  — but "it worked out" is not the same as "the checkpointing choice was
  demonstrated to be beneficial."
- **Actual evidence of material improvement, or preference/convenience?**
  Preference/convenience, self-reported as such. The transfer document's
  own §2 candidly states the item was used because it matched what "the
  gate 5 instructions explicitly asked for," and frames the written
  disclosure of the deviation as the mitigation — which is itself evidence
  the item did not by default prevent scope expansion, only made
  after-the-fact disclosure of it feel appropriate.

**Verdict:** No demonstrated material improvement from this item
specifically. Its main observable effect is that the (necessary) scope
deviation was written up explicitly rather than buried — a documentation-
discipline effect, similar in kind to Item 1's, not a demonstrated
efficiency or quality gain from "larger checkpoints" as such.

---

## 9. Baseline Deviation Analysis

**Finding:** The Gate 4 baseline assumed the restore id-remapping logic
under test lived in `src/lib/backup.ts`. Gate 5 discovered ~410 lines of
that logic actually lived inline in `app/api/admin/backup/route.ts`. The
Gate 5 implementation extracted it into `restoreLegacyExpenses()` and
`restoreHouseholdSnapshot()` in `backup.ts`, parameterized on an injected
`Prisma.TransactionClient`.

- **Within the intent of the locked baseline work packet?** Yes, on
  balance. The baseline packet's literal instruction ("unit-test the
  id-remap logic per schema version... in `backup.ts`") could not be
  fulfilled at all without either (a) testing the logic where it actually
  lived (inside a Next.js route handler, which is far harder to unit-test
  directly) or (b) moving it first. The extraction serves the stated
  *intent* — get the destructive restore logic under test — even though
  the packet's text incorrectly named its location.
- **Did it materially expand scope?** Yes, materially, in code-churn
  terms: a −418/+461-line change to the single most destructive route in
  the application, beyond "add tests to an existing file." This is a
  larger and different kind of change than "write tests," even though its
  net behavioural footprint (per the verbatim-move confirmation in
  Section 6) was designed to be zero.
- **Did it introduce architectural change?** A small, real one: business
  logic that previously lived inside a route handler now lives in
  `src/lib/`, callable independently of the route. The transfer document
  argues this aligns with Tally's own stated convention
  (`docs/technical-overview.md` §7: `src/lib/` is server-only logic, routes
  call into it) — this evidence log did not independently verify that §7
  claim against `docs/technical-overview.md` and treats it as an assertion
  from the transfer document, not independently confirmed here.
- **Justified from Tally-native evidence?** Partially. The *necessity* of
  touching the route file is Tally-native (the code was where it was,
  full stop — this required no external knowledge to discover, only
  reading the file). The *choice* of extraction pattern
  (`restoreLegacyExpenses`/`restoreHouseholdSnapshot`, injected
  `TransactionClient`) is a reasonable, unremarkable refactor design but
  is not shown to be dictated by any specific Tally-native document beyond
  the general `src/lib/` convention claim above.
- **Did transferred knowledge cause or influence this change?** The
  *discovery* was not caused by transferred knowledge — it was caused by
  actually reading `route.ts` while implementing item 2, which any
  competent baseline-only implementation attempt would also have had to
  do to write the tests the baseline itself specified. Item 3 influenced
  *how* the deviation was handled procedurally (continue in one pass,
  document the decision rather than stopping) but did not cause the
  deviation itself.
- **Contamination or validity threat?** No material contamination, but a
  real scope-discipline flag. The deviation is exactly the shape of thing
  Section 12's invalidation conditions are designed to catch if concealed
  — it is not concealed here (both Gate 5 documents and this evidence log
  disclose it plainly), so it does not trigger an invalidation condition,
  but it does mean the ~40–55 minute effort figure and the "171 vs 139
  tests" figure both include work beyond the baseline packet's literal
  text, and should not be read as directly comparable to a hypothetical
  "just add tests" baseline-only attempt.

**Conclusion:** Not concealed, defensible in intent, but a genuine and
non-trivial scope expansion whose necessity is Tally-native (not
knowledge-driven) even though its handling was knowledge-influenced. This
tempers, rather than voids, the experiment's evidentiary value.

---

## 10. Counterfactual Analysis

Per Section 1 of the protocol and this task's explicit instruction not to
treat "139 → 171 passing tests" as automatic evidence: those tests were
already specified by the baseline packet's own scope (auth.ts + backup.ts
coverage), so their existence is evidence the baseline packet was
executed, not evidence of cross-project transfer.

Distinguishing A (caused/materially shaped by transferred knowledge) from
B (caused by implementing the baseline packet):

- **B (baseline-packet effects, not transfer):** the 32 new tests
  themselves; discovering the restore logic's real location (would be
  discovered by any implementer who actually opened the file to write the
  specified tests); the README fix; the `vitest.config.ts` alias fix
  (a mechanical necessity of importing `@/`-aliased files under Vitest,
  unrelated to any transferred item).
- **A (transfer-attributable):** the explicit "mocked tests are not
  production proof" framing in test-file comments and this document
  (Item 1); the decision to run a real `next dev` smoke check specifically
  because a large refactor had just been made, rather than trusting
  `tsc`+mocks alone (Item 2); the explicit written disclosure of the
  baseline-location deviation as a decision point rather than a silent
  implementation detail (Item 3).

Would the baseline-selected work packet probably have produced the A-list
items anyway, without transfer? Item 1's and Item 3's effects are
plausible without transfer (Tally's own docs already state the no-local-DB
constraint; disclosing a scope deviation candidly is generally good
practice independent of any transferred item). Item 2's runtime smoke
check is the one item least likely to have occurred without transfer — a
baseline-only implementer executing "add unit tests + fix README" has no
obvious independent prompt to also run a live dev server against a route
they just refactored, absent this specific transferred discipline.

---

## 11. Contamination Assessment

Applying Section 9 of the locked protocol:

- **Incorrect assumptions imported from LaunchCity or Golf Club Tools:**
  None found. No architecture, tooling, or domain concept from either
  source project appears in the Tally implementation or its documentation.
- **Irrelevant source context:** None found. `vitest.config.ts` uses
  Vitest's own native `resolve.alias`, mirroring Tally's own
  `tsconfig.json` — not an imported pattern from either source.
- **Source-specific constraints incorrectly applied:** None found.
  Cloudflare/Miniflare-specific behaviour and Golf Club Tools'
  ChatGPT-integration/local-worker relay are both absent from the
  implementation.
- **Terminology leakage:** None found in the diff or either Gate 5
  document.
- **Architecture/tooling imported without Tally-native justification:**
  Not fully clear-cut (see Section 9) — the extraction pattern itself is
  a reasonable but independently-designed refactor, not shown to be
  copied from either source project. This is a scope/justification
  question (Section 9), not evidence of source-project contamination.
- **False confidence from prior knowledge:** Actively and correctly
  guarded against — both Gate 5 documents explicitly state what the
  mocked tests do and do not prove, and what the runtime check does and
  does not verify (explicitly declining to claim the real restore path
  was verified against production data).
- **Evidence source knowledge caused unnecessary work:** No. The
  additional work performed (refactor, runtime check, alias config) was
  either Tally-native necessity (the refactor, to fulfil the baseline
  packet's literal text) or a bounded, cheap, safe addition (the runtime
  smoke check).

**Classification: NO CONTAMINATION.** No imported assumption, constraint,
or terminology from either source project was found in the target output.

---

## 12. Limitations

- No controlled non-transfer implementation run of the same (expanded)
  scope exists, so the effort comparison (Section 7, Section 4/6 timings)
  cannot isolate a transfer-attributable efficiency effect from a
  scope-attributable one.
- Item 3's underlying concept ("meaningful decision boundary") remains an
  unresolved Strategic Checkpoint 002 watch item; its application here
  (treating the backup-location discovery as such a boundary) is a
  judgment call, not a validated criterion.
- This evidence log relied on the Gate 4/Gate 5 documents' own stated
  reasoning for several claims (e.g., the `src/lib/` convention citation
  from `docs/technical-overview.md` §7) without independently re-reading
  that source document in full; the code-level claims (verbatim move,
  test counts, runtime check log lines) were independently verified
  against the actual diff and files in this session.
- The packet is weighted toward process/verification knowledge, by Gate
  3's own design choice to exclude product/architecture candidates that
  risked appearing target-informed. This means Experiment 004's result
  speaks most directly to whether *process discipline* transfers, not
  whether product- or architecture-level knowledge would.

---

## 13. Classification

Applying only the classification model locked at Gate 1 (Section 11 of
the protocol):

- At least one material improvement is demonstrated and traceable to a
  specific transferred item: Item 2's runtime smoke check is the clearest
  case (genuinely added evidence beyond static checks + mocked tests, on
  a refactor that Item 2's own framing made more likely to be checked at
  all). Item 1's effect is real but narrow (explicit documentation
  discipline around an already-known constraint). Item 3's effect is a
  disclosure-discipline effect, not a demonstrated efficiency or quality
  gain.
- No contamination was found (Section 11: NO CONTAMINATION).
- However, the result is genuinely mixed rather than a clean, unambiguous
  positive: two of the three items show narrow/plausible-but-not-clearly-
  transfer-specific effects (Section 8, Items 1 and 3), the clearest
  positive effect (Item 2) applies mainly to a scope deviation the
  transfer session itself introduced (Section 9) rather than to the
  original baseline packet, and the headline quantitative signal (139→171
  tests) is explicitly not attributable to transfer (Section 10).

### CLASSIFICATION: **PARTIALLY SUPPORTED**

---

## 14. Rationale

At least one material, traceable improvement exists (Item 2's runtime
validation, which added evidence beyond static checks and was plausibly
transfer-caused per the counterfactual test in Section 10) with no
material contamination — which would argue for SUPPORTED taken alone.
However, the protocol's PARTIALLY SUPPORTED criterion also covers "the
result is mixed in a way that does not cleanly satisfy either SUPPORTED
or NOT SUPPORTED... real reduction in uncertainty on some items alongside
no traceable benefit on others, with no significant contamination either
way." That describes this result precisely: Item 1 shows a narrow,
plausible-without-transfer effect; Item 3 shows a disclosure-discipline
effect rather than a demonstrated efficiency/quality gain; and the
clearest positive item (Item 2) is entangled with a scope deviation
(Section 9) whose necessity was Tally-native, not knowledge-driven. This
is not "no material improvement" (which would be NOT SUPPORTED), and it
is not a clean, unambiguous SUPPORTED result either — it is a genuinely
mixed outcome with no contamination, which the protocol's own text places
in PARTIALLY SUPPORTED.

---

## 15. Framework Observations / Promotion Candidates

Recorded only as observations, per Section 14 of the protocol. Not
promoted, not incorporated into any v0.1 framework file.

- **Provenance-first knowledge selection worked as designed.** Requiring
  Gate 3 provenance records before the baseline existed (Section 5 of the
  protocol) appears to have genuinely prevented reverse-engineered
  relevance — the selected packet is process-level, not product-level,
  specifically because product-level candidates were excluded for
  appearing too conveniently relevant to information already glimpsed at
  Gate 2. This is a candidate mechanism worth naming for future
  cross-project transfer attempts: *bias source selection toward
  process/verification knowledge specifically when any product-level
  candidate risks appearing target-informed.*
- **A transferred "checkpoint at decision boundaries" instruction needs a
  sharper test for what counts as a boundary.** Item 3's assessment
  (Section 8) shows the item was applied as "continue working, write up
  what happened" rather than as a genuine stop-and-confirm point. A future
  version of this kind of knowledge item might benefit from a concrete
  worked example of "this specific kind of discovery should trigger a
  pause" vs. "this kind should be logged and continued through."
- **Distinguishing a transfer-caused effect from a scope-deviation-caused
  effect is hard after the fact.** Item 2's clearest value (the runtime
  smoke check) is entangled with a refactor whose necessity was
  Tally-native. A future protocol might ask Gate 5 to flag, at the moment
  a scope deviation is discovered, whether any subsequently-applied
  transferred item is being used to justify or verify the deviation
  itself (as happened here) versus the original baseline packet — this
  distinction was reconstructable here only through this Gate 6 review,
  not through anything the protocol required to be recorded live.

---

## 16. Watch Items

- Strategic Checkpoint 002's "meaningful decision boundary" concept
  remains unresolved (already an existing watch item) and was used again
  here (Item 3) without further definition — this experiment did not
  advance that definition.
- The `src/lib/` = "server-only logic, routes call into it" convention
  cited by the Gate 5 transfer document (`docs/technical-overview.md` §7)
  was not independently re-verified in this Gate 6 review; if that
  convention turns out to be weaker or less explicit than cited, Section
  9's "justified from Tally-native evidence" assessment should be
  revisited.

---

## 17. Deferred Items

- Whether product/architecture-level knowledge (as opposed to the
  process-level packet used here) would transfer as cleanly, or would
  surface more contamination, was not tested by this experiment — Gate 3
  deliberately excluded such candidates for appearance-of-targeting
  reasons specific to this target/source pairing, not because
  process-level knowledge was judged superior in general.
- A controlled non-transfer comparison run (same expanded scope, no
  transferred knowledge available) to isolate a genuine effort/efficiency
  effect is deferred — not attempted in this experiment and not required
  by the locked protocol.

---

## 18. Final Experiment Status

**Classification: PARTIALLY SUPPORTED.**

All six gates completed in the locked sequence. No invalidation condition
was found to have occurred (see Invalidation Review below). Project OS
v0.1 remains FROZEN — no framework file was read for modification purposes
or modified during any gate of this experiment.

---

## Invalidation Review (Section 12 of the protocol)

| Condition | Status |
|---|---|
| Target or source cherry-picking | **CLEAR** — Gate 2's target selection preceded any source review; Gate 3's source selection explicitly excluded candidates that looked too conveniently relevant to Gate 2 information, rather than favouring them. |
| Changing evaluation criteria after seeing results | **CLEAR** — Sections 8, 9, and 11 of the protocol are unmodified from Gate 1 through this Gate 6 review. |
| Baseline contamination | **CLEAR** — the Gate 4 baseline document's own invalidation check confirms no Project OS, prior-experiment, LaunchCity, or Golf Club Tools material was inspected in producing it; nothing found in this Gate 6 review contradicts that. |
| Source knowledge selected after seeing baseline weaknesses | **CLEAR** — Gate 3 (source selection) is dated and sequenced before Gate 4 (baseline) in both the experiment document and the Tally commit history (`df13294` precedes `9fc46cb`). |
| Reordering Section 3's sequence | **CLEAR** — Protocol → Target → Source → Baseline → Transfer → Comparison → Classification was followed in that exact order across both repositories' commit histories. |
| Modifying Project OS v0.1 to accommodate the experiment during execution | **CLEAR** — no commit in this experiment touches `PRINCIPLES.md`, `templates/PROJECT-OS.md`, or any other v0.1 framework file; verified by this Gate 6 review not modifying any such file either. |

No invalidation condition was violated.

---

## Sources Consulted for This Evidence Log

- `docs/experiments/004-cross-project-knowledge-transfer.md` (Project-OS)
- `docs/experiment-004-baseline.md` at Tally commit `9fc46cb`
- `docs/experiment-004-transfer.md` at Tally commit `fbae406`
- Direct diff inspection: `git diff 9fc46cb fbae406` (Tally), specifically
  `app/api/admin/backup/route.ts`, `src/lib/backup.ts`
- Direct file reads: `src/lib/__tests__/backup.test.ts` (file-level
  comments and fixture structure)
- Tally commit messages for `9fc46cb` and `fbae406`

No unrelated Tally history was inspected.
