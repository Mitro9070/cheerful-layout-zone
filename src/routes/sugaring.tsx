import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PriceTable } from "@/components/site/PriceTable";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import {
  electroNote,
  electroRows,
  legalNote,
  sugaringAbonements,
  sugaringComplexes,
  sugaringRows,
} from "@/data/site";
import sugaringImg from "@/assets/service-sugaring.jpg";

export const Route = createFileRoute("/sugaring")({
  head: () => ({
    meta: [
      { title: "Шугаринг и электроэпиляция в Истре — цены | Студия «Импульс»" },
      {
        name: "description",
        content:
          "Шугаринг и восковая депиляция в Истре: комплексы от 2 600 ₽, абонементы на 5 процедур, отдельные зоны. Электроэпиляция пакетами с иглой в цене.",
      },
      { property: "og:title", content: "Шугаринг и электроэпиляция в Истре" },
      {
        property: "og:description",
        content: "Комплексы шугаринга, абонементы с выгодой до 3 500 ₽ и электроэпиляция для светлых и седых волос.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SugaringPage,
});

const compare = [
  {
    title: "Лазер",
    text: "Тёмный и русый волос, большие зоны. Курс 6–10 процедур, результат на 3–5 лет, дальше поддержка 1–2 раза в год.",
  },
  {
    title: "Шугаринг",
    text: "Любой цвет и жёсткость волоса, гладкость сразу на 3–4 недели. Идеален как регулярный уход.",
  },
  {
    title: "Электроэпиляция",
    text: "Светлые и седые волосы, которые лазер не видит. Работает точечно и навсегда.",
  },
];

function SugaringPage() {
  return (
    <div>
      <PageHero
        eyebrow="шугаринг · электроэпиляция"
        title="Гладкая кожа"
        accent="без раздражения"
        text="Паста собственного подбора под тип кожи, аккуратная техника и уход после процедуры. Электроэпиляция закрывает то, что лазеру не под силу."
        image={sugaringImg}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {compare.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card/70 p-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-[1.5rem] border border-gold/50 bg-card p-6 shadow-soft md:p-8">
            <span className="rounded-full bg-primary px-4 py-1.5 text-[10px] tracking-[0.2em] text-primary-foreground uppercase">
              Первый визит
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Шугаринг для новых клиентов — 2 100 ₽{" "}
              <span className="text-muted-foreground line-through">2 600 ₽</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Глубокое бикини + подмышки. Для тех, кто пока не готов к курсу лазера.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          <PriceTable rows={sugaringComplexes} title="Комплексы шугаринга" />
          <PriceTable rows={sugaringAbonements} title="Абонементы, 5 процедур (−15%)" />
          <PriceTable rows={sugaringRows} title="Отдельные зоны" />
          <div>
            <PriceTable rows={electroRows} title="Электроэпиляция — пакеты" />
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">{electroNote}</p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">{legalNote}</p>

        <div className="py-20 md:py-28">
          <BookingWidget defaultService="Шугаринг и воск" />
        </div>
      </section>
    </div>
  );
}
