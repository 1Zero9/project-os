---
name: inherit-project
description: Take over a project someone or something else started — an AI site builder, an old repo, a handover — and find the next decision worth making. Use when there is an existing artefact that was not built here, especially one generated from a prompt, and the question is what to do with it.
---

# Inherit Project

The third entry point: not a new idea, not your own codebase, but something
that already exists and was built by someone — or something — else.

The instinct is to rebuild it properly. That is almost always wrong. The
artefact usually works; what is missing is whether it is the right thing.

## 1. Read the artefact, not the description

Find what it actually is before asking about it. A generated site is often a
single file; an inherited repo is often smaller than it looks. Count the real
content: how many pages, how many lines that are not scaffold, what the
database holds, whether anyone has used it.

Check the live version against the local one — they drift.

## 2. Assume the substance was invented

This is the failure mode specific to generated work. Given an idea, a
generator will produce a name, a palette, a tagline and a **framework** — and
the framework will be confident, plausible, and made up. It fills the gap
where the thinking should be, in the thinking's own voice.

Learn2Learn shipped a four-pillar method (Understand / Organise / Practise /
Grow) that the founder had never decided on. The real method was four
different phases, and better. Nothing on the page flagged the difference.

So: **treat every stated framework, principle or process in generated work as
unverified until its owner confirms it.** Ask "is this actually yours?" before
building anything on top of it. Months later nobody can tell the invented part
from the decided part — including the person whose idea it was.

## 3. Separate the vehicle from the substance

Ask the two questions apart:

- **Is the form right?** A link you can send, an app, a document, a workbook.
- **Is the content right?** What it actually says and does.

Usually the vehicle is fine and the substance is hollow. Keep the hosting, the
brand, the layout, the URL — replacing those is motion. Replace what it says.

## 4. Expect the test suite to be a lie

Generated scaffolds ship with tests that assert the *placeholder* state. They
fail the moment the project is built, so the suite has been red since day one
and everyone has learned to ignore it. Run the tests, check whether they
failed before your change, and replace them with tests of the actual product
rather than deleting them.

## 5. Cutting the cord is a build change, not a delete

When the artefact moves off the platform that generated it, expect hooks in
places that have nothing to do with the product — and expect removing them to
break the build, so verify rather than assume.

In Learn2Learn the platform reached into four files: a hosting config declaring
bindings, a build plugin whose only job was copying that config into `dist`, an
auth module that could only work behind the platform's own request headers, and
a dev-server workaround for the platform's sandbox. Deleting the hosting config
alone broke the build, because the Vite config imported it — to choose between
two empty arrays.

So: find every reference before deleting anything (`grep` the filename across
the repo), remove the indirection rather than recreating a stub to satisfy it,
and run a full build with none of the platform's files present. Deleting the
old hosted copy afterwards matters too — otherwise the generated version stays
online, contradicting the real one and usually outranking it.

## 6. Find the next decision, not the next task

The output of this skill is a decision, not a build. Often it is:

- the substance needs writing before anything gets built;
- the form is wrong and the content should move;
- this does not need to exist yet;
- one small change makes it usable and nothing else is warranted.

## What to ask the owner

Few questions, and only the forking ones. Reliably useful:

- **Is this framework/process actually yours, or did the tool write it?**
- **Who is it for?** Generated copy addresses an imagined general audience;
  the real one is usually narrower and changes the form.
- **What would make it worth having?** Often much less than what exists.

## Conventions

Read `CONVENTIONS.md` in the kit before shipping anything: the 1Zero9 build
credit, adding the finished site to the portfolio, and where new sites live.
Apply them without being asked.

## Guardrails

- Do not port it to your usual stack because the stack is unfamiliar. Working
  and hosted beats familiar and rewritten.
- Do not improve the design before the content is settled — polishing invented
  substance makes it more convincing, not more true.
- If the owner's own words are better than what is on the page, use their
  words. They almost always are: specific, concrete, with a story behind them.
