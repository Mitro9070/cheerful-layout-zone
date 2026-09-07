import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { priceGroups, type PriceGroup } from "@/data/site";

const groups = priceGroups;

export function Pricing() {
  const [active, setActive] = useState(groups[0]!.id);
  const current: PriceGroup = groups.find((g) => g.id === active) ?? groups[0]!;

  return (
    <section id="prices" className="relative bg-secondary/35 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">Прайс</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl text-balance md:text-6xl">
              Цены <span className="italic text-gold">без звонка</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Полный прайс по зонам. Скидки первого посещения суммируются с комплексами.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {groups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`relative rounded-full px-5 py-2.5 text-xs tracking-[0.18em] uppercase transition-colors ${
                  active === g.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === g.id && (
                  <motion.span
                    layoutId="price-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{g.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 rounded-[1.75rem] bg-card p-6 shadow-soft md:p-10">
          <AnimatePresence mode="wait">
            <motion.ul
              key={current.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="divide-y divide-border"
            >
              {current.rows.map((r, i) => (
                <motion.li
                  key={r.zone}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.035 }}
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <span className="text-[15px] transition-transform duration-500 group-hover:translate-x-1.5">
                    {r.zone}
                    {r.note && (
                      <span className="mt-0.5 block text-[10px] tracking-[0.18em] text-gold uppercase">
                        {r.note}
                      </span>
                    )}
                  </span>
                  <span className="hairline hidden flex-1 md:block" />
                  <span className="font-display text-xl whitespace-nowrap">{r.price}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/laser"
              className="rounded-full bg-primary px-7 py-3.5 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
            >
              Полный прайс по лазеру
            </Link>
            <Link to="/body" className="glass-card rounded-full px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase">
              Коррекция фигуры
            </Link>
            <Link to="/quiz" className="glass-card rounded-full px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase">
              Подобрать программу
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
