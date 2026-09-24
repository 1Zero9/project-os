# Conventions

Standing rules for anything built under 1Zero9. Short by design — a convention
earns a place here only when forgetting it would mean going back and redoing
work. Apply them without being asked.

## Recreate the style, never reproduce the source material

A homage project (`wopr-terminal`, recreating a film's computer interface)
recreates the *style* — a color palette, a font, a layout logic, a mood — not
copyrighted frames, stills or footage from the actual source. The founder
shared real reference stills from the film itself (2026-09-21, via IMDb);
flagged before using them: a recreated interface aesthetic is transformative,
literal film stills baked into a live, publicly-attributed site are not — that's
redistributing someone else's copyrighted images, not building something new.
Built an original backdrop evoking the same mood instead (an abstract
tactical grid, not a copy of any specific frame). Applies to any future
homage/nostalgia project: describe the reference, don't embed it.

Never ship the `create-next-app` default favicon. Use the confirmed visual
identity — ideally an `app/icon.tsx` with `ImageResponse` — rather than
inventing a new mark. Verify the rendered page's `<link rel="icon">` (or
`metadata.icons`), not merely that an icon file exists: a stock file can be
orphaned and a reachable custom file can still be unlinked. A neutral project
does not need an invented custom favicon before its identity is settled.

Satori (the renderer behind `ImageResponse`/`next/og`) only supports
`display: flex`, not `grid` — a grid-based mark fails the build outright
(`Invalid value for CSS property "display"`), not just a rendering
difference. Confirmed on Boot Room (2026-09-20): its stud-grid mark had to
be rebuilt as two flex rows. Write any `app/icon.tsx` mark in flex from the
start.

## Every site carries a build credit

In the footer of any site built for or by 1Zero9: the logo mark, not text
alone. Learn2Learn shipped text-only first ("Built by 1Zero9", no image) and
had to be corrected once the real pattern was found on a live reference
(rivervalleyrangers.ie, via `~/Projects/RVR2026/components/layout/Footer.tsx`).

The mark is `kit/assets/109-logo-circle-white2.png` (white on transparent, for
a dark footer) or `109-logo-circle1.png` (black on transparent, for a light
one) — copy whichever matches the footer's background into the project's
`public/`. Canonical source is `~/Projects/1Zero9Studio/public/images/`; the
kit's copy is for reference and reuse, not the source of truth.

```html
<a href="https://www.1zero9.com" target="_blank" rel="noopener noreferrer" aria-label="Built by 1Zero9">
  <img src="/109-logo-circle-white2.png" alt="" width="28" height="28" />
  Built by 1Zero9
</a>
```

