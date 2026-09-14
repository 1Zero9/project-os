# Project OS Archaeology 005 — IMS Exception Process

## Status

- **Project:** IMS Exception Process
- **Archaeology ID:** 005
- **Purpose:** Test Project OS hypotheses against an enterprise governance and workflow project
- **Focus:** Approvals, security, compliance, auditability, multiple stakeholder groups, implementation, expiry, revocation and organisational dependencies
- **Classification vocabulary:** Principle, Agent, Skill, Pattern, Anti-pattern, Playbook, Template, Code Candidate, Project-specific

---

## 1. Project context

The IMS Exception Process was intended to replace a Word-based exception process with a structured digital workflow.

The proposed environment combined Microsoft Forms, SharePoint, Teams approvals and workflow automation.

The process was not simply:

**Submit → Approve**

It needed to coordinate several distinct stages:

**Request → Approval → Implementation → Confirmation → Expiry → Revocation**

Different groups had different responsibilities.

IMS approvers were responsible for governance approval, with all required approvers needing to approve.

IT Services & Operations had separate responsibility for implementing and later revoking the approved exception.

The workflow also needed to maintain state in SharePoint, create an IRIS ticket, notify the requester, capture implementation acknowledgement/completion and later trigger expiry and removal activity.

This project therefore introduces a substantially different type of evidence to Project OS.

The primary difficulty is not interface design.

It is ensuring that a business control remains reliable while responsibility moves between people, systems and time.

---

## 2. Finding — A workflow is more than a sequence of screens

### Observation

The IMS process crosses multiple systems and groups.

A request can be:

- submitted;
- pending approval;
- rejected;
- approved;
- awaiting implementation;
- implemented;
- approaching expiry;
- expired;
- revoked;
- awaiting technical removal;
- fully completed.

The important object is therefore not the form or approval card.

It is the **state of the exception**.

### Emerging lesson

For workflow systems, model the lifecycle before designing the interface or automation.

A useful question is:

> **What states can this thing be in, and what causes it to move between them?**

### Classification

- **Architecture pattern candidate:** State-first Workflow Modelling
- **Skill candidate:** Lifecycle Modelling
- **Evidence strength:** Strong

---

## 3. Finding — Approval and implementation are different controls

### Observation

IMS approval does not itself implement the exception.

After approval:

1. an IRIS ticket is created;
2. the SharePoint record is updated;
3. the requester is notified;
4. IT receives an implementation request;
5. IT acknowledges and completes the work;
6. the system records who completed it and when.

This separation is important.

A governance decision and a technical action have different owners and different evidence.

### Emerging lesson

Do not collapse:

**Authorisation → Execution**

into a single workflow state.

### Classification

- **Governance pattern candidate:** Decision/Execution Separation
- **Security pattern candidate:** Separation of Duties
- **Evidence strength:** Strong

---

## 4. Finding — Completion needs evidence, not assumption

### Observation

An approved exception cannot safely be considered implemented merely because the approval workflow completed.

The design explicitly included IT acknowledgement and completion.

The SharePoint record needed to capture who performed the implementation and when.

### Emerging lesson

Workflow automation should distinguish between:

- requested;
- acknowledged;
- performed;
- verified where necessary.

A sent message is not evidence that an action occurred.

### Classification

- **Governance pattern candidate:** Evidence-backed Completion
- **Anti-pattern candidate:** Notification Equals Completion
- **Evidence strength:** Strong

---

## 5. Finding — Rejection is a first-class workflow path

### Observation

The workflow explicitly accounted for rejection:

- notify the requester;
- update SharePoint;
- terminate or redirect the process appropriately.

This matters because AI-generated workflows often concentrate on the successful route.

### Comparison with Scorekeeper

The Scorekeeper exposed the risk of happy-path-only implementation through mistakes and correction.

IMS exposes the same issue in a governance context.

### Emerging lesson

Every material workflow transition should ask:

> **What happens when this does not succeed?**

### Classification

- **Skill candidate:** Negative-path Review
- **Anti-pattern:** Happy-path-only Implementation
- **Cross-project evidence:** Stronger

---

## 6. Finding — Time can be an active system actor

### Observation

An approved exception has an end date.

No user needs to initiate the passage of time, but reaching that date changes what the system should do.

Expiry can trigger:

- status change;
- notifications;
- technical removal activity;
- evidence of revocation.

### Emerging lesson

Workflow modelling should consider triggers beyond direct user actions.

Actors may include:

- people;
- systems;
- external events;
- **time**.

### Classification

- **Workflow pattern candidate:** Time-triggered State Transition
- **Skill candidate:** Temporal Workflow Review
- **Evidence strength:** Strong

---

## 7. Finding — Temporary access is incomplete without revocation

### Observation

