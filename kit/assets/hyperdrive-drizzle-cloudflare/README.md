# Postgres on Cloudflare Workers: Hyperdrive + Drizzle

From Boot Room (built 2026-09-20, live at boot-room.1zero9.com). The default
for **any Postgres project hosted on Cloudflare Workers** — see
`kit/skills/new-project/SKILL.md`'s defaults table and
`kit/CONVENTIONS.md`'s "Prisma on Cloudflare Workers: default to Drizzle
instead" for why Prisma was tried first and abandoned: its WASM query
engine hits real, currently-open upstream bugs specific to this exact
combination (Workers via OpenNext) that only surface on a live authenticated
request — a clean build and successful deploy prove nothing.

## Why Hyperdrive at all

Cloudflare Workers has no raw TCP, so it can't talk to Postgres directly.
Hyperdrive is Cloudflare's own proxy/pooler that bridges this — not an
optional accelerator, the only way in. Create it once per project:

```bash
npx wrangler hyperdrive create <project>-db --connection-string="<your Postgres connection string>"
```

Use the **direct** connection string from your provider (Supabase, Neon,
etc.), not its own pooled one — Hyperdrive does its own pooling, and
double-pooling causes its own problems.

Add the `id` it prints to `wrangler.jsonc`:

```jsonc
"hyperdrive": [
  {
    "binding": "HYPERDRIVE",
    "id": "<the id wrangler printed>",
    "localConnectionString": "postgresql://user@localhost:5432/<local-db>"
  }
]
```

`localConnectionString` is required for `next dev`/`next build` to work at
all once `next.config.ts` calls `initOpenNextCloudflareForDev()` — point it
at a local Postgres so dev doesn't need live Cloudflare access.

Then `npx wrangler types` to generate `worker-configuration.d.ts`, and add
`cloudflare-env.d.ts` (below) so `getCloudflareContext()` type-checks.

## Wiring it up

1. Copy `db.ts` to `lib/db/index.ts` and `db-direct.ts` to `lib/db/direct.ts`.
   Both expect a `./schema` sibling file (your Drizzle schema).
2. `db.ts`'s `getDb()`/`getDbAsync()` are request-scoped, reached through
   `getCloudflareContext()` — never a module-level singleton, since Workers
   has no persistent process for that to live in. Use `getDb()` in ordinary
   dynamic routes/server actions; `getDbAsync()` only for static/SSG routes.
3. `db-direct.ts` is for scripts run from your own machine (migrations,
   seeding, a bootstrap script) — they never run inside a Worker, so they
   connect straight to `DATABASE_URL`, bypassing Hyperdrive entirely.
4. Business logic (anything that queries or mutates) should take the db
   client as a parameter, not import a fixed one — the app passes the
   Hyperdrive-backed client, scripts pass the direct one, same logic either
   way. See Boot Room's `lib/items.ts` for the pattern.
5. `cloudflare-env.d.ts`, at the repo root:
   ```ts
   type CloudflareEnv = Env;
   ```
   `getCloudflareContext()` expects a global `CloudflareEnv` interface;
   `wrangler types` generates the real bindings as `Env`, so this just
   aliases it. Regenerate `worker-configuration.d.ts` (`npx wrangler types`)
   after every `wrangler.jsonc` change — this file goes stale silently
   otherwise.
6. `next.config.ts` needs both of these, or the build fails at the esbuild
   step (a real, documented OpenNext/node-postgres bug, not hypothetical —
   see `opennextjs-cloudflare#1214`):
   ```ts
   import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
   initOpenNextCloudflareForDev();

   const nextConfig: NextConfig = {
     outputFileTracingIncludes: {
       "**/": ["./node_modules/pg-cloudflare/dist/**", "./node_modules/pg-cloudflare/esm/**"],
     },
   };
   ```

## The one non-obvious gotcha in local scripts

Prisma's CLI silently auto-loads `.env`; plain `tsx` does not. Any script
importing `db-direct.ts` needs Node's built-in flag explicitly:

```json
"bootstrap": "tsx --env-file=.env scripts/bootstrap.mts"
```

Forgetting this doesn't error — `pg`'s `Pool` silently falls back to libpq
defaults (your OS username as both user and database name) and fails with a
confusing "database `<username>` does not exist," not a missing-env-var
error. `drizzle-kit` itself loads `.env` automatically; only your own
scripts need the flag.

## Attaching the real subdomain

Once deployed, give it `<name>.1zero9.com` per `kit/CONVENTIONS.md`, via
`wrangler.jsonc` — no manual DNS step:

```jsonc
"routes": [
  { "pattern": "<name>.1zero9.com", "custom_domain": true }
]
```

Redeploy after adding this. It disables the `*.workers.dev` URL by default
(the subdomain becomes the real one) and creates the DNS record
automatically.
