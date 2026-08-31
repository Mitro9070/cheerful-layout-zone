/**
 * Капля масла падает на кожу. В момент исчезновения — лёгкая
 * световая вспышка и рябь по коже (импульс омоложения — soft-версия).
 */
export function OilPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      {/* траектория падения капли */}
      <span className="absolute left-1/2 -top-40 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/35" />

      {/* капля */}
      <span className="oil-drop absolute left-1/2 -translate-x-1/2" />

      {/* световая вспышка в точке исчезновения капли */}
      <span className="oil-impact absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* лёгкая рябь по коже */}
      <span className="oil-skin-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <span className="oil-skin-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:0.28s]" />
    </div>
  );
}
