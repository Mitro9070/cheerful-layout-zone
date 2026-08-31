/**
 * Капля масла падает на кожу. Импульс омоложения пока отключён.
 * Чистая презентационная анимация: CSS-кейфреймы + мягкое золотое свечение.
 */
export function OilPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      {/* траектория падения капли */}
      <span className="absolute left-1/2 -top-40 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/35" />

      {/* капля */}
      <span className="oil-drop absolute left-1/2 -translate-x-1/2" />

      {/* импульсные волны по коже — отключены
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:0.55s]" />
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:1.1s]" />

      <span className="oil-glow absolute left-1/2 top-0 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      */}
    </div>
  );
}
