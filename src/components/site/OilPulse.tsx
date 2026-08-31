import { useRef, useState } from "react";

/**
 * Капля масла падает на кожу и ровно в момент впитывания
 * из этой же точки расходится «импульс омоложения».
 * Место меняется в начале каждого цикла анимации (onAnimationIteration),
 * поэтому капля и импульс всегда синхронны и появляются в разных зонах кожи.
 */

// Точки — в % от размера hero-секции, только по открытой коже модели.
const SPOTS_DESKTOP = [
  { left: "70%", top: "30%" }, // шея
  { left: "88%", top: "60%" }, // ключица
  { left: "95%", top: "78%" }, // плечо
  { left: "60%", top: "88%" }, // кисть / пальцы
  { left: "78%", top: "46%" }, // изгиб шеи
  { left: "83%", top: "88%" }, // предплечье
];

const SPOTS_MOBILE = [
  { left: "62%", top: "18%" },
  { left: "80%", top: "30%" },
  { left: "52%", top: "40%" },
  { left: "74%", top: "48%" },
];

export function OilPulse({ mobile = false }: { mobile?: boolean }) {
  const spots = mobile ? SPOTS_MOBILE : SPOTS_DESKTOP;
  const [i, setI] = useState(() => Math.floor(Math.random() * spots.length));
  const prev = useRef(i);

  const nextSpot = () => {
    let next = prev.current;
    while (next === prev.current) next = Math.floor(Math.random() * spots.length);
    prev.current = next;
    setI(next);
  };

  const spot = spots[i] ?? spots[0]!;

  return (
    <div
      style={{ left: spot.left, top: spot.top }}
      className={`pointer-events-none absolute ${mobile ? "scale-[0.6] md:hidden" : "hidden md:block"}`}
      aria-hidden
    >
      {/* траектория падения капли */}
      <span className="absolute left-1/2 -top-40 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/35" />

      {/* капля — задаёт ритм всего цикла */}
      <span
        className="oil-drop absolute left-1/2 -translate-x-1/2"
        onAnimationIteration={nextSpot}
      />

      {/* импульс расходится из точки впитывания */}
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:0.35s]" />
      <span className="oil-ripple absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:0.7s]" />

      {/* точка впитывания */}
      <span className="oil-glow absolute left-1/2 top-0 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </div>
  );
}
