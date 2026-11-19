// Decorative leafy sprigs tucked into the corners of the viewport. Purely
// ornamental: fixed behind the content, very faint, and hidden from assistive
// tech. Sizing and placement live in index.styles.scss (.corner-leaves).

// One almond-shaped leaf, base at the origin, pointing straight up.
const LEAF = "M0 0 C 17 -13 21 -45 0 -70 C -21 -45 -17 -13 0 0 Z";

// [x, y, rotation°, scale] for each leaf along the stem, bottom to top.
const LEAVES = [
  [101, 202, -62, 1],
  [98, 172, 48, 0.98],
  [99, 140, -42, 0.95],
  [104, 112, 58, 0.92],
  [111, 94, -18, 0.9],
  [140, 60, 26, 0.82],
];

function Sprig({ className }) {
  return (
    <svg className={`corner-leaf ${className}`} viewBox="0 0 200 240" aria-hidden="true" focusable="false">
      <path
        d="M106 236 C 92 196 92 136 106 104 C 116 82 128 70 140 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {LEAVES.map(([x, y, r, s], i) => (
        <path key={i} d={LEAF} fill="currentColor" transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} />
      ))}
    </svg>
  );
}

export default function CornerLeaves() {
  return (
    <div className="corner-leaves" aria-hidden="true">
      <Sprig className="corner-leaf--tl" />
      <Sprig className="corner-leaf--tr" />
      <Sprig className="corner-leaf--bl" />
      <Sprig className="corner-leaf--br" />
    </div>
  );
}
