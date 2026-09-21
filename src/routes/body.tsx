import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PriceTable } from "@/components/site/PriceTable";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import {
  bodyCrossSell,
  bodyFirstVisitNote,
  bodyPrograms,
  bodyProcedures,
  legalNote,
  massageRows,
} from "@/data/site";
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { bodyEquipmentPhotos, teamBodyPhotos } from "@/data/photos";
import bodyHero from "@/assets/photo/services/body-equipment-new.jpg";
import bodyImg from "@/assets/service-body.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/body")({
  head: () => ({
    meta: [
      { title: "Коррекция фигуры в Истре: массаж и EMSculpt" },
      {
        name: "description",
        content:
          "Аппаратная коррекция фигуры в Истре: вакуумный и вибрационно-роликовый массаж, EMSculpt, TURBOSCULPT, обёртывания и ручной массаж. Абонементы с выгодой до 10 000 ₽.",
      },
      { property: "og:title", content: "Коррекция фигуры и массаж в Истре" },
      {
        property: "og:description",
        content: "EMSculpt, TURBOSCULPT, вакуумный массаж и программы для тела. Первое посещение − 500 ₽.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        accent="в комфортном ритме"
        text="Вакуумный и вибрационно-роликовый массаж, EMSculpt и TURBOSCULPT. Перед курсом специалист уточнит задачу и поможет выбрать подходящую процедуру."
        image={bodyHero}
      />

      <PhotoGrid
        eyebrow="аппараты для тела"
        title="EMSlim neo и"
        accent="Turbo G5"
        text="Аппаратный массаж и электромагнитная стимуляция мышц: мастер подбирает интенсивность под задачу и уровень комфорта."
        photos={[...bodyEquipmentPhotos, ...teamBodyPhotos]}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <div className="rounded-[1.5rem] border border-gold/50 bg-card p-6 shadow-soft md:p-8">
            <span className="rounded-full bg-primary px-4 py-1.5 text-[10px] tracking-[0.2em] text-primary-foreground uppercase">
              Знакомство с телом
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Любая процедура 30 минут: 1 500 ₽{" "}
              <span className="text-muted-foreground line-through">2 000 ₽</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Выберите вакуумный массаж, вибрационно-роликовый массаж, EMSculpt или TURBOSCULPT.
              Если сомневаетесь, специалист поможет определиться на консультации. {bodyFirstVisitNote}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 rounded-[1.75rem] bg-card p-5 shadow-soft md:p-10">
          <h3 className="font-display text-2xl md:text-3xl">Процедуры и абонементы</h3>
          <div className="mt-7 space-y-4">
            {bodyProcedures.map((b) => (
              <Reveal key={b.procedure}>
                <div className="grid gap-2 border-t border-border py-4 md:grid-cols-[1fr_auto_auto] md:items-baseline md:gap-8">
                  <div className="text-base md:text-[17px]">{b.procedure}</div>
                  <div className="font-display text-xl whitespace-nowrap">{b.session}</div>
                  <div className="text-sm text-muted-foreground md:min-w-56 md:text-right">
                    {b.coursePrice ? (
                      <>
                        {b.course}: <span className="font-display text-lg text-gold">{b.coursePrice}</span>
                        {b.benefit && <span className="block text-xs">выгода {b.benefit}</span>}
                      </>
                    ) : (
                      "Нет абонемента"
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl">Комплексные программы</h3>
          </Reveal>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {bodyPrograms.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-7 shadow-soft">
                  <h4 className="font-display text-2xl leading-tight md:text-3xl">{p.name}</h4>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-display text-3xl text-gold">{p.price}</span>
                    {"oldPrice" in p && p.oldPrice && (
                      <span className="font-display text-xl text-muted-foreground line-through">{p.oldPrice}</span>
                    )}
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
                  {p.course && (
                    <div className="mt-5 border-t border-border pt-4 text-sm">
                      {p.course}
                      {p.benefit && (
                        <span className="mt-1 block text-[11px] tracking-[0.16em] text-gold uppercase">
                          {p.benefit}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <PriceTable rows={massageRows} title="Ручной массаж" />
        </div>

        <Reveal>
          <div className="mt-8 rounded-[1.5rem] border border-gold/40 bg-secondary/50 p-6 md:p-7">
            <p className="text-base leading-relaxed md:text-lg">{bodyCrossSell}</p>
          </div>
        </Reveal>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">{legalNote}</p>
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
          <BeforeAfter before={studio} after={bodyImg} label="Ягодицы, EMSculpt 5 сеансов" />
        </div>
        <div className="mt-12">
          <BookingWidget defaultService="Коррекция фигуры" />
        </div>
      </section>
    </div>
  );
}
