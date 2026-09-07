import { Link } from "@tanstack/react-router";
import { Gift, ArrowRight } from "lucide-react";
import { offers } from "@/data/site";
import { Reveal } from "./Reveal";

export function OffersStrip() {
  const [main, ...rest] = offers;

  return (
    <section id="offers" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
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
          <article className="mt-10 grid items-center gap-7 rounded-[2rem] border border-gold/50 bg-card p-7 shadow-lift md:grid-cols-[1.2fr_1fr] md:p-11">
            <div>
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-[10px] tracking-[0.22em] text-primary-foreground uppercase">
                {main.badge}
              </span>
              <h3 className="mt-5 font-display text-4xl leading-none md:text-5xl">{main.name}</h3>
              <div className="mt-3 font-display text-5xl text-gold md:text-6xl">{main.price}</div>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{main.includes}</p>
            </div>
            <div>
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

      <div className="-mx-5 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {rest.map((o, i) => (
          <Reveal
            key={o.name}
            delay={0.05 * i}
            className="w-[17.5rem] shrink-0 snap-start md:w-auto"
          >
            <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
