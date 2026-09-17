# Lastman Operational Rehearsal — Action Log

**Purpose:** A short, append-only learning loop for Experiment 010. Add an
entry after every meaningful action; do not infer a phase has passed from work
that was not recorded here. The next action must be chosen from what the
previous action taught, rather than from a fixed checklist alone.

## Entry format

- **Action:** what was done and its boundary.
- **Result:** observed outcome, including failure where applicable.
- **Evidence:** command, committed state, counts, screenshot, export or other
  reproducible reference.
- **Learning:** what changed in our understanding; explicitly say "none" if
  the result added no decision-relevant knowledge.
- **Iteration decision:** what this permits, rules out or changes.
- **Next action:** one bounded action chosen because of that learning.

## 17 September 2026 — Offline rules rehearsal

- **Action:** Ran a database-free, 50-entry adapter against Lastman's actual
  survival rules engine.
- **Result:** Passed lock/autopick, 50-entry wipeout rollover, restricted and
  repeat-team eligibility, and void-round audit paths.
- **Evidence:** Lastman commit `9bc66bb`; `npm run test:rehearsal`, lint and
  production build passed.
- **Learning:** the engine can be exercised safely without a database, but a
  passing engine path says nothing about real organiser operation.
- **Iteration decision:** move from engine confidence to environment safety;
  do not attempt a live fundraiser.
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
- **Learning:** a reset/recovery cycle is technically viable, but standalone
  maintenance scripts initially failed to load `.env.local`; the scripts were
  changed to load it explicitly.
- **Iteration decision:** use this environment for synthetic rehearsals, while
  treating backup/recovery as development evidence only.
- **Next action:** Seed a separate synthetic 50-person fundraiser.

## 17 September 2026 — Test 1 data preparation

- **Action:** Added a separate `operational-rehearsal-50` synthetic fundraiser
  without overwriting restored demo data.
- **Result:** Passed: 50 participants, 49 active entries, 6 pending-payment
  entries, 35 submitted picks and an open first round.
- **Evidence:** Lastman commit `03078d3`; `npm run rehearsal:seed`; lint,
  production build and `npm run test:rehearsal` passed.
- **Learning:** the seeder created 35 picks rather than the initially stated
  30 because five early members each have a second entry. The resulting count
  check corrected the seed report. This confirms that observed state, not a
  script's intended count, is the evidence source.
- **Iteration decision:** the environment is ready for an organiser-led,
  normal-UI one-round operation. No real payment or participant is involved.
- **Next action:** Complete payment confirmation and lock/autopick through the
  organiser UI.
