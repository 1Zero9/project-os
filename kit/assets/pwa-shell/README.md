# PWA shell

A mobile app shell, not a promise to make every screen offline. The default is
safe for private, live-data products: installable, standalone, quick to move
around, with cached static assets and an honest offline screen. It does **not**
cache HTML, RSC payloads, API responses, or personal data.

Use it for a task-first product that is principally used on a phone. It gives
the app a real mobile shell (safe-area-aware bottom navigation, no duplicate
desktop chrome) while leaving fresh data to the network.

## Choose the data policy first

| Product need | Service-worker policy |
| --- | --- |
| Private or fast-changing data (the default) | Use this asset unchanged: static assets only, network-only data and pages. |
| Useful read-only data genuinely works stale | Add an explicit, bounded cache for that one public/read-only endpoint. |
| Offline edits must later sync | Build a product-specific local store and conflict policy first; do not pretend a cache is sync. |

JobJar's aggressive Workbox navigation caching is a valid product choice, not
a default. Last Man Standing, Boot Room and Ground Control must not cache a
member's live/private page merely because it is a GET request.

## Wiring it up

1. Copy `manifest.webmanifest`, `sw.js`, `offline.html` and
   `service-worker-registration.tsx`. Replace names, colours and icons.
2. Link the manifest from the root layout and render the registration component
   once near the root.
3. Use `mobile-app-shell.tsx` and `mobile-app-shell.css` as the base for no
   more than four primary mobile destinations. Keep admin and long-form help
   behind a single “More” destination rather than duplicating a desktop nav.
4. Reserve page-level data caching for measured bottlenecks, and invalidate it
   deliberately after a mutation.
