import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <span className="eyebrow">Вопросы</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">
          Частые <span className="italic text-gold">вопросы</span>
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-border">
        {items.map((it, i) => (
          <div key={it.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left"
              aria-expanded={open === i}
            >
              <span className="min-w-0 text-[15px]">{it.q}</span>
              <Plus
                className={`size-4 shrink-0 text-gold transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
