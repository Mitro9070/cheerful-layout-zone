import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import reel720 from "@/assets/hero-reel-720.mp4.asset.json";
import reel1080 from "@/assets/hero-reel-1080.mp4.asset.json";
import poster from "@/assets/hero-reel-poster.jpg.asset.json";

const stats = [
  { value: "7+", label: "лет практики" },
  { value: "−50%", label: "на первый лазер" },
  { value: "231", label: "кабинет, Ленина 75" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-12 md:pb-0"
    >
      <motion.div style={{ y: videoY }} className="absolute inset-0 -z-10 size-full">
        <video
          className="size-full scale-105 object-cover object-center"
          poster={poster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Процедуры студии красивого тела «Импульс» в Истре"
        >
          <source src={reel720.url} type="video/mp4" media="(max-width: 900px)" />
          <source src={reel1080.url} type="video/mp4" />
        </video>
      </motion.div>

      {/* читаемость надписей */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-transparent md:via-background/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/90 via-transparent to-background/35" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 md:px-10 md:pt-24">
        <motion.div style={{ y: textY }} className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/70 px-5 py-2 text-xs tracking-[0.28em] uppercase backdrop-blur"
          >
            <Sparkles className="size-3.5 text-gold" />
            Истра · Ленина 75
          </motion.span>

          <h1 className="mt-6 font-display text-[3.1rem] leading-[0.95] tracking-tight text-balance sm:text-[3.8rem] md:mt-8 md:text-[5.4rem] xl:text-[6.2rem]">
            {["Эстетика", "тела"].map((w, i) => (
              <motion.span
                key={w}
                className="mr-4 inline-block"
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
              transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              как образ жизни
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty md:mt-8 md:text-xl"
          >
            Диодная лазерная эпиляция, шугаринг и аппаратная коррекция фигуры в Истре. Один мастер с
            опытом 7+ лет, комфортные протоколы и понятные комплексы — без потока и без звонков.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-4 md:mt-10"
          >
            <Link
              to="/contacts"
              hash="booking"
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4.5 text-sm tracking-[0.18em] text-primary-foreground uppercase md:px-10"
            >
              <span className="relative z-10 flex items-center gap-2">
                Записаться онлайн
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 shimmer-gold opacity-45" />
            </Link>
            <Link
              to="/quiz"
              className="flex items-center gap-2 rounded-full border border-foreground/25 bg-card/50 px-8 py-4.5 text-sm tracking-[0.18em] uppercase backdrop-blur transition-colors hover:border-gold hover:text-gold md:px-10"
            >
              <Play className="size-3.5 text-gold" />
              Подобрать программу
            </Link>
          </motion.div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-gold/25 pt-6 md:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.12 }}
              >
                <div className="font-display text-3xl text-gold md:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-[11px] tracking-[0.16em] text-muted-foreground uppercase md:text-xs">
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
          className="glass-card mt-8 inline-block rounded-2xl px-6 py-5 md:absolute md:right-10 md:-bottom-4 md:mt-0 md:bg-card/90 md:px-8 md:py-6"
        >
          <div className="eyebrow">первое посещение</div>
          <div className="mt-2.5 font-display text-3xl md:text-4xl">−50% лазерная эпиляция</div>
          <div className="mt-2 text-sm text-muted-foreground">−10% шугаринг · −500 ₽ массаж</div>
        </motion.div>
      </div>
    </section>
  );
}
