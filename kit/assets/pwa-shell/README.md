# PWA shell

Installable PWA baseline: web app manifest, offline-first service worker
with stale-while-revalidate caching, and a client-side registration
component. From eolas (parked 2026-09-19), unchanged.

## Wiring it up

1. Copy `manifest.webmanifest` and `sw.js` into `public/`. Fill in real
   `name`, `short_name`, `description`, `background_color`, `theme_color`,
   and provide real `icon-192.png` / `icon-512.png` / `icon-maskable-512.png`.
2. Link the manifest from the root layout's `<head>`:
   `<link rel="manifest" href="/manifest.webmanifest" />`
3. Copy `service-worker-registration.tsx` into the project and render it
   once, near the root layout (client component, registers on mount).
