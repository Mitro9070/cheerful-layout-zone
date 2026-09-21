import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PriceTable } from "@/components/site/PriceTable";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import {
  legalNote,
  sugaringAbonements,
  sugaringComplexes,
  sugaringRows,
} from "@/data/site";
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { sugaringWorkPhotos, teamSugaringPhotos } from "@/data/photos";
import sugaringHero from "@/assets/photo/services/sugaring-paste-new.jpg";

export const Route = createFileRoute("/sugaring")({
  head: () => ({
    meta: [
      { title: "Шугаринг и воск в Истре: цены | «Импульс»" },
      {
        name: "description",
        content:
          "Шугаринг и восковая депиляция в Истре: комплексы от 2 600 ₽, абонементы на 5 процедур и цены на отдельные зоны.",
      },
      { property: "og:title", content: "Шугаринг и воск в Истре" },
      {
        property: "og:description",
        content: "Комплексы шугаринга, отдельные зоны и абонементы на пять процедур с выгодой до 3 500 ₽.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SugaringPage,
});

const compare = [
  {
    title: "Шугаринг",
    text: "Удаляет волосы разных оттенков и плотности. Эффект заметен сразу, а длительность гладкости индивидуальна.",
  },
  { title: "Плёночный воск", text: "Подходит для быстрого удаления волос на разных зонах. Материал и техника подбираются с учётом чувствительности кожи." },
];

function SugaringPage() {
  return (
    <div>
      <PageHero
        eyebrow="шугаринг · воск"
        title="Гладкая кожа"
        accent="с бережным уходом"
        text="Шугаринг и восковая депиляция для быстрого результата. Состав и способ работы мастер подбирает под зону и чувствительность кожи."
        image={sugaringHero}
      />

      <PhotoGrid
        eyebrow="материалы и мастера"
        title="Работаем на"
        accent="проверенных составах"
        text="Сахарные пасты и воск в картриджах разной плотности: состав подбирается под зону и чувствительность кожи."
        photos={[...teamSugaringPhotos, ...sugaringWorkPhotos].slice(0, 6)}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid gap-5 md:grid-cols-2">
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
              Шугаринг для новых клиентов: 2 340 ₽{" "}
              <span className="text-muted-foreground line-through">2 600 ₽</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Глубокое бикини + подмышки со скидкой 10% на первый визит.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          <PriceTable rows={sugaringComplexes} title="Комплексы шугаринга" />
          <PriceTable rows={sugaringAbonements} title="Абонементы, 5 процедур (−15%)" />
          <PriceTable rows={sugaringRows} title="Отдельные зоны" />
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">{legalNote}</p>

        <div className="py-20 md:py-28">
          <BookingWidget defaultService="Шугаринг" />
        </div>
      </section>
    </div>
  );
}
