import { useState } from "react";
import { motion } from "motion/react";
import { abonementNote, everlasAbonements, magicAbonements, type AbonementRow } from "@/data/site";
import { Reveal } from "./Reveal";

const tabs = [
  { id: "everlas", label: "Everlas 1800 Вт", rows: everlasAbonements },
  { id: "magic", label: "Magic One 4000 Вт", rows: magicAbonements },
];

const columns: { key: keyof Pick<AbonementRow, "three" | "six" | "ten">; title: string; badge?: string }[] = [
  { key: "three", title: "3 сеанса · −10%" },
  { key: "six", title: "6 сеансов · −18%", badge: "Выбирают чаще всего" },
  { key: "ten", title: "10 сеансов · −25%", badge: "Максимальная выгода" },
];

export function Abonements() {
  const [active, setActive] = useState(tabs[0]!.id);
  const rows = tabs.find((t) => t.id === active)?.rows ?? everlasAbonements;

  return (
    <div id="abonements" className="rounded-[1.75rem] bg-card p-5 shadow-soft md:p-10">
      <h3 className="font-display text-2xl md:text-3xl">Абонементы на курс</h3>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        Курс лазерной эпиляции — это 6–10 процедур. Абонемент закрепляет цену на весь курс: даже если
        прайс вырастет, для вас он останется прежним.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`relative rounded-full px-5 py-2.5 text-[11px] tracking-[0.16em] uppercase transition-colors ${
              active === t.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === t.id && (
              <motion.span
                layoutId="abonement-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        {rows.map((r) => (
          <Reveal key={r.complex}>
            <div className="border-t border-border pt-5">
              <div className="font-display text-2xl">{r.complex}</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {columns.map((c) => {
                  const [total, per] = r[c.key];
                  const highlight = c.key === "ten";
                  return (
                    <div
                      key={c.key}
                      className={`rounded-2xl border p-4 ${
                        highlight ? "border-gold/60 bg-secondary/50" : "border-border"
                      }`}
                    >
                      <div className="text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                        {c.title}
                      </div>
                      <div className={`mt-2 font-display text-2xl ${highlight ? "text-gold" : ""}`}>{total}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{per} за сеанс</div>
                      {c.badge && (
                        <div className="mt-2.5 text-[10px] tracking-[0.16em] text-gold uppercase">{c.badge}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-7 text-xs leading-relaxed text-muted-foreground">{abonementNote}</p>
    </div>
  );
}
