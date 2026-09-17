# Delivery Learning 004 — Intent Fidelity, Drift Detection and Rebaseline

**Status:** v0.2 candidate under Explore; Project OS v0.1 remains FROZEN.

## 1. Context

Prompt 027 attempted autonomous LaunchCity recovery. This learning turns that
failure into a candidate control, without changing LaunchCity or deciding its
future implementation.

## 2. What happened

Prompt 027 is classified **FAILED DELIVERY / VALUABLE FRAMEWORK EVIDENCE**.
The delivery produced passing technical validation and an earlier reproducible
hand-off, but founder acceptance was withheld twice. Correction work continued
from inherited/agent-written interpretation rather than repeatedly testing the
approved product intent.

## 3. Observable evidence

Repository-confirmed evidence in Experiment 007: founder acceptance was not
granted; a curved Horizon timeline was missing; title/hero composition,
Credits integration, mobile and Detail review remained unresolved; the first
iteration was independently reproducible but the final founder-directed one
was not independently reviewed; lint, types, 105 tests and two production
build targets passed; there were one autonomous and one founder-directed
correction cycle; and reported cost was ~$28.38 API-equivalent over ~1h24m.

The task prompt additionally supplies the original approved concept and later
screenshots, weakened horizon arcs, disconnected markers, weak Past/Future
narrative, incomplete blending of dark Horizon/light information surface,
incomplete information architecture, and risk of repeating LUCY. Those are
prompt-supplied retrospective evidence, not independently re-established here.

## 4. Root control failure

Project OS had controls for authority, reproducibility, review and correction
limits, but no requirement-level baseline tying approved sources to separately
tested visual, structural and behavioural acceptance. It could therefore prove
that a build ran without proving that the intended product was present.

## 5. Why existing Project OS controls did not stop it

Stand-Back Review challenged inherited decisions, decision-authority work
recorded provenance, and Delivery Learning 003 proposed founder-visible and
reproducibility gates. None required a stable, source-to-requirement register,
nor made an unresolved visual CORE item mechanically block a completion claim.
The two-correction stop was reached after costly rework, rather than forcing a
small structural proof before the next pass.

## 6. What Project OS must detect

It must detect silent omission/simplification of an authoritative requirement;
visual fidelity failure separately from interaction failure; unsupported
deferrals and supersessions; temporary/non-reproducible proof; technical
success masking product failure; repeated correction without acceptance; and
cost spent without founder-accepted value.

## 7. Proposed controls

- [Intent Baseline template](../candidates/INTENT-BASELINE-TEMPLATE.md):
  authoritative sources, stable requirement IDs, authority, status, evidence,
  budget and founder-visible checkpoint.
- [Fidelity Gate](../candidates/FIDELITY-GATE.md): a pre-work, correction and
  completion decision that blocks unresolved CORE requirements.
- [Rebaseline Trigger](../candidates/REBASELINE-TRIGGER.md): a hard stop that
  preserves usable work but requires a small founder-visible structural proof.

Use the full set for material founder-directed product work, visual delivery,
or a material correction cycle. Use the template's lightweight form for a
bounded low-risk change; it is not permission to omit known CORE intent.

## 8. Retrospective LaunchCity test

| Retrospective signal | Baseline / gate detection | Result |
|---|---|---|
| Missing or weakened horizon arcs | CORE visual invariant IB-001; committed screenshot comparison | MISSING → STOP |
| Markers disconnected from arc geometry | CORE structural/visual IB-002 | PARTIAL → STOP |
| Weak Past/Future narrative | CORE content/narrative IB-003 | PARTIAL → STOP |
| Dark/light surfaces fail one composition | CORE composition IB-004 | PARTIAL → STOP |
| Light information surface incomplete | CORE structure IB-005 | PARTIAL → STOP |
| Browsing/selection incomplete | CORE behaviour IB-006, interaction evidence | PARTIAL → STOP |
| Founder acceptance missing | named approval event/checkpoint absent | STOP |
| Repeated correction cycles | trigger at two cycles without acceptance | STOP AND REBASELINE |
| Technical validation passes despite product failure | separate technical and intent evidence | technical pass cannot pass gate |
| Non-proportionate cost | budget/accepted-value check | trigger if budget exceeded without acceptance |

The gate should have stopped at the first founder-visible rejection, before the
founder-directed revision: CORE visual/structural items were not accepted, so
the next action should have been a committed small proof of arc geometry,
Past/Future narrative, combined surfaces and information architecture. At the
second unaccepted correction cycle it would again require rebaseline, not a
completion claim. This retrospective detected every requested issue on the
first run; no candidate revision was required.

## 9. Limitations and risks

The control cannot replace founder judgment, recover unavailable source
material, or turn subjective taste into objective pass/fail criteria. Poorly
written requirements can still be gamed. The full form would be wasteful for a
small internal fix; proportional invocation is therefore explicit. Evidence
must be interpreted cautiously where it originates in a task prompt rather
than retained repository material.

## 10. Recommendation

**SUPPORT for a second-project test**, not promotion. Test it on a different
founder-directed product change, with the baseline approved before building and
the first founder-visible structural proof before detailed implementation.

## 11. Prompt and cost ledger

| Measure | Record |
|---|---|
| Prompt | 028 |
| Issued / completed before execution | 28 / 25 |
| Active | 1 — Prompt 028 |
| Failed delivery retained as evidence | Prompt 027 |
| Unconfirmed/superseded | 1 |
| LaunchCity retrospective reported delivery cost | ~$28.38 API-equivalent; ~1h24m; 107 requests (Experiment 007) |
| This framework change cost | Local repository work only; no paid service or production action |

## 12. Promotion criteria

Promote only if a second-project test shows that the register and gate catch a
material drift before detailed rework, produce a founder-visible structural
proof from committed state, and remain proportionate. The test must show that
the gate's result and any deferral/supersession are traceable, technical checks
remain distinct from product acceptance, and cost is assessed against
founder-accepted value.
