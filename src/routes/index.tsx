import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { OffersStrip } from "@/components/site/OffersStrip";
import { Loyalty } from "@/components/site/Loyalty";
import { Advantages } from "@/components/site/Advantages";
import { Services } from "@/components/site/Services";
import { Complexes } from "@/components/site/Complexes";
import { Savings } from "@/components/site/Savings";
import { PricingTeaser } from "@/components/site/PricingTeaser";
import { GalleryTeaser } from "@/components/site/GalleryTeaser";
import { ReelsFeed } from "@/components/site/ReelsFeed";
import { Master } from "@/components/site/Master";
import { QuizTeaser } from "@/components/site/QuizTeaser";
import { Reviews } from "@/components/site/Reviews";
import { Contacts } from "@/components/site/Contacts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Импульс: лазерная эпиляция и уход за телом" },
      {
        name: "description",
        content:
          "Студия красивого тела «Импульс» в Истре: диодная лазерная эпиляция, шугаринг, аппаратная коррекция фигуры. Скидка 50% на первое посещение.",
      },
      { property: "og:title", content: "Импульс: студия красивого тела в Истре" },
      {
        property: "og:description",
        content:
          "Лазерная эпиляция, шугаринг и коррекция фигуры в студии с опытом более 7 лет. Истра, ул. Ленина 75.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Marquee />
      <OffersStrip />
      <Advantages />
      <Services />
      <Complexes />
      <Savings />
      <PricingTeaser />

      <GalleryTeaser />
      <QuizTeaser />
      <ReelsFeed />
      <Master />
      <Reviews />
      <Loyalty />
      <Contacts />
    </div>
  );
}
