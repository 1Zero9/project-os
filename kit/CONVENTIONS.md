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
  <img src="/109-logo-circle-white2.png" alt="" width="16" height="16" />
  Built by 1Zero9
</a>
```

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
