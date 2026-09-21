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

**If anyone other than just you might ever land on this — a prospective
club, a customer, the 1Zero9 portfolio — gated content needs a public front
door.** A bare sign-in form is not a product page: it explains nothing to
someone who doesn't already know what this is. Boot Room shipped behind a
login wall for a full session before the founder caught it (2026-09-20),
his own words: "there are other sites I have created like this too" — a
recurring pattern, not a one-off. Default: a real `/` explaining what it
does and who it's for, separate from `/sign-in`, before real building
starts — not a retrofit once someone notices the gap. The one exception is
a genuinely single-owner private workspace with no prospective audience at
all (step 1's "just you" case) — there, a bare gate is correct, not missing
anything.

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
marginally better service every time at this stage. **This includes a
database provider whenever step 2 said hosted Postgres — name and confirm
one before writing any schema or code against it, don't discover it's
unreachable mid-build.** Boot Room (2026-09-20) cycled through three
providers live — Neon (signup blocked), Prisma Postgres (a stuck console
flow), then Supabase — after the app was already scaffolded around the
first one. Confirming a provider actually works (an account exists, a
connection string is in hand) belongs in shaping, not discovered as a
build-time surprise.

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
| Shared data, hosting on Vercel/Node | Postgres + Prisma | Postgres for a single-user tool |
| Shared data, hosting on Cloudflare Workers | Postgres + Drizzle (`node-postgres` driver) via Hyperdrive | Prisma — see guardrail below |
| Local/single-user data | SQLite or IndexedDB | a hosted database |
| Private single-owner web workspace | verified deployment-level protection, or one shared signed-password session | a user-account/role system |
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
  for unknown roles; a plain JSON cookie is not authorization. Verify that
  deployment protection covers the **production** domain before relying on
  it: Vercel's Standard Protection did not protect RVR 2014 Team Admin's
  production URL (2026-09-20), despite its name. Where production protection
  is not actually enabled, one shared signed-password session is the small
  sufficient boundary for a private owner workspace.
- `kit/assets/prisma-postgres-starter.ts` — the dev-hot-reload-safe Prisma
  client singleton.
- `kit/assets/pwa-shell/` — installable PWA baseline (manifest, offline
  service worker, registration component).
- `kit/assets/ai-provider-wrapper-gemini.ts` — a minimal fetch-based Gemini
  wrapper for a project using a Google key. Check the model name against
  Google's current docs before trusting the default — it drifts.

One more, extracted from Boot Room (2026-09-20):

- `kit/assets/hyperdrive-drizzle-cloudflare/` — Postgres on Cloudflare
  Workers via Hyperdrive + Drizzle, the default for that combination (see
  `kit/CONVENTIONS.md`'s Prisma-on-Workers guardrail for why Prisma isn't
  it). Request-scoped `getDb()`, a direct-connection variant for local
  scripts, the `next.config.ts` fixes both Prisma's WASM engine and `pg`
  itself needed, and the subdomain-attachment snippet.

For a project whose runtime secrets are already in 1Password, use
`kit/assets/1password-project-secrets/`: it keeps a non-secret project-to-
vault/item/field registry and injects those values only into the command that
needs them. Do not copy secret values into POS, source control, an `.env`
template, or an agent handoff. Local interactive use goes through the
1Password desktop-app CLI integration; CI needs a separate, vault-scoped
machine identity or Credential Broker configuration.

## Output

Keep it short. No headings-heavy report.

- **Shape** — one line: what this is and what it runs on.
- **Stack** — only what's justified, with a one-clause reason each.
- **Skip** — what this project does *not* need, and why. This is the valuable part.
- **Lift from** — project → file → what it gives you.
- **First step** — the one thing to build that tests the riskiest unknown.
- **Repo & hosting** — say this every time, don't let the defaults table
  answer it silently:
  - **Repo:** `git init` as part of the build, by default — the way any
    other reversible, standard-practice setup step gets done without being
    asked. Only skip it if told to. **Pushing to a real GitHub/GitLab org is
    a different, check-first action** — `git init` is purely local and
    reversible, creating a remote repo (even private) is a persistent
    external change with its own visibility. Confirmed on Boot Room
    (2026-09-20): asked before creating `1Zero9/boot-room`, got an explicit
    yes, then used `gh repo create --source=. --push`.
  - **Hosting:** name one (Vercel, Cloudflare, or otherwise) with a
    one-line reason, matching what step 3 already decided about where it
    runs. Having "Hosting | Vercel" in the defaults table below isn't the
    same as actually saying it — a real project (Boot Room, 2026-09-20) got
    fully scaffolded and run without hosting ever being named out loud.
  - **Database locality, if step 2 said hosted Postgres:** ask local vs. a
    free-tier hosted instance (Neon / Vercel Postgres) — don't default to
    installing anything. See the guardrail below; this one is not optional.

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
- **Never install new system-level software without asking first** — a
  database engine, a `brew`/`apt` package, a background service. Found live
  scaffolding Boot Room (2026-09-20): local Postgres got installed via
  Homebrew and started as a persistent `brew services` launch agent,
  entirely without asking. Founder's own words: "I was never asked to do
  this before." This is not like editing a file inside the project
  directory — it's a change to the machine itself that outlives the
  session, the same category the Bash tool's own safety rules already put
  a force-push or `rm -rf` in. Ask; don't default to it. A free-tier hosted
  Postgres (Neon / Vercel Postgres) is very often the better answer anyway —
  it's what production will actually run, so dev and prod don't quietly
  diverge on a choice nobody made on purpose.
- **A schema change is not shipped until its migration matches the live
  engine.** Check the configured database driver and migration metadata before
  generating anything. If an inherited repository has stale or mismatched
  migration history (for example SQLite snapshots beside a PostgreSQL app),
  do not run a blind schema push: provide reviewed SQL for the live engine and
  state exactly where it must be applied.
