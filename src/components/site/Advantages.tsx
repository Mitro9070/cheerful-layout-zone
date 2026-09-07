import { advantages } from "@/data/site";
import { Reveal } from "./Reveal";

export function Advantages() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <span className="eyebrow">почему «Импульс»</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.08] text-balance md:text-5xl">
          Не «как у всех по соседству», <span className="italic text-gold">а по-другому</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((a, i) => (
          <Reveal key={a.title} delay={0.08 * i}>
            <div className="h-full rounded-2xl border border-border bg-card/70 p-6 transition-colors hover:border-gold/40">
              <span className="font-display text-lg text-gold">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl leading-tight">{a.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
