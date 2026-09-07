import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { complexes } from "@/data/site";
import { Reveal } from "./Reveal";

export function Complexes() {
  return (
    <section id="complexes" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <Reveal>
          <span className="eyebrow">комплексы</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
            Готовые комплексы <span className="italic text-gold">с понятной выгодой</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Три цены в одной карточке: для первого визита, по карте постоянного клиента и обычная.
            Зоны внутри комплекса можно заменить на равные по размеру.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {complexes.map((c, i) => (
          <Reveal key={c.name} delay={0.06 * i}>
            <article
              className={`flex h-full flex-col rounded-[1.75rem] border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift md:p-8 ${
                c.featured ? "border-gold/60" : "border-border"
              }`}
            >
              {c.badge && (
                <span
                  className={`self-start rounded-full px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase ${
                    c.featured
                      ? "bg-primary text-primary-foreground"
                      : "border border-gold/40 text-gold"
                  }`}
                >
                  {c.badge}
                </span>
              )}
              <h3 className="mt-5 font-display text-3xl leading-tight md:text-4xl">{c.name}</h3>
              <p className="mt-2 text-base text-muted-foreground">{c.subtitle}</p>

              <ul className="mt-6 space-y-2.5 text-[15px]">
                {c.zones.map((z) => (
                  <li key={z} className="flex items-start gap-2.5">
                    <Check className="mt-1 size-4 shrink-0 text-gold" />
                    <span>{z}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 space-y-3 border-t border-border pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Первый визит −50%</span>
                  <span className="font-display text-3xl text-gold">{c.first}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-muted-foreground">По карте клиента −15%</span>
                  <span className="font-display text-xl">{c.club}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 text-muted-foreground">
                  <span className="text-sm">Обычная цена</span>
                  <span className="font-display text-lg line-through">{c.base}</span>
                </div>
              </div>

              <Link
                to="/contacts"
                hash="booking"
                className="mt-7 block rounded-full bg-primary py-4 text-center text-sm tracking-[0.18em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Записаться
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 text-base text-muted-foreground">
          Нужен свой набор зон?{" "}
          <Link to="/quiz" className="text-gold underline underline-offset-4">
            Соберите комплекс в конструкторе
          </Link>{" "}
          — посчитаем стоимость и пришлём в мессенджер.
        </p>
      </Reveal>
    </section>
  );
}
