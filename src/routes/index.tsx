import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Master } from "@/components/site/Master";
import { QuizTeaser } from "@/components/site/QuizTeaser";
import { Reviews } from "@/components/site/Reviews";
import { Contacts } from "@/components/site/Contacts";
import { StickyActions } from "@/components/site/StickyActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Импульс — лазерная эпиляция и шугаринг в Истре" },
      {
        name: "description",
        content:
          "Студия красивого тела «Импульс» в Истре: диодная лазерная эпиляция, шугаринг, аппаратная коррекция фигуры. Скидка 50% на первое посещение.",
      },
      { property: "og:title", content: "Импульс — студия красивого тела в Истре" },
      {
        property: "og:description",
        content:
          "Лазерная эпиляция, шугаринг и коррекция фигуры у мастера с опытом более 7 лет. Истра, ул. Ленина 75.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Pricing />
        <Master />
        <QuizTeaser />
        <Reviews />
        <Contacts />
      </main>
      <StickyActions />
    </div>
  );
}
