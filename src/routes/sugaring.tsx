import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PriceTable } from "@/components/site/PriceTable";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { sugaringRows, electroRows } from "@/data/site";
import sugaringImg from "@/assets/service-sugaring.jpg";

export const Route = createFileRoute("/sugaring")({
  head: () => ({
    meta: [
      { title: "Шугаринг и электроэпиляция в Истре — цены | Студия «Импульс»" },
      {
        name: "description",
        content:
          "Шугаринг и электроэпиляция в Истре: прайс по зонам, сравнение методов с лазером и помощь в выборе. Запись онлайн.",
      },
      { property: "og:title", content: "Шугаринг и электроэпиляция в Истре" },
      {
        property: "og:description",
        content: "Гладкость на 3–4 недели и точечное удаление светлых волос. Открытый прайс, запись онлайн.",
      },
    ],
  }),
  component: SugaringPage,
});

const compare = [
  {
    title: "Лазер",
    text: "Тёмный волос, большие зоны, эффект накопительный и по сути постоянный. 6–8 процедур.",
  },
  {
    title: "Шугаринг",
    text: "Любой цвет и жёсткость волоса, гладкость сразу на 3–4 недели. Идеален как быстрый уход.",
  },
  {
    title: "Электроэпиляция",
    text: "Светлые, седые и единичные волоски, которые лазер не видит. Работает точечно и навсегда.",
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          <PriceTable rows={sugaringRows} title="Шугаринг и воск" />
          <PriceTable rows={electroRows} title="Электроэпиляция" />
        </div>

        <div className="py-20 md:py-28">
          <BookingWidget defaultService="Шугаринг и воск" />
        </div>
      </section>
    </div>
  );
}
