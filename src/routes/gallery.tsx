import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import laser from "@/assets/service-laser.jpg";
import sugaringImg from "@/assets/service-sugaring.jpg";
import bodyImg from "@/assets/service-body.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "До и после | Студия «Импульс», Истра" },
      {
        name: "description",
        content:
          "Результаты клиентов студии «Импульс»: лазерная эпиляция по зонам, коррекция фигуры и мужской комплекс. Фильтр по направлению и зоне.",
      },
      { property: "og:title", content: "До и после: результаты студии «Импульс»" },
      {
        property: "og:description",
        content: "Пары фото до и после по каждой зоне: эпиляция, коррекция фигуры, мужской комплекс.",
      },
    ],
  }),
  component: GalleryPage,
});

type Item = { label: string; dir: "epil" | "body" | "men"; before: string; after: string };

const items: Item[] = [
  { label: "Подмышки, 4 процедуры", dir: "epil", before: studio, after: laser },
  { label: "Голени, 5 процедур", dir: "epil", before: laser, after: studio },
  { label: "Глубокое бикини, 6 процедур", dir: "epil", before: studio, after: sugaringImg },
  { label: "Лицо, 5 процедур", dir: "epil", before: sugaringImg, after: laser },
  { label: "Бёдра, курс вакуума 10 сеансов", dir: "body", before: studio, after: bodyImg },
  { label: "Живот и бока, 10 сеансов", dir: "body", before: bodyImg, after: studio },
  { label: "Лицо и шея, микротоки", dir: "body", before: studio, after: sugaringImg },
  { label: "Спина, мужской комплекс", dir: "men", before: laser, after: studio },
  { label: "Живот и грудь, мужской комплекс", dir: "men", before: studio, after: laser },
  { label: "Подмышки, мужской комплекс", dir: "men", before: laser, after: sugaringImg },
];

const filters = [
  { id: "all", label: "Все" },
  { id: "epil", label: "Эпиляция" },
  { id: "body", label: "Коррекция фигуры" },
  { id: "men", label: "Для мужчин" },
];

function GalleryPage() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? items : items.filter((i) => i.dir === active);

  return (
    <div>
      <PageHero
        eyebrow="до / после"
        title="Результаты"
        accent="наших клиентов"
        text="Результаты процедур по разным направлениям и зонам. Фотографии клиентов публикуются только с их согласия."
        cta={false}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] tracking-[0.16em] uppercase transition-colors ${
                  active === f.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((i) => (
            <BeforeAfter key={i.label} before={i.before} after={i.after} label={i.label} />
          ))}
        </div>
        <div className="py-20 md:py-28">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
