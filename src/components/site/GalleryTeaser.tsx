import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CardCarousel } from "./CardCarousel";
import { ClientResultCard } from "./ClientResultCard";
import { Reveal } from "./Reveal";
import { clientResults } from "@/data/clientResults";

export function GalleryTeaser() {
  return (
    <section className="bg-secondary/35 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <Reveal>
              <span className="eyebrow">до / после</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
                Результат, который <span className="italic text-gold">видно</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Реальные результаты клиенток студии. Результат и количество процедур индивидуальны.
              </p>
            </Reveal>
          </div>
          <Link
            to="/gallery"
            className="glass-card inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[10px] tracking-[0.2em] uppercase"
          >
            Вся галерея <ArrowUpRight className="size-3.5 text-gold" />
          </Link>
        </div>

        <div className="mt-10">
          <CardCarousel label="Реальные результаты клиенток" itemClassName="w-[88%] sm:w-[48%] lg:w-[calc((100%-2.5rem)/3)]">
            {clientResults.map((result, index) => (
              <Reveal key={result.src} delay={Math.min(index, 3) * 0.06} className="h-full">
                <ClientResultCard result={result} />
              </Reveal>
            ))}
          </CardCarousel>
        </div>
      </div>
    </section>
  );
}
