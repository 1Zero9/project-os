# Project OS — Origin

## Why this exists

Project OS grew out of a recurring problem.

I can now build software very quickly with AI-assisted development tools such as Claude Code, Codex and similar agents. Starting a project is no longer the difficult part.

The difficult part is maintaining direction.

Across multiple projects, the same patterns began to repeat:

- starting from a blank repo even when similar problems had already been solved;
- asking AI agents to make design decisions with too little context;
- repeatedly refining UI without resolving the underlying product problem;
- recreating technical patterns that had already worked elsewhere;
- losing useful lessons inside previous repositories, chat histories and experiments;
- expanding process and tooling until the process itself became another project.

The problem was no longer simply how to build software faster.

The problem became:

> How can every new project benefit from everything learned in the projects that came before it?

Project OS is an attempt to answer that.

---

## The first attempt: Eolas

Eolas was an earlier attempt to solve part of the problem.

Its purpose was to capture useful knowledge from previous work:

- code blocks;
- reusable technical approaches;
- design ideas;
- implementation patterns;
- architecture notes;
- lessons from previous projects.

The core idea was sound:

> Previous work should create leverage for future work.

But the emphasis was primarily on capturing reusable material.

That solves only part of the problem.

A code library can tell me how I solved something before.

It cannot necessarily tell me:

- whether I should solve it that way again;
- whether the feature should exist at all;
- which previous pattern applies to the current project;
- whether the current project is drifting;
- whether I am polishing the wrong thing;
- whether the process has become more complicated than the product.

Project OS expands the Eolas idea from knowledge capture into decision support.

Eolas therefore becomes a likely knowledge layer within Project OS rather than a separate system.

---

## The Lucy experiment

Lucy was intended to be a lightweight college notes application.

During the project, the implementation became functional but the interface felt increasingly generic.

The initial response was familiar:

- change the layout;
- refine colours;
- adjust cards;
- simplify navigation;
- try another visual treatment;
- ask AI to make it feel more polished.

The application improved visually, but the underlying dissatisfaction remained.

The problem was eventually identified as UI convergence.

AI-generated interfaces were repeatedly converging towards familiar SaaS patterns:

- sidebars;
- card grids;
- dashboards;
- rounded containers;
- statistics;
- muted backgrounds;
- generic productivity language.

Lucy looked increasingly professional while becoming less distinctive.

This led to the creation of a Product Design Director process designed to move design decisions upstream.

The process evolved through several stages:

- Discover
- Critique
- Direct
- Compose
- Handoff

This produced much better product thinking.

Lucy moved from being a generic notes dashboard towards a clearer product metaphor:

> A really good college desk and notebook, not software.

That was a meaningful improvement.

But another problem appeared.

The framework for designing Lucy gradually became larger and more interesting than Lucy itself.

The process intended to stop excessive design iteration had itself become another form of excessive iteration.

That became the second major lesson.

---

## The two event horizons

Project OS exists partly to prevent two recurring failure modes.

### 1. The polish event horizon

A product reaches a point where it is close but does not feel right.

Instead of questioning the underlying structure, repeated cosmetic changes begin:

- colours;
- spacing;
- borders;
- cards;
- icons;
- typography;
- layouts.

Each iteration appears productive but does not resolve the underlying issue.

The system must recognise when the problem is not polish.

### 2. The process event horizon

A framework or methodology begins as a way to simplify work.

It gradually accumulates:

- stages;
- agents;
- documents;
- reviews;
- rules;
- abstractions.

Eventually more effort is spent improving the process than building the product.

The framework becomes the thing it was supposed to prevent.

Project OS must therefore be capable of stopping itself.

---

## Co-creation and the Project Council

Another influence came from a co-creation model used in professional work.

In that model, humans and AI agents with different roles work together to examine a problem before implementation.

The important idea is not the number of agents.

It is the deliberate collision of perspectives before significant investment occurs.

This led to the idea of a Project Council.

Depending on project complexity, different roles may examine an idea:

- Product
- User
- Design
- Architecture
- Security and Privacy
- Sceptic / Red Team

A Chair synthesises the discussion.

The objective is not to generate multiple reports.

The objective is to expose assumptions, risks and disagreements early enough that they can still influence the project.

For larger or uncertain projects, this may include pre-mortem exercises and future scenario testing.

The process should scale with project risk.

A small experiment should not require the same ceremony as a long-lived production application.

---

## The Brake

Lucy also revealed the need for a role that does not add ideas.

It removes them.

The Brake watches the process itself.

Its purpose is to detect when:

- scope has expanded implicitly;
- the original problem is no longer being solved;
- polishing has replaced decision-making;
- the framework is generating unnecessary work;
- another review is unlikely to change the result;
- decisions are being made too early;
- the project is ready to move forward.

The Brake exists because a system designed to improve decision-making also needs a mechanism for ending discussion.

---

## From framework to operating system

Project OS is not intended to be:

- a design system;
- a collection of prompts;
- an agent swarm;
- a code snippet repository;
- a software development methodology;
- a rigid project lifecycle.

It is intended to become a personal operating layer for product development.

Its job is to help answer:

- What are we building?
- Why are we building it?
- What have we already learned that applies here?
- Which risks matter?
- Which decisions need to be made now?
- Which decisions can wait?
- Which proven patterns can be reused?
- Which specialist perspective is useful?
- When should we stop thinking and start building?
- What did this project teach us that should improve the next one?

---

## The emerging model

The current working model is:

### Project OS
Governs how a project is approached.

### Project Council
Challenges significant ideas before implementation.

### Directors
Provide judgement within areas such as product or design.

### Skills
Provide reusable capabilities.

### Playbooks
Describe proven approaches to recurring situations.

### Eolas
Stores knowledge gained from previous projects:

- decisions;
- patterns;
- implementations;
- lessons.

### Code Library
Contains proven reference implementations where reuse has been demonstrated.

### The Brake
Protects the project from process drift, unnecessary complexity and endless refinement.

### Project-local documentation
Stores the specific truth for an individual project.

The OS provides the method.

The project contains the decisions.

---

## Core objective

The objective is not simply to make AI build software faster.

It is:

> To make every project benefit from the decisions, failures, patterns and experience of the projects that came before it.

The system should reduce the distance between an idea and a well-shaped project without removing the judgement required to create something distinctive.

---

## The rule that governs the system

Project OS must remove more work than it creates.

If the framework becomes harder to operate than starting from scratch, it has failed.

For that reason:

> We do not add something to Project OS because we can imagine needing it.

> We add it because previous work demonstrates why it should exist.

This repository begins by documenting that evidence.
