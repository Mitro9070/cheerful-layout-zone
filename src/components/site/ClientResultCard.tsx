import type { ClientResult } from "@/data/clientResults";

export function ClientResultCard({ result }: { result: ClientResult }) {
  return (
    <figure className="group h-full overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-soft">
      <div className="relative aspect-square overflow-hidden bg-secondary/40">
        <img
          src={result.src}
          alt={result.alt}
          loading="lazy"
          width={768}
          height={768}
          className="photo-tone size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-3">
          <span className="rounded-full bg-primary/80 px-3 py-1 text-[10px] tracking-[0.18em] text-primary-foreground uppercase backdrop-blur-sm">
            до
          </span>
          <span className="rounded-full bg-gold/90 px-3 py-1 text-[10px] tracking-[0.18em] text-primary-foreground uppercase backdrop-blur-sm">
            после
          </span>
        </div>
      </div>
      <figcaption className="px-5 py-4 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
        {result.label}
      </figcaption>
    </figure>
  );
}