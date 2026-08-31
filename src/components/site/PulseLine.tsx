export function PulseLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0 78C120 78 190 20 260 20s96 78 168 78 104-58 176-58 96 44 168 44 108-42 180-42 128 36 248 36"
        stroke="url(#pulse-grad)"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="animate-pulse-draw"
      />
      <defs>
        <linearGradient id="pulse-grad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.35" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="0.7" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
