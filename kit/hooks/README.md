# kit/hooks

Claude Code hooks — scripts wired into `~/.claude/settings.json` (a
machine-level file, not tracked in any repo) that run automatically at
specific points in a session. The scripts live here so they're versioned;
the wiring that activates them has to be set up once per machine.

## secret-scan.sh

Blocks a `git commit` or `git push` if the diff it's about to send contains
a likely secret (password, API key, private key header, a connection
string with credentials in it). Runs as a `PreToolUse` hook on the `Bash`
tool — fast enough to run on every command, since it exits immediately for
anything that isn't a commit/push.

To wire it on a new machine, add to `~/.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/absolute/path/to/Project-OS/kit/hooks/secret-scan.sh",
            "timeout": 15
          }
        ]
      }
    ]
  }
}
```

Use an absolute path, not `${CLAUDE_PROJECT_DIR}` — this hook needs to
protect every project, not just Project-OS itself, so it has to be wired
globally rather than per-repo.
