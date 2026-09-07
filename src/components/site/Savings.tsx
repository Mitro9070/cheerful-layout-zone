import { savings } from "@/data/site";
import { Reveal } from "./Reveal";

export function Savings() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">честный расчёт</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              Лазер — это дорого? <span className="italic text-gold">Посчитаем за 3 года</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Расчёт для зон «глубокое бикини + подмышки + голени» — то, что женщины удаляют круглый
              год. Лазер — это конечная сумма, всё остальное вы платите бесконечно.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {savings.map((s, i) => (
            <Reveal key={s.method} delay={0.06 * i}>
              <div
                className={`flex h-full flex-col justify-between rounded-2xl border p-7 ${
                  s.highlight ? "border-gold/60 bg-card shadow-soft" : "border-border bg-card/60"
                }`}
              >
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{s.method}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
                </div>
                <div className="mt-8">
                  <div
                    className={`font-display text-4xl md:text-5xl ${s.highlight ? "text-gold" : ""}`}
                  >
                    {s.total}
                  </div>
                  <div className="mt-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    за 3 года
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
