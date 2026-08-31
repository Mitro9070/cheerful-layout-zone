import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PriceTable } from "@/components/site/PriceTable";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { laserMen } from "@/data/site";
import laserImg from "@/assets/service-laser.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      { title: "Лазерная эпиляция для мужчин в Истре — цены | Студия «Импульс»" },
      {
        name: "description",
        content:
          "Мужская лазерная эпиляция в Истре: спина, живот, подмышки, грудь, контур бороды. Цены, комплекс со скидкой и результаты до/после.",
      },
      { property: "og:title", content: "Мужская лазерная эпиляция в Истре" },
      {
        property: "og:description",
        content: "Спина, живот, подмышки и грудь — комфортно, без стеснения, с понятной ценой.",
      },
    ],
  }),
  component: MenPage,
});

const yes = ["Спина и плечи", "Живот и грудь", "Подмышки", "Шея и контур бороды", "Коррекция плотности волос"];
const no = ["Интимные зоны мужчинам", "Массаж и мануальные техники", "Татуаж и косметология лица"];

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

        <div className="mt-6">
          <PriceTable rows={laserMen} title="Цены на мужские зоны" />
        </div>

        <div className="py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl text-balance md:text-5xl">
              До и <span className="italic text-gold">после</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <BeforeAfter before={studio} after={laserImg} label="Спина, 4 процедуры" />
            <BeforeAfter before={laserImg} after={studio} label="Живот и грудь, 5 процедур" />
          </div>
          <p className="mt-5 text-[11px] text-muted-foreground">
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
