import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BookingWidget } from "@/components/site/BookingWidget";
import { ClientResultCard } from "@/components/site/ClientResultCard";
import { Reveal } from "@/components/site/Reveal";
import { clientResults } from "@/data/clientResults";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "До и после | Студия «Импульс», Истра" },
      {
        name: "description",
        content:
          "Реальные результаты клиенток студии «Импульс» после программ аппаратной коррекции фигуры.",
      },
      { property: "og:title", content: "До и после: результаты студии «Импульс»" },
      {
        property: "og:description",
        content: "Реальные фотографии клиенток до и после программ коррекции силуэта.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div>
      <PageHero
        eyebrow="до / после"
        title="Результаты"
        accent="наших клиентов"
        text="Реальные результаты программ коррекции силуэта. Фотографии клиенток публикуются с их согласия."
        cta={false}
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientResults.map((result, index) => (
            <Reveal key={result.src} delay={Math.min(index, 5) * 0.06} className="h-full">
              <ClientResultCard result={result} />
            </Reveal>
          ))}
        </div>
        <div className="py-20 md:py-28">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
