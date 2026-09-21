#!/bin/bash
# Hard-links every kit/skills/<name>/SKILL.md to ~/.claude/skills/<name>/SKILL.md
# instead of copying it. A hard link means the two paths are literally the
# same bytes on disk (same inode) — editing kit/'s copy *is* editing the
# installed copy, with no separate sync step and no possibility of drift.
#
# Discovered by accident (2026-09-21): checking why a "sync" diff kept
# reporting "already up to date" led to finding 4 of 5 existing skills were
# already hard-linked this way (set up before this session), while the one
# built fresh this session (portfolio-audit) was a plain `cp` — a genuinely
# independent file that could silently drift. This script makes hard-linking
# the standing pattern and self-heals anything that's drifted from it,
# rather than replacing the manual copy-diff-copy dance with a scripted
# version of the same weaker mechanism.
#
# Usage: bash kit/sync-skills.sh
set -euo pipefail

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INSTALL_DIR="$HOME/.claude/skills"
linked=0
already=0
conflicts=0

for src in "$KIT_DIR"/skills/*/SKILL.md; do
  name="$(basename "$(dirname "$src")")"
  dest="$INSTALL_DIR/$name/SKILL.md"

  if [ -f "$dest" ]; then
    src_inode=$(stat -f "%i" "$src")
    dest_inode=$(stat -f "%i" "$dest")
    if [ "$src_inode" = "$dest_inode" ]; then
      already=$((already + 1))
      continue
    fi
    if ! diff -q "$src" "$dest" >/dev/null 2>&1; then
      echo "CONFLICT: $name — kit/ and the installed copy have diverged and are not hard-linked."
      echo "  Not overwriting automatically. Compare by hand: diff \"$src\" \"$dest\""
      conflicts=$((conflicts + 1))
      continue
    fi
    # Same content, just not linked yet — convert it into a real hard link.
    rm "$dest"
  fi

  mkdir -p "$(dirname "$dest")"
  ln "$src" "$dest"
  echo "linked: $name"
  linked=$((linked + 1))
done

echo "---"
echo "$linked newly linked, $already already linked, $conflicts conflict(s) needing manual review"
[ "$conflicts" -gt 0 ] && exit 1
exit 0
