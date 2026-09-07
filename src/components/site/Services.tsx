import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);
import { ArrowUpRight } from "lucide-react";
import laser from "@/assets/service-laser.jpg";
import sugaring from "@/assets/service-sugaring.jpg";
import body from "@/assets/service-body.jpg";
import { Reveal, RevealText } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Лазерная эпиляция",
    to: "/laser",
    price: "от 700 ₽",
    text: "Два аппарата — Everlas 1800 Вт и Magic One 4000 Вт. Комплексы с подарочными зонами для женщин и мужчин.",
    img: laser,
  },
  {
    n: "02",
    title: "Шугаринг и воск",
    to: "/sugaring",
    price: "от 300 ₽",
    text: "Деликатная сахарная паста и плёночный воск. Идеальная гладкость там, где лазер пока не подходит.",
    img: sugaring,
  },
  {
    n: "03",
    title: "Коррекция фигуры",
    to: "/body",
    price: "от 1 500 ₽",
    text: "Вакуумный и вибрационно-роликовый массаж, микротоки, ЛимфаЛик. Абонементы с выгодой до 10 000 ₽.",
    img: body,
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Reveal>
            <span className="eyebrow">Направления</span>
          </Reveal>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] text-balance md:text-6xl">
            <RevealText text="Уход, который" />{" "}
            <span className="italic text-gold">
              <RevealText text="чувствуется" delay={0.2} />
            </span>
          </h2>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Один мастер ведёт вас от консультации до результата — без конвейера и навязанных курсов.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12}>
            <MotionLink
              to={s.to}
              whileHover="hover"
              className="group relative block overflow-hidden rounded-[1.75rem] bg-card shadow-soft"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={912}
                  height={1104}
                  variants={{ hover: { scale: 1.07 } }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/5 to-transparent" />
                <span className="absolute top-5 left-6 font-display text-sm text-background/80">
                  {s.n}
                </span>
                <div className="absolute inset-x-6 bottom-6 text-background">
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-display text-3xl leading-tight">{s.title}</h3>
                    <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <div className="mt-2 text-[11px] tracking-[0.22em] uppercase opacity-80">
                    {s.price}
                  </div>
                </div>
              </div>
              <p className="px-6 py-6 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </MotionLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
