import { createFileRoute } from "@tanstack/react-router";
import { Check, Gift, X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { menComplexes, menZonesNote, laserZones, legalNote } from "@/data/site";
import laserImg from "@/assets/service-laser.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      { title: "Мужская лазерная эпиляция в Истре — цены | Студия «Импульс»" },
      {
        name: "description",
        content:
          "Мужская лазерная эпиляция в Истре: комплексы «Мужской верх» от 4 500 ₽ и «Мужской фронт» от 4 000 ₽ с подарочными зонами. Отдельная запись, два аппарата, бесплатная консультация.",
      },
      { property: "og:title", content: "Мужская лазерная эпиляция в Истре" },
      {
        property: "og:description",
        content: "Спина, плечи, грудь, живот и подмышки. Спокойно, быстро и по делу — с понятной ценой.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenPage,
});

const yes = ["Спина и плечи", "Грудь и живот", "Подмышки", "Шея сзади", "Ареолы", "Коррекция плотности волос"];
const no = ["Интимные зоны мужчинам", "Татуаж и косметология лица"];

function MenPage() {
  return (
    <div>
      <PageHero
        eyebrow="для мужчин"
        title="Мужской формат:"
        accent="спокойно и по делу"
        text="Отдельная запись, никакой лишней беседы и продаж. Мастер работает быстро, объясняет каждый шаг и сразу называет количество процедур."
        image={laserImg}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[1.5rem] bg-card p-6 shadow-soft md:p-8">
              <span className="eyebrow">что делаем</span>
              <ul className="mt-5 space-y-3">
                {yes.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[1.5rem] border border-border bg-secondary/40 p-6 md:p-8">
              <span className="eyebrow">чего не делаем</span>
              <ul className="mt-5 space-y-3">
                {no.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {menComplexes.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-7 shadow-soft md:p-8">
                <h2 className="font-display text-3xl leading-tight md:text-4xl">{m.name}</h2>
                <p className="mt-3 text-base">{m.zones}</p>
                <p className="mt-3 flex gap-2.5 text-[15px] text-gold">
                  <Gift className="mt-0.5 size-4 shrink-0" />
                  {m.gift}
                </p>
                <div className="mt-6 flex-1 space-y-3 border-t border-border pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-muted-foreground">Everlas 1800 Вт</span>
                    <span className="font-display text-2xl">{m.everlas}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-muted-foreground">Magic One 4000 Вт</span>
                    <span className="font-display text-2xl text-gold">{m.magic}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-card p-5 shadow-soft md:p-10">
          <h3 className="font-display text-2xl md:text-3xl">Отдельные зоны</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{menZonesNote}</p>
          <ul className="mt-6 divide-y divide-border">
            {laserZones.slice(0, 4).map((z) => (
              <li key={z.group} className="py-4">
                <div className="font-display text-xl text-gold">{z.group}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{z.zones}</p>
                <div className="mt-2 text-sm">
                  Женский прайс {z.everlas} / {z.magic} · для мужчин +30%
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">{legalNote}</p>

        <div className="py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl text-balance md:text-5xl">
              До и <span className="italic text-gold">после</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <BeforeAfter before={studio} after={laserImg} label="Спина, 4 процедуры" />
            <BeforeAfter before={laserImg} after={studio} label="Грудь и живот, 5 процедур" />
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Демонстрационные кадры — заменяются живыми фото мужского комплекса.
          </p>

          <div className="mt-12">
            <BookingWidget defaultService="Для мужчин" />
          </div>
        </div>
      </section>
    </div>
  );
}
