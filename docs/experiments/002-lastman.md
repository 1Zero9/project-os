# Experiment 002 — Lastman Existing Project Adoption

- **Experiment:** Lastman
- **Type:** Existing Project Adoption
- **Project OS version tested:** v0.1
- **Status:** Closed

## Provenance

The Lastman repository is the authoritative project source for this
experiment. The repository state at the baseline commit represents the
project immediately before Project OS adoption.

- Repository: https://github.com/1Zero9/lastman
- Baseline commit: `d1b3b94b2fc0b0520a8adf278979d37f12c611e5`
- Baseline date: 2026-09-15

Anything at or before the baseline commit is treated as pre-Project OS
project state.

## Experiment Question

Can Project OS v0.1 be introduced into the active Lastman project at its
present state and improve the next meaningful decision without
reconstructing the project's full history?

## Starting Condition

Lastman is an existing active project developed independently of Project OS.

At the baseline it already contains implementation, documentation,
architecture, infrastructure, product rules, operational behaviour and
explicitly locked MVP decisions.

These are inherited project state. They are not to be retrospectively
rewritten to conform to Project OS.

## Adoption Boundary

Project OS v0.1 will encounter Lastman from its current repository state.

Allowed:

- inspect the current repository
- inspect current project documentation
- inspect current implementation
- recognise existing decisions and constraints
- investigate historical context only when specifically required to
  understand a current decision

Not allowed by default:

- reconstruct the complete project history
- use previous conversations to recreate how Lastman evolved
- retrospectively convert existing work into Project OS artefacts
- reopen inherited decisions merely because Project OS was not involved
  when they were made
- redesign or modify Project OS v0.1 during the experiment

## Framework Constraint

Project OS v0.1 is **FROZEN**.

Any difficulty, omission, ambiguity or friction encountered while adopting
Lastman is experiment evidence.

It is not permission to change the framework during Experiment 002.

## Intervention

Project OS v0.1 will be applied exactly as currently defined.

The first task is to establish only enough understanding of Lastman's
current state to continue responsibly.

Project OS must then identify the next meaningful decision rather than
having that decision selected in advance.

## Evaluation

The experiment will observe whether Project OS:

- establishes sufficient context without unnecessary archaeology
- correctly recognises inherited decisions and constraints
- identifies a genuinely meaningful next decision
- improves the framing or quality of that decision
- uses proportionate evidence
- avoids unnecessary reopening of settled work
- preserves useful decision evidence for subsequent work

## Success Condition

Experiment 002 is successful if Project OS materially improves the
identification, framing, making or preservation of the next meaningful
Lastman decision without requiring reconstruction of the project's full
history.

Producing additional documentation alone is not success.

## Failure Signals

Evidence against the hypothesis includes:

- substantial historical reconstruction being required before useful work
  can continue
- Project OS reopening settled decisions without material new evidence
- process overhead exceeding the value of the resulting decision
- Project OS failing to identify important existing constraints
- the resulting decision being no better than simply continuing normal
  development
- Project OS requiring framework changes before it can operate on the
  existing project

## Outcome

## Outcome

**SUPPORTED, with qualifications.**

Project OS v0.1 was introduced into an independently developed active
project and reached a consequential current decision without reconstructing
the project's full history.

The process:

- established sufficient current-state understanding from existing artefacts
- preserved inherited project decisions
- surfaced an implicit move from an RVR-specific application toward a
  provisional multi-organiser platform
- stopped historical reconstruction when owner intent became the missing
  evidence
- recorded that direction provisionally rather than prematurely freezing it
- followed the material consequence into a targeted tenant-isolation Risk &
  Failure Check
- identified a demonstrated authorisation defect
- constrained remediation to the minimum existing control pattern

The demonstrated blocker was corrected in Lastman commit:

`eafec859be32e171e0d4fba65343dadd01837983`

Verification was static rather than live functional verification.

A repeated seam was also observed between Project OS v0.1's prescribed
creation of a project-local `PROJECT-OS.md` artefact and the controlled
adoption of an existing project.

Full evidence is recorded in:

`docs/evidence/002-evidence-log.md`

## Framework Changes

**NONE.**

Project OS v0.1 remains frozen for the duration of Experiment 002.