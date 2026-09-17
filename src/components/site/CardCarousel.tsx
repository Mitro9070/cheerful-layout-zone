import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  itemClassName?: string;
  label: string;
};

export function CardCarousel({ children, itemClassName, label }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const items = Children.toArray(children);

  const step = () => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return 0;
    return card.offsetWidth + 20;
  };

  const move = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * step(), behavior: "smooth" });
  };

  const updateState = () => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 24);
    setAtEnd(track.scrollLeft >= maxScroll - 24);
    setActive(
      Math.min(items.length - 1, Math.max(0, Math.round(track.scrollLeft / (card.offsetWidth + 20)))),
    );
  };

  useEffect(() => {
    updateState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const arrowClass =
    "absolute top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-gold/45 bg-card/95 text-foreground shadow-lift transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-0";

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={updateState}
        aria-label={label}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={cn("w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-2.5rem)/3)]", itemClassName)}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Назад"
        disabled={atStart}
        className={cn(arrowClass, "left-1 md:-left-5")}
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Вперёд"
        disabled={atEnd}
        className={cn(arrowClass, "right-1 md:-right-5")}
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
        {items.map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === active ? "w-7 bg-gold" : "w-1.5 bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}
