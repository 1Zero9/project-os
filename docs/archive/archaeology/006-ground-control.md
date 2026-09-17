# Project OS Archaeology 006 — Ground Control

## Status

- **Project:** Ground Control
- **Archaeology ID:** 006
- **Purpose:** Test Project OS hypotheses against a family product with behavioural simplicity and growing modular complexity
- **Focus:** Existing behaviour, mixed-age users, modularity, external sources, temporary tracking, household adoption and scope control
- **Classification vocabulary:** Principle, Agent, Skill, Pattern, Anti-pattern, Playbook, Template, Code Candidate, Project-specific

---

## 1. Project context

Ground Control began from an existing family behaviour rather than from a desire to build software.

The family already used a physical whiteboard on the fridge.

It handled normal family events, but it was also used for lightweight, temporary tracking such as:

- a three-week course of tablets;
- antibiotics;
- days until a birthday;
- days until a holiday;
- other short-lived household information.

The whiteboard worked because it was:

- visible;
- shared;
- quick;
- informal;
- flexible;
- easy for different family members to understand.

The digital product idea introduced additional possibilities:

- family planning;
- ClubZap information;
- DDSL information;
- ad-hoc trackers;
- modules;
- multiple family members;
- mobile access.

The challenge was therefore not simply to digitise a calendar.

It was:

> **How do we add digital leverage without destroying the behavioural simplicity that made the physical system useful?**

---

## 2. Finding — Existing behaviour is product evidence

### Observation

Ground Control did not begin with a blank product brief.

The whiteboard was already a functioning prototype used in daily life.

Its imperfections were less important than the fact that people actually used it.

### Emerging lesson

When software replaces or supplements an existing behaviour, study the behaviour before designing the system.

Ask:

- What makes the current method work?
- What friction do users tolerate?
- What do they do that the formal process does not describe?
- Which apparent limitations are actually useful constraints?

### Classification

- **Skill candidate:** Existing-behaviour Reconnaissance
- **Pattern candidate:** Behaviour Before Features
- **Evidence strength:** Very strong

---

## 3. Finding — Digitising something can accidentally make it harder

### Observation

A physical whiteboard allows a person to write almost anything immediately.

A digital system can easily replace that with:

- forms;
- categories;
- required fields;
- navigation;
- date pickers;
- configuration;
- save actions.

The software may become more structured while becoming less convenient.

### Emerging lesson

Digital transformation should not be measured only by capability.

It should also ask:

> **What did the old method allow in one action that now takes five?**

### Classification

- **Anti-pattern candidate:** Digitised Friction
- **Skill candidate:** Interaction-cost Comparison
- **Evidence strength:** Strong

---

## 4. Finding — Informality can be a requirement

### Observation

The whiteboard supported information that did not fit a single formal data model.

A note about tablets, a birthday countdown and a football event can coexist because the board does not demand that they belong to the same category.

### Emerging lesson

Not all ambiguity should be removed from a product.

For some tools, the ability to capture something without first classifying it is part of the value.

### Classification

- **Product pattern candidate:** Capture Before Classification
- **Anti-pattern candidate:** Premature Structuring
- **Evidence strength:** Strong

---

## 5. Finding — Mixed-age users change the design problem

### Observation

Ground Control was intended for adults, teenagers and younger children.

This means a design cannot assume:

- identical reading habits;
- identical patience;
- identical technical confidence;
- identical reasons for opening the application;
- identical levels of responsibility.

### Emerging lesson

A “family user” is not a useful single persona.

Design should identify shared actions while allowing differences in role, attention and capability.

### Classification

- **Skill candidate:** Multi-audience Analysis
- **Pattern candidate:** Shared Core, Role-sensitive Experience
- **Evidence strength:** Strong

---

## 6. Finding — Adoption is part of product success

### Observation

The physical whiteboard already had one major advantage:

people knew where it was and how to use it.

A digital replacement has to earn a new habit.

A technically superior planner can fail if family members stop checking it.

### Emerging lesson

For products replacing an established habit, success includes:

**Can users remember to use it without being managed into using it?**

### Classification

- **Product skill candidate:** Adoption-friction Review
- **Pattern candidate:** Habit-transition Design
- **Evidence strength:** Strong

---

## 7. Finding — A module should earn its existence

### Observation

Ground Control naturally invited modular expansion.

Potential modules could include:

- family events;
- ClubZap;
- DDSL;
- trackers;
- countdowns;
- sport;
- reminders;
- other household information.

