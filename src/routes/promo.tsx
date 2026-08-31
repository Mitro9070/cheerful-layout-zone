import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { promos } from "@/data/site";

export const Route = createFileRoute("/promo")({
  head: () => ({
    meta: [
      { title: "Акции студии «Импульс» в Истре — скидка 50% на первый визит" },
      {
        name: "description",
        content:
          "Актуальные акции студии «Импульс»: −50% на первую лазерную эпиляцию, всё тело за 9 900 ₽, вакуумный массаж от 1 300 ₽, мужской комплекс со скидкой.",
      },
      { property: "og:title", content: "Акции студии «Импульс», Истра" },
      {
        property: "og:description",
        content: "Скидка 50% на первую лазерную эпиляцию и выгодные комплексы с реальными сроками действия.",
      },
    ],
  }),
  component: PromoPage,
});

function PromoPage() {
  return (
    <div>
      <PageHero
        eyebrow="акции"
        title="Выгодно начать"
        accent="прямо сейчас"
        text="Предложения без фейковых таймеров: каждое ограничение реальное и привязано к загрузке мастера."
        cta={false}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {promos.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[1.5rem] bg-card p-6 shadow-soft md:p-8">
                <span className="w-fit rounded-full border border-gold/40 px-3.5 py-1 text-[10px] tracking-[0.2em] text-gold uppercase">
                  {p.tag}
                </span>
                <h2 className="mt-5 font-display text-2xl leading-tight text-balance md:text-3xl">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <div className="mt-6 flex items-center gap-2 text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  <Clock className="size-3.5 text-gold" />
                  {p.deadline}
                </div>
                <Link
                  to="/quiz"
                  className="mt-6 w-fit rounded-full bg-primary px-6 py-3 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
                >
                  Получить промокод
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="py-20 md:py-28">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
