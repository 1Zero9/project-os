# 1Password project secrets

`projects.json` is the non-secret registry: each project names its 1Password
vault, item and the fields it may receive. It never contains a credential.

Run a command with a project's secrets available only to that command:

```sh
node kit/assets/1password-project-secrets/run-with-secrets.mjs rvr-2014-teamadmin -- npm run db:push
```

Requirements:

- 1Password CLI (`op`) installed and signed in through the desktop app for
  local work.
- A project item in the named vault with the mapped concealed fields.

The helper never prints secret values, writes an `.env` file, or puts values in
command arguments. For CI, use a separate, vault-scoped 1Password service
identity or Credential Broker configuration; do not place its token in this
registry.

When adding a project, create or reuse its vault and item first, then add only
the item field paths to `projects.json`. Keep access narrowly scoped: a project
should not be able to read another project's vault.
