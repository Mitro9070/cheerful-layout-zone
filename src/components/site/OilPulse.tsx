import { useEffect, useState } from "react";

/**
 * Капля масла падает на кожу и ровно в момент впитывания
 * из этой же точки расходится «импульс омоложения».
 * Каждый цикл капля появляется в новом месте — только по открытой коже
 * (кисть, предплечье, шея, зона декольте).
 */

// Точки заданы в % от размера hero-секции — все на коже модели.
const SPOTS_DESKTOP = [
  { left: "68%", top: "52%" }, // кисть
  { left: "74%", top: "34%" }, // шея
  { left: "63%", top: "62%" }, // предплечье
  { left: "80%", top: "48%" }, // плечо / декольте
  { left: "71%", top: "68%" }, // тыльная сторона руки
];

const SPOTS_MOBILE = [
  { left: "62%", top: "26%" },
  { left: "70%", top: "36%" },
  { left: "56%", top: "44%" },
  { left: "74%", top: "20%" },
];

const CYCLE = 5500;

export function OilPulse({ mobile = false }: { mobile?: boolean }) {
  const spots = mobile ? SPOTS_MOBILE : SPOTS_DESKTOP;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => {
        let next = prev;
        while (next === prev) next = Math.floor(Math.random() * spots.length);
        return next;
      });
    }, CYCLE);
    return () => clearInterval(id);
  }, [spots.length]);

  const spot = spots[i] ?? spots[0]!;

  return (
    <div
      key={`${spot.left}-${spot.top}`}
      style={{ left: spot.left, top: spot.top }}
      className={`pointer-events-none absolute ${mobile ? "scale-[0.6] md:hidden" : "hidden md:block"}`}
      aria-hidden
    >
      {/* траектория падения капли */}
      <span className="absolute left-1/2 -top-40 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/35" />

      {/* капля */}
      <span className="oil-drop absolute left-1/2 -translate-x-1/2" />

      {/* импульс расходится из точки впитывания */}
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:0.35s]" />
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:0.7s]" />

      {/* точка впитывания */}
      <span className="oil-glow absolute left-1/2 top-0 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </div>
  );
}