**Render the mark at 28×28px** (in CSS if the framework's image component
scales it, or directly in the `width`/`height` attributes with a plain
`<img>`). This is a specific number, not a rough one: the reference
implementation (RVR2026's `Footer.tsx`) passes `width={16} height={16}` to
`next/image` as loader hints, then overrides the actual rendered size to 28px
via `className="h-7 w-7"` (Tailwind: 7 × 4px). Learn2Learn copied the visible
`16` as the literal pixel size and shipped the mark at half the reference's
size before this was caught and fixed. When copying an implementation that
uses a framework-specific sizing mechanism, check what size actually renders,
not the first number in the markup.

**This has now happened twice independently** — Marvin had the identical
bug (`width={16} height={16}` passed to `next/image` with no CSS override
at all) sitting live in production, uncaught until a direct "look at Marvin"
request months later (2026-09-21). Documenting the mistake once didn't stop
it recurring on a different project. When `portfolio-audit` or any other
review touches a project with a build credit already in place, check its
*rendered* size against a real page load, not just that the credit exists —
the same way the favicon guardrail already requires checking the linked
`<link rel="icon">`, not just that an icon file is present.

Icon and text both inside the link, alongside whatever else the footer says.
Use a plain `<img>`, not a framework image component, unless the project's own
`next/image` (or equivalent) is known to work in production — Learn2Learn's
vinext build silently dropped both `next/link` and would very likely have
mishandled `next/image` the same way; check before trusting it, don't assume.

Add a test for the credit where the project has a test suite (asserting on
"Built by" text and the `1zero9.com` href is enough — don't assert on exact
markup), so it cannot quietly disappear in a redesign.

**A source asset is not a shipped asset.** When adding a referenced static
file — especially a footer mark copied from the kit — confirm it exists in
the project's public/static directory *and* request its deployed URL after
release. A screenshot can expose the failure immediately: a broken-image
placeholder next to an otherwise correct credit still fails the credit
requirement. This caught an Ogham Design footer that referenced the dark-footer
white mark without copying it into `public/` (2026-09-24). Build success does
not validate runtime asset paths.

For a visual redesign, inspect one real desktop render and one narrow/mobile
render after deployment. Treat the visual states of selected controls,
disabled controls, remote/static images, and the footer as acceptance criteria;
they are product behaviour, not cosmetic follow-up.

**A new Worker version does not necessarily replace cached HTML at the edge.**
After a release, verify the canonical URL without a query string, not only a
cache-busted URL. If `/?release=<id>` shows the new UI while `/` shows the old
one, the deployment succeeded but the edge is serving stale HTML. Make the
page's cache policy intentional (for a frequently redesigned public landing
page, use dynamic/no-store rendering) or purge the exact public URL before
calling the release complete. Ogham Design exposed this on 2026-09-24: its
new Worker was at 100%, yet `/` continued to return the preceding design from
a one-year static response cache.

## Every finished site goes in the portfolio

The portfolio is `~/Projects/1Zero9Studio`, on Vercel, deploying from `main`.
Projects are MDX in `content/projects/<slug>/index.mdx`, following
`content/projects/_template/index.mdx`.

To add one:

1. Write `content/projects/<slug>/index.mdx` — frontmatter plus The idea /
   The build / Why it matters.
2. Screenshot the live site at 1440×900 to
   `public/images/projects/<slug>.png`, and set `coverAlt`.
3. `npm run lint && npm run typecheck && npm run build` — the same checks CI
   runs.
4. Push to `main`; Vercel deploys.

Set `draft: false` or it will not appear. `status` is
`live | in-progress | featured | concept`.

## Sites live under 1zero9.com

New sites take a subdomain — `<name>.1zero9.com` — on Cloudflare, where the
zone is. **Never deploy to the apex or `www`**: those serve the portfolio, and
taking them replaces it.

Attaching a Cloudflare custom domain creates the DNS record automatically;
there is nothing to add by hand. For a Workers project (via OpenNext), attach
it in `wrangler.jsonc` and redeploy — confirmed on Boot Room (2026-09-20):

```jsonc
"routes": [
  { "pattern": "<name>.1zero9.com", "custom_domain": true }
]
```

The same mechanism works for a plain static site with no framework at all —
`wrangler.jsonc`'s `assets.directory` needs no OpenNext, just the `routes`
block above.

When CI or another external system must call a Worker, use its configured
custom domain, not a constructed `*.workers.dev` hostname. The account portion
of `workers.dev` is not safely inferable and a guessed one can fail as a
Cloudflare 404 even while the deployed Worker is healthy. LaunchCity's hourly
GitHub ingestion silently used `launchcity.onezeronine.workers.dev` instead
of its real `launchcity.1zero9.com` endpoint and failed every run until this
was corrected (2026-09-22).

**If it's going on a `1zero9.com` subdomain, default to Cloudflare hosting,
not Vercel — don't discover this mid-build.** Confirmed on `wopr-terminal`
(2026-09-21): Vercel was picked without saying so out loud (the exact
mistake this file's own new-project guardrail warns about, made minutes
after writing it), and hit a real wall — the Cloudflare credentials
available can read the `1zero9.com` zone but can't write a DNS record, and
Vercel has no way to attach a subdomain of a zone it doesn't control
without one. Only Cloudflare-native custom-domain attachment (Workers,
Pages) works against this zone. Vercel stays fine for anything on its own
domain; a `1zero9.com` subdomain specifically means Cloudflare hosting.

