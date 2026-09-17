# Lastman — Offline Operational Rehearsal Evidence

**Status:** Technical rules evidence only. This is not launch approval, a
real-fundraiser result, or evidence of founder acceptance.

## Purpose and boundary

The founder described Lastman as a standalone club-fundraising product, with
Last Man Standing as the first module in a possible wider range. No club,
campaign, real participant, payment, production deployment, or production
database was authorised for this check.

The question tested was deliberately smaller:

> Can the existing rules engine complete the core control paths for a
> synthetic 50-entry round without touching a real fundraiser database?

## Environment and method

- Target repository: `https://github.com/1Zero9/lastman`
- Test branch: `experiment/010-operational-rehearsal`
- Test commit: `9bc66bb`
- Added command: `npm run test:rehearsal`
- Database use during rehearsal: none. The founder subsequently confirmed this
  is the Vercel/Prisma Postgres database for Lastman. A read-only inventory
  found 5 users, 2 competitions, 2 seasons, 2 leagues, 560 source fixtures and
  9 applied migrations. It is therefore an existing development/demo
  environment, not an automatically disposable blank database; it was not
  seeded, migrated or changed for this rehearsal.

The new rehearsal adapter is deliberately in memory. It invokes the actual
functions in `lib/engine.ts` while replacing only the database calls those
functions make. It is therefore useful for rules behaviour, but cannot prove
the application UI, Prisma migrations, cron hosting, or real operator flow.

## Results

| Check | Result | What it supports |
|---|---|---|
| 50 active synthetic entries lock with no submitted picks | PASS | the engine generated 50 autopicks and locked the round |
| All selected teams lose | PASS | settlement recorded 50 eliminations and applied the existing `rollover` path |
| No-repeat and restricted-team rule | PASS | a previously used restricted team excluded both itself and the other restricted option |
| Interrupted round | PASS | a locked round was voided and emitted the expected audit event |
| Code quality | PASS | `npm run lint` and `npm run build` completed successfully |

## What was learned

1. Lastman's core survival-round engine is testable without a live database
   and passed the first 50-entry stress shape.
2. A 50-entry wipeout is not terminal by default: more than five defeated
   entries roll over to active status. This is existing product behaviour that
   needs a club-approved rule before a real campaign.
3. The repository previously had no first-party automated test command. The
   rehearsal is now a repeatable baseline, not a substitute for integration
   testing.
4. The major readiness risk has moved from basic engine control paths to
   operations: safe environment, fixtures/results, deadline execution,
   payments, recovery and organiser usability.

## Known limits and unresolved risks

- The schedule injector sets a deadline one hour before first kickoff, while
  the earlier product specification described 18:00 on the preceding day.
  Neither rule is yet founder-approved or rehearsed.
- The deployed cron configuration is hourly. It has not been shown to lock a
  round at the intended precise deadline.
- Fixtures and results remain manually operated for MVP; postponements,
  corrections and source-of-truth procedures are unproven.
- Payments are manually reconciled. No live payment, refund, or accounting
  flow has been demonstrated.
- No organiser has run a campaign, no participants have used the journey, and
  no backup/restore procedure has been rehearsed.

## Classification

**OFFLINE RULES REHEARSAL PASSED / OPERATIONAL READINESS NOT ESTABLISHED.**

The appropriate next step is a disposable-environment rehearsal, not a
three-month live club fundraiser.

## Test 0 update — 17 September 2026

The founder authorised use of the existing Vercel/Prisma development
environment. A full local JSON snapshot was created outside Git, then the
database was reset through its nine migrations and restored from that snapshot.
Post-restore counts matched the snapshot for users, competitions, seasons,
leagues, source fixtures, entries, picks and fixtures.

This establishes a recoverable rehearsal baseline for this environment. It
does not make the backup mechanism a production backup service, and it does
not establish live-fundraiser readiness.

## Test 1 preparation — 17 September 2026

A separately named synthetic fundraiser was added without replacing the
restored data: 50 participants, 49 active entries, 6 pending-payment entries,
35 submitted picks and an open first round. The repository's lint, production
build and offline engine rehearsal all passed after seeding.

The remaining Test 1 work is an organiser-led normal-UI operation of the
round: payment confirmation, lock/autopicks, result entry, settlement, audit
inspection and export. It has not yet been claimed as passed.
