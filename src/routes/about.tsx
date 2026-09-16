import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ReelsFeed } from "@/components/site/ReelsFeed";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О студии «Импульс» в Истре: команда и оборудование" },
      {
        name: "description",
        content:
          "Студия «Импульс» в Истре: команда специалистов с опытом 10 лет, два диодных лазера и оборудование для коррекции фигуры.",
      },
      { property: "og:title", content: "О студии «Импульс», Истра" },
      {
        property: "og:description",
        content: "Команда специалистов с опытом 10 лет и современное оборудование для ухода за лицом и телом.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const points = [
  { icon: BadgeCheck, title: "10 лет опыта", text: "Профильное обучение специалистов и регулярное повышение квалификации." },
  { icon: Sparkles, title: "Два уровня лазерной эпиляции", text: "Классический Everlas 1800 Вт и более мощный Magic One 4000 Вт с сапфировым охлаждением." },
  { icon: HeartHandshake, title: "Команда специалистов", text: "В студии работают мастера по эпиляции и аппаратному уходу за телом." },
  { icon: MapPin, title: "Удобное расположение", text: "Истра, ул. Ленина, 75, 2 этаж, кабинет 231. Парковка рядом." },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="о студии"
        title="Команда,"
        accent="которой доверяют"
        text="«Импульс» объединяет команду специалистов по эпиляции и уходу за телом. За 10 лет практики мы выстроили точные протоколы и сохранили внимательный подход к каждому клиенту."
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
