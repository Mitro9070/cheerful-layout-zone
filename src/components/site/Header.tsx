import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/impulse-logo.png.asset.json";
import { site } from "@/data/site";

const links = [
  { to: "/laser", label: "Лазер" },
  { to: "/sugaring", label: "Шугаринг" },
  { to: "/body", label: "Фигура" },
  { to: "/men", label: "Мужчинам" },
  { to: "/gallery", label: "До / После" },
  { to: "/promo", label: "Акции" },
  { to: "/reviews", label: "Отзывы" },
  { to: "/about", label: "Студия" },
  { to: "/contacts", label: "Контакты" },
];


export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 140], ["rgba(255,255,255,0)", "rgba(255,253,248,0.9)"]);
  const border = useTransform(scrollY, [0, 140], ["rgba(0,0,0,0)", "rgba(0,0,0,0.07)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto grid h-24 max-w-[110rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:h-32 md:px-8 xl:flex xl:justify-between xl:gap-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <img src={logo.url} alt="Студия Импульс" className="h-14 w-auto md:h-20" />
          <span className="hidden max-w-[9rem] text-[9px] leading-relaxed tracking-[0.28em] text-muted-foreground uppercase lg:block">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-[10px] whitespace-nowrap tracking-[0.14em] uppercase transition-colors hover:text-gold [&.active]:text-gold 2xl:text-[11px] 2xl:tracking-[0.18em]"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[13px] whitespace-nowrap tracking-wide transition-colors hover:text-gold lg:flex"
          >
            <Phone className="size-3.5 text-gold" />
            {site.phone}
          </a>
          <Link
            to="/contacts"
            hash="booking"
            className="relative hidden overflow-hidden rounded-full bg-primary px-5 py-2.5 text-[10px] whitespace-nowrap tracking-[0.18em] text-primary-foreground uppercase sm:inline-flex"
          >
            <span className="relative z-10">Записаться</span>
            <span className="absolute inset-0 shimmer-gold opacity-40" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Меню"
            className="glass-card grid size-10 place-items-center rounded-full xl:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex h-24 items-center justify-between px-5 md:h-32 md:px-10">
              <img src={logo.url} alt="Студия Импульс" className="h-14 w-auto" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Закрыть меню"
                className="glass-card grid size-10 place-items-center rounded-full"
              >
                <X className="size-4" />
              </button>
            </div>
            <nav className="mt-4 grid gap-1 px-5 md:px-10">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/70 py-4 font-display text-2xl [&.active]:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-wrap gap-3 px-5 md:px-10">
              <Link
                to="/quiz"
                onClick={() => setOpen(false)}
                className="glass-card rounded-full px-6 py-3 text-[11px] tracking-[0.2em] uppercase"
              >
                Подобрать программу
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-full bg-primary px-6 py-3 text-[11px] tracking-[0.2em] text-primary-foreground uppercase"
              >
                {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
