#!/bin/bash
# Wires a project into Project OS by adding an @-import of AGENTS.md to its
# own CLAUDE.md — the same mechanism Project-OS's own CLAUDE.md already uses
# on itself (`@AGENTS.md`). Once wired, any Claude Code session rooted in
# that project auto-loads AGENTS.md -> AI-HANDOFF.md, the same way a session
# rooted in Project-OS itself already does.
#
# Built 2026-09-22 because that auto-load turned out to be directory-scoped:
# every convention this session used (secret-scan hook, sync-skills, the
# fold-learnings-in habit) only ever applied to sessions working inside
# Project-OS itself. A session in any other of the ~48 projects had none of
# it, silently, until told.
#
# Idempotent: safe to re-run. Does not touch a project's own CLAUDE.md
# content beyond adding the one import line if it's not already there.
#
# Usage: bash kit/link-project.sh /path/to/project
set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: bash kit/link-project.sh /path/to/project" >&2
  exit 1
fi

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AGENTS_MD="$(dirname "$KIT_DIR")/AGENTS.md"
TARGET_DIR="$(cd "$1" && pwd)"
TARGET_CLAUDE_MD="$TARGET_DIR/CLAUDE.md"
IMPORT_LINE="@${AGENTS_MD}"

if [ ! -f "$AGENTS_MD" ]; then
  echo "Could not find $AGENTS_MD — run this from within Project-OS." >&2
  exit 1
fi

if [ -f "$TARGET_CLAUDE_MD" ] && grep -qF "$IMPORT_LINE" "$TARGET_CLAUDE_MD"; then
  echo "Already linked: $TARGET_CLAUDE_MD"
  exit 0
fi

if [ -f "$TARGET_CLAUDE_MD" ]; then
  TMP="$(mktemp)"
  {
    echo "$IMPORT_LINE"
    echo
    cat "$TARGET_CLAUDE_MD"
  } > "$TMP"
  mv "$TMP" "$TARGET_CLAUDE_MD"
  echo "Prepended Project-OS import to existing $TARGET_CLAUDE_MD"
  echo "NOTE: that file already existed (and may already be tracked in git)."
  echo "The import line is an absolute, machine-specific path — if this file"
  echo "is shared/committed, decide whether that's OK or move the import"
  echo "somewhere machine-local instead."
else
  echo "$IMPORT_LINE" > "$TARGET_CLAUDE_MD"
  echo "Created $TARGET_CLAUDE_MD with Project-OS import"
  # A freshly-created CLAUDE.md here is nothing but a personal, machine-specific
  # link — never meaningful to commit (wrong for other machines/collaborators).
  GITIGNORE="$TARGET_DIR/.gitignore"
  if [ -d "$TARGET_DIR/.git" ]; then
    if [ -f "$GITIGNORE" ] && ! grep -qxF "CLAUDE.md" "$GITIGNORE"; then
      echo "CLAUDE.md" >> "$GITIGNORE"
      echo "Added CLAUDE.md to .gitignore"
    elif [ ! -f "$GITIGNORE" ]; then
      echo "CLAUDE.md" > "$GITIGNORE"
      echo "Created .gitignore with CLAUDE.md"
    fi
  fi
fi
