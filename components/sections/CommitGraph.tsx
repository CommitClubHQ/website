/** Decorative commit graph: a main line, a branch that diverges and merges back, and a latest commit. */
export function CommitGraph() {
  const nodes = [
    { x: 40, y: 200 },
    { x: 140, y: 200 },
    { x: 240, y: 90 },
    { x: 240, y: 310 },
    { x: 340, y: 90 },
    { x: 340, y: 310 },
    { x: 440, y: 200 },
  ];
  const latest = { x: 560, y: 200 };

  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="h-auto w-full text-ink"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path className="graph-line" pathLength={1} d="M40 200H140" />
        <path
          className="graph-line"
          pathLength={1}
          style={{ "--delay": "300ms" } as React.CSSProperties}
          d="M140 200C190 200 190 90 240 90H340"
        />
        <path
          className="graph-line"
          pathLength={1}
          style={{ "--delay": "500ms" } as React.CSSProperties}
          d="M140 200C190 200 190 310 240 310H340"
          opacity="0.4"
        />
        <path
          className="graph-line"
          pathLength={1}
          style={{ "--delay": "900ms" } as React.CSSProperties}
          d="M340 90C390 90 390 200 440 200"
        />
        <path
          className="graph-line"
          pathLength={1}
          style={{ "--delay": "1100ms" } as React.CSSProperties}
          d="M340 310C390 310 390 200 440 200"
          opacity="0.4"
        />
        <path
          className="graph-line"
          pathLength={1}
          style={{ "--delay": "1400ms" } as React.CSSProperties}
          d="M440 200H560"
        />
      </g>
      {nodes.map(({ x, y }) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="8"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
      <circle
        className="graph-pulse"
        cx={latest.x}
        cy={latest.y}
        r="12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx={latest.x} cy={latest.y} r="9" fill="currentColor" />
    </svg>
  );
}
