import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BadgeCheck, HeartHandshake, Sparkles, MapPin } from "lucide-react";
import { heroTeamPhoto } from "@/data/photos";
import { Reveal } from "./Reveal";

const points = [
  { icon: BadgeCheck, title: "10 лет опыта", text: "Профильное обучение специалистов и регулярное повышение квалификации." },
  { icon: Sparkles, title: "Технологии для разных задач", text: "Два диодных лазера и аппараты для комплексного ухода за телом." },
  { icon: HeartHandshake, title: "Персональный подход", text: "Специалист учитывает особенности кожи, волос и желаемый результат." },
  { icon: MapPin, title: "В центре Истры", text: "Улица Ленина, 75, этаж 2, кабинет 231." },
];

export function Master() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="master" ref={ref} className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <motion.img
              src={heroTeamPhoto.src}
              alt={heroTeamPhoto.alt}
              loading="lazy"
              width={1200}
              height={1408}
              style={{ y }}
              className="aspect-4/5 w-full scale-110 object-cover"
            />
            <div className="glass-card absolute bottom-6 left-6 rounded-2xl px-5 py-4">
              <div className="eyebrow">студия в Истре</div>
              <div className="font-display text-2xl">Команда «Импульс»</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">О студии</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-balance md:text-5xl">
              С любовью и вниманием <span className="italic text-gold">к каждому клиенту</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              В «Импульсе» работают специалисты по эпиляции и уходу за телом. Перед процедурой мы
              уточняем ваш запрос, оцениваем особенности кожи и предлагаем подходящий вариант ухода.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/40">
                  <p.icon className="size-5 text-gold transition-transform duration-500 group-hover:-translate-y-0.5" />
                  <h3 className="mt-4 text-sm font-medium">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
