import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { PriceTable } from "@/components/site/PriceTable";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { electroNote, electroRows, legalNote } from "@/data/site";
import { electroPhotos } from "@/data/photos";
import electroHero from "@/assets/photo/electro/electro-master.jpg";
import processVideo from "@/assets/reels/reel-7559-720.mp4";
import processPoster from "@/assets/reels/reel-7559-poster.jpg";
import prepVideo from "@/assets/reels/reel-7558-720.mp4";
import prepPoster from "@/assets/reels/reel-7558-poster.jpg";

export const Route = createFileRoute("/electro")({
  head: () => ({
    meta: [
      { title: "Электроэпиляция в Истре: цены | «Импульс»" },
      {
        name: "description",
        content: "Электроэпиляция в студии «Импульс» в Истре: пакеты на 30 и 60 минут, лицо, бикини, тело и добивка после курса лазера. Одноразовая игла включена.",
      },
      { property: "og:title", content: "Электроэпиляция в Истре | «Импульс»" },
      { property: "og:description", content: "Точечная работа со светлыми, седыми и отдельными волосами. Пакеты от 1 200 ₽ и открытые цены." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ElectroPage,
});

const features = [
  { title: "Для отдельных волос", text: "Мастер обрабатывает каждый волос отдельно. Метод подходит для небольших зон и точечной работы." },
  { title: "Для светлых и седых волос", text: "Электроэпиляцию можно выбрать для волос, на которые не действует диодный лазер." },
  { title: "Оплата по времени", text: "Пакеты рассчитаны на 30 или 60 минут. Одноразовая игла уже включена в стоимость." },
];

function ElectroPage() {
  return (
    <div>
      <PageHero
        eyebrow="электроэпиляция"
        title="Точечная работа"
        accent="с каждым волосом"
        text="Электроэпиляция подходит для небольших зон, светлых, седых и оставшихся после курса лазера волос. Мастер подберёт длительность сеанса после консультации."
        image={electroHero}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-display text-2xl">{feature.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PhotoGrid
        eyebrow="реальные материалы студии"
        title="Как проходит"
        accent="процедура"
        text="Подготовка одноразовой иглы, точечная обработка волос и аккуратная работа мастера."
        photos={electroPhotos}
        columns={3}
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-10 md:pb-28">
        <Reveal><span className="eyebrow">видео процесса</span></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Электроэпиляция <span className="italic text-gold">в студии</span></h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
            { src: prepVideo, poster: prepPoster, label: "Подготовка к электроэпиляции" },
            { src: processVideo, poster: processPoster, label: "Процесс электроэпиляции" },
          ].map((video) => (
            <video key={video.label} src={video.src} poster={video.poster} aria-label={video.label} controls muted playsInline preload="metadata" className="aspect-9/16 max-h-[42rem] w-full rounded-[1.5rem] bg-secondary object-cover shadow-soft" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-10 md:pb-28">
        <PriceTable rows={electroRows} title="Пакеты электроэпиляции" />
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">{electroNote}</p>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">{legalNote}</p>
        <div className="pt-20 md:pt-28"><BookingWidget defaultService="Электроэпиляция" /></div>
      </section>
    </div>
  );
}