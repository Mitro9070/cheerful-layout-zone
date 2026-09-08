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
          "Студия «Импульс» в Истре: команда специалистов, опыт более 7 лет, два диодных лазера и оборудование для коррекции фигуры.",
      },
      { property: "og:title", content: "О студии «Импульс», Истра" },
      {
        property: "og:description",
        content: "Команда специалистов, опыт более 7 лет и современное оборудование для ухода за лицом и телом.",
      },
    ],
  }),
  component: AboutPage,
});

const points = [
  { icon: BadgeCheck, title: "Опыт и квалификация", text: "Более 7 лет работы, профильное обучение и регулярное повышение квалификации." },
  { icon: Sparkles, title: "Оборудование", text: "Диодный лазер с сапфировым охлаждением, вакуумный и микротоковый аппараты последнего поколения." },
  { icon: HeartHandshake, title: "Команда специалистов", text: "В студии работают мастера по эпиляции и аппаратному уходу за телом." },
  { icon: MapPin, title: "Удобное расположение", text: "Истра, ул. Ленина, 75, 2 этаж, кабинеты 225 и 231. Парковка рядом." },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="о студии"
        title="Команда,"
        accent="которой доверяют"
        text="«Импульс» объединяет специалистов по эпиляции и уходу за телом. Работаем в Истре более 7 лет и подбираем процедуры с учётом особенностей каждого клиента."
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
