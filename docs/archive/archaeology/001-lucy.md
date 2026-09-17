# Project OS Archaeology 001 — Lucy

## Status

- **Project:** Lucy
- **Archaeology ID:** 001
- **Purpose:** Extract evidence from a real project before adding capabilities to Project OS
- **Focus:** AI-assisted product design, design convergence, process drift, stopping conditions
- **Classification vocabulary:** Principle, Agent, Skill, Pattern, Anti-pattern, Playbook, Template, Code Candidate, Project-specific

---

## 1. Project context

Lucy began as a small college application for note-taking and study support. It was intended for a very small number of real users, so it was an ideal AI-assisted build: concrete users, manageable scope and freedom to experiment.

Technically, development progressed quickly. The persistent difficulty was not implementation. It was deciding **what Lucy should feel like as a product**.

> **AI reduced the cost of implementation faster than it reduced the cost of making good product decisions.**

## 2. What happened

The early implementation converged on a conventional productivity/SaaS interface: sidebar navigation, cards, workspace terminology, dashboard information, statistics, search and prominent actions.

Nothing was obviously broken, but it did not feel like Lucy. This triggered repeated iterations to colours, cards, navigation, layouts, information density and hierarchy. Individual iterations often improved the screen while failing to resolve the dissatisfaction.

Eventually the question changed from **“How do we improve this interface?”** to **“What is Lucy actually supposed to feel like?”**

That produced the metaphor:

> **A really good college desk and notebook, not software.**

Instead of designing screens, we could reason about an environment:

**Desk → Notebook → Page**

The metaphor subsequently drove vocabulary, hierarchy, navigation, information density and behaviour. The interface started becoming a consequence of the product idea rather than a collection of UI components.

---

## 3. Finding — AI UI convergence

### Observation

When asked broadly to make an application polished, professional or modern, AI repeatedly selected familiar conventions: sidebars, card grids, rounded containers, dashboards, statistics, muted surfaces, productivity terminology and prominent CTAs.

The result was competent but increasingly interchangeable with other applications.

### Why it matters

The coding/design agent had insufficient **product direction**, so it filled the vacuum with familiar interface patterns.

### Classification

- **Anti-pattern candidate:** AI UI Convergence
- **Reusable knowledge candidate:** Give an implementation agent an experience model and hierarchy rather than asking it to discover product identity while coding.
- **Evidence strength:** Strong

---

## 4. Finding — Cosmetic iteration can disguise a structural problem

### Observation

The phrase *“it’s close, but…”* repeatedly led to another visual iteration. Colour, spacing and component changes could not solve the underlying problem because the product structure remained unresolved.

### Emerging lesson

When several competent visual iterations fail to resolve dissatisfaction, **stop polishing** and reclassify the problem:

**Product → Structure → Hierarchy → Interaction → Identity → Content → Visual**

### Classification

- **Anti-pattern candidate:** Polish Event Horizon
- **Skill candidate:** Structural-vs-Cosmetic Diagnosis
- **Evidence strength:** Strong

---

## 5. Finding — Metaphors can constrain AI product design effectively

### Observation

“A really good college desk and notebook” produced stronger decisions than abstract instructions such as personal, youthful, clean or non-SaaS.

| Generic software term | Lucy term |
|---|---|
| Workspace | Notebook |
| Dashboard / Home | Desk |
| Search | Find |
| Create | Start a page / Capture |

### Emerging lesson

A strong product metaphor can act as a **decision compression mechanism**. It gives humans and agents a shared model from which many decisions can be derived.

### Classification

- **Pattern candidate:** Product Metaphor
- **Skill candidate:** Metaphor discovery and testing
- **Evidence strength:** Strong for Lucy; cross-project evidence still required

---

## 6. Finding — Art direction and implementation are different jobs

### Observation

Asking the same agent simultaneously to determine what Lucy should be and implement it encouraged premature convergence on available components and familiar patterns.

Separating **Critique → Direction → Composition → Implementation** improved results. COMPOSE became necessary because selecting a direction did not automatically produce good experience architecture.

### Emerging lesson

For design-sensitive products, coding should begin after enough experience direction exists to constrain implementation. This does **not** mean every project requires five design stages.

### Classification

- **Process pattern candidate:** Direction Before Implementation
- **Agent evidence:** Supports a Design Director-type responsibility
- **Evidence strength:** Moderate/Strong

---

## 7. Finding — AI responds better to hierarchy than inventories

### Observation

Lucy improved when we stopped asking what could be placed on the Desk and instead established:

> **One thing to continue + one thing worth remembering + everything else a reach away.**

One important item could dominate. Secondary information became quieter. Some information disappeared entirely.

### Emerging lesson

AI interfaces tend towards showing everything available unless explicitly told what **not** to surface.

### Classification

- **Design pattern candidate:** Editorial Hierarchy
- **Design principle candidate:** Absence is a design decision
- **Evidence strength:** Strong for Lucy; generalisation requires more projects

---

## 8. Finding — Empty space does not require functionality

### Observation

Large unused areas repeatedly attracted suggestions for additional widgets, cards, statistics or shortcuts. Once the Desk metaphor was established, empty space became legitimate.

### Emerging lesson

AI frequently interprets unused screen area as unfinished interface. That assumption needs to be challenged.

