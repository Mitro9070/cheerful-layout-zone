import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Sparkles } from "lucide-react";
import { offers } from "@/data/site";

const teasers = offers.map((o) => ({
  name: o.name,
  price: o.price,
  oldPrice: o.oldPrice,
  line: o.gift ?? o.includes,
  badge: o.badge ?? "предложение",
}));

export function OfferPulse() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    let showTimer: ReturnType<typeof setTimeout>;
    const hideTimer = setTimeout(() => {
      setVisible(false);
      showTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % teasers.length);
        setVisible(true);
      }, 2600);
    }, 9000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [index, visible, closed]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const t = teasers[index]!;

  return (
    <AnimatePresence>
      {visible && !closed && (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 24, scale: 0.94, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 16, scale: 0.96, filter: "blur(8px)" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom))] left-4 z-50 w-[19rem] max-w-[calc(100vw-2rem)] lg:bottom-6 lg:left-6"
        >
          <div className="glass-card relative overflow-hidden rounded-[1.5rem] p-5 shadow-lift">
            <motion.span
              aria-hidden
              className="absolute -top-16 -right-10 size-40 rounded-full bg-gold/15 blur-2xl"
              animate={{ opacity: [0.35, 0.8, 0.35], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <button
              onClick={() => setClosed(true)}
              aria-label="Скрыть предложение"
              className="absolute top-3 right-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
            <div className="relative">
              <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-gold uppercase">
                <Sparkles className="size-3.5" />
                {t.badge}
              </span>
              <h3 className="mt-3 font-display text-2xl leading-none">{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-2.5">
                <span className="font-display text-3xl text-gold">{t.price}</span>
                {t.oldPrice && (
                  <span className="font-display text-base text-muted-foreground line-through">
                    {t.oldPrice}
                  </span>
                )}
              </div>
              <p className="mt-2.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                {t.line}
              </p>
              <Link
                to="/contacts"
                hash="booking"
                className="mt-4 block rounded-full bg-primary py-3 text-center text-[10px] tracking-[0.2em] text-primary-foreground uppercase"
              >
                Записаться
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
