import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./Reveal";

type Row = { zone: string; price: string; note?: string };

const groups: { id: string; label: string; rows: Row[] }[] = [
  {
    id: "laser",
    label: "Лазерная эпиляция",
    rows: [
      { zone: "Верхняя губа", price: "500 ₽" },
      { zone: "Подбородок", price: "500 ₽" },
      { zone: "Лицо полностью", price: "1 600 ₽" },
      { zone: "Подмышечные впадины", price: "1 000 ₽" },
      { zone: "Руки до локтя", price: "1 700 ₽" },
      { zone: "Руки полностью", price: "2 100 ₽" },
      { zone: "Живот полностью", price: "1 200 ₽" },
      { zone: "Спина полностью", price: "2 700 ₽" },
      { zone: "Бикини классическое", price: "1 100 ₽" },
      { zone: "Бикини глубокое", price: "2 300 ₽" },
      { zone: "Ноги до колена (голени)", price: "1 800 ₽" },
      { zone: "Ноги полностью", price: "3 300 ₽" },
      { zone: "Всё тело", price: "9 900 ₽", note: "самое выгодное предложение" },
      { zone: "Мужские зоны", price: "+500 ₽", note: "к базовому прайсу" },
    ],
  },
  {
    id: "complex",
    label: "Комплексы (выгодно)",
    rows: [
      { zone: "Глубокое бикини + подмышки", price: "2 900 ₽" },
      { zone: "Глубокое бикини + подмышки + голени", price: "4 200 ₽" },
      { zone: "Подмышки + ноги полностью", price: "4 000 ₽" },
      { zone: "Глубокое бикини + подмышки + ноги полностью", price: "5 400 ₽" },
      { zone: "Бикини + подмышки + ноги + руки до локтя", price: "6 500 ₽" },
      { zone: "Бикини + подмышки + ноги + руки полностью", price: "7 000 ₽" },
    ],
  },
  {
    id: "sugaring",
    label: "Шугаринг и воск",
    rows: [
      { zone: "Лицо", price: "от 300 ₽" },
      { zone: "Подмышечные впадины", price: "500 ₽" },
      { zone: "Руки до локтя", price: "900 ₽" },
      { zone: "Руки полностью", price: "1 200 ₽" },
      { zone: "Бикини классика", price: "800 ₽" },
      { zone: "Бикини глубокое", price: "1 800 ₽" },
      { zone: "Ноги полностью", price: "1 900 ₽" },
      { zone: "Живот полностью", price: "600 ₽" },
      { zone: "Ягодицы", price: "600 ₽" },
      { zone: "Комплекс: бикини + подмышки + ноги", price: "3 600 ₽" },
    ],
  },
  {
    id: "body",
    label: "Коррекция фигуры",
    rows: [
      { zone: "Вакуумный массаж, первое посещение (20 мин)", price: "1 300 ₽" },
      { zone: "Вакуумный массаж (30 мин)", price: "2 000 ₽" },
      { zone: "Вакуумный массаж, абонемент 10 сеансов", price: "17 000 ₽" },
      { zone: "Вакуумный массаж (60 мин)", price: "3 000 ₽" },
      { zone: "Вакуумный массаж 60 мин, абонемент 10 сеансов", price: "27 000 ₽" },
      { zone: "Микротоковый массаж лица и шеи (20 мин)", price: "2 000 ₽", note: "первое посещение 1 300 ₽" },
    ],
  },
];

export function Pricing() {
  const [active, setActive] = useState(groups[0].id);
  const current = groups.find((g) => g.id === active) ?? groups[0];

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
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
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
                className={`relative rounded-full px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-colors ${
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
      </div>
    </section>
  );
}
