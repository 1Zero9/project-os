# Fidelity Gate — v0.2 Candidate Procedure

**Status:** EXPLORE candidate; not a v0.1 control. Run it before implementation,
after each material correction, and before an agent says **complete**,
**accepted**, or **ready to deploy**.

## Inputs and operating steps

1. Load the approved [Intent Baseline](INTENT-BASELINE-TEMPLATE.md), its
   authoritative sources, committed revision and delivery budget.
2. Assess every requirement independently. Record visual similarity/composition
   separately from behavioural completeness; a good interaction cannot repair a
   failed visual invariant, or vice versa.
3. Attach reproducible evidence for each result: committed revision, commands,
   screenshots/video where appropriate, and interaction outcome.
4. Apply the decision rules below and write the gate result into the delivery
   record. Do not substitute test/build/lint/accessibility success for product
   acceptance.

## Checklist

- [ ] Each CORE row is PRESENT, or has a founder-approved deferral or approved
  replacement linked in the baseline.
- [ ] Every FOUNDER-DEFERRED item names an explicit founder decision.
- [ ] Every SUPERSEDED item links to its traceable approved replacement.
- [ ] Visual invariants and behavioural requirements have separate evidence.
- [ ] Technical validation results are recorded as supporting evidence only.
- [ ] Final proof uses committed state; no temporary fixture, local seed,
  uncommitted data, or ephemeral setup is required.
- [ ] The founder-visible result is reproducible by the stated commands.
- [ ] Budget/correction-cycle position and founder checkpoint are recorded.

## Decision rules and required output

| Condition | Output | Required action |
|---|---|---|
| Evidence cannot be reproduced or is absent/ambiguous | **INSUFFICIENT EVIDENCE** | Do not claim completion; obtain or recreate evidence from committed state. |
| A CORE item is PARTIAL/MISSING; a deferral lacks founder approval; a supersession lacks an approved replacement; or a rebaseline trigger is active | **STOP AND REBASELINE** | Stop implementation and run [Rebaseline Trigger](REBASELINE-TRIGGER.md). |
| All non-deferred CORE items are PRESENT and every deferred CORE item has explicit founder approval | **PASS WITH FOUNDER-APPROVED DEFERRALS** | State each deferral and its decision in the hand-off. |
| All CORE items are PRESENT, evidence is reproducible, and no trigger applies | **PASS** | Completion may be claimed, subject to the named acceptance authority. |

An agent must not declare “complete”, “accepted” or “ready to deploy” while a
CORE requirement is unresolved. Passing tests, builds, linting, accessibility
checks, or an implementation agent's interpretation never override that rule.

## Output record

`Revision: ___ | visual: ___ | behavioural: ___ | technical: ___ | core gaps:
___ | deferrals: ___ | budget/cycles: ___ | founder checkpoint: ___ | result:
PASS / PASS WITH FOUNDER-APPROVED DEFERRALS / STOP AND REBASELINE / INSUFFICIENT
EVIDENCE`