**A static-assets Worker (`assets.directory` in `wrangler.jsonc`) serves
the whole directory by default — including `.git/` and any other repo
tooling files — unless excluded.** The first `wopr-terminal` deploy
uploaded `.git/` and `.vercel/project.json` as publicly-servable files
before this was caught. Add a `.assetsignore` next to `wrangler.jsonc`,
same shape as `.gitignore`:

```
.git
.gitignore
.vercel
.wrangler
wrangler.jsonc
.assetsignore
README.md
.env.local
```

This disables the `*.workers.dev` URL by default once added — the subdomain
becomes the real one, which is the point.

## Every OpenNext/Cloudflare deploy needs its incremental cache wired up

`defineCloudflareConfig({})` has no incremental-cache backend, so every
request can fall back to a full server render and fail under concurrent load.
Use R2 incremental cache, bind it as `NEXT_INC_CACHE_R2_BUCKET`, and
load-test the live site across several routes. A clean deployment is not
evidence that the cache is being read.

Fix, in `open-next.config.ts`:

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
```

Plus an R2 binding in `wrangler.jsonc`:

```jsonc
"r2_buckets": [
  { "binding": "NEXT_INC_CACHE_R2_BUCKET", "bucket_name": "<project>-incremental-cache" }
]
```

`opennextjs-cloudflare deploy` creates and populates the bucket.

## A multi-tenant route uses the tenant's slug, never its internal id

If a table has a public-facing slug column, the URL uses it —
`/clubs/rivervalley-rangers`, not `/clubs/yzcvbe5fpkp824n9d36ebp7p`. Boot
Room shipped with the raw id for a full session before this was caught
(2026-09-20) despite `clubs.slug` existing in the schema the whole time —
easy to miss because the internal id "works" and nothing errors. Resolve
slug → id once at the top of the route; every internal query and mutation
still keys on the real id as normal, only the URL and any `redirect`/
`revalidatePath` targets use the slug.

## Dashboard privacy is enforced in the route, for the tenant

Removing a dashboard from public navigation is not access control: a visitor
can still open or guess its direct URL. A dashboard that shows entrant names,
picks, results, fundraising totals, or similar competition data must first
require a signed-in user and then verify that user is a participant or member
of the route's tenant. Apply the check in every canonical tenant route, not
only in a friendly redirect such as `/standings` → `/c/<slug>/standings`.

Last Man Standing exposed standings, leaderboard and selection dashboards to
guests because its canonical slug routes only checked that a competition was
not a draft (2026-09-22). Login alone would still have let one fundraiser's
member view another's data; the correct boundary is the viewer's actual
relationship to the tenant. Keep genuinely public content (for example a
generic landing page or fixture list) explicitly separate, and do not cache
private dashboard reads in a service worker or public data cache.

When a controlled app needs a public demonstration, make it an explicit,
read-only demo route backed by one known synthetic tenant. Never achieve it by
leaving all active tenants public and hoping their URLs stay obscure. The demo
must say that its data is fictional and must not permit joining, picking,
payment, or access to an organiser area. Last Man Standing's public demo
(2026-09-23) exposed only fixture-style sample data; every real competition,
including its fixture route, requires membership.

## A fallback path must never show more than the success path would

If public content is filtered for visibility (archived, hidden, draft,
unpublished), every failure and direct-lookup path must apply the same filter.
Never return a raw fallback list "to keep the site up": that fails open.
Extract the visibility check and call it on every path out.

## Prisma on Cloudflare Workers: default to Drizzle instead

Prisma's WASM query engine (required for driver adapters, since Workers has
no Node runtime for the normal native binary) hits multiple real,
currently-open upstream bugs specific to Prisma-on-Workers-via-OpenNext:
`cloudflare/workers-sdk#11535`, `prisma/orm#23457`,
`opennextjs-cloudflare#471`. The WASM file traces into the build correctly,
but the generated client tries to read it from a filesystem path that
doesn't exist inside a Worker at runtime — confirmed live on Boot Room
(2026-09-20): typecheck, lint and `opennextjs-cloudflare build` all passed,
`wrangler deploy` succeeded, and the first real request still 401'd on
login with exactly this error. A clean build and a successful deploy proved
nothing here — only an actual authenticated request against the live URL
caught it.

