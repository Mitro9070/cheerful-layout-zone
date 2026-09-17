import { savings } from "@/data/site";
import { Reveal } from "./Reveal";
import workHandpiecePoint from "@/assets/photo/work/handpiece-point.jpg.asset.json";

export function Savings() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/40 py-20 md:py-28">
      <div className="absolute -left-24 -top-24 z-0 size-96 opacity-[0.05] grayscale lg:block">
        <img src={workHandpiecePoint.url} alt="" className="photo-tone size-full object-cover" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">честный расчёт</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              Сравните расходы <span className="italic text-gold">за 3 года</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Для примера взяты зоны «глубокое бикини + подмышки + голени». Расчёт показывает
              ориентировочные расходы на разные способы удаления волос за одинаковый период.
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
