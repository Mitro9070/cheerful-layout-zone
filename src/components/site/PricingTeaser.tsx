import { Link } from "@tanstack/react-router";
import { ScrollText } from "lucide-react";
import { Reveal } from "./Reveal";
import { openPriceDrawer } from "./PriceDrawer";
import { pricingTopNote } from "@/data/site";

const highlights = [
  { label: "Первый визит", value: "от 1 450 ₽" },
  { label: "Комплекс «Гладкость»", value: "3 780 ₽" },
  { label: "Шугаринг, первый визит", value: "2 100 ₽" },
  { label: "Коррекция фигуры", value: "от 1 300 ₽" },
];

export function PricingTeaser() {
  return (
    <section id="prices" className="bg-secondary/35 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Прайс</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
                Цены <span className="italic text-gold">без звонка</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Полный прайс открывается в один клик — с поиском по зонам и услугам. Кнопка «Прайс»
                остаётся с вами на любой странице.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={openPriceDrawer}
                  className="flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
                >
                  <ScrollText className="size-4" />
                  Открыть прайс
                </button>
                <Link
                  to="/quiz"
                  className="glass-card rounded-full px-7 py-4 text-[11px] tracking-[0.2em] uppercase"
                >
                  Подобрать программу
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <ul className="divide-y divide-border rounded-[1.75rem] bg-card p-6 shadow-soft md:p-8">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-baseline justify-between gap-5 py-4">
                  <span className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                    {h.label}
                  </span>
                  <span className="hairline hidden flex-1 md:block" />
                  <span className="font-display text-2xl whitespace-nowrap">{h.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">{pricingTopNote}</p>
      </div>
    </section>
  );
}
