import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { PulseLine } from "./PulseLine";

const steps = [
  { n: "01", label: "Что вас интересует" },
  { n: "02", label: "Какие зоны" },
  { n: "03", label: "Когда хотите начать" },
  { n: "04", label: "Получите рекомендацию" },
];

export function QuizTeaser() {
  return (
    <section id="quiz" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="hero-canvas relative overflow-hidden rounded-[2.25rem] px-7 py-14 shadow-soft md:px-16 md:py-20">
          <PulseLine className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full text-gold opacity-50" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/70 px-4 py-1.5 text-[10px] tracking-[0.28em] uppercase backdrop-blur">
                <Sparkles className="size-3 text-gold" />
                Подбор за 40 секунд
              </span>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">
                Поможем выбрать <span className="italic text-gold">подходящую процедуру</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Ответьте на три вопроса и получите предварительную рекомендацию. Окончательный выбор
                специалист поможет сделать после консультации.
              </p>
              <Link
                to="/quiz"
                className="group relative mt-9 inline-flex overflow-hidden rounded-full bg-primary px-8 py-4 text-[11px] tracking-[0.24em] text-primary-foreground uppercase"
              >
                <span className="relative z-10">Пройти квиз</span>
                <span className="absolute inset-0 shimmer-gold opacity-45" />
              </Link>
            </div>

            <div className="grid gap-3">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4"
                >
                  <span className="font-display text-lg text-gold">{s.n}</span>
                  <span className="text-sm">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
