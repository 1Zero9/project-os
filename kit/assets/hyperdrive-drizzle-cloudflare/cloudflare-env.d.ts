// @opennextjs/cloudflare's getCloudflareContext() expects a global
// `CloudflareEnv` interface. `wrangler types` (run after every
// wrangler.jsonc change) generates the real bindings as `Env`; this just
// aliases it under the name OpenNext expects.
type CloudflareEnv = Env;
