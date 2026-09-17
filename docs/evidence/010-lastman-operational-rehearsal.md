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
- Database use: none. The configured database is a hosted Prisma Postgres
  instance with the generic database name `postgres`; its disposable status
  was not established, so it was not seeded, queried for business data, or
  changed.

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

