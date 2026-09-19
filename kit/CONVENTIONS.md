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
