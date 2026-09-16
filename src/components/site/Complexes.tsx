import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Check, Gift } from "lucide-react";
import { lasers, legalNote } from "@/data/site";
import { complexPhotos } from "@/data/photos";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Complexes() {
  const [activeId, setActiveId] = useState(lasers[0]!.id);
  const active = lasers.find((l) => l.id === activeId) ?? lasers[0]!;

  return (
    <section id="complexes" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-3xl">
        <Reveal>
          <span className="eyebrow">комплексы</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
            Комплексы <span className="italic text-gold">с понятной выгодой</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Комплекс всегда выгоднее суммы зон на 25–40%, и подарочные зоны посчитаны в рублях.
            Выберите аппарат — цены обновятся.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mt-10 flex flex-wrap gap-2">
          {lasers.map((l) => (
            <Button
              key={l.id}
              type="button"
              variant="ghost"
              onClick={() => setActiveId(l.id)}
              className={`relative h-auto rounded-full px-6 py-3 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeId === l.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeId === l.id && (
                <motion.span
                  layoutId="laser-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {l.name} · {l.power}
              </span>
            </Button>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{active.text}</p>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {active.complexes.map((c, index) => (
            <article
              key={c.name}
              className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift ${
                c.featured ? "border-wine/40 bg-wine text-wine-foreground" : "border-border bg-card"
              }`}
            >
              <div className={`relative overflow-hidden ${index % 3 === 0 ? "h-72" : "h-52"}`}>
                <img
                  src={complexPhotos[index % complexPhotos.length]?.src}
                  alt={complexPhotos[index % complexPhotos.length]?.alt ?? ""}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
              <span className="h-7">
                {c.badge && (
                  <span
                    className={`rounded-full px-4 py-1.5 text-[10px] leading-none tracking-[0.2em] uppercase ${
                      c.featured ? "bg-wine-foreground text-wine" : "border border-gold/40 text-gold"
                    }`}
                  >
                    {c.badge}
                  </span>
                )}
              </span>

              <h3 className="mt-5 font-display text-3xl leading-tight md:text-4xl">{c.name}</h3>
              <p className={`mt-2 text-[15px] ${c.featured ? "text-wine-foreground/70" : "text-muted-foreground"}`}>{c.subtitle}</p>

              <ul className="mt-6 space-y-2.5 text-[15px]">
                {c.zones.map((z) => (
                  <li key={z} className="flex items-start gap-2.5">
                    <Check className="mt-1 size-4 shrink-0 text-gold" />
                    <span>{z}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-5 flex flex-1 gap-2.5 rounded-2xl p-4 text-sm leading-relaxed ${c.featured ? "bg-wine-foreground/10" : "bg-secondary/50"}`}>
                <Gift className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  {c.gifts}
                  <span className="mt-1 block text-[11px] tracking-[0.16em] text-gold uppercase">
                    {c.giftValue}
                  </span>
                </span>
              </div>

              <div className={`mt-6 space-y-3 border-t pt-6 ${c.featured ? "border-wine-foreground/20" : "border-border"}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Цена первого визита</span>
                  <span className="font-display text-3xl text-gold">{c.first}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Обычная цена комплекса</span>
                  <span className="font-display text-xl">{c.price}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 text-muted-foreground">
                  <span className="text-sm">По отдельности</span>
                  <span className="font-display text-lg line-through">{c.separate}</span>
                </div>
                <div className="text-[11px] tracking-[0.16em] text-gold uppercase">
                  Ваша выгода {c.benefit}
                </div>
              </div>

              <Link
                to="/contacts"
                hash="booking"
                className={`mt-6 block rounded-full py-4 text-center text-sm tracking-[0.18em] uppercase transition-opacity hover:opacity-90 ${c.featured ? "bg-wine-foreground text-wine" : "bg-primary text-primary-foreground"}`}
              >
                Записаться
              </Link>
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>

      {active.id === "everlas" && (
        <p className="mt-8 text-base text-muted-foreground">
          Тот же комплекс на Magic One 4000 Вт: доплата составляет 500–600 ₽ в зависимости от комплекса.
        </p>
      )}
      <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">{legalNote}</p>
      <p className="mt-4 text-base text-muted-foreground">
        Нужен свой набор зон?{" "}
        <Link to="/quiz" className="text-gold underline underline-offset-4">
          Соберите комплекс в конструкторе
        </Link>{" "}
        — посчитаем стоимость и пришлём в мессенджер.
      </p>
    </div>
</section>
  );
}
