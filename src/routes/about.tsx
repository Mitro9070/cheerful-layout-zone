import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ReelsFeed } from "@/components/site/ReelsFeed";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О студии «Импульс» в Истре — мастер, кабинет, оборудование" },
      {
        name: "description",
        content:
          "Студия «Импульс» в Истре: мастер Евгения Антонова с опытом более 7 лет, сертификаты, диодный лазер и аппараты для коррекции фигуры, фото кабинета.",
      },
      { property: "og:title", content: "О студии «Импульс», Истра" },
      {
        property: "og:description",
        content: "Мастер с опытом 7+ лет, сертифицированное оборудование и один клиент в кабинете.",
      },
    ],
  }),
  component: AboutPage,
});

const points = [
  { icon: BadgeCheck, title: "Сертификаты и аккредитация", text: "Обучение в «Академии Красоты», регулярные повышения квалификации по лазерным методикам." },
  { icon: Sparkles, title: "Оборудование", text: "Диодный лазер с сапфировым охлаждением, вакуумный и микротоковый аппараты последнего поколения." },
  { icon: HeartHandshake, title: "Один мастер — весь курс", text: `${site.master} ведёт вас лично: от бесплатной консультации до финального результата.` },
  { icon: MapPin, title: "Удобное расположение", text: `${site.address}, 2 этаж, кабинеты 225 и 231. Парковка рядом.` },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="о студии"
        title="Один мастер,"
        accent="7+ лет практики"
        text="«Импульс» — небольшая студия красивого тела в центре Истры. Здесь нет потока и администратора, который продаёт лишнее: только вы, мастер и понятный план процедур."
        image={studio}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card/70 p-6 transition-colors hover:border-gold/40">
                <p.icon className="size-5 text-gold" />
                <h2 className="mt-4 font-display text-2xl">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ReelsFeed />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-10 md:pb-28">
        <BookingWidget />
      </div>
    </div>
  );
}
