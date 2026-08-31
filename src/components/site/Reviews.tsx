import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Анна",
    source: "Яндекс Карты",
    text: "Ходила на лазер к Евгении курсом — результат виден уже после второй процедуры. Всё аккуратно, спокойно объясняют каждый шаг.",
  },
  {
    name: "Марина",
    source: "ВКонтакте",
    text: "Шугаринг делают деликатно, кожа без раздражений. Записаться легко, никогда не задерживают приём.",
  },
  {
    name: "Дмитрий",
    source: "Instagram",
    text: "Приятно, что мужские зоны здесь воспринимают спокойно и профессионально. Хожу на спину и подмышки.",
  },
  {
    name: "Ольга",
    source: "Яндекс Карты",
    text: "Взяла абонемент на вакуумный массаж. Ощутимая разница в тонусе, и цена честная для Истры.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="overflow-hidden bg-secondary/35 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Отзывы</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl text-balance md:text-6xl">
                Нас <span className="italic text-gold">рекомендуют</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                5.0 на Яндекс Картах
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <motion.blockquote
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col justify-between rounded-[1.5rem] bg-card p-7 shadow-soft"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">«{r.text}»</p>
                <footer className="mt-8">
                  <div className="font-display text-xl">{r.name}</div>
                  <div className="mt-1 text-[10px] tracking-[0.22em] text-gold uppercase">
                    {r.source}
                  </div>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
