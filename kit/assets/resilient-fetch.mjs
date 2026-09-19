/**
 * Reference pattern for a build-time bulk pull from a rate-limited external
 * API. Copy this into the new project and adapt it — don't import it as a
 * dependency (see new-project's "Lift from" rule).
 *
 * From F1 (2026-09-19): the naive version of this script failed three times
 * before landing on the shape below. Each failure was real, not theoretical:
 *
 * 1. Fixed backoff (500ms x attempt, 3 tries) on HTTP 429 alone. Died on a
 *    429 that outlasted 3 retries partway through a 26,000-row pull.
 * 2. Retry-After-aware backoff, but paced at 150ms between requests. Still
 *    hit 429 on nearly every request - the real limit was under ~3 req/s,
 *    and reactive retry-after-header handling was slower overall than just
 *    pacing below the limit in the first place (every retry adds its own
 *    wait on top of the request it was retrying).
 * 3. Paced at 900ms, HTTP-level retry only. A network-level exception
 *    (EADDRNOTAVAIL, a local socket issue) crashed the whole process - the
 *    retry logic only ever checked `res.status`, so a thrown error from
 *    `fetch()` itself (which never returns a `Response` at all) propagated
 *    straight up, uncaught. This lost ~20 minutes of an otherwise-complete
 *    run because the script also only wrote output at the very end, after
 *    every dataset had fetched - see the write pattern below for the fix.
 *
 * The three fixes, all present here:
 * - Pace below the observed limit as the primary defense; treat retries as
 *   a backstop, not the plan. A script that fights a rate limit with ever-
 *   deeper retries is slower and harder on the API than one that just
 *   doesn't trip it.
 * - Catch network-level exceptions from fetch() itself, separately from
 *   HTTP-level bad-status handling - they are not the same failure and a
 *   handler for one does not catch the other.
 * - Write each dataset to disk as soon as IT is done, not all of them
 *   together at the end. A late failure in dataset 5 of 5 should not
 *   discard 1-4, which by then are already correct and complete.
 */

import { writeFile } from "node:fs/promises";

const DELAY_MS = 900; // pace below the observed limit - tune per API, but the
// point is a number found by testing, not a guess

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url, attempt = 1) {
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    // fetch() itself can throw - DNS hiccups, ECONNRESET, EADDRNOTAVAIL from
    // socket exhaustion on a long-running script. This is NOT an HTTP
    // response and will never be caught by checking res.status.
    if (attempt > 6) throw new Error(`${url} -> network error after ${attempt} attempts: ${err.message}`);
    const wait = Math.min(1000 * attempt, 8000);
    await sleep(wait);
    return getJson(url, attempt + 1);
  }

  if (res.status === 429) {
    if (attempt > 8) throw new Error(`${url} -> still 429 after ${attempt} attempts`);
    const retryAfter = Number(res.headers.get("retry-after")) || 2;
    await sleep(retryAfter * 1000 + 200);
    return getJson(url, attempt + 1);
  }
  if (!res.ok) {
    if (attempt < 3) {
      await sleep(500 * attempt);
      return getJson(url, attempt + 1);
    }
    throw new Error(`${url} -> ${res.status}`);
  }
  return res.json();
}

/**
 * Fetch and write each dataset independently - a failure in dataset N does
 * not touch the files already written for datasets 1..N-1. Compare against
 * the anti-pattern: fetch everything into memory, then one Promise.all of
 * writes at the very end, which turns a late failure into a total loss.
 */
async function fetchAndWrite(name, outPath, fetchFn) {
  const data = await fetchFn();
  await writeFile(outPath, JSON.stringify(data));
  console.log(`${name}: done -> ${outPath}`);
  return data;
}

// Usage sketch - adapt per API:
//
// await fetchAndWrite("races", racesPath, () => fetchRaces());
// await fetchAndWrite("drivers", driversPath, () => fetchDriversList());
// await fetchAndWrite("standings", standingsPath, () => fetchStandings(seasons));
//
// Sequential calls that are logically paired (e.g. driver + constructor
// standings for one season) should stay sequential, not Promise.all - a
// concurrent burst tripped this same rate limit harder than the same two
// calls made one after the other with the same total delay budget.

export { getJson, sleep, fetchAndWrite };
