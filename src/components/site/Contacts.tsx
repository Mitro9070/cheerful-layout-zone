import { Clock, MapPin, Phone } from "lucide-react";
import logo from "@/assets/impulse-logo.png.asset.json";
import { Reveal } from "./Reveal";

export function Contacts() {
  return (
    <section id="contacts" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-2">
        <div id="booking">
          <Reveal>
            <span className="eyebrow">Контакты</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl text-balance md:text-6xl">
              Ждём вас <span className="italic text-gold">в Истре</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-7">
            <Reveal delay={0.15}>
              <div className="flex gap-4">
                <MapPin className="mt-1 size-4 shrink-0 text-gold" />
                <div>
                  <div className="eyebrow">адрес</div>
                  <p className="mt-1.5 text-[15px]">
                    г. Истра, ул. Ленина, 75, этаж 2
                    <br />
                    кабинеты 225 и 231
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex gap-4">
                <Phone className="mt-1 size-4 shrink-0 text-gold" />
                <div>
                  <div className="eyebrow">телефон</div>
                  <a href="tel:+79858145090" className="mt-1.5 block font-display text-2xl hover:text-gold">
                    +7 985 814-50-90
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex gap-4">
                <Clock className="mt-1 size-4 shrink-0 text-gold" />
                <div>
                  <div className="eyebrow">часы работы</div>
                  <p className="mt-1.5 text-[15px]">Ежедневно, 09:00 — 21:00</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://wa.me/79858145090"
                className="rounded-full bg-primary px-7 py-3.5 text-[11px] tracking-[0.22em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
              >
                Написать в WhatsApp
              </a>
              <a
                href="https://t.me/EvgeniaAntonova"
                className="rounded-full border border-foreground/15 px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Telegram
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="h-full min-h-[22rem] overflow-hidden rounded-[2rem] shadow-soft">
            <iframe
              title="Студия Импульс на Яндекс Картах"
              src="https://yandex.ru/map-widget/v1/?text=%D0%98%D1%81%D1%82%D1%80%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%2C%2075&z=17"
              loading="lazy"
              className="size-full min-h-[22rem] border-0 grayscale-[35%]"
            />
          </div>
        </Reveal>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-10">
          <img src={logo.url} alt="Студия Импульс" className="h-5 w-auto opacity-70" />
          <p className="text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
            © 2026 Студия красивого тела «Импульс», Истра
          </p>
          <div className="flex gap-6 text-[10px] tracking-[0.24em] uppercase">
            <a href="https://www.instagram.com/impulse_beauty.istra" className="hover:text-gold">
              Instagram
            </a>
            <a href="https://vk.ru/impulse_beauty.istra" className="hover:text-gold">
              ВКонтакте
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
