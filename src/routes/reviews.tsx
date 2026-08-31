import { createFileRoute } from "@tanstack/react-router";
import { Play, Quote, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BookingWidget } from "@/components/site/BookingWidget";
import { reviews, site } from "@/data/site";
import studio from "@/assets/studio.jpg";
import laser from "@/assets/service-laser.jpg";
import bodyImg from "@/assets/service-body.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Отзывы о студии «Импульс» в Истре — реальные клиенты" },
      {
        name: "description",
        content:
          "Текстовые и видео-отзывы клиентов студии «Импульс» в Истре, а также ссылки на отзывы в Яндекс.Картах, 2ГИС и Zoon.",
      },
      { property: "og:title", content: "Отзывы клиентов студии «Импульс»" },
      {
        property: "og:description",
        content: "Что говорят клиенты о лазерной эпиляции, шугаринге и коррекции фигуры в студии «Импульс».",
      },
    ],
  }),
  component: ReviewsPage,
});

const videoReviews = [
  { img: studio, name: "Ксения", topic: "Лазер: 6 процедур" },
  { img: laser, name: "Ирина", topic: "Бикини без боли" },
  { img: bodyImg, name: "Юлия", topic: "Курс вакуума" },
];

const aggregators = [
  { label: "Яндекс.Карты", url: site.yandexMaps },
  { label: "ВКонтакте", url: site.vk },
  { label: "Instagram", url: site.instagram },
];

function ReviewsPage() {
  return (
    <div>
      <PageHero
        eyebrow="отзывы"
        title="Нас выбирают"
        accent="и возвращаются"
        text="Более 1 500 процедур и клиенты, которые приходят курсами по 6–8 визитов. Ниже — их слова и видео."
        cta={false}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article className="h-full rounded-[1.5rem] bg-card p-6 shadow-soft md:p-8">
                <Quote className="size-5 text-gold" />
                <p className="mt-4 text-[15px] leading-relaxed">{r.text}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-display text-xl">{r.name}</div>
                    <div className="truncate text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                      {r.service}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-0.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="size-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="pt-20 md:pt-28">
          <Reveal>
            <h2 className="font-display text-3xl text-balance md:text-5xl">
              Видео<span className="italic text-gold">-отзывы</span>
            </h2>
          </Reveal>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {videoReviews.map((v) => (
              <a
                key={v.name}
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="relative w-[70%] shrink-0 snap-start overflow-hidden rounded-[1.25rem] md:w-auto"
              >
                <div className="aspect-9/16">
                  <img src={v.img} alt={`Видео-отзыв: ${v.name}`} loading="lazy" className="size-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 to-transparent" />
                <span className="absolute top-4 left-4 grid size-9 place-items-center rounded-full bg-background/85">
                  <Play className="size-3.5" />
                </span>
                <div className="absolute inset-x-4 bottom-4 text-background">
                  <div className="font-display text-xl">{v.name}</div>
                  <div className="text-[11px] tracking-[0.16em] uppercase opacity-85">{v.topic}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {aggregators.map((a) => (
              <a
                key={a.label}
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-full px-6 py-3 text-[11px] tracking-[0.18em] uppercase"
              >
                Отзывы в {a.label}
              </a>
            ))}
          </div>
        </div>

        <div className="py-20 md:py-28">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
