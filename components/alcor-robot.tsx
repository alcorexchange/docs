// The Alcor robot, redrawn as line art in the style of the Alcor mark: mint strokes,
// the diamond on its chest. Colors follow the theme through --color-fd-primary.

const STROKE = 'var(--color-fd-primary)';

export function AlcorRobot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 340"
      fill="none"
      stroke={STROKE}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label="Alcor robot"
    >
      <defs>
        <filter id="robot-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Antenna */}
      <path d="M120 60 V40" />
      <circle className="robot-beacon" cx="120" cy="30" r="7" fill={STROKE} stroke="none" filter="url(#robot-glow)" />

      {/* Head, visor, eyes, smile */}
      <rect x="70" y="60" width="100" height="70" rx="16" fill={STROKE} fillOpacity={0.06} />
      <rect x="84" y="78" width="72" height="26" rx="9" fill={STROKE} fillOpacity={0.1} />
      {/* Filled shapes, not lines: a glow filter on a zero-height line has no area to draw in. */}
      <g className="robot-eyes" filter="url(#robot-glow)" fill={STROKE} stroke="none">
        <rect x="96" y="87" width="17" height="8" rx="4" />
        <rect x="127" y="87" width="17" height="8" rx="4" />
      </g>
      <path d="M102 115 Q120 124 139 113" />

      {/* Neck and torso */}
      <path d="M112 130 V146 M128 130 V146" strokeWidth={2.5} />
      <rect x="64" y="146" width="112" height="98" rx="14" fill={STROKE} fillOpacity={0.06} />

      {/* The Alcor diamond on the chest */}
      <g transform="translate(99 165) scale(0.183)">
        <g strokeWidth={2.2} style={{ vectorEffect: 'non-scaling-stroke' }}>
          <polygon points="113 317 3 210 113 3 223 210 113 317" vectorEffect="non-scaling-stroke" />
          <polygon points="113 317 76 74 151 74 113 317" vectorEffect="non-scaling-stroke" opacity={0.6} />
          <path d="M3 210 L113 178 L223 210" vectorEffect="non-scaling-stroke" opacity={0.6} />
          <path d="M100 235 L3 210 M223 210 L128 235" vectorEffect="non-scaling-stroke" opacity={0.6} />
        </g>
      </g>

      {/* Arms, bent at the elbow, ending in open wrench claws */}
      <path d="M64 162 Q44 168 40 196 L36 228" />
      <path d="M176 162 Q196 168 200 196 L204 228" />
      <circle cx="40" cy="196" r="4" fill={STROKE} stroke="none" />
      <circle cx="200" cy="196" r="4" fill={STROKE} stroke="none" />
      <path d="M26 246 A14 14 0 0 1 36 228 A14 14 0 0 1 48 244" />
      <path d="M192 244 A14 14 0 0 1 204 228 A14 14 0 0 1 214 246" />

      {/* Fork down to the wheel */}
      <path d="M106 244 L110 266 M134 244 L130 266" />

      {/* Wheel */}
      <circle cx="120" cy="292" r="32" fill={STROKE} fillOpacity={0.05} />
      <g className="robot-wheel" strokeWidth={2} opacity={0.7}>
        {[0, 45, 90, 135].map((angle) => (
          <path key={angle} d="M120 268 V316" transform={`rotate(${angle} 120 292)`} />
        ))}
      </g>
      <circle cx="120" cy="292" r="10" fill="var(--color-fd-background)" />
      <circle cx="120" cy="292" r="4" fill={STROKE} stroke="none" filter="url(#robot-glow)" />

      {/* Ground */}
      <ellipse cx="120" cy="330" rx="54" ry="3" stroke="none" fill={STROKE} opacity={0.18} />
    </svg>
  );
}
