import { Children, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  itemClassName?: string;
  label: string;
};

export function CardCarousel({ children, itemClassName, label }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 20), behavior: "smooth" });
  };

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    setActive(Math.min(items.length - 1, Math.max(0, Math.round(track.scrollLeft / (card.offsetWidth + 20)))));
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={updateActive}
        aria-label={label}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={cn("w-[86%] shrink-0 snap-start sm:w-[48%] lg:w-[calc((100%-2.5rem)/3)]", itemClassName)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 gap-1.5" aria-hidden="true">
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
        <div className="hidden gap-2 md:flex">
          <Button type="button" variant="outline" size="icon" onClick={() => move(-1)} aria-label="Назад" className="rounded-full">
            <ChevronLeft />
          </Button>
          <Button type="button" variant="outline" size="icon" onClick={() => move(1)} aria-label="Вперёд" className="rounded-full">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}