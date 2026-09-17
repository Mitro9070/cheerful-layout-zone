import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import laserVideo from "@/assets/reels/showcase-vitrine-laser-back.mp4.asset.json";
import laserPoster from "@/assets/reels/showcase-vitrine-laser-back-poster.jpg.asset.json";
import magicVideo from "@/assets/reels/showcase-vitrine-magic-back.mp4.asset.json";
import magicPoster from "@/assets/reels/showcase-vitrine-magic-back-poster.jpg.asset.json";
import bodySetupVideo from "@/assets/reels/showcase-vitrine-body-setup.mp4.asset.json";
import bodySetupPoster from "@/assets/reels/showcase-vitrine-body-setup-poster.jpg.asset.json";
import emsVideo from "@/assets/reels/showcase-vitrine-ems.mp4.asset.json";
import emsPoster from "@/assets/reels/showcase-vitrine-ems-poster.jpg.asset.json";
import bodyLegsVideo from "@/assets/reels/showcase-vitrine-body-legs.mp4.asset.json";
import bodyLegsPoster from "@/assets/reels/showcase-vitrine-body-legs-poster.jpg.asset.json";
import underarmsVideo from "@/assets/reels/showcase-vitrine-underarms.mp4.asset.json";
import underarmsPoster from "@/assets/reels/showcase-vitrine-underarms-poster.jpg.asset.json";
import { Reveal } from "./Reveal";

const reels = [
  { video: laserVideo.url, poster: laserPoster.url, label: "Лазерная эпиляция Magic One" },
  { video: magicVideo.url, poster: magicPoster.url, label: "Аппаратный уход по телу" },
  { video: bodySetupVideo.url, poster: bodySetupPoster.url, label: "Настройка процедуры" },
  { video: emsVideo.url, poster: emsPoster.url, label: "EMS-тренировка" },
  { video: bodyLegsVideo.url, poster: bodyLegsPoster.url, label: "Коррекция фигуры" },
  { video: underarmsVideo.url, poster: underarmsPoster.url, label: "Лазерная эпиляция подмышек" },
];

const mosaicClasses = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3 lg:row-span-2",
];

function ReelCard({ reel, index }: { reel: (typeof reels)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-[1.25rem] shadow-soft ${mosaicClasses[index] ?? ""}`}
    >
      <div className="aspect-9/16 overflow-hidden lg:size-full lg:aspect-auto">
        <video
          ref={videoRef}
          src={reel.video}
          poster={reel.poster}
          aria-label={reel.label}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/65 to-transparent" />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={togglePlayback}
        aria-label={isPlaying ? `Поставить на паузу: ${reel.label}` : `Воспроизвести: ${reel.label}`}
        className="absolute top-4 left-4 z-10 rounded-full bg-background/85 text-foreground hover:bg-background"
      >
        {isPlaying ? <Pause /> : <Play />}
      </Button>
      <span className="pointer-events-none absolute inset-x-4 bottom-4 text-sm text-background">
        {reel.label}
      </span>
    </motion.article>
  );
}

export function ReelsFeed() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-3xl">
          <div className="min-w-0">
            <Reveal>
              <span className="eyebrow">видео</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
                Живая витрина <span className="italic text-gold">студии</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6 lg:auto-rows-[13.5rem] lg:gap-5 xl:auto-rows-[14.5rem]">
          {reels.map((r, i) => (
            <ReelCard key={r.label} reel={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
