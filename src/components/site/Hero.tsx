import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import oilImg from "@/assets/hero-oil.jpg";
import { PulseLine } from "./PulseLine";

const stats = [
  { value: "7+", label: "лет практики" },
  { value: "50%", label: "скидка на первый лазер" },
  { value: "231", label: "кабинет, Ленина 75" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section id="top" ref={ref} className="hero-canvas relative overflow-hidden pt-32 pb-16 md:pt-40">
      <div className="pointer-events-none absolute -top-24 -left-24 size-[28rem] rounded-full bg-gold-soft/40 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute top-40 -right-32 size-[32rem] rounded-full bg-blush/50 blur-[130px] animate-float-slow [animation-delay:3s]" />

      <div
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <motion.div style={{ y: textY }}>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/60 px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase backdrop-blur"
          >
            <Sparkles className="size-3 text-gold" />
            Истра · Ленина 75
          </motion.span>

          <h1 className="mt-7 font-display text-[3.1rem] leading-[0.95] tracking-tight text-balance md:text-7xl xl:text-[5.4rem]">
            {["Начни", "свой", "день"].map((w, i) => (
              <motion.span
                key={w}
                className="mr-3 inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="block italic text-gold-gradient"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              с импульса
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-7 max-w-lg text-[15px] leading-relaxed text-muted-foreground text-pretty"
          >
            Лазерная эпиляция, шугаринг и аппаратная коррекция фигуры в Истре. Сертифицированный
            мастер, современное оборудование и понятные цены — без звонков и переписок.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#booking"
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-[11px] tracking-[0.24em] text-primary-foreground uppercase"
            >
              <span className="relative z-10 flex items-center gap-2">
                Записаться онлайн
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 shimmer-gold opacity-45" />
            </a>
            <a
              href="#quiz"
              className="rounded-full border border-foreground/15 px-8 py-4 text-[11px] tracking-[0.24em] uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Подобрать программу
            </a>
          </motion.div>

          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.12 }}
              >
                <div className="font-display text-3xl text-gold">{s.value}</div>
                <div className="mt-1 text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-lift lg:aspect-3/4">
            <motion.img
              src={heroImg}
              alt="Интерьер студии красивого тела «Импульс» в Истре"
              width={1600}
              height={1104}
              style={{ y: imgY }}
              className="absolute inset-0 size-full scale-110 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="glass-card absolute -bottom-6 -left-4 rounded-2xl px-6 py-5 md:left-8"
          >
            <div className="eyebrow">первое посещение</div>
            <div className="mt-2 font-display text-2xl">−50% лазерная эпиляция</div>
            <div className="mt-1 text-xs text-muted-foreground">−10% шугаринг · −500 ₽ массаж</div>
          </motion.div>
        </motion.div>
      </div>

      <PulseLine className="mt-16 h-16 w-full text-gold md:h-24" />
    </section>
  );
}
