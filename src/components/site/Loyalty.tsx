import { Link } from "@tanstack/react-router";
import { loyalty } from "@/data/site";
import { Reveal } from "./Reveal";

export function Loyalty() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">клубная карта и сертификаты</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              Для тех, кто <span className="italic text-gold">с нами надолго</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {loyalty.map((l, i) => (
            <Reveal key={l.title} delay={0.07 * i}>
              <div className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-7 shadow-soft">
                <h3 className="font-display text-2xl leading-tight md:text-3xl">{l.title}</h3>
                <div className="mt-4 font-display text-3xl text-gold">{l.price}</div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">{l.text}</p>
                {l.note && <p className="mt-4 text-xs text-muted-foreground italic">{l.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/contacts"
            hash="booking"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
          >
            Оформить в студии
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
