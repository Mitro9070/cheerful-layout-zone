import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PriceTable } from "@/components/site/PriceTable";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { bodyRows, bodyCourses } from "@/data/site";
import bodyImg from "@/assets/service-body.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/body")({
  head: () => ({
    meta: [
      { title: "Аппаратная коррекция фигуры в Истре — цены и курсы | «Импульс»" },
      {
        name: "description",
        content:
          "Вакуумный массаж и микротоки в Истре: цены за сеанс, абонементы на 10 процедур, результаты до/после. Первый сеанс 1 300 ₽.",
      },
      { property: "og:title", content: "Аппаратная коррекция фигуры в Истре" },
      {
        property: "og:description",
        content: "Вакуумный массаж и микротоковая терапия: курсы, абонементы и замеры до/после.",
      },
    ],
  }),
  component: BodyPage,
});

function BodyPage() {
  return (
    <div>
      <PageHero
        eyebrow="коррекция фигуры"
        title="Рельеф и тонус"
        accent="без спортзала"
        text="Вакуумный массаж и микротоковая терапия: работаем с целлюлитом, объёмами и тонусом кожи. Замеры до и после курса — результат виден в цифрах."
        image={bodyImg}
      />

      <section className="mx-auto max-w-6xl space-y-6 px-5 md:px-10">
        <PriceTable rows={bodyRows} title="Процедуры" />
        <PriceTable rows={bodyCourses} title="Курсы и абонементы" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <span className="eyebrow">результаты</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
            До и <span className="italic text-gold">после курса</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BeforeAfter before={studio} after={bodyImg} label="Бёдра, курс 10 сеансов" />
          <BeforeAfter before={bodyImg} after={studio} label="Живот и бока, 10 сеансов" />
          <BeforeAfter before={studio} after={bodyImg} label="Лицо и шея, микротоки" />
        </div>
        <p className="mt-5 text-[11px] text-muted-foreground">
          Демонстрационные кадры — заменяются живыми фото и видео-переходами студии.
        </p>

        <div className="mt-12">
          <BookingWidget defaultService="Коррекция фигуры" />
        </div>
      </section>
    </div>
  );
}
