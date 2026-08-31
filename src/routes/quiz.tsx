import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Gift, ArrowLeft } from "lucide-react";
import { BookingWidget } from "@/components/site/BookingWidget";
import { PulseLine } from "@/components/site/PulseLine";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Подобрать программу за 40 секунд — студия «Импульс», Истра" },
      {
        name: "description",
        content:
          "Ответьте на 4 вопроса и получите персональную рекомендацию по эпиляции или коррекции фигуры с промокодом на первый визит.",
      },
      { property: "og:title", content: "Квиз: подберём программу и промокод — «Импульс»" },
      {
        property: "og:description",
        content: "4 вопроса, персональная рекомендация и промокод на первое посещение студии в Истре.",
      },
    ],
  }),
  component: QuizPage,
});

const directions = [
  { id: "epil", label: "Эпиляция" },
  { id: "body", label: "Аппаратная коррекция фигуры" },
  { id: "combo", label: "Комплекс: эпиляция + фигура" },
  { id: "men", label: "Мужской комплекс" },
];

const zonesByDirection: Record<string, string[]> = {
  epil: ["Подмышки", "Глубокое бикини", "Ноги полностью", "Руки", "Лицо", "Всё тело"],
  body: ["Живот и бока", "Бёдра и ягодицы", "Руки", "Лицо и шея (микротоки)"],
  combo: ["Бикини + подмышки", "Ноги + живот", "Всё тело + курс вакуума"],
  men: ["Спина", "Живот", "Подмышки"],
};

const timing = ["В ближайшие 3 дня", "На этой неделе", "Просто присматриваюсь"];

function recommendation(dir: string, zones: string[], time: string) {
  const base: Record<string, { title: string; text: string; promo: string }> = {
    epil: {
      title: "Курс лазерной эпиляции по выбранным зонам",
      text: "Диодный лазер, 6–8 процедур с интервалом 4–6 недель. Зоны объединяем в комплекс — так выгоднее, чем по одной.",
      promo: "IMPULSE-50",
    },
    body: {
      title: "Курс аппаратной коррекции фигуры",
      text: "Вакуумный массаж 10 сеансов, при необходимости добавляем микротоки. Замеры до и после курса.",
      promo: "BODY-START",
    },
    combo: {
      title: "Комплекс «Эпиляция + фигура»",
      text: "Совмещаем лазер и вакуумный массаж в одном визите — экономия времени и до 20% стоимости.",
      promo: "COMBO-20",
    },
    men: {
      title: "Мужской комплекс: спина + живот + подмышки",
      text: "Один визит закрывает основные зоны, дискомфорт минимальный за счёт охлаждения манипулы.",
      promo: "MEN-20",
    },
  };
  const r = base[dir] ?? base["epil"]!;
  return {
    ...r,
    zones,
    urgency:
      time === "Просто присматриваюсь"
        ? "Промокод действует 7 дней — успеете спокойно решить."
        : "Промокод действует 48 часов и учитывает свободные окна мастера на эти дни.",
  };
}

function QuizPage() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState("");
  const [zones, setZones] = useState<string[]>([]);
  const [time, setTime] = useState("");

  const toggleZone = (z: string) =>
    setZones((p) => (p.includes(z) ? p.filter((x) => x !== z) : [...p, z]));

  const result = step === 3 ? recommendation(dir, zones, time) : null;

  return (
    <div className="hero-canvas min-h-[100svh] pt-28 pb-28 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/70 px-4 py-1.5 text-[10px] tracking-[0.24em] uppercase backdrop-blur">
            <Gift className="size-3 text-gold" /> подарок за 40 секунд
          </span>
          {step > 0 && step < 3 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-muted-foreground uppercase"
            >
              <ArrowLeft className="size-3" /> назад
            </button>
          )}
        </div>

        <div className="mt-8 flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${i <= step ? "bg-gold" : "bg-border"}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            {step === 0 && (
              <Question title="Что вас интересует?">
                {directions.map((d) => (
                  <Option
                    key={d.id}
                    label={d.label}
                    active={dir === d.id}
                    onClick={() => {
                      setDir(d.id);
                      setZones([]);
                      setStep(1);
                    }}
                  />
                ))}
              </Question>
            )}

            {step === 1 && (
              <Question title="Какие зоны?" hint="Можно выбрать несколько">
                {(zonesByDirection[dir] ?? zonesByDirection["epil"]!).map((z) => (
                  <Option key={z} label={z} active={zones.includes(z)} onClick={() => toggleZone(z)} />
                ))}
                <button
                  disabled={zones.length === 0}
                  onClick={() => setStep(2)}
                  className="mt-4 rounded-full bg-primary px-7 py-3.5 text-[11px] tracking-[0.22em] text-primary-foreground uppercase disabled:opacity-40"
                >
                  Далее
                </button>
              </Question>
            )}

            {step === 2 && (
              <Question title="Когда хотите начать?">
                {timing.map((t) => (
                  <Option
                    key={t}
                    label={t}
                    active={time === t}
                    onClick={() => {
                      setTime(t);
                      setStep(3);
                    }}
                  />
                ))}
              </Question>
            )}

            {step === 3 && result && (
              <div>
                <div className="relative overflow-hidden rounded-[1.75rem] bg-card p-6 shadow-lift md:p-10">
                  <PulseLine className="pointer-events-none absolute inset-x-0 top-1/2 h-20 w-full text-gold opacity-40" />
                  <span className="eyebrow relative">под ваш запрос подойдёт</span>
                  <h1 className="relative mt-4 font-display text-3xl leading-tight text-balance md:text-4xl">
                    {result.title}
                  </h1>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{result.text}</p>
                  {result.zones.length > 0 && (
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {result.zones.map((z) => (
                        <span
                          key={z}
                          className="rounded-full border border-gold/35 px-3.5 py-1.5 text-[11px] tracking-[0.12em] uppercase"
                        >
                          {z}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="relative mt-8 rounded-2xl bg-secondary/70 p-5">
                    <div className="eyebrow">ваш промокод</div>
                    <div className="mt-2 font-display text-3xl text-gold">{result.promo}</div>
                    <p className="mt-2 text-[12px] text-muted-foreground">{result.urgency}</p>
                  </div>
                  <button
                    onClick={() => {
                      setStep(0);
                      setDir("");
                      setZones([]);
                      setTime("");
                    }}
                    className="relative mt-6 text-[11px] tracking-[0.18em] text-muted-foreground uppercase"
                  >
                    пройти заново
                  </button>
                </div>

                <div className="mt-6">
                  <BookingWidget promo={result.promo} />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Question({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="font-display text-3xl text-balance md:text-5xl">{title}</h1>
      {hint && <p className="mt-3 text-[12px] tracking-[0.16em] text-muted-foreground uppercase">{hint}</p>}
      <div className="mt-8 grid gap-3">{children}</div>
    </div>
  );
}

function Option({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border px-5 py-4 text-left text-[15px] transition-all duration-300 ${
        active ? "border-gold bg-card shadow-soft" : "border-border bg-card/60 hover:border-gold/50"
      }`}
    >
      {label}
    </button>
  );
}
