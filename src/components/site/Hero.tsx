import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import reel720 from "@/assets/hero-reel-720.mp4";
import reel1080 from "@/assets/hero-reel-1080.mp4";
import poster from "@/assets/hero-reel-poster.jpg";


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
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Процедуры студии красивого тела «Импульс» в Истре"
        >
          <source src={reel720} type="video/mp4" media="(max-width: 900px)" />
          <source src={reel1080} type="video/mp4" />
        </video>
      </motion.div>

      {/* читаемость надписей */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/88 to-background/20 md:via-background/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/90 via-transparent to-background/40" />


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
            {["Красота", "начинается"].map((w, i) => (
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
              с импульса
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty md:mt-8 md:text-xl"
          >
            Лазерная и электроэпиляция, шугаринг и коррекция фигуры в центре Истры. Опытные
            специалисты, современное оборудование и открытые цены на все процедуры.
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
                Записаться бесплатно
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 shimmer-gold opacity-45" />
            </Link>
            <Link
              to="/laser"
              className="flex items-center gap-2 rounded-full border border-foreground/25 bg-card/50 px-8 py-4.5 text-sm tracking-[0.18em] uppercase backdrop-blur transition-colors hover:border-gold hover:text-gold md:px-10"
            >
              <Play className="size-3.5 text-gold" />
              Цены и комплексы
            </Link>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="glass-card mt-8 inline-block rounded-2xl px-6 py-5 md:absolute md:right-10 md:-bottom-4 md:mt-0 md:bg-card/90 md:px-8 md:py-6"
        >
          <div className="eyebrow">первый визит</div>
          <div className="mt-2.5 font-display text-3xl md:text-4xl">
            Консультация и тестовая зона: 0 ₽
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Для новых клиентов по предварительной записи.</div>
        </motion.div>
      </div>
    </section>
  );
}