This creates a clear scope risk.

The word “module” can legitimise almost any additional feature.

### Emerging lesson

Modularity is an architecture technique, not evidence that a feature belongs in the product.

A module should answer:

> **Which recurring family job does this make materially easier?**

### Classification

- **Brake capability candidate:** Module Challenge
- **Anti-pattern candidate:** Modular Scope Creep
- **Evidence strength:** Strong

---

## 8. Finding — Integration should not become the product

### Observation

ClubZap and DDSL can provide useful family information.

But Ground Control exists to help the family coordinate, not to become a replica of either external service.

### Emerging lesson

External data should be transformed into the minimum information useful to the product's core job.

A useful test is:

> **If this integration disappeared tomorrow, would the product still have a coherent reason to exist?**

### Classification

- **Pattern candidate:** Integration as Input, Not Identity
- **Supports:** External-dependency Review
- **Evidence strength:** Strong

---

## 9. Finding — Temporary information deserves a lifecycle

### Observation

Many whiteboard items are intentionally short-lived.

Examples include:

- medication courses;
- countdowns;
- temporary commitments;
- short-term reminders.

The value of these items depends partly on disappearing when they are no longer relevant.

### Comparison with IMS

IMS demonstrated time-triggered expiry in a governed workflow.

Ground Control demonstrates the same broader concept in a low-risk household context.

### Emerging lesson

Time is a product behaviour, not merely a date field.

Some information should naturally:

**Appear → Remain relevant → Complete/Expire → Recede**

### Classification

- **Pattern candidate:** Temporary Information Lifecycle
- **Cross-project support:** Temporal Workflow Review
- **Evidence strength:** Strong

---

## 10. Finding — Persistence is not always desirable

### Observation

Digital systems naturally preserve data.

Physical whiteboards naturally forget data when erased.

For some family information, permanent history may create clutter without creating value.

### Emerging lesson

Before storing information indefinitely, ask:

> **Will anyone benefit from this after its purpose has ended?**

### Classification

- **Data pattern candidate:** Purpose-limited Persistence
- **Anti-pattern candidate:** Permanent-by-Default
- **Evidence strength:** Moderate/Strong

---

## 11. Finding — Visibility can matter more than feature depth

### Observation

The fridge whiteboard works partly because it is encountered naturally.

Nobody needs to search for it.

A digital planner can contain more information while being less visible in daily life.

### Emerging lesson

For coordination products, discoverability is not only navigation.

It can include:

- glanceability;
- home-screen presence;
- notifications where justified;
- shared displays;
- widgets;
- routine placement.

The exact mechanism is implementation-specific.

### Classification

- **Product pattern candidate:** Ambient Visibility
- **Evidence strength:** Strong

---

## 12. Finding — The simplest input may be the most important feature

### Observation

The physical system allows immediate capture.

Ground Control therefore risks failure if adding an item requires users to understand the product's information architecture first.

### Emerging lesson

Capture should often optimise for:

**Low thought → low friction → immediate visibility**

Organisation can happen later where necessary.

### Comparison with Lucy

Lucy also identified Capture as a primary action.

Two very different products therefore support the value of separating **capture** from later organisation.

### Classification

- **Interaction pattern candidate:** Low-friction Capture
- **Cross-project evidence:** Stronger

---

## 13. Finding — The product should preserve useful imperfection

### Observation

A handwritten board can be messy.

That messiness also allows:

- shorthand;
- incomplete thoughts;
- temporary annotations;
- unusual information;
- quick changes.

A perfectly structured digital planner may remove these affordances.

### Emerging lesson

Do not automatically interpret informal behaviour as a defect to eliminate.

Some imperfections are flexibility.

### Classification

- **Design principle candidate:** Preserve Useful Imperfection
- **Evidence strength:** Moderate/Strong

---

## 14. Finding — Product naming can influence household adoption

### Observation

The project moved away from the functional name “Family Planner” towards **Ground Control**.

The aim was to find something that children, teenagers and adults could engage with rather than presenting another household administration tool.

### Emerging lesson

Naming can be functional product design when adoption depends on emotional accessibility.

This does not mean every project requires a branding exercise.

### Classification

- **Product pattern candidate:** Adoption-oriented Naming
- **Evidence strength:** Moderate

---

## 15. Finding — Product architecture and interface complexity are not the same

### Observation

Ground Control may require increasingly sophisticated internals to support:

