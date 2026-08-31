import { motion } from "motion/react";
import { Instagram, Play } from "lucide-react";
import { site } from "@/data/site";
import laser from "@/assets/service-laser.jpg";
import sugaring from "@/assets/service-sugaring.jpg";
import body from "@/assets/service-body.jpg";
import studio from "@/assets/studio.jpg";
import { Reveal } from "./Reveal";

const reels = [
  { img: laser, label: "Как проходит лазер" },
  { img: sugaring, label: "Шугаринг без боли" },
  { img: body, label: "Вакуум: 1 сеанс" },
  { img: studio, label: "Наш кабинет" },
];

export function ReelsFeed() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <Reveal>
              <span className="eyebrow">видео</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
                Живая витрина <span className="italic text-gold">студии</span>
              </h2>
            </Reveal>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="glass-card inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[10px] tracking-[0.2em] uppercase"
          >
            <Instagram className="size-3.5 text-gold" /> Смотреть все
          </a>
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {reels.map((r, i) => (
            <motion.a
              key={r.label}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative w-[68%] shrink-0 snap-start overflow-hidden rounded-[1.25rem] md:w-auto"
            >
              <div className="aspect-9/16 overflow-hidden">
                <img
                  src={r.img}
                  alt={r.label}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 to-transparent" />
              <span className="absolute top-4 left-4 grid size-9 place-items-center rounded-full bg-background/85">
                <Play className="size-3.5" />
              </span>
              <span className="absolute inset-x-4 bottom-4 text-sm text-background">{r.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
