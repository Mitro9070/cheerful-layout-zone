import { Link } from "@tanstack/react-router";
import { Home, Sparkles, Wand2, Tag, MapPin } from "lucide-react";

const tabs = [
  { to: "/", label: "Главная", icon: Home },
  { to: "/laser", label: "Услуги", icon: Sparkles },
  { to: "/quiz", label: "Подбор", icon: Wand2 },
  { to: "/promo", label: "Акции", icon: Tag },
  { to: "/contacts", label: "Контакты", icon: MapPin },
];

export function MobileTabBar() {
  return (
    <nav
      aria-label="Основная навигация"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-card/85 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-5">
        {tabs.map((t) => (
          <li key={t.to} className="min-w-0">
            <Link
              to={t.to}
              activeOptions={{ exact: t.to === "/" }}
              className="flex flex-col items-center gap-1 py-2.5 text-[10px] tracking-[0.08em] text-muted-foreground transition-colors [&.active]:text-gold"
            >
              <t.icon className="size-[18px] shrink-0" />
              <span className="truncate">{t.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
