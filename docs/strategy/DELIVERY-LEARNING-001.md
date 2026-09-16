# Delivery Learning 001 — Stand Back Before Acting

Document status:

- Type: Founder-direction delivery learning
- Source projects: Golf Club Tools and LaunchCity
- Date: 16 September 2026
- Framework status: Candidate learning
- Evidence classification: Observed delivery evidence
- Project OS v0.1 effect: None
- Promotion status: Not promoted

---

## 1. Why this learning exists

After Founder Direction, Project OS moved from experiments into a proposed
end-to-end product delivery.

Golf Club Tools was initially selected. A technical review and pre-mortem
were completed before recognising that:

- the tool had only ever been an example;
- Donabate Golf Club had not requested or sponsored it;
- Steve had no agreed route to authoritative data or users;
- treating it as a real delivery would require an external relationship
  that did not exist.

LaunchCity was then selected. Its current-state review correctly found
that the product implementation was largely complete and that its material
gap was production freshness.

However, the delivery process initially accepted these inherited decisions:

- Cloudflare as the combined hosting, scheduling and caching platform;
- a 15-minute refresh cadence;
- anonymous Launch Library 2 access;
- the assumption that the existing platform decision should be preserved.

The process then:

1. diagnosed the production 429 condition;
2. added a bounded retry;
3. deployed it;
4. proposed a 24-hour wait;
5. only then stepped back and questioned the platform decision.

The retry was safe and useful, but the architectural challenge should have
happened earlier.

---

## 2. Was diving in the plan?

- Selecting and completing one real product was intentional.
- Beginning with current-state evidence was consistent with Project OS.
- Moving from current-state review directly into remediation was too fast.
- The process lacked an explicit gate requiring inherited assumptions and
  platform choices to be challenged before implementation.
- "Already decided" was treated too easily as "previously validated".
- Product direction, implementation choices and temporary tooling
  decisions were not given distinct levels of stability.
- Project OS preserved momentum but initially preserved the wrong type of
  decision too strongly.

---

## 3. Evidence

LaunchCity evidence, by repository and commit:

- Retry implementation: `8bf8fc12d996de68b82b047b75657d81256ae406`
- Architecture review: `0b7b1ccfdec79f9b787b5873045a5a2f46ad4034`
- Hosted-egress spike: `9f0bd8310789ad56e3ec0b19592ee7b86a268505`

Observations:

- Cloudflare Cron was operating correctly.
- Cloudflare-origin calls intermittently received 429.
- A GitHub-hosted request to the same LL2 endpoint succeeded with almost
  unused quota.
- Cloudflare was selected after Vercel Hobby's Cron limitation was
  encountered.
- No broader platform comparison had been performed.
- Hosting, scheduling, cache and network origin had been bundled into one
  decision.
- The comparative spike strengthened the execution-environment hypothesis.
- The spike also exposed an information-handling mistake when
  `/api-throttle/` returned an IP field; the run was deleted and the
  mistake documented.

---

## 4. What Project OS did well

- Distinguished local, repository and production evidence.
- Inspected the live system rather than assuming the code represented
  reality.
- Preserved the last-good snapshot.
- Used a bounded and reversible correction.
- Stopped the 24-hour wait when its value was challenged.
- Reopened an inherited decision when new evidence justified it.
- Ran a small comparative spike instead of immediately migrating
  platforms.
- Documented mistakes rather than concealing them.

---

## 5. What Project OS missed

- Authority and legitimacy were checked too late for Golf Club Tools.
- The product candidate was selected before confirming a valid user and
  release route.
- Inherited decisions were listed but their provenance was not
  challenged.
- Platform alternatives were not considered at intake.
- The 15-minute freshness requirement was not traced to user value.
- The first proposed response focused on fixing the observed mechanism.
- The cheaper architecture question was asked after implementation.
- A 24-hour observation was proposed before determining whether waiting
  could answer the material question.
