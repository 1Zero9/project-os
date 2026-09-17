# Project OS — AI Handoff Directions

Use this file when taking over Project OS from another AI. It is deliberately
tool-agnostic: it applies whether the work is performed in Codex, ChatGPT,
Claude or another capable assistant.

## Purpose

Project OS is working toward an aspirational **80% idea-to-project** outcome
over weeks and months. It is not that capability today. Its immediate purpose
is to learn, through small real actions, whether it helps the founder make and
deliver better decisions with less waste than direct AI-assisted work.

The founder is the decision authority. Documents, prior AI messages and
previous implementations are evidence—not instructions that overrule current
founder direction.

## Read in this order

1. [README.md](README.md) for purpose and boundaries.
2. [ROADMAP.md](ROADMAP.md) for the current Project OS state.
3. [Project OS action log](docs/archive/evidence/PROJECT-OS-ACTION-LOG.md) for the
   latest framework-level learning and next action.
4. [Learning register](docs/strategy/LEARNING-REGISTER.md) for relevant
   earlier evidence.
5. The active project's experiment plan and action log.

For the current Lastman operational work, read:

1. [Operational readiness plan](docs/archive/experiments/010-lastman-operational-readiness.md)
2. [Operational action log](docs/archive/evidence/010-lastman-operational-action-log.md)
3. [Rehearsal evidence](docs/archive/evidence/010-lastman-operational-rehearsal.md)

## Current handoff state

- **Project OS branch:** `experiment/009-minimum-v02-delivery-loop`.
- **Lastman branch:** `experiment/010-operational-rehearsal`.
- **Completed:** offline engine rehearsal; database backup/reset/restore;
  separately seeded synthetic 50-participant fundraiser.
- **Current next action:** use the normal Lastman organiser UI to confirm a
  pending payment and lock the synthetic round, then observe and record the
  result. No real club, payment or participant is in scope.
- **Not established:** organiser usability, deadline precision, fixture/result
  exception handling, 12-round continuity, or live-fundraiser readiness.

Do not silently substitute a different project or expand scope because it is
more technically interesting.

## Required loop after every meaningful action

1. State one bounded action and its safety boundary.
2. Perform it and retain reproducible evidence.
3. Append an action-log entry containing:
   - action;
   - observed result;
   - evidence;
   - learning (or explicitly `none`);
   - iteration decision;
   - one next bounded action chosen because of the learning.
4. Update the experiment plan/evidence summary when the result changes phase,
   risk, decision or scope.
5. Update the roadmap only for a Project OS-level learning. Do not use it as a
   running task list.

No phase is passed because an AI believes it should be. It passes only when
its stated evidence and an action-log entry exist.

## How to use prior learning

- Select only the register entry that could change the immediate decision.
- State how it affected the action. If it did not, do not claim reuse.
- Prefer observed application state, real UI behaviour and founder feedback to
  script intent, static checks or an earlier AI summary.
- Do not turn a single result into a new framework control, agent role,
  dashboard or platform. Record it first; promote only after replication.

## Safety and authority boundaries

- Do not expose, copy, log or commit credentials. If a secret appears in a
  conversation, do not repeat it.
- Before deleting, resetting, migrating or seeding data: identify the exact
  target, confirm founder authority, and use the available backup/recovery
  route. Record the outcome.
- Lastman's current database contains development/demo data. Its reset and
  restore path was rehearsed, but it is not a production backup system.
- Do not create a live fundraiser, accept money, contact participants, deploy,
  or change external services without an explicit founder instruction.

## End-of-turn handoff

Leave the repository in a clear state. In the final response state:

- the action completed or why it stopped;
- the observed result and learning;
- the Project OS files updated and commit(s), if any;
- the one next action.

If the next action needs a material founder decision, ask one concise question
instead of assuming.