Default to **Drizzle with the `node-postgres` driver, through Cloudflare
Hyperdrive** for any Postgres + Cloudflare Workers project instead. It
compiles SQL in plain JS — no query-engine binary, no WASM step, nothing
for the Workers runtime to fail to find. `pg` itself still needs one
narrower, already-solved fix (`pg-cloudflare`'s workerd build isn't traced
by Next's file tracer by default — add `outputFileTracingIncludes` for
`node_modules/pg-cloudflare/{dist,esm}/**` in `next.config.ts`), which is a
real but minor bundling issue, not the same class of problem.

Prisma stays the default for Postgres on Vercel/Node hosting — this is
specifically about the Workers runtime.

Copyable starting point: `kit/assets/hyperdrive-drizzle-cloudflare/` — the
request-scoped `getDb()`/`getDbAsync()` pattern, the direct-connection
variant for local scripts, the `next.config.ts` fixes above, and the
subdomain-attachment snippet, all from Boot Room.

## Any Postgres project on Cloudflare needs a provider that actually has capacity

Before wiring Hyperdrive to anything, confirm the Postgres provider has room
for a new project — a free-tier account already at its project cap fails
this late, after Hyperdrive/schema work is already done. Confirmed on
ogham-design (2026-09-23): Supabase free tier was already at its one-project
limit. Rather than opening a second provider, the fix was to question
whether Postgres was needed at all — for a small-group app with no
cross-project data sharing, **Cloudflare D1** (native SQLite binding) is
the simpler default: no external account, no Hyperdrive layer, no
`pg`/`pg-cloudflare` bundling fix, same Drizzle query API. Reach for
Hyperdrive+Postgres specifically when data needs to live outside Cloudflare
or be queried from elsewhere — not as the automatic default for every
Cloudflare-hosted project with state.

## WASM in a Next.js route on Cloudflare Workers: three distinct failure modes, not one

A route that needs to rasterize something at request time (fonts, image
composition, etc.) cannot use a native-binding library (`sharp`,
`@napi-rs/*`) — confirmed on ogham-design (2026-09-23), fails to load at
all on Workers. The WASM alternative has two further, separate failure
modes that each look like a fix until the next one appears:

1. **Fetching the `.wasm` binary at runtime and calling
   `WebAssembly.instantiate()` on the bytes fails** — Workers' security
   model disallows compiling WASM from dynamically-fetched bytes:
   `CompileError: Wasm code generation disallowed by embedder`. WASM must
   be statically imported so wrangler's bundler precompiles it at deploy
   time into a `WebAssembly.Module`.
2. **Next's own bundler (both Turbopack and webpack) cannot parse that
   static import correctly** — it tries to treat the `.wasm` file as a
   wasm-bindgen module with named JS-glue exports (`Attempted import
   error: does not contain a default export` / `Module not found: Can't
   resolve 'wbg'`), which is incompatible with wrangler/esbuild's actual
   convention (a raw, uninstantiated `Module`, linked by the package's own
   code). Neither `experiments.asyncWebAssembly` nor `--webpack` fixes
   this — it's a genuine semantic mismatch, not a missing flag.

Fix: use a package built specifically for this Cloudflare/Next combination
(`@cf-wasm/resvg`'s `/workerd` entrypoint for SVG/font rasterization, not
plain `@resvg/resvg-wasm`), and add it to `serverExternalPackages` in
`next.config.ts` so Next's bundler never touches the `.wasm` import at all
— OpenNext's later esbuild pass (which does understand wrangler's
convention) bundles it correctly. Non-WASM assets (fonts, etc.) the route
also needs can still be fetched at runtime via the Worker's own `ASSETS`
binding (`env.ASSETS.fetch(new URL("/font.ttf", "http://assets.local"))`)
— only the WASM binary itself needs the static-import treatment.