- Tooling was allowed to expose more diagnostic data than intended.
- Prompt and process cost accumulated before the problem was reframed.

---

## 6. Candidate capability: Stand-Back Review

A proposed lightweight gate that runs:

- before accepting a new project for delivery;
- before significant implementation begins;
- when inheriting an existing project;
- before adopting or preserving a platform decision;
- before creating a recurring operational cost;
- before acting on a failure that may indicate a deeper architectural
  problem.

### Authority and legitimacy

- Who owns the problem?
- Who asked for the work?
- Do we have authority to build, access the data, test with users and
  release?
- Is an external organisation being treated as a client when no
  relationship exists?

### Outcome and user value

- What outcome matters?
- Who will use it?
- What does complete mean?
- Is the stated performance, freshness or availability requirement tied
  to real user value?
- What is the simplest observable success signal?

### Assumption inventory

For every material assumption, record:

- assumption;
- source;
- evidence;
- confidence;
- consequence if wrong;
- cheapest way to test it.

Explicitly distinguish:

- fact;
- constraint;
- preference;
- inherited decision;
- untested assumption;
- temporary implementation choice.

### Decision provenance

For every consequential inherited decision:

- Why was it made?
- What problem did it solve?
- What alternatives were considered?
- Was it validated or merely convenient?
- Is the original condition still true?
- What evidence would reopen it?

### Platform and dependency challenge

Before choosing or preserving platforms, examine:

- hosting;
- runtime;
- storage;
- scheduling;
- external APIs;
- authentication;
- quotas and rate limits;
- cost;
- data ownership;
- portability;
- vendor coupling;
- operational visibility;
- recovery path.

Ask whether these capabilities need to live on one platform.

### Cheapest disproof

- What could invalidate the proposed approach?
- What test could reveal that within approximately one hour?
- Can that test happen before implementation?
- What result means stop, reframe or compare alternatives?

### Pre-mortem

Assume the project failed and ask:

- Which early assumption was probably wrong?
- Which dependency failed?
- Which platform choice became expensive?
- Which user or authority did we assume existed?
- What work would we regret doing first?

### Gate decision

Return one:

- PROCEED
- PROCEED WITH CONDITIONS
- REFRAME
- COMPARE OPTIONS
- PAUSE
- STOP

Require a reason and the next smallest action.

---

## 7. Decision stability levels

Candidate levels:

1. **Founder direction** — Changes only through deliberate founder review.
2. **Product promise** — Preserved unless user or market evidence
   materially changes it.
3. **Architecture decision** — Inherited provisionally and reopened by
   operational, cost, security or scale evidence.
4. **Platform/tool choice** — Treated as replaceable unless specifically
   validated as a durable constraint.
5. **Implementation detail** — Freely changed within the product and
   architecture boundaries.

This is a candidate model and has not been promoted into Project OS.

---

## 8. Prompt and process cost

Founder Direction delivery prompt ledger:

- 10 prompts issued before this learning-capture prompt.
- 9 returned completed evidence.
- 1 became unconfirmed or superseded.
- The sequence produced useful evidence but also demonstrated that
  Project OS needs to ask higher-level questions earlier.
- Prompt count alone is not a quality measure.

Useful future measures include:

- prompts before first material implementation;
- prompts spent on rework;
- prompts caused by an untested assumption;
- prompts that changed a decision;
- prompts that produced only documentation;
- time to first tangible user value;
- avoided work.

---

## 9. Candidate promotion criteria

The Stand-Back Review should not enter frozen v0.1 immediately.

Evidence supporting it currently includes:

- Golf Club Tools authority/release-route mismatch;
- LaunchCity inherited-platform assumption;
- LaunchCity unchallenged freshness cadence;
- retry-before-architecture sequence;
- stopped 24-hour wait;
- hosted-egress comparison.

It becomes a strong v0.2 candidate if:

- it prevents at least one material piece of unnecessary work in another
  project; or
- applying it retrospectively to another mature project reveals a
  consequential inherited assumption before implementation begins.
