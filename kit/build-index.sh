#!/bin/bash
# Build a compact capability index of ~/Projects.
# Cheap to regenerate; read this instead of loading projects into context.
# Usage: bash kit/build-index.sh > kit/INDEX.md

ROOT="${PROJECTS_ROOT:-$HOME/Projects}"
cd "$ROOT" || exit 1

has() { grep -qs "$2" "$1" 2>/dev/null; }

printf '%s\n\n' '# Portfolio Index'
printf 'Generated: %s by `kit/build-index.sh`. Regenerate before relying on it.\n' "$(date +%F)"
printf '%s\n\n' 'Read this to answer "have I built this before?" — do not load projects into context to find out.'
printf '%s\n\n' '`project | stack | last active | files | capabilities | purpose`'

for d in */; do
  n="${d%/}"
  [ "$n" = "Project-OS" ] && continue
  [ "$n" = "_archive" ] && continue
  pkg="${d}package.json"
  tags=""
  stack=""

  if [ -f "$pkg" ]; then
    # --- stack ---
    v=$(grep -o '"next": *"[^"]*"' "$pkg" | head -1 | sed 's/.*: *"//;s/"//;s/^[\^~>=]*//')
    case "$v" in
      [0-9]*) stack="next${v%%.*}" ;;
      "")     grep -qs '"react"' "$pkg" && stack="react" ;;
      *)      stack="next?" ;;
    esac
    [ -z "$stack" ] && grep -qs '"electron"' "$pkg" && stack="electron"
    [ -z "$stack" ] && stack="node"

    grep -qs '"@prisma/client"\|"prisma"' "$pkg" && stack="$stack+prisma"
    grep -qs '"drizzle-orm"' "$pkg" && stack="$stack+drizzle"
    grep -qs '"@supabase/supabase-js"' "$pkg" && stack="$stack+supabase"
    grep -qs '"better-sqlite3"\|"@libsql/client"' "$pkg" && stack="$stack+sqlite"

    # --- capability tags (the retrieval keys) ---
    grep -qs '"next-auth"\|"@clerk/nextjs"\|"@auth/core"' "$pkg" && tags="$tags auth"
    grep -qs '"stripe"' "$pkg" && tags="$tags payments"
    grep -qs '"resend"\|"nodemailer"\|"@sendgrid/mail"' "$pkg" && tags="$tags email"
    grep -qs '"web-push"\|"firebase"' "$pkg" && tags="$tags push"
    grep -qs '"recharts"\|"chart.js"\|"d3"\|"visx"' "$pkg" && tags="$tags charts"
    grep -qs '"papaparse"\|"csv-parse"\|"xlsx"' "$pkg" && tags="$tags csv"
    grep -qs '"uploadthing"\|"multer"\|"@vercel/blob"' "$pkg" && tags="$tags upload"
    grep -qs '"node-cron"\|"croner"' "$pkg" && tags="$tags cron"
    grep -qs '"@anthropic-ai/sdk"\|"openai"\|"ai"' "$pkg" && tags="$tags ai"
    grep -qs '"next-pwa"\|"workbox"\|"serwist"' "$pkg" && tags="$tags pwa"
    grep -qs '"framer-motion"' "$pkg" && tags="$tags motion"
    grep -qs '"vitest"\|"jest"' "$pkg" && tags="$tags tests"
    # node:test / tsx --test leaves no dependency to find, only a script.
    grep -qs '"test": *"[^"]*--test' "$pkg" && tags="$tags tests"
    grep -qs '"@playwright/test"\|"cypress"' "$pkg" && tags="$tags e2e"
    grep -qs '"tailwindcss"' "$pkg" && tags="$tags tailwind"
  else
    [ -f "${d}requirements.txt" ] || [ -f "${d}pyproject.toml" ] && stack="python"
    [ -f "${d}Package.swift" ] || ls "${d}"*.xcodeproj >/dev/null 2>&1 && stack="swift"
    # A real, shippable project needn't have a build tool at all - a plain
    # HTML/JS/CSS page (ParkRun's canvas game, live as "Park Run Dash" on
    # 1zero9.com) has neither, and fell through to "-" (looks empty/parked)
    # until this was added. See feedback-site-is-ground-truth memory.
    [ -z "$stack" ] && [ -f "${d}index.html" ] && stack="html"
    [ -z "$stack" ] && stack="-"
  fi

  # --- file-based signals ---
  [ -f "${d}vercel.json" ] && grep -qs '"crons"' "${d}vercel.json" && tags="$tags cron"
  grep -qs "schedule:" "${d}".github/workflows/*.yml "${d}".github/workflows/*.yaml 2>/dev/null && tags="$tags cron ci"
  [ -d "${d}.github/workflows" ] && tags="$tags ci"
  [ -f "${d}public/manifest.json" ] || [ -f "${d}app/manifest.ts" ] && tags="$tags pwa"
  ls "${d}app/api" >/dev/null 2>&1 && tags="$tags api"
  [ -d "${d}prisma" ] && tags="$tags schema"
  [ -f "${d}wrangler.jsonc" ] || [ -f "${d}wrangler.toml" ] && tags="$tags cloudflare"
  [ -f "${d}vercel.json" ] && tags="$tags vercel"

  # --- activity + size ---
  last=$(git -C "$d" log -1 --format=%ad --date=short 2>/dev/null || echo "-")
  files=$(git -C "$d" ls-files 2>/dev/null | wc -l | tr -d ' ')
  # A project with no git repo at all (never `git init`) isn't necessarily
  # empty or abandoned - fall back to a real file count instead of "-",
  # which reads as "nothing here" and hides a genuinely shipped project.
  if [ "$files" = "0" ]; then
    files=$(find "$d" -type f -not -path '*/node_modules/*' -not -path '*/.git/*' 2>/dev/null | wc -l | tr -d ' ')
  fi
  [ "$files" = "0" ] && files="-"

  # --- purpose: first non-empty, non-heading line of README ---
  purpose=""
  for rm in "${d}README.md" "${d}readme.md"; do
    [ -f "$rm" ] || continue
    purpose=$(grep -m1 -vE '^\s*$|^#|^!\[|^\[|^>|^-|^\|' "$rm" | cut -c1-90)
    break
  done
  [ -z "$purpose" ] && purpose="—"

  tags=$(echo "$tags" | tr ' ' '\n' | sort -u | tr '\n' ',' | sed 's/^,//;s/,$//')
  printf '%s | %s | %s | %s | %s | %s\n' "$n" "$stack" "$last" "$files" "$tags" "$purpose"
done