- external feeds;
- different modules;
- family members;
- temporary information;
- synchronisation;
- recurring information.

That does not mean the user should experience equivalent complexity.

### Emerging lesson

A product can become technically sophisticated while preserving a simple behavioural surface.

> **Internal complexity does not justify external complexity.**

### Classification

- **Architecture/design principle candidate:** Complexity Containment
- **Evidence strength:** Strong

---

## 16. Finding — The Brake has evidence outside design work

### Observation

Lucy justified The Brake through endless design and methodology iteration.

Ground Control exposes another form of drift:

**feature expansion through plausible modules.**

Every proposed module can sound useful individually.

Collectively, they can turn a simple family coordination tool into a household operating platform nobody wants to maintain.

### Emerging lesson

The Brake should challenge not only polish and process.

It may also need to challenge **plausible accumulation**.

### Classification

- **Agent/capability evidence:** The Brake
- **Capability candidate:** Scope Accumulation Detection
- **Evidence strength:** Stronger cross-project evidence

---

## 17. What Ground Control does not prove

Ground Control does **not** prove that:

- every family product should mimic a whiteboard;
- every product needs modules;
- ClubZap or DDSL should become Project OS integrations;
- all temporary information should be deleted;
- all capture should be unstructured;
- every application needs widgets or notifications;
- children and adults require completely different interfaces;
- every existing manual process should be digitised;
- Ground Control needs AI;
- household products should avoid structured data;
- The Brake must automatically reject new modules.

These remain contextual decisions.

---

## 18. Reusable candidates discovered

| Candidate | Type | Ground Control evidence |
|---|---|---|
| Existing-behaviour Reconnaissance | Skill | Very strong |
| Behaviour Before Features | Product Pattern | Very strong |
| Digitised Friction | Anti-pattern | Strong |
| Interaction-cost Comparison | Skill | Strong |
| Capture Before Classification | Product Pattern | Strong |
| Premature Structuring | Anti-pattern | Strong |
| Multi-audience Analysis | Skill | Strong |
| Shared Core, Role-sensitive Experience | Pattern | Strong |
| Adoption-friction Review | Skill | Strong |
| Habit-transition Design | Pattern | Strong |
| Module Challenge | Brake Capability | Strong |
| Modular Scope Creep | Anti-pattern | Strong |
| Integration as Input, Not Identity | Pattern | Strong |
| Temporary Information Lifecycle | Pattern | Strong |
| Purpose-limited Persistence | Data Pattern | Moderate/Strong |
| Permanent-by-Default | Anti-pattern | Moderate |
| Ambient Visibility | Product Pattern | Strong |
| Low-friction Capture | Interaction Pattern | Strong, now cross-project |
| Preserve Useful Imperfection | Design Principle candidate | Moderate/Strong |
| Adoption-oriented Naming | Product Pattern | Moderate |
| Complexity Containment | Architecture/Design Principle candidate | Strong |
| Scope Accumulation Detection | Brake Capability | Strong |

---

## 19. Cross-project evidence after six projects

### Existing context should be studied before creating a solution

- **Scorekeeper:** usage context shaped pitch-side interaction.
- **Rivervalley:** existing club identity constrained redesign.
- **IMS:** organisational architecture and responsibility shaped automation.
- **Ground Control:** an existing physical behaviour already demonstrated what users valued.

**Evidence:** Very strong.

A broader reusable capability is emerging:

> **Context Reconnaissance before intervention.**

---

### Process depth should scale with uncertainty and consequence

- **Lucy:** design ambiguity justified deeper direction work.
- **Scorekeeper:** clear job supported lightweight process.
- **Rivervalley:** public release introduced operational and reputational concerns.
- **IMS:** governance and security increased consequence.
- **Ground Control:** low-risk household use argues against enterprise-style ceremony despite product complexity.

**Evidence:** Very strong.

---

### Time is a first-class design dimension

- **IMS:** exception expiry triggers revocation.
- **Ground Control:** temporary household information naturally becomes irrelevant.
- **Rivervalley:** promotional content can become stale after an event.

**Evidence:** Strong.

Project OS should eventually be capable of asking what happens to information and obligations **later**, not only when created.

---

### Capture and organisation are different activities

- **Lucy:** Capture emerged as a primary action separate from notebooks.
- **Ground Control:** immediate informal capture is central to the existing whiteboard behaviour.
- **Eolas:** knowledge capture must be lightweight, but later qualification determines reuse.

