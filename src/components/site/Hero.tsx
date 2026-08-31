import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-wide.jpg";
import { OilPulse } from "./OilPulse";
import { PulseLine } from "./PulseLine";

const stats = [
  { value: "7+", label: "лет практики" },
  { value: "50%", label: "скидка на первый лазер" },
  { value: "231", label: "кабинет, Ленина 75" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-14 md:items-center md:pb-0"
    >
      {/* фоновая подложка на всю ширину */}
      <motion.img
        src={heroImg}
        alt="Идеально ухоженные руки и безупречная кожа шеи — студия красивого тела «Импульс»"
        width={1920}
        height={1088}
        style={{ y: imgY }}
        className="absolute inset-0 -z-10 size-full scale-105 object-cover object-[72%_center]"
      />
      {/* читаемость надписей */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent md:via-background/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/85 via-transparent to-background/25" />

      {/* капля масла и импульс омоложения — прямо по коже руки */}
      <OilPulse className="left-[68%] top-[52%] hidden md:block" />
      <OilPulse className="left-[62%] top-[26%] scale-[0.6] md:hidden" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 md:px-10 md:pt-24">
        <motion.div style={{ y: textY }} className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/60 px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase backdrop-blur"
          >
            <Sparkles className="size-3 text-gold" />
            Истра · Ленина 75
          </motion.span>

          <h1 className="mt-7 font-display text-[3.1rem] leading-[0.95] tracking-tight text-balance md:text-7xl xl:text-[5.2rem]">
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
            className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground text-pretty"
          >
            Лазерная эпиляция, шугаринг и аппаратная коррекция фигуры в Истре. Безупречно гладкая
            кожа, сертифицированный мастер и понятные цены — без звонков и переписок.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-4"
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
              className="rounded-full border border-foreground/20 bg-card/40 px-8 py-4 text-[11px] tracking-[0.24em] uppercase backdrop-blur transition-colors hover:border-gold hover:text-gold"
            >
              Подобрать программу
            </a>
          </motion.div>

          <div className="mt-11 grid max-w-lg grid-cols-3 gap-6 border-t border-gold/20 pt-6">
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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="glass-card mt-12 inline-block rounded-2xl px-6 py-5 md:absolute md:right-10 md:bottom-6 md:mt-0"
        >
          <div className="eyebrow">первое посещение</div>
          <div className="mt-2 font-display text-2xl">−50% лазерная эпиляция</div>
          <div className="mt-1 text-xs text-muted-foreground">−10% шугаринг · −500 ₽ массаж</div>
        </motion.div>
      </div>

      <PulseLine className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full text-gold opacity-70 md:h-20" />
    </section>
  );
}