The exception process was designed to grant or implement something temporarily.

That creates two operational obligations:

**Apply it correctly. Remove it correctly.**

A process that automates approval and implementation but relies on memory for removal is incomplete.

### Emerging lesson

Where a system creates temporary privilege, access or exception, revocation belongs to the original lifecycle.

It is not future housekeeping.

### Classification

- **Security pattern candidate:** Grant-with-Revocation
- **Governance pattern candidate:** Closed-loop Exception Lifecycle
- **Evidence strength:** Very strong

---

## 8. Finding — Business state and automation state are not identical

### Observation

The SharePoint record included business-oriented fields such as:

- ExceptionStatus;
- Approval;
- ExceptionEndDate;
- Created;
- IT Acknowledged;
- IT Completed.

Meanwhile, the automation itself also has execution state:

- flow started;
- action succeeded;
- approval returned;
- notification sent;
- connector failed;
- retry occurred.

These are related but different.

### Emerging lesson

A business process should not depend solely on the workflow engine's internal execution history to understand its current state.

The authoritative business record should remain understandable independently.

### Classification

- **Architecture pattern candidate:** Durable Business State
- **Anti-pattern candidate:** Workflow-engine-as-Database
- **Evidence strength:** Strong

---

## 9. Finding — Multiple owners require explicit responsibility boundaries

### Observation

The process involved:

- requester;
- IMS approvers;
- IT Services & Operations;
- IRIS;
- SharePoint;
- Teams;
- automation infrastructure.

Ambiguity between these responsibilities could create gaps such as:

- approved but never implemented;
- implemented but not recorded;
- expired but not removed;
- removed but not confirmed.

### Emerging lesson

For cross-team workflows, ownership should be modelled explicitly.

For each important state or transition ask:

> **Who owns the next action?**

and:

> **Who knows if it did not happen?**

### Classification

- **Skill candidate:** Responsibility Mapping
- **Pattern candidate:** Explicit Transition Ownership
- **Evidence strength:** Strong

---

## 10. Finding — All-required approval changes failure semantics

### Observation

The IMS approver group required all relevant approvers to approve.

This is materially different from:

- first response wins;
- majority approval;
- any one approver;
- sequential approval.

The approval rule changes how absence, rejection and delay affect the process.

### Emerging lesson

“Needs approval” is not a sufficient requirement.

Approval semantics should be explicit:

- who;
- how many;
- in what order;
- what happens on rejection;
- what happens on no response;
- whether delegation is possible.

### Classification

- **Skill candidate:** Approval-semantics Review
- **Pattern candidate:** Explicit Approval Policy
- **Evidence strength:** Strong

---

## 11. Finding — Integration architecture is constrained by organisational reality

### Observation

The intended workflow involved Microsoft Forms, SharePoint, Teams approvals and IRIS.

The implementation later faced a Logic Apps migration requirement, with enterprise application and managed identity options being considered.

This demonstrates that technical architecture can be shaped by enterprise constraints that are not visible in the initial process diagram.

### Emerging lesson

Enterprise architecture is not selected from a blank catalogue of technically valid options.

It must account for:

- platform standards;
- identity;
- permissions;
- supported integrations;
- governance;
- ownership;
- operational support;
- migration requirements.

### Classification

- **Architecture pattern candidate:** Organisationally Constrained Architecture
- **Supports:** Constraint-aware Selection
- **Evidence strength:** Strong

---

## 12. Finding — Identity is part of workflow architecture

### Observation

The consideration of enterprise applications and managed identities was not merely deployment detail.

Automations need identities capable of accessing systems and performing actions.

Those identities introduce questions such as:

- what permissions are granted;
- where credentials exist;
- whether a human account is being depended upon;
- who owns the identity;
- what happens when staff change;
- how access is reviewed.

### Emerging lesson

For automated enterprise workflows, ask:

> **Under whose identity does this action occur?**

before implementation.

### Classification

- **Security skill candidate:** Automation Identity Review
- **Security pattern candidate:** Non-human Identity Ownership
- **Evidence strength:** Strong

---

## 13. Finding — Auditability should emerge from the workflow itself

### Observation

The process needed to know:

- who requested the exception;
- whether it was approved;
- the IRIS ticket;
- whether IT acknowledged it;
- who implemented it;
- when it was implemented;
- when it expires;
- whether it was revoked.

These are not optional reporting fields.

They are evidence that the control operated.

### Emerging lesson

In governed workflows, audit evidence should be generated naturally as work progresses rather than reconstructed later.

### Classification

- **Governance pattern candidate:** Audit by Construction
- **Anti-pattern candidate:** Retrospective Evidence Assembly
- **Evidence strength:** Very strong

---

## 14. Finding — Notifications are coordination tools, not state

### Observation