**Evidence:** Strong.

---

### Complexity should be contained

- **Lucy:** excessive interface components obscured the product.
- **Eolas:** excessive knowledge capture could create noise.
- **Ground Control:** modular and integration complexity must not reach the family experience.
- **IMS:** multi-system complexity requires durable state and clear ownership.

**Evidence:** Strong.

Different projects express the same broader concern:

> **Complexity may be necessary internally; it should not spread without justification.**

---

### The Brake is gaining cross-project evidence

- **Lucy:** polish and process event horizons.
- **Eolas:** risk of collection becoming the work.
- **Ground Control:** plausible modules can accumulate into scope creep.
- **Rivervalley:** post-release aesthetic change can threaten working software.

**Evidence:** Strong.

What remains unproven is **implementation form**.

The evidence supports a Brake **capability** more strongly than it supports a permanent autonomous Brake agent.

---

## 20. What worked

- Beginning from an existing family behaviour.
- Recognising the whiteboard's flexibility rather than treating it as primitive.
- Expanding the concept to include temporary trackers as well as calendar events.
- Seeking a name that could work across age groups.
- Treating the product as modular without immediately defining every possible module.
- Considering external family information as inputs rather than the whole product.
- Prioritising a welcoming, uncluttered and easy-to-view experience.

---

## 21. What created friction or risk

- The product could easily become a feature-rich family management platform.
- Every plausible module creates a new maintenance surface.
- Digital structure can introduce friction absent from the physical board.
- External integrations introduce dependencies.
- Different family members have different adoption thresholds.
- Permanent storage can create unnecessary historical clutter.
- A technically capable system can still fail if nobody develops the habit of checking it.

---

## 22. What was repeatedly reinvented

Ground Control adds candidates for recurring knowledge around:

- rapid capture;
- countdowns;
- temporary trackers;
- expiry;
- family/member roles;
- external calendar/feed ingestion;
- mobile-first shared information;
- lightweight notifications;
- modular feature boundaries;
- household adoption.

Some may later become patterns or implementation candidates.

They should not be promoted merely because multiple potential uses can be imagined.

---

## 23. Emerging Project OS evidence after six projects

### Strongly supported principles and concerns

1. **Never start from zero**
2. **Understand before building**
3. **Process depth must scale with risk and uncertainty**
4. **Direction comes before polish**
5. **Reuse decisions before code**
6. **Protect working systems**
7. **Negative paths and recovery matter**
8. **State and lifecycle matter**
9. **Existing context and behaviour are evidence**
10. **Complexity should be contained**
11. **Capture should not become an end in itself**
12. **The framework must remove more work than it creates**
13. **Know when to stop**

### Increasingly credible reusable capabilities

1. Context Reconnaissance
2. Structural-vs-Cosmetic Diagnosis
3. Lifecycle Modelling
4. Negative-path Review
5. Responsibility Mapping
6. Failure-layer Diagnosis
7. External-dependency Review
8. Accessibility Review
9. Adoption-friction Review
10. Interaction-cost Comparison
11. Scope Accumulation Detection
12. Freeze/stop decision support

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

Ground Control adds an important constraint to Project OS:

> **Better software does not necessarily mean more software.**

The existing whiteboard already solved much of the family's problem.

The digital opportunity comes from adding leverage where technology is genuinely better:

- bringing information together;
- making it available away from the fridge;
- handling time automatically;
- reducing repeated entry;
- surfacing relevant external information.

But the digital product should preserve the whiteboard's strongest properties:

- immediacy;
- flexibility;
- visibility;
- informality;
- low cognitive cost.

Ground Control also provides further evidence for The Brake, but the correct conclusion remains conservative:

> **Project OS needs the ability to challenge accumulation. It does not yet prove that this ability needs its own permanent agent.**

### Recommended next archaeology

**Archaeology 007 — Scribble**

Why:

Scribble is another deceptively simple product with strong constraints:

- desktop desk-pad metaphor;
- local storage;
- privacy;
- click-to-type;
- dictation;
- pen input;
- drag/drop;
- snap-to-grid;
- minimal organisation;
- live date/clock;
- GDPR, AI-policy and EU AI Act considerations.

It should help test several emerging findings from Ground Control and Lucy:

- whether a metaphor genuinely improves product decisions across projects;
- how much structure a lightweight capture tool needs;
- whether privacy/local-first decisions become reusable architecture knowledge;
- how Project OS should treat products whose value depends on **staying small**.