A clean `next build` and successful `wrangler deploy` proved nothing for
either of the WASM failures above — both only surfaced on an actual
authenticated request against the live URL, the same lesson as the Prisma
guardrail above.

## A password-manager update is not a production update

1Password is the source of secret values, not a magic sync to every deployment.
When a credential changes, complete the whole chain deliberately:

1. Store it as a concealed field in the project item.
2. Map the exact environment-variable name the application reads in
   `kit/assets/1password-project-secrets/projects.json` — never a plausible
   legacy name.
3. Update the matching production environment variable in the host.
4. Redeploy and verify the new deployment is ready.

Pass a secret directly from 1Password into the process that needs it. Do not
put it in source, commit it, print it, or pass it as a shell command argument;
process arguments can be visible to other local processes. The POS runner
exists for local commands. CI needs its own least-privileged machine identity
or Credential Broker access, not a personal desktop session.

## A scheduled notification needs an atomic delivery claim

Never dedupe a periodic email or notification by asking whether an audit row
exists, then sending, then writing that row. Overlapping cron invocations can
both pass the lookup and deliver duplicates. Create a durable record with a
database uniqueness constraint on the real event identity (for example,
`entryId + gameweekId`) *before* sending. Give the provider a stable
idempotency key derived from that same identity so a retry after a timeout is
safe too. Last Man Standing's pick reminders exposed this exact race
(2026-09-22); an audit log records history, it is not a concurrency control.

## A retention promise needs an executable retention job

Privacy-policy text saying data will be deleted or anonymised after a period
does not make it happen. If a product names a retention period, ship a
scheduled, authenticated job that applies it, preserves only the anonymised
record needed for product history, and leaves an audit event without copying
the deleted personal data into it. Make optional long-term history a separate,
unticked consent with an actual expiry; provide a self-service withdrawal
control that stops the optional processing immediately and anonymises the
historic identity once the live product no longer needs it.

Last Man Standing had a 12-month promise and an account-delete action but no
automated retention process or leaderboard-history withdrawal control until
2026-09-22. The useful distinction is stable anonymous season aggregates
(which can remain) versus a named historical result (which remains personal
data and needs a separate purpose, time limit, and withdrawal path).

## Every secret comparison in a file, not just the one you're reviewing

Finding one correctly timing-safe comparison in an auth file is not evidence
the rest of the file is safe — check every place a secret gets compared to
user input. RVR 2014 Team Admin's `authz.ts` had a properly
`timingSafeEqual`-checked session cookie sitting next to `actions.ts`'s
`loginAction`, which compared the login password itself with plain `!==`
(2026-09-20). The careful implementation next to it made the naive one easy to
miss on a skim. Grep the file for every `===`/`!==` against a secret, env var,
or token before calling an auth review done, and route the fix through one
shared comparison function (`timingSafeStringEqual`) rather than a one-off fix
at the single call site found first — a length-mismatch must still run a
same-size comparison, or the early-return itself leaks length via timing.

## A mid-session AI-tool handoff needs a note in the project's own repo

Hitting a usage/credit limit and switching tools mid-project (Claude → Codex,
or any other pairing) is a real, unplanned event, not a hypothetical —
happened live on RVR 2014 Team Admin (2026-09-20). The receiving tool produced
a technically sound redesign but silently reverted a recent, explicit decision
(making `/fixtures` public) because nothing in *that* repository recorded it —
chat history with the other tool isn't visible to the one that takes over.
Project-OS's own `AGENTS.md`/`AI-HANDOFF.md` pattern exists to prevent exactly
this, but as of this finding it existed only in Project-OS itself, not in the
client/personal repos where a handoff actually happens. Before a session ends
with a recent, non-obvious decision in play (a reverted default, a security
tightening, a scope cut) and a tool switch is plausible — including a session
simply ending, since the next one may not be the same tool — leave a short
dated note in the project's own repo (a `CURRENT-STATE.md`, a code comment
next to the decision, or a commit message that says why, not just what) rather
than trusting the decision survives in conversation alone.
