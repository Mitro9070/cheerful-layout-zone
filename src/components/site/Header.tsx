import { motion, useScroll, useTransform } from "motion/react";
import { Phone } from "lucide-react";
import logo from "@/assets/impulse-logo.png.asset.json";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Цены" },
  { href: "#master", label: "О студии" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 140], ["rgba(255,255,255,0)", "rgba(255,253,248,0.86)"]);
  const border = useTransform(scrollY, [0, 140], ["rgba(0,0,0,0)", "rgba(0,0,0,0.07)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-5 md:h-28 md:px-10">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <img src={logo.url} alt="Студия Импульс" className="h-10 w-auto md:h-14" />
          <span className="hidden text-[9px] tracking-[0.34em] text-muted-foreground uppercase sm:block">
            студия красивого тела
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[11px] tracking-[0.22em] uppercase transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+79858145090"
            className="hidden items-center gap-2 text-sm tracking-wide md:flex hover:text-gold transition-colors"
          >
            <Phone className="size-3.5 text-gold" />
            +7 985 814-50-90
          </a>
          <a
            href="#booking"
            className="relative overflow-hidden rounded-full bg-primary px-5 py-2.5 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Записаться</span>
            <span className="absolute inset-0 shimmer-gold opacity-40" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
