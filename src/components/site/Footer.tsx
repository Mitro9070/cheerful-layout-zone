import { Link } from "@tanstack/react-router";
import logo from "@/assets/impulse-logo.png.asset.json";
import { site } from "@/data/site";

const nav = [
  { to: "/laser", label: "Лазерная эпиляция" },
  { to: "/sugaring", label: "Шугаринг и электроэпиляция" },
  { to: "/body", label: "Коррекция фигуры" },
  { to: "/men", label: "Для мужчин" },
  { to: "/gallery", label: "До / После" },
  { to: "/promo", label: "Акции" },
  { to: "/reviews", label: "Отзывы" },
  { to: "/about", label: "О студии" },
  { to: "/quiz", label: "Подобрать программу" },
  { to: "/contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-10 md:py-20">
        <div>
          <img src={logo.url} alt="Студия Импульс" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Студия красивого тела «Импульс» — лазерная эпиляция, шугаринг и аппаратная коррекция фигуры в Истре.
          </p>
        </div>
        <nav className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
          {nav.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground transition-colors hover:text-gold">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-2.5 text-sm text-muted-foreground">
          <p>{site.address}</p>
          <p>{site.hours}</p>
          <a href={site.phoneHref} className="block hover:text-gold">
            {site.phone}
          </a>
          <div className="flex gap-4 pt-2 text-[11px] tracking-[0.18em] uppercase">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
              Instagram
            </a>
            <a href={site.vk} target="_blank" rel="noreferrer" className="hover:text-gold">
              VK
            </a>
            <a href={site.yandexMaps} target="_blank" rel="noreferrer" className="hover:text-gold">
              Карты
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-10 text-[11px] text-muted-foreground md:px-10">
        © {new Date().getFullYear()} Студия «Импульс», Истра
      </div>
    </footer>
  );
}
