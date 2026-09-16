import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Complexes } from "@/components/site/Complexes";
import { ZoneMatrix } from "@/components/site/ZoneMatrix";
import { Abonements } from "@/components/site/Abonements";
import { Faq } from "@/components/site/Faq";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BookingWidget } from "@/components/site/BookingWidget";
import { ReelsFeed } from "@/components/site/ReelsFeed";
import { LaserVideo } from "@/components/site/LaserVideo";
import { Reveal } from "@/components/site/Reveal";
import { faq, lasers } from "@/data/site";
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { equipmentPhotos, laserWorkPhotos } from "@/data/photos";
import laserImg from "@/assets/service-laser.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/laser")({
  head: () => ({
    meta: [
      { title: "Лазерная эпиляция в Истре: цены | «Импульс»" },
      {
        name: "description",
        content:
          "Лазерная эпиляция в Истре на Everlas 1800 Вт и Magic One 4000 Вт: комплексы с подарочными зонами, цены по группам зон, абонементы на курс и бесплатная консультация с тестовой зоной.",
      },
      { property: "og:title", content: "Лазерная эпиляция в Истре: комплексы и цены" },
      {
        property: "og:description",
        content:
          "Два аппарата, комплексы выгоднее суммы зон на 25–40%, подарки в рублях и первый визит от 1 450 ₽.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LaserPage,
});

function LaserPage() {
  return (
    <div>
      <PageHero
        eyebrow="лазерная эпиляция"
        title="Гладкость, которая"
        accent="остаётся"
        text="Everlas 1800 Вт и Magic One 4000 Вт позволяют подобрать параметры под тип волос и фототип кожи. Цены на зоны, комплексы и курсы собраны на этой странице."
        image={laserImg}
      />

      <PhotoGrid
        eyebrow="аппараты"
        title="Два уровня"
        accent="лазерной эпиляции"
        text="Классический Everlas и более мощный Magic One с сапфировым охлаждением: параметры подбираются под тип волос и фототип кожи."
        photos={equipmentPhotos}
        columns={4}
      />

      <Complexes />

      <div className="bg-secondary/35">
        <PhotoGrid
          eyebrow="как проходит процедура"
          title="Работа"
          accent="наших мастеров"
          text="Подготовка кожи, настройка параметров и проход по зоне с охлаждением. Защитные очки для клиента и специалиста обязательны."
          photos={laserWorkPhotos.slice(0, 6)}
        />
      </div>

      <section className="mx-auto max-w-6xl space-y-6 px-5 md:px-10">
        <ZoneMatrix />
        <Abonements />

        <div className="grid gap-5 md:grid-cols-2">
          {lasers.map((l) => (
            <Reveal key={l.id}>
              <div className="h-full rounded-[1.5rem] border border-border bg-card/70 p-7">
                <h3 className="font-display text-2xl md:text-3xl">{l.name}</h3>
                <div className="mt-1.5 text-[11px] tracking-[0.18em] text-gold uppercase">{l.power}</div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20 md:px-10 md:pt-28">
        <Reveal>
          <span className="eyebrow">результаты</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
            До и <span className="italic text-gold">после</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BeforeAfter before={studio} after={laserImg} label="Подмышки, 4 процедуры" />
          <BeforeAfter before={laserImg} after={studio} label="Голени, 5 процедур" />
          <BeforeAfter before={studio} after={laserImg} label="Глубокое бикини, 6 процедур" />
        </div>
      </section>

      <ReelsFeed />
      <Faq items={faq} />

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-10 md:pb-28">
        <BookingWidget defaultService="Лазерная эпиляция" />
      </section>
    </div>
  );
}
