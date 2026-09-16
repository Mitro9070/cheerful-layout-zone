import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import videoAsset from "@/assets/magic-one-720.mp4.asset.json";
import posterAsset from "@/assets/magic-one-poster.jpg.asset.json";

const points = [
  { title: "Magic One, 4000 Вт", text: "Мощный диодный лазер с сапфировым охлаждением манипулы." },
  { title: "Единственный в Истре", text: "Такой аппарат установлен только в нашей студии." },
  { title: "Настройка под вас", text: "Параметры подбираются по типу волос и фототипу кожи." },
];

export function LaserVideo() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-14 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] shadow-soft"
        >
          <video
            className="aspect-9/16 size-full object-cover"
            poster={posterAsset.url}
            src={videoAsset.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Лазер Magic One 4000 Вт в студии «Импульс» в Истре"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-gold/25 ring-inset" />
        </motion.div>

        <div>
          <Reveal>
            <span className="eyebrow">аппарат</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
              Magic One <span className="italic text-gold">4000 Вт</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Показываем аппарат вблизи: экран с выбором зон, манипула и настройки, которые мастер
              задаёт перед процедурой.
            </p>
          </Reveal>
          <div className="mt-8 space-y-5 border-t border-gold/25 pt-6">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.2 + i * 0.08}>
                <div>
                  <div className="font-display text-xl md:text-2xl">{p.title}</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{p.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