The workflow uses notifications and Adaptive Cards to coordinate people.

But messages can be:

- missed;
- ignored;
- deleted;
- delayed.

The durable SharePoint record remains necessary.

### Emerging lesson

Messaging can prompt action.

It should not be the sole record that the action is required or completed.

### Classification

- **Architecture pattern candidate:** Durable State + Ephemeral Coordination
- **Evidence strength:** Strong

---

## 15. Finding — Enterprise workflow design needs failure ownership

### Observation

A multi-system automation can fail between otherwise valid business states.

Examples include:

- approval succeeds but ticket creation fails;
- ticket exists but SharePoint update fails;
- IT completes work but acknowledgement is not recorded;
- expiry occurs but removal notification fails.

The business still needs an answer to:

> **Who owns recovery?**

### Emerging lesson

Technical retry behaviour is not enough.

Important workflow failures need an operational owner and a recoverable state.

### Classification

- **Skill candidate:** Workflow Failure Analysis
- **Pattern candidate:** Owned Recovery
- **Evidence strength:** Strong

---

## 16. Finding — Governance requirements can be product requirements

### Observation

In consumer-style applications, governance may appear as a constraint surrounding the product.

In IMS, governance is the product.

Approval, evidence, expiry, implementation and revocation are the reason the system exists.

### Emerging lesson

Project OS should not assume product thinking and governance thinking are separate layers.

The nature of the project determines what creates value.

### Classification

- **Principle evidence:** Understand the actual job before selecting process
- **Evidence strength:** Strong

---

## 17. What IMS does not prove

IMS does **not** prove that:

- every project needs formal approval workflows;
- SharePoint should be a Project OS default;
- Teams Adaptive Cards should be a reusable standard;
- Logic Apps should replace other automation tools;
- every workflow requires all approvers;
- every project needs a Security agent;
- every process requires an IRIS-style ticket;
- managed identity is always preferable;
- every state transition needs human acknowledgement;
- Project OS should become a governance platform;
- all workflow knowledge should become code.

These are project-specific or architecture-dependent decisions.

---

## 18. Reusable candidates discovered

| Candidate | Type | IMS evidence |
|---|---|---|
| State-first Workflow Modelling | Architecture Pattern | Strong |
| Lifecycle Modelling | Skill | Strong |
| Decision/Execution Separation | Governance Pattern | Strong |
| Separation of Duties | Security Pattern | Strong |
| Evidence-backed Completion | Governance Pattern | Strong |
| Notification Equals Completion | Anti-pattern | Strong |
| Negative-path Review | Skill | Strong |
| Happy-path-only Implementation | Anti-pattern | Strong, now cross-project |
| Time-triggered State Transition | Workflow Pattern | Strong |
| Temporal Workflow Review | Skill | Strong |
| Grant-with-Revocation | Security Pattern | Very strong |
| Closed-loop Exception Lifecycle | Governance Pattern | Very strong |
| Durable Business State | Architecture Pattern | Strong |
| Workflow-engine-as-Database | Anti-pattern | Strong |
| Responsibility Mapping | Skill | Strong |
| Explicit Transition Ownership | Pattern | Strong |
| Approval-semantics Review | Skill | Strong |
| Explicit Approval Policy | Pattern | Strong |
| Organisationally Constrained Architecture | Architecture Pattern | Strong |
| Automation Identity Review | Security Skill | Strong |
| Non-human Identity Ownership | Security Pattern | Strong |
| Audit by Construction | Governance Pattern | Very strong |
| Retrospective Evidence Assembly | Anti-pattern | Strong |
| Durable State + Ephemeral Coordination | Architecture Pattern | Strong |
| Workflow Failure Analysis | Skill | Strong |
| Owned Recovery | Pattern | Strong |

---

## 19. Cross-project evidence after five projects

### Happy paths are insufficient

- **Scorekeeper:** users make mistakes and need correction/undo.
- **Rivervalley:** production can fail outside the application layer.
- **IMS:** rejection, connector failure, expiry and incomplete implementation are normal workflow possibilities.

**Evidence:** Strong.

A reusable review capability around negative paths and recovery is now well supported.

---

### State matters

- **Scorekeeper:** match data and events create downstream results and statistics.
- **Rivervalley:** a project changes meaning as it moves from beta to released and operating.
- **IMS:** exception state is the central business object.

**Evidence:** Strong.

State and lifecycle modelling appear reusable beyond one type of project.

---

### Context determines process depth

- **Lucy:** high design uncertainty justified deeper direction work.
- **Scorekeeper:** clear operational job justified lighter process.
- **Rivervalley:** public exposure increased release/reputation concerns.
- **IMS:** governance, security and audit requirements increase the cost of workflow errors.

**Evidence:** Very strong.

