# Lastman — Operational Readiness Test Plan

**Status:** Planned. No live campaign is authorised by this plan.

## Progress recording rule

After every meaningful rehearsal action, append a dated entry to the
[operational action log](../evidence/010-lastman-operational-action-log.md).
Each entry must state the action boundary, observed result, reproducible
evidence, decision and exactly one next action. A phase is not complete until
its pass evidence and action-log entry both exist.

## Aim

Establish whether Lastman can safely support a small, supervised club pilot.
This plan does not attempt to validate a three-month, 50-member fundraiser in
one leap. It earns that decision through smaller evidence gates.

## Test 0 — Safe test environment

**Question:** Can a test run be isolated from real or shared fundraiser data?

**Method:** Provision a clearly named disposable Postgres database; apply
migrations; seed only synthetic Premier League fixtures and accounts; document
how the database is deleted after the run. Take and restore one backup before
any user-flow testing.

**Pass evidence:** independent disposable connection string (or an explicit
backup-and-reset protocol for the existing non-empty Vercel/Prisma development
database), migration log, synthetic seed record, and successful restore.

**Stop condition:** environment ownership or deletion/recovery procedure is
unclear.

## Test 1 — One-round organiser rehearsal

**Question:** Can one organiser operate one 50-entry round end to end?

**Method:** In the disposable environment, create a club and season through
the normal admin interface; load a known fixture round; create 50 synthetic
entries covering paid, pending-payment, multiple-entry and no-pick cases.
Have the organiser open the round, record a payment decision, lock it, enter
results, settle it, inspect standings, and export the audit trail.

**Pass evidence:** completed operator checklist, expected entry/payment/pick
counts at every stage, a readable audit export, and no direct database edits
to recover the run.

**Stop condition:** an organiser cannot finish a standard step without code,
SQL, or developer intervention.

**Current phase:** data preparation is complete. Next is the organiser UI
sequence: confirm a pending payment, inspect active/pending counts, lock the
round, verify autopicks, record results, settle, inspect the audit trail and
export the account data.

## Test 2 — Time, fixture and exception rehearsal

**Question:** Are the campaign rules and system behaviour exact when time or
fixtures change?

**Method:** First agree the actual pick deadline with the club: either the
current one-hour-before-first-kickoff implementation or a different rule.
Then run timed checks immediately before and after the deadline, including the
deployed cron path. Rehearse a postponed fixture, a cancelled/voided round,
a corrected result, a missing pick/autopick, a Top-6 restriction, a repeat
pick, and both wipeout outcomes.

**Pass evidence:** club-approved rules text; timestamped lock evidence within
the stated tolerance; each exception has an observed UI/operator outcome and
an audit record.

**Stop condition:** the deadline cannot be enforced predictably, or a fixture
exception requires unsafe manual database repair.

## Test 3 — Compressed campaign rehearsal

**Question:** Can the same organiser sustain operations across time, rather
than only run one happy-path round?

**Method:** Run 12 synthetic rounds in a compressed schedule using 50 entries.
Include manual-results entry, payment reconciliation, participant reminders,
one absence of the primary organiser, a backup/export check, a buy-back, and
at least one recovery event.

**Pass evidence:** all 12 rounds settle; balances reconcile to the entry and
buy-back ledger; every round is auditable; a second authorised organiser can
continue from the documented process.

**Stop condition:** repeated developer assistance, untraceable payment state,
or an unrecoverable operator error.

## Test 4 — Small supervised pilot decision

**Question:** Is a limited real club pilot justified?

**Method:** Only after Tests 0–3 pass, agree a club, named organiser, written
rules, payment custody, prize/fundraising allocation, participant support
route, and an explicit cancellation/refund process. Start with a small,
time-bounded pilot rather than the planned three-month campaign.

**Pass evidence:** organiser sign-off, participant feedback, complete
financial reconciliation, and no critical operational incident.

**Stop condition:** any unresolved fairness, money-handling, data-protection,
or support ownership issue.

## Decision rule

Lastman is suitable for a real 50-member, three-month campaign only when
Tests 0–3 pass and the club independently accepts the Test 4 operating terms.
Passing the existing offline rehearsal is necessary evidence, but does not
meet this decision rule.

## Phase sequence

| Phase | Outcome to earn | Required recording point |
|---|---|---|
| 1 — One-round UI operation | An organiser completes the normal first-round flow with synthetic data | After payment confirmation, after lock, and after settlement/export |
| 2 — Rules and exception operation | Deadline, postponement, correction, void, repeat/restriction and wipeout outcomes are observed and approved | One entry per exception and one decision on the deadline rule |
| 3 — Compressed continuity | Twelve synthetic rounds can be operated and handed over without developer rescue | Per-round compact log plus a final reconciliation entry |
| 4 — Pilot decision | A named club can accept the operating, money and support terms of a limited pilot | Explicit go/no-go decision; no implied approval |
