import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Instagram, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import laserVideo from "@/assets/reels/showcase-laser-minute.mp4.asset.json";
import laserPoster from "@/assets/reels/showcase-laser-minute-poster.jpg.asset.json";
import sugaringVideo from "@/assets/reels/showcase-sugaring-minute.mp4.asset.json";
import sugaringPoster from "@/assets/reels/showcase-sugaring-minute-poster.jpg.asset.json";
import bodyVideo from "@/assets/reels/showcase-body-minute.mp4.asset.json";
import bodyPoster from "@/assets/reels/showcase-body-minute-poster.jpg.asset.json";
import emsVideo from "@/assets/reels/showcase-ems-minute.mp4.asset.json";
import emsPoster from "@/assets/reels/showcase-ems-minute-poster.jpg.asset.json";
import { Reveal } from "./Reveal";

const reels = [
  { video: laserVideo.url, poster: laserPoster.url, label: "Лазерная эпиляция" },
  { video: sugaringVideo.url, poster: sugaringPoster.url, label: "Шугаринг в студии" },
  { video: bodyVideo.url, poster: bodyPoster.url, label: "Аппаратный уход за телом" },
  { video: emsVideo.url, poster: emsPoster.url, label: "EMS-тренировка" },
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
      className="group relative w-[68%] shrink-0 snap-start overflow-hidden rounded-[1.25rem] md:w-auto"
    >
      <div className="aspect-9/16 overflow-hidden">
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
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
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
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="glass-card inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[10px] tracking-[0.2em] uppercase"
          >
            <Instagram className="size-3.5 text-gold" /> Смотреть все
          </a>
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {reels.map((r, i) => (
            <ReelCard key={r.label} reel={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
