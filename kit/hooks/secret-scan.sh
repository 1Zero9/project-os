#!/bin/bash
# PreToolUse hook (Bash tool) — blocks a git commit/push if the diff it's
# about to send contains a likely secret. Adapted from an idea found in
# Version1's internal ai-agents_skills repo (2026-09-21): the same check,
# but moved from PostToolUse (warn after the fact) to PreToolUse (block
# before the commit/push happens), since the risky moment is the commit
# itself, not the edit before it.
#
# Wired globally in ~/.claude/settings.json so it protects every project,
# not just this one. See kit/CONVENTIONS.md if this ever needs tuning —
# false positives should be rare enough that tightening the pattern beats
# disabling the hook.

input=$(cat)
command=$(echo "$input" | jq -r '.tool_input.command // empty' 2>/dev/null)

# Only act on the actual risky moment — committing or pushing. Anything
# else (reads, edits, unrelated bash) exits immediately, so this never
# slows down normal work.
if ! echo "$command" | grep -qE '\bgit\s+(commit|push)\b'; then
  exit 0
fi

cwd=$(echo "$input" | jq -r '.cwd // empty' 2>/dev/null)
[ -n "$cwd" ] && cd "$cwd" 2>/dev/null

diff=$(git diff --cached 2>/dev/null; git diff 2>/dev/null)
[ -z "$diff" ] && exit 0

# POSIX extended regex (BSD grep on macOS has no -P/PCRE support) — no \s,
# no (?i); case-insensitivity comes from -i, whitespace from [[:space:]].
pattern='(password[[:space:]]*[:=]|api[_-]?key[[:space:]]*[:=]|secret[[:space:]]*[:=]|bearer[[:space:]]+[A-Za-z0-9._-]{20,}|-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|AKIA[0-9A-Z]{16}|connectionstring[[:space:]]*[:=]|(postgres|postgresql|mysql|mongodb)(\+[a-z]+)?://[^:[:space:]]+:[^@[:space:]]+@)'

match=$(echo "$diff" | grep -iEo "$pattern" | head -5)

if [ -n "$match" ]; then
  echo "Potential secret found in the diff about to be committed/pushed:" >&2
  echo "$match" | sed 's/^/  /' >&2
  echo "Review and redact before committing. If this is a genuine false positive, tell the user directly rather than retrying the same command — it will match again." >&2
  exit 2
fi

exit 0
