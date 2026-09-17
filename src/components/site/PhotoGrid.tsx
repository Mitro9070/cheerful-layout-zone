import type { Photo } from "@/data/photos";
import { Reveal } from "./Reveal";
import { CardCarousel } from "./CardCarousel";

type Props = {
  photos: Photo[];
  eyebrow?: string;
  title?: string;
  accent?: string;
  text?: string;
  columns?: 2 | 3 | 4;
  aspect?: "portrait" | "square";
  carousel?: boolean;
};

export function PhotoGrid({
  photos,
  eyebrow,
  title,
  accent,
  text,
  columns = 3,
  aspect = "portrait",
  carousel = false,
}: Props) {
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      {(eyebrow || title) && (
        <div className="mb-10">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          {title && (
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
                {title} {accent && <span className="italic text-gold">{accent}</span>}
              </h2>
            </Reveal>
          )}
          {text && (
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          )}
        </div>
      )}

      {carousel ? (
        <CardCarousel label={title ?? "Фотографии"} itemClassName="h-auto">
          {photos.map((ph, i) => (
            <Reveal key={ph.src} delay={Math.min(i, 5) * 0.06}>
              <PhotoFigure photo={ph} aspect={aspect} />
            </Reveal>
          ))}
        </CardCarousel>
      ) : (
      <div className={`grid gap-4 ${cols} md:gap-6`}>
        {photos.map((ph, i) => (
          <Reveal key={ph.src} delay={Math.min(i, 5) * 0.06}>
            <PhotoFigure photo={ph} aspect={aspect} />
          </Reveal>
        ))}
      </div>
      )}
    </section>
  );
}

function PhotoFigure({ photo, aspect }: { photo: Photo; aspect: "portrait" | "square" }) {
  return (
    <figure className="group relative overflow-hidden rounded-[1.5rem] bg-secondary/40 shadow-soft">
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className={`photo-tone w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${
          aspect === "square" ? "aspect-square" : "aspect-4/5"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </figure>
  );
}