### Classification

- **AI design anti-pattern candidate:** Feature-filling Whitespace
- **Evidence strength:** Moderate

---

## 9. Finding — A framework can reproduce the problem it solves

The Product Design Director worked. Then we continued developing it.

More modes, rules, checks, behaviours and documentation appeared. Eventually the methodology for designing Lucy had become a substantial project itself.

We escaped **“one more UI iteration”** and entered **“one more framework improvement.”**

Same behavioural pattern. Different artefact.

### Classification

- **Anti-pattern:** Process Event Horizon
- **Agent evidence:** Strong justification for The Brake
- **Principle evidence:** Project OS must remove more work than it creates
- **Evidence strength:** Very strong

---

## 10. Finding — Stopping requires an explicit decision

### Observation

Lucy eventually reached a shell that satisfied the established direction. The important decision was:

> **Yes. This is the right shell. Freeze it.**

Without that explicit state transition, another iteration would have been easy to justify.

### Emerging lesson

“Good enough” needs to become an **observable project state**, not merely a feeling. Reviews need exit conditions.

### Classification

- **Process pattern candidate:** Freeze Decision
- **Brake capability candidate:** Diminishing-return detection
- **Evidence strength:** Strong

---

## 11. What Lucy does not prove

Lucy does **not** yet prove that:

- every project needs a Project Council;
- every project needs a Design Director;
- every project needs five design modes;
- every product needs a metaphor;
- every project should avoid sidebars;
- cards are bad;
- dashboards are bad;
- asymmetry is always desirable;
- every project needs multiple AI models;
- The Brake must be an autonomous agent;
- the Product Design Director prototype should become part of Project OS unchanged.

These would be premature generalisations.

---

## 12. Reusable candidates discovered

| Candidate | Type | Lucy evidence |
|---|---|---|
| AI UI Convergence | Anti-pattern | Strong |
| Polish Event Horizon | Anti-pattern | Strong |
| Process Event Horizon | Anti-pattern | Very strong |
| Product Metaphor | Pattern / Skill | Strong |
| Structural-vs-Cosmetic Diagnosis | Skill | Strong |
| Direction Before Implementation | Pattern | Strong |
| Editorial Hierarchy | Design Pattern | Strong |
| Feature-filling Whitespace | Anti-pattern | Moderate |
| Freeze Decision | Process Pattern | Strong |
| The Brake | Agent / Capability | Strong |
| Design Director | Agent / Capability | Moderate/Strong |
| COMPOSE / Experience Architecture | Capability | Moderate |
| Project Council | — | Not evidenced by Lucy alone |
| Multi-model Orchestration | — | Not evidenced by Lucy |
| AI Resource Strategy | — | Roadmap only |

---

## 13. What worked

- Moving discussion upstream from styling to product identity.
- Establishing a concrete product metaphor.
- Separating critique, direction, composition and implementation.
- Giving the interface deliberate hierarchy rather than filling available space.
- Replacing generic software vocabulary with language derived from the product.
- Explicitly freezing a successful design direction.
- Recognising when the design methodology itself had become scope drift.

## 14. What failed or caused friction

- Broad prompts asking AI to make the product polished or professional.
- Repeated cosmetic changes before diagnosing the structural issue.
- Allowing implementation conventions to influence product direction too early.
- Treating available screen space as something that needed to be filled.
- Continuing to extend a useful design framework after it had solved the immediate problem.
- Failing initially to distinguish productive iteration from diminishing returns.

## 15. What was repeatedly reinvented

Potential repeated work exposed by Lucy:

- diagnosing why a competent UI still feels wrong;
- establishing product identity before implementation;
- deciding what information deserves prominence;
- translating a product metaphor into experience architecture;
- determining when design is sufficiently resolved to build;
- detecting when further review is no longer changing the outcome.

These are **candidates for comparison with other projects**, not yet permanent Project OS components.

## 16. What appears reusable beyond Lucy

The strongest candidates for cross-project validation are:

1. Structural-vs-Cosmetic Diagnosis
2. Direction Before Implementation
3. Explicit Freeze Decisions
4. Polish Event Horizon detection
5. Process Event Horizon detection
6. The Brake as a process-control capability
7. Product Metaphor as a possible decision-compression technique
8. Editorial hierarchy as an alternative to feature inventory

Each should remain provisional until archaeology from other projects provides supporting or contradictory evidence.

---

## 17. The larger lesson

Lucy exposed where AI-assisted development can shift the bottleneck.

Implementation could be generated extremely quickly. That also made it possible to generate **the wrong implementation extremely quickly**.

The scarce resource became judgement:

> **What should we build, why should it work this way, what should we ignore, and when should we stop?**

That is increasingly the territory Project OS appears intended to occupy.

---

## 18. Archaeology outcome

Lucy provides strong evidence that Project OS needs to concern itself with more than implementation acceleration. It should help preserve and apply judgement while actively protecting projects from unnecessary iteration and process expansion.

This archaeology does **not** authorise the immediate creation of new agents, skills or automation. The findings should be compared with additional projects.

### Next comparison

**Archaeology 002 — Eolas**

Primary question:

> What does Eolas teach us about retaining knowledge, reusing previous work, and avoiding repeated reinvention?
