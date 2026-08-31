import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PriceTable } from "@/components/site/PriceTable";
import { Faq } from "@/components/site/Faq";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BookingWidget } from "@/components/site/BookingWidget";
import { ReelsFeed } from "@/components/site/ReelsFeed";
import { Reveal } from "@/components/site/Reveal";
import { faq, laserWomen, laserComplex, laserMen } from "@/data/site";
import laserImg from "@/assets/service-laser.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/laser")({
  head: () => ({
    meta: [
      { title: "Лазерная эпиляция в Истре — цены по зонам | Студия «Импульс»" },
      {
        name: "description",
        content:
          "Диодная лазерная эпиляция в Истре: полный прайс по зонам для женщин и мужчин, комплексы, галерея до/после и скидка 50% на первое посещение.",
      },
      { property: "og:title", content: "Лазерная эпиляция в Истре — прайс по зонам" },
      {
        property: "og:description",
        content: "Диодный лазер с охлаждением, мастер с опытом 7+ лет, открытые цены и запись онлайн.",
      },
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
        text="Диодный лазер с системой охлаждения: комфортно, безопасно и результативно уже с первых процедур. Полный прайс по зонам — ниже, без звонков и переписки."
        image={laserImg}
      />

      <section className="mx-auto max-w-6xl space-y-6 px-5 md:px-10">
        <PriceTable rows={laserWomen} title="Прайс для женщин" />
        <PriceTable rows={laserComplex} title="Комплексы — выгоднее" />
        <PriceTable rows={laserMen} title="Мужские зоны" />
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
        <p className="mt-5 text-[11px] text-muted-foreground">
          Демонстрационные кадры — заменяются живыми фото студии с согласия клиентов (единый ракурс, свет и фон).
        </p>
      </section>

      <ReelsFeed />
      <Faq items={faq} />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-10 md:pb-28">
        <BookingWidget defaultService="Лазерная эпиляция" />
      </div>
    </div>
  );
}
