# Conventions

Standing rules for anything built under 1Zero9. Short by design — a convention
earns a place here only when forgetting it would mean going back and redoing
work. Apply them without being asked.

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

`defineCloudflareConfig({})` (the default from scaffolding) has no
incremental-cache backend. Without one, the build's prerendered static HTML
never reaches the deployed Worker — every request, on every route, falls
back to a full server-side render from scratch. Under concurrent load that's
expensive enough to blow Cloudflare's per-request CPU budget: error 1102,
surfacing as 503s and hung connections that get *worse* under real traffic,
not better. Found on F1 (2026-09-19) by load-testing the live site and
reproducing a ~50% failure rate under sustained requests. The same empty
config existed on **launchcity**, the only other project on this stack —
fixed there the same day, also verified by load test. Both confirmed clean
as of 2026-09-19; a new OpenNext/Cloudflare project should still be checked
the same way (`grep defineCloudflareConfig({})`, then load-test if it's
non-trivial) rather than assumed fine on the strength of a clean deploy log.

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

`opennextjs-cloudflare deploy` creates the bucket and populates it from the
build's prerendered output automatically — nothing else to run by hand.
Verify it actually worked by load-testing the live site (sequential requests
across several routes, not just one check), not just by confirming the
deploy succeeded: a clean deploy log says nothing about whether the cache is
actually being read at request time.

## A fallback path must never show more than the success path would

If content is filtered for visibility (archived, hidden, draft, unpublished
— anything that shouldn't reach the public site), and that filtering
depends on a call that can fail (a database, an external API), the failure
path must apply the same filtering, not skip it. A `catch` that returns the
raw, unfiltered list "just to keep the site up" fails **open**: the one time
that code path actually runs — the failure — is exactly when it serves
things nobody meant to be public.

Found on 1Zero9Studio (2026-09-19): `getLiveProjects()` filtered out
archived/hidden/draft projects on success, then on a database error
returned the complete unfiltered list instead. A second, separate copy of
the same mistake sat one function away — the per-page lookup had its own
direct fallback that never checked visibility at all, so a project excluded
from every listing was still reachable by going straight to its URL. Two
different unguarded paths to the same content, in the same file, found only
by clicking through the live site after fixing the first one and finding it
made no visible difference.

The fix in both cases was the same: extract the visibility check into its
own function, call it on every path out, including the ones that only run
when something else has already gone wrong.
