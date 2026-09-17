import { useRef, useState } from "react";

/**
 * Слайдер «до / после». Изображения — временные демо-кадры,
 * заменяются живыми фото студии (единый ракурс, свет и фон).
 */
export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <figure className="overflow-hidden rounded-[1.5rem] bg-card shadow-soft">
      <div
        ref={ref}
        className="relative aspect-4/5 cursor-ew-resize touch-none select-none"
        onPointerDown={(e) => move(e.clientX)}
        onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
      >
        <img src={after} alt={`${label} — после`} loading="lazy" className="photo-tone absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt={`${label} — до`}
            loading="lazy"
            className="photo-tone absolute inset-0 h-full w-[100vw] max-w-none object-cover"
            style={{ width: ref.current?.offsetWidth ?? "100%" }}
          />
          <span className="absolute top-3 left-3 rounded-full bg-foreground/70 px-3 py-1 text-[10px] tracking-[0.2em] text-background uppercase">
            до
          </span>
        </div>
        <span className="absolute top-3 right-3 rounded-full bg-gold/85 px-3 py-1 text-[10px] tracking-[0.2em] text-primary-foreground uppercase">
          после
        </span>
        <span
          className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-[10px] text-foreground shadow-lift">
            ↔
          </span>
        </span>
      </div>
      <figcaption className="px-5 py-4 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </figcaption>
    </figure>
  );
}
