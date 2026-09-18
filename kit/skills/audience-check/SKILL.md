---
name: audience-check
description: Check whether something is actually written for the person meant to read it, and fix it when it is not. Use when a page, app or document is well-made but the owner says it is "not quite right", when the audience is not the person writing it (children, beginners, customers), or before shipping anything content-led.
---

# Audience Check

A thing can be well-designed, well-written, technically sound — and aimed at
the wrong reader. Nothing in a build pipeline catches this. Tests pass, lint
passes, it looks good, and the person it was made for closes the tab.

## The tell

The owner says some version of **"it's very good, but…"** and cannot finish
the sentence. That is not vagueness on their part. It usually means the
artefact is competent and mis-aimed, and the mismatch is easier to feel than
to name.

**Do not hand the question back.** "What do you mean by missing?" spends their
goodwill and gets you an adjective. Take a position: work out what is wrong,
propose the fix, and let them correct a concrete thing. Being wrong out loud
is cheaper for them than being asked.

## 1. Name the reader, singular

Not "young people" or "users" — one person, specifically. *A twelve-year-old
boy three weeks into first year who is already behind in maths.*

Then read the first screen as them. Learn2Learn opened with "Starting
secondary school asks a lot of a young person". True, careful, and written
about a child rather than to one. A twelve-year-old bounces off that sentence
and never reaches the method.

If the writer and the reader are different people, the writer's voice will win
by default. That is the thing to check for.

## 2. Two audiences means two surfaces

When a thing genuinely serves two readers — the child who uses it and the
parent who shares it, the developer and the buyer — do not average them into
one page that half-suits both. Build the surfaces separately and link them.

Put the harder-to-hold reader first. A parent will happily click through to an
explanation; a child will not scroll past one.

## 3. Craft rules that survived contact

- **Concrete beats abstract.** A method described is a diagram; a method
  happening to one real topic is something a reader can copy. Show the thing
  occurring, with names and days in it.
- **Measure the claim.** "It gets smaller" is a feeling until it is 40 minutes
  down to 2. Numbers a reader can check against their own experience carry
  weight that adjectives do not.
- **Generic does not mean vague.** When an example is too narrow, the instinct
  is to abstract it — which throws away the concreteness that made it work.
  Make it *switchable* instead: several concrete examples, one shown at a time,
  picked by the reader or at random. Costs a data array; keeps everything.
- **Assume no vocabulary.** Any word the reader might not know is a place they
  stop. Spell it phonetically, say plainly what it means, and note that the
  word is usually longer than the idea.
- **Explain the tool before using it.** Learn2Learn told children to make
  flash cards without ever saying what one is. Whatever you are telling
  someone to do, check you have said what it is and how to start.

## 4. Check it against the reader, not the spec

Read the finished thing as the named person. Where would they stop? What word
would they skip? What are they being asked to already know?

That question is the deliverable. Everything above is just what it found last
time.