This is becoming one of the best-supported Project OS principles.

---

### Previous knowledge should include failures

- **Eolas:** knowledge retention was the original objective.
- **Rivervalley:** DNS incident created reusable troubleshooting knowledge.
- **IMS:** workflow failure paths and recovery strategies are valuable reusable knowledge.

**Evidence:** Strong.

Eolas should potentially retain both successful patterns and resolved failure lessons.

---

### Working software is only part of the system

- **Rivervalley:** DNS and hosting can break an otherwise healthy application.
- **IMS:** organisational ownership, approvals, identity and manual implementation steps can break a technically healthy automation.

**Evidence:** Strong.

Project OS needs a broader concept of system context than source code alone.

---

### Separation of concerns can preserve trust

- **Lucy:** direction and implementation benefited from separation.
- **IMS:** approval and implementation must remain separate controls.
- **Eolas:** governance of work and storage of knowledge appear to be separate responsibilities.

These are not the same pattern, but they support a broader observation:

> **Different responsibilities should not be collapsed merely because AI can perform them together.**

**Evidence:** Emerging.

---

## 20. What worked

- Modelling the process as more than approval.
- Separating governance approval from IT implementation.
- Recording durable state in SharePoint.
- Creating an implementation ticket.
- Capturing acknowledgement and completion.
- Including expiry from the start.
- Including revocation from the start.
- Assigning different responsibilities to different groups.
- Considering automation identity during architecture.
- Treating audit evidence as part of the workflow.

---

## 21. What created friction or risk

- Multiple systems created more failure boundaries.
- Multiple stakeholder groups created ownership hand-offs.
- Approval semantics needed to be explicit.
- Temporary exceptions created future revocation obligations.
- Automation identity and permissions affected architecture.
- Migration requirements changed the technical implementation environment.
- Messages and Adaptive Cards could not safely serve as durable state.
- Partial automation success could leave the business process in an ambiguous condition.

---

## 22. What was repeatedly reinvented

IMS adds potential reusable knowledge around:

- approval workflow modelling;
- state machines;
- responsibility matrices;
- negative-path analysis;
- scheduled expiry;
- revocation;
- durable workflow state;
- automation identity;
- audit evidence;
- integration failure handling;
- implementation acknowledgement;
- cross-team hand-offs.

Some of these are now strong candidates for future skills or playbooks.

They should still pass the evidence and promotion rules before becoming permanent Project OS components.

---

## 23. Emerging Project OS evidence after five projects

### Strongly supported concerns

1. **Adaptive process depth**
2. **Decision reuse before code reuse**
3. **Direction before polish**
4. **Lifecycle/state modelling**
5. **Negative-path and recovery thinking**
6. **Existing-system/context reconnaissance**
7. **Protection of working systems**
8. **Release and operational awareness**
9. **Incident/failure learning**
10. **Durable evidence where trust matters**
11. **Explicit responsibility across hand-offs**
12. **Constraint-aware architecture**
13. **Protection against process overhead**

### Increasingly credible capabilities

1. Structural-vs-Cosmetic Diagnosis
2. Lifecycle Modelling
3. Negative-path Review
4. Existing-system Reconnaissance
5. Failure-layer Diagnosis
6. Responsibility Mapping
7. External-dependency Review
8. Accessibility Review
9. Workflow Failure Analysis
10. Automation Identity Review

### Still hypotheses

1. Exact Project Council composition
2. The Brake as a standalone autonomous agent
3. Design Director as a permanent agent
4. Eolas implementation architecture
5. AI Resource Strategy
6. Multi-model orchestration
7. Automated knowledge ingestion
8. Internal reusable packages
9. Formal complexity/risk scoring
10. Automated process-drift detection

---

## 24. Archaeology outcome

IMS provides the strongest evidence so far that Project OS cannot be designed only around software creation.

Some projects are primarily about maintaining trust across:

- people;
- systems;
- decisions;
- time;
- evidence.

In such projects, the key question is not:

> **Can we automate this?**

It is:

> **Can we prove that the right thing happened, under the right authority, and that the process will eventually close?**

IMS also strengthens the case for Project OS using different specialist perspectives when risk warrants them.

However, it still does not prove that those perspectives need to exist as permanent AI agents.

That distinction should remain intact.

### Recommended next archaeology

**Archaeology 006 — Ground Control**

Why:

After IMS, the evidence base needs another product with a very different form of complexity.

Ground Control introduces:

- family users across age groups;
- multiple modules;
- external sources such as ClubZap and DDSL;
- ad-hoc tracking;
- recurring and temporary information;
- a physical whiteboard as the existing behaviour being replaced or supplemented;
- the risk of overbuilding a simple household tool.

It should test whether Project OS can help preserve **behavioural simplicity while the underlying product becomes modular**.
