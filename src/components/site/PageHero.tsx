import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  accent,
  text,
  image,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  text: string;
  image?: string;
  cta?: boolean;
}) {
  return (
    <section className="hero-canvas relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              {title} {accent && <span className="italic text-gold">{accent}</span>}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
          {cta && (
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contacts"
                  hash="booking"
                  className="relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm tracking-[0.18em] text-primary-foreground uppercase"
                >
                  <span className="relative z-10">Записаться</span>
                  <span className="absolute inset-0 shimmer-gold opacity-40" />
                </Link>
                <Link
                  to="/quiz"
                  className="glass-card rounded-full px-7 py-3.5 text-sm tracking-[0.18em] uppercase"
                >
                  Подобрать программу
                </Link>
              </div>
            </Reveal>
          )}
        </div>

        {image && (
          <Reveal delay={0.2}>
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] shadow-lift lg:aspect-square">
              <img src={image} alt={title} className="size-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
