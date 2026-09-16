import { Link } from "@tanstack/react-router";
import { Gift, ArrowRight } from "lucide-react";
import { offers } from "@/data/site";
import { offerPhotos } from "@/data/photos";
import { Reveal } from "./Reveal";

export function OffersStrip() {
  const [main, ...rest] = offers;

  return (
    <section id="offers" className="relative overflow-hidden border-y border-wine/10 bg-accent/55 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-wine" />
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

      {main && (
        <Reveal delay={0.1}>
          <article className="mt-10 grid overflow-hidden rounded-[2rem] border border-wine/15 bg-card shadow-lift md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-64 overflow-hidden md:min-h-[25rem]">
              <img src={offerPhotos[0]?.src} alt={offerPhotos[0]?.alt ?? ""} className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/45 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 inline-block rounded-full bg-wine px-4 py-1.5 text-[10px] tracking-[0.22em] text-wine-foreground uppercase shadow-soft">
                {main.badge}
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-11">
              <h3 className="mt-5 font-display text-4xl leading-none md:text-5xl">{main.name}</h3>
              <div className="mt-3 font-display text-5xl text-gold md:text-6xl">{main.price}</div>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{main.includes}</p>
              <div className="text-[11px] tracking-[0.18em] text-gold uppercase">{main.line}</div>
              <Link
                to="/contacts"
                hash="booking"
                className="mt-5 block rounded-full bg-primary py-4 text-center text-[11px] tracking-[0.18em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                {main.cta}
              </Link>
            </div>
          </article>
        </Reveal>
      )}

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((o, i) => (
          <Reveal
            key={o.name}
            delay={0.05 * i}
            className={i === 2 ? "md:col-span-2 xl:col-span-1" : ""}
          >
            <article className={`group relative flex min-h-[31rem] h-full flex-col overflow-hidden rounded-[1.75rem] border shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift ${i % 3 === 2 ? "border-wine/25 bg-wine text-wine-foreground" : "border-border bg-card"}`}>
              <div className={`relative overflow-hidden ${i % 2 === 0 ? "h-64" : "h-52"}`}>
                <img src={offerPhotos[i + 1]?.src} alt={offerPhotos[i + 1]?.alt ?? ""} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
              {o.badge && (
                <span className={`w-fit rounded-full px-3.5 py-1 text-[10px] tracking-[0.18em] uppercase ${i % 3 === 2 ? "border border-gold/55 text-gold-soft" : "border border-gold/40 text-gold"}`}>
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
              <p className={`mt-3 flex-1 text-[14px] leading-relaxed ${i % 3 === 2 ? "text-wine-foreground/75" : "text-muted-foreground"}`}>{o.includes}</p>
              {o.gift && (
                <p className="mt-3 flex gap-2 text-[13px] text-gold">
                  <Gift className="mt-0.5 size-3.5 shrink-0" />
                  <span>{o.gift}</span>
                </p>
              )}
              <Link
                to="/contacts"
                hash="booking"
                className={`mt-5 block rounded-full py-3 text-center text-[10px] tracking-[0.2em] uppercase transition-colors ${i % 3 === 2 ? "bg-wine-foreground text-wine hover:bg-gold-soft" : "border border-foreground/20 hover:border-wine hover:text-wine"}`}
              >
                {o.cta}
              </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
