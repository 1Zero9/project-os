---
name: new-project
description: Shape a new project before building it — decide platform, storage, auth and hosting, and find reusable precedent in the user's existing projects. Use when the user describes a new idea they want to build ("I want to build X", "new project for Y", "thinking about making Z"), or asks what stack or platform something should use.
---

# New Project

Turn an idea into a shaped project with the smallest sufficient stack, plus the
precedent to lift from. **Recommend less, not more.** The best outcome is often
"you don't need a database for this".

## How to run it

Infer every answer you can from the idea itself. **Ask only what genuinely
changes the recommendation** — usually one or two questions, never a
questionnaire. Then give the shape, the precedent and the first step.

Do not write a spec, a plan document, or a project-OS file. Shape it, then build.

## The decision sequence

Work down. Each answer prunes what follows.

**1. Who uses it?** Just you → no auth, no accounts, no multi-tenancy. A known
small group → one shared password or magic link. Public/customers → real auth.

**2. Does state outlive the session?** No → no database. Use component state or
a JSON file. Yes, single user → SQLite file or the browser (IndexedDB /
localStorage). Yes, shared between people or devices → hosted Postgres.

**3. Where does it run?** Read on a phone → PWA (installable, works offline).
Desktop-only utility → native or a local script; a web app may be the wrong
shape. Public/marketing → static site, no framework needed. Long-running or
scheduled → needs a server or cron.

**4. Does anything happen when the user isn't there?** Reminders, digests,
scheduled jobs → cron + push/email. If not, skip all of it.

**5. Does it need a paid service or API key?** Ask which the user already has
before recommending one — do not assume a provider. An available key beats a
marginally better service every time at this stage.

**6. What's the riskiest unknown?** Build the smallest thing that tests that
first — before any layout, branding or colour work.

When a feature's accuracy or quality is the thing everything else depends on,
that is the riskiest unknown, and the first build is a throwaway script that
measures it — not the app around it.

## Defaults, once the above is settled

Only apply what steps 1–4 actually justified.

| Need | Default | Don't reach for |
|---|---|---|
| Web app | Next 16 + React 19 + TS + App Router + Tailwind | a new framework to learn |
| Shared data | Postgres + Prisma | Postgres for a single-user tool |
| Local/single-user data | SQLite or IndexedDB | a hosted database |
| Private single-owner web workspace | deployment-level protection | a second, app-level account/role system |
| Auth (public/customers) | next-auth | rolling your own |
| Auth (a known small group) | `kit/assets/cookie-session-auth/` | next-auth (heavier than the tier needs) |
| Hosting | Vercel | anything needing setup time |
| Scheduled work | Vercel cron | a long-running server |
| Tests | Vitest; Playwright only for critical flows | 100% coverage |
| Static site | plain HTML/CSS or Astro | Next.js |
| AI features | whichever provider the user already has a key for | assuming a provider |

These are starting points to override, not rules. Say so when overriding.

## Finding precedent

Read `INDEX.md` next to this skill (~50 lines — read it, don't grep the whole
portfolio). Match on the `capabilities` column: `auth, payments, email, push,
charts, csv, upload, cron, ai, pwa, motion, tests, e2e, api, schema, vercel,
cloudflare`.

Then name the specific project and file to lift from, and **read that file only
when it's about to be used**. Copy the code into the new project — never add a
dependency on another project.

If nothing matches, say so plainly. A wrong precedent costs more than none.

A project doing a build-time bulk pull from a rate-limited external API:
start from `kit/assets/resilient-fetch.mjs`, not a fresh retry loop. It
encodes three real failures from F1's fetch script (fixed backoff alone,
under-paced retry-after handling, an uncaught network-level exception that
lost 20 minutes of otherwise-complete work) so the next project doesn't
re-earn them one at a time.

Four more assets, extracted from eolas's accelerators when it was parked
(2026-09-19 — see AI-HANDOFF.md):

- `kit/assets/cookie-session-auth/` — the single-password, cookie-gated auth
  step 1 of this skill calls for ("a known small group → one shared password
  or magic link"). The original eolas version set the cookie's value to the
  literal string `"true"` — forgeable from a browser console. Fixed here to
  sign it with an HMAC and server-verified expiry before use. Require a real
  environment password and secret—never embed a fallback credential. If the
  project has roles, make the role part of a signed session and fail closed
  for unknown roles; a plain JSON cookie is not authorization.
- `kit/assets/prisma-postgres-starter.ts` — the dev-hot-reload-safe Prisma
  client singleton.
- `kit/assets/pwa-shell/` — installable PWA baseline (manifest, offline
  service worker, registration component).
- `kit/assets/ai-provider-wrapper-gemini.ts` — a minimal fetch-based Gemini
  wrapper for a project using a Google key. Check the model name against
  Google's current docs before trusting the default — it drifts.

## Output

Keep it short. No headings-heavy report.

- **Shape** — one line: what this is and what it runs on.
- **Stack** — only what's justified, with a one-clause reason each.
- **Skip** — what this project does *not* need, and why. This is the valuable part.
- **Lift from** — project → file → what it gives you.
- **First step** — the one thing to build that tests the riskiest unknown.

Then offer to build it. Don't wait for approval of a plan that isn't written down.

## Conventions

Read `CONVENTIONS.md` in the kit before shipping anything: the 1Zero9 build
credit, adding the finished site to the portfolio, and where new sites live.
Apply them without being asked.

## Guardrails

- No branding, naming or colour work until the product shape is settled.
- If the idea is close to an existing project, ask whether this is a new project
  or a feature of that one before scaffolding anything.
- If the answer is "this doesn't need building", say that.
