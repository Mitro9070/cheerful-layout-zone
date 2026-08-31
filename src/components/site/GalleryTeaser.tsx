import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BeforeAfter } from "./BeforeAfter";
import { Reveal } from "./Reveal";
import laser from "@/assets/service-laser.jpg";
import bodyImg from "@/assets/service-body.jpg";
import studio from "@/assets/studio.jpg";

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
          </div>
          <Link
            to="/gallery"
            className="glass-card inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[10px] tracking-[0.2em] uppercase"
          >
            Вся галерея <ArrowUpRight className="size-3.5 text-gold" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BeforeAfter before={studio} after={laser} label="Подмышки, 4 процедуры" />
          <BeforeAfter before={laser} after={studio} label="Голени, 5 процедур" />
          <BeforeAfter before={studio} after={bodyImg} label="Бёдра, курс вакуума" />
        </div>
      </div>
    </section>
  );
}
