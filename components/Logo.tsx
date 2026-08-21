export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 168 40"
      className={className}
      role="img"
      aria-label="IPTV Iconic"
    >
      <rect x="0" y="4" width="32" height="32" rx="9" fill="#2166f0" />
      <path d="M13 13.5l13 6.5-13 6.5v-13Z" fill="#ffffff" />
      <text
        x="42"
        y="27"
        fontFamily="var(--font-space-grotesk), var(--font-inter), ui-sans-serif, sans-serif"
        fontSize="19"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        <tspan fill="#0b1220">IPTV </tspan>
        <tspan fill="#2166f0">Iconic</tspan>
      </text>
    </svg>
  );
}
