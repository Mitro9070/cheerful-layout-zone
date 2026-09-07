import { Link } from "@tanstack/react-router";
import { Gift } from "lucide-react";
import { offers, legalNote } from "@/data/site";
import { Reveal } from "./Reveal";

export function Offers() {
  const [main, ...rest] = offers;

  return (
    <section id="offers" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <span className="eyebrow">выгодные предложения</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
            Выгодные <span className="italic text-gold">предложения</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Для тех, кто у нас впервые. Предложения не суммируются между собой.
          </p>
        </Reveal>
      </div>

      {main && (
        <Reveal delay={0.1}>
          <article className="mt-12 grid gap-8 rounded-[2rem] border border-gold/50 bg-card p-7 shadow-lift md:grid-cols-[1.1fr_1fr] md:p-12">
            <div>
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-[11px] tracking-[0.22em] text-primary-foreground uppercase">
                {main.badge}
              </span>
              <h3 className="mt-6 font-display text-4xl leading-none md:text-6xl">{main.name}</h3>
              <div className="mt-4 font-display text-6xl text-gold md:text-7xl">{main.price}</div>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{main.includes}</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-base leading-relaxed text-pretty md:text-lg">{main.text}</p>
              <div className="mt-7">
                <div className="text-[11px] tracking-[0.18em] text-gold uppercase">{main.line}</div>
                <Link
                  to="/contacts"
                  hash="booking"
                  className="mt-5 block rounded-full bg-primary py-4.5 text-center text-sm tracking-[0.18em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
                >
                  {main.cta}
                </Link>
                <p className="mt-3 text-xs text-muted-foreground">{main.note}</p>
              </div>
            </div>
          </article>
        </Reveal>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((o, i) => (
          <Reveal key={o.name} delay={0.06 * i}>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift md:p-8">
              <span
                className={`h-7 self-start ${
                  o.badge
                    ? "rounded-full border border-gold/40 px-4 py-1.5 text-[10px] leading-none tracking-[0.2em] text-gold uppercase"
                    : ""
                }`}
              >
                {o.badge}
              </span>
              <h3 className="mt-5 font-display text-3xl leading-tight md:text-4xl">{o.name}</h3>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-4xl text-gold">{o.price}</span>
                {o.oldPrice && (
                  <span className="font-display text-xl text-muted-foreground line-through">{o.oldPrice}</span>
                )}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed">{o.includes}</p>
              {o.gift && (
                <p className="mt-3 flex gap-2.5 text-[15px] text-gold">
                  <Gift className="mt-0.5 size-4 shrink-0" />
                  <span>{o.gift}</span>
                </p>
              )}
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted-foreground">{o.text}</p>
              <div className="mt-6 text-[11px] tracking-[0.16em] text-foreground/70 uppercase">{o.line}</div>
              <Link
                to="/contacts"
                hash="booking"
                className="mt-5 block rounded-full border border-foreground/20 py-3.5 text-center text-[11px] tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                {o.cta}
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">{legalNote}</p>
    </section>
  );
}
