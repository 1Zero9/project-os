# Lastman Operational Rehearsal — Action Log

**Purpose:** A short, append-only progress record for Experiment 010. Add an
entry after every meaningful action; do not infer a phase has passed from work
that was not recorded here.

## Entry format

- **Action:** what was done and its boundary.
- **Result:** observed outcome, including failure where applicable.
- **Evidence:** command, committed state, counts, screenshot, export or other
  reproducible reference.
- **Decision:** what this does and does not permit next.
- **Next action:** one bounded action only.

## 17 September 2026 — Offline rules rehearsal

- **Action:** Ran a database-free, 50-entry adapter against Lastman's actual
  survival rules engine.
- **Result:** Passed lock/autopick, 50-entry wipeout rollover, restricted and
  repeat-team eligibility, and void-round audit paths.
- **Evidence:** Lastman commit `9bc66bb`; `npm run test:rehearsal`, lint and
  production build passed.
- **Decision:** Core engine behaviour has baseline evidence only. It does not
  approve real operations.
- **Next action:** Establish a recoverable database rehearsal environment.

## 17 September 2026 — Recovery baseline

- **Action:** Created a local, Git-ignored snapshot of the existing
  Vercel/Prisma development database; reset it through nine migrations and
  restored the snapshot.
- **Result:** Passed. Post-restore counts matched the snapshot, including 5
  users, 2 competitions, 2 seasons, 560 source fixtures, 35 entries, 17 picks
  and 760 fixtures.
- **Evidence:** Lastman commit `03078d3`; local snapshot checksum retained on
  the developer machine.
- **Decision:** The current development environment is recoverable for
  rehearsals. This is not production backup evidence.
- **Next action:** Seed a separate synthetic 50-person fundraiser.

## 17 September 2026 — Test 1 data preparation

- **Action:** Added a separate `operational-rehearsal-50` synthetic fundraiser
  without overwriting restored demo data.
- **Result:** Passed: 50 participants, 49 active entries, 6 pending-payment
  entries, 35 submitted picks and an open first round.
- **Evidence:** Lastman commit `03078d3`; `npm run rehearsal:seed`; lint,
  production build and `npm run test:rehearsal` passed.
- **Decision:** The environment is ready for an organiser-led, normal-UI
  one-round operation. No real payment or participant is involved.
- **Next action:** Complete payment confirmation and lock/autopick through the
  organiser UI.

