export default function ReachMark({ className = "", flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        d="M6 114C34 114 46 92 46 66C46 40 34 10 58 10C82 10 78 46 100 46"
        stroke="#17110f"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M60 114C92 114 106 84 106 54C106 30 98 18 116 18C134 18 132 40 150 40"
        stroke="#e0182c"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="150" cy="40" r="9" fill="#e0182c" />
      <circle cx="100" cy="46" r="7" fill="#17110f" />
    </svg>
  );
}
