import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/impulse-logo.png.asset.json";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/laser", label: "Лазер" },
  { to: "/sugaring", label: "Шугаринг" },
  { to: "/electro", label: "Электроэпиляция" },
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
  const bg = useTransform(scrollY, [0, 140], ["rgba(255,255,255,0)", "rgba(255,253,248,0.97)"]);
  const border = useTransform(scrollY, [0, 140], ["rgba(0,0,0,0)", "rgba(0,0,0,0.1)"]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto grid h-24 max-w-[110rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:h-32 md:px-8 2xl:flex 2xl:justify-between 2xl:gap-7">
        <Link to="/" className="flex min-w-0 shrink-0 items-center">
          <img src={logo.url} alt="Студия Импульс" className="h-auto w-[12.5rem] md:w-[16rem] 2xl:w-[17rem]" />
        </Link>

        <nav className="hidden items-center gap-5 2xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-[10px] whitespace-nowrap tracking-[0.12em] uppercase transition-colors hover:text-gold [&.active]:text-gold"
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
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setOpen(true)}
            aria-label="Меню"
            aria-expanded={open}
            className="glass-card size-11 rounded-full 2xl:hidden"
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm 2xl:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="ml-auto flex h-[100svh] w-full max-w-xl flex-col overflow-y-auto border-l border-gold/25 bg-background shadow-lift"
            >
              <div className="grid h-24 shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-5 md:h-32 md:px-10">
                <img src={logo.url} alt="Студия Импульс" className="h-auto w-[12.5rem] md:w-[15rem]" />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Закрыть меню"
                  className="size-11 shrink-0 rounded-full border-gold/30 bg-card"
                >
                  <X className="size-4" />
                </Button>
              </div>

              <div className="px-5 pt-7 md:px-10 md:pt-9">
                <p className="text-[10px] tracking-[0.28em] text-gold uppercase">Меню студии</p>
                <nav className="mt-4 grid grid-cols-2 border-t border-border">
                  {links.map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.035 * i, duration: 0.4 }}
                      className="min-w-0 border-b border-border odd:border-r"
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="group flex min-h-16 items-center justify-between gap-2 px-3 py-3 font-display text-xl leading-none transition-colors hover:bg-secondary/60 hover:text-gold [&.active]:text-gold md:min-h-20 md:px-5 md:text-2xl"
                      >
                        <span>{l.label}</span>
                        <ArrowUpRight className="size-3.5 shrink-0 text-gold opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mt-auto grid gap-3 px-5 py-6 md:grid-cols-2 md:px-10 md:py-8">
                <Button asChild className="h-12 rounded-full text-[10px] tracking-[0.18em] uppercase">
                  <Link to="/contacts" hash="booking" onClick={() => setOpen(false)}>
                    Записаться
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-gold/35 bg-card text-[10px] tracking-[0.16em] uppercase">
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    <Instagram className="size-4 text-gold" />
                    Instagram
                  </a>
                </Button>
                <a href={site.phoneHref} className="text-center text-sm md:col-span-2">
                  {site.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
