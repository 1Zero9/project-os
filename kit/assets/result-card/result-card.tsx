import type { ReactNode } from 'react';
import './result-card.css';

export type ResultCardTeam = { name: string; score: number; crestUrl?: string };

function outcome(homeScore: number, awayScore: number) {
  if (homeScore > awayScore) return 'W' as const;
  if (homeScore < awayScore) return 'L' as const;
  return 'D' as const;
}

/**
 * One glanceable row for a match/game result: a coloured W/D/L badge (reads
 * before either score does), then each side as crest + name + bold score.
 * `home` is treated as "your" team for bold styling and the auto-computed
 * badge; pass `result` to override when the caller already knows the
 * outcome (a scraped feed's own W/D/L, a score treated specially, etc).
 * Anything else about the match (goals, notes, an edit affordance) is the
 * caller's job — pass it as `children`, rendered below the score row.
 */
export function ResultCard({
  date,
  home,
  away,
  result,
  children,
}: {
  date: string;
  home: ResultCardTeam;
  away: ResultCardTeam;
  result?: 'W' | 'D' | 'L';
  children?: ReactNode;
}) {
  const code = result ?? outcome(home.score, away.score);
  const label = code === 'W' ? 'Win' : code === 'D' ? 'Draw' : 'Loss';

  return (
    <div className="result-card">
      <div className="result-card-head">
        <span className={`result-badge result-badge-${code.toLowerCase()}`} title={label}>{code}</span>
        <span className="result-date">{date}</span>
      </div>
      <div className="result-teams">
        {[home, away].map((team) => (
          <div className="result-team" key={team.name}>
            {team.crestUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- portable outside a Next.js image-optimized project
              <img src={team.crestUrl} alt="" className="team-avatar" width={28} height={28} />
            ) : (
              <span className="team-avatar team-avatar-initial" aria-hidden>{team.name.charAt(0)}</span>
            )}
            <span className="team-name">{team.name}</span>
            <span className="team-score">{team.score}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
