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
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { LaserVideo } from "@/components/site/LaserVideo";
import { teamMemberPhotos, equipmentPhotos } from "@/data/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Импульс: лазерная эпиляция и уход за телом" },
      {
        name: "description",
        content:
          "Студия красивого тела «Импульс» в Истре: лазерная и электроэпиляция, шугаринг, аппаратная коррекция фигуры. Новым клиентам 50% на лазер и 10% на шугаринг.",
      },
      { property: "og:title", content: "Импульс: студия красивого тела в Истре" },
      {
        property: "og:description",
        content:
          "Лазерная и электроэпиляция, шугаринг и коррекция фигуры в студии с опытом 10 лет. Истра, ул. Ленина 75.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <PhotoGrid
        eyebrow="наши специалисты"
        title="Люди, которые"
        accent="работают с вами"
        text="Мастера студии «Импульс» в Истре: лазерная эпиляция на двух аппаратах, шугаринг и аппаратный уход за телом."
        photos={teamMemberPhotos}
        columns={3}
        carousel
      />
      <div className="bg-secondary/35">
        <PhotoGrid
          eyebrow="оборудование"
          title="Аппараты"
          accent="студии"
          text="Классический диодный лазер Everlas и более мощный Magic One с сапфировым охлаждением, а также аппараты для коррекции фигуры."
          photos={equipmentPhotos.slice(0, 3)}
          carousel
        />
      </div>
      <LaserVideo />
      <Reviews />
      <Loyalty />
      <Contacts />
    </div>
  );
}
