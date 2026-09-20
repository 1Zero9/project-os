# Conventions

Standing rules for anything built under 1Zero9. Short by design — a convention
earns a place here only when forgetting it would mean going back and redoing
work. Apply them without being asked.

## Every site gets a real favicon once its identity is confirmed

Never ship the `create-next-app` default favicon. Use the confirmed visual
identity — ideally an `app/icon.tsx` with `ImageResponse` — rather than
inventing a new mark. Verify the rendered page's `<link rel="icon">` (or
`metadata.icons`), not merely that an icon file exists: a stock file can be
orphaned and a reachable custom file can still be unlinked. A neutral project
does not need an invented custom favicon before its identity is settled.

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

Icon and text both inside the link, alongside whatever else the footer says.
Use a plain `<img>`, not a framework image component, unless the project's own
`next/image` (or equivalent) is known to work in production — Learn2Learn's
vinext build silently dropped both `next/link` and would very likely have
mishandled `next/image` the same way; check before trusting it, don't assume.

Add a test for the credit where the project has a test suite (asserting on
"Built by" text and the `1zero9.com` href is enough — don't assert on exact
markup), so it cannot quietly disappear in a redesign.

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
there is nothing to add by hand.

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
