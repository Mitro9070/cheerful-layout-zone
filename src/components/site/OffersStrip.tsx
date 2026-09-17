import { Link } from "@tanstack/react-router";
import { Gift, ArrowRight } from "lucide-react";
import { offers } from "@/data/site";
import { offerPhotos } from "@/data/photos";
import { Reveal } from "./Reveal";
import { CardCarousel } from "./CardCarousel";

export function OffersStrip() {
  return (
    <section id="offers" className="relative overflow-hidden border-y border-border bg-background py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/70" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">выгодные предложения</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              Выгодные <span className="italic text-gold">предложения</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <Link
            to="/promo"
            className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase transition-colors hover:text-gold"
          >
            Все условия <ArrowRight className="size-4 text-gold" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10">
        <CardCarousel label="Выгодные предложения" itemClassName="h-auto">
        {offers.map((o, i) => (
          <Reveal
            key={o.name}
            delay={0.05 * i}
            className="h-full"
          >
            <article className="group relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <img src={offerPhotos[i]?.src} alt={offerPhotos[i]?.alt ?? ""} loading="lazy" className="photo-tone absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
              {o.badge && (
                  <span className="w-fit rounded-full border border-gold/40 px-3.5 py-1 text-[10px] tracking-[0.18em] text-gold uppercase">
                  {o.badge}
                </span>
              )}
              <h3 className="mt-4 font-display text-2xl leading-tight md:text-3xl">{o.name}</h3>
              <div className="mt-3 flex items-baseline gap-2.5">
                <span className="font-display text-3xl text-gold">{o.price}</span>
                {o.oldPrice && (
                  <span className="font-display text-base text-muted-foreground line-through">
                    {o.oldPrice}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">{o.includes}</p>
              {o.gift && (
                <p className="mt-3 flex gap-2 text-[13px] text-gold">
                  <Gift className="mt-0.5 size-3.5 shrink-0" />
                  <span>{o.gift}</span>
                </p>
              )}
              <Link
                to="/contacts"
                hash="booking"
                className="mt-5 block rounded-full border border-foreground/20 py-3 text-center text-[10px] tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                {o.cta}
              </Link>
              </div>
            </article>
          </Reveal>
        ))}
        </CardCarousel>
      </div>
      </div>
    </section>
  );
}
