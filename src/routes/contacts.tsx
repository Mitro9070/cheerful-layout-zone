import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { BookingWidget } from "@/components/site/BookingWidget";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты студии «Импульс» в Истре" },
      {
        name: "description",
        content:
          "Студия «Импульс»: г. Истра, ул. Ленина 75. Часы работы, телефон, WhatsApp и Telegram, карта проезда и онлайн-запись.",
      },
      { property: "og:title", content: "Контакты студии «Импульс», Истра" },
      {
        property: "og:description",
        content: "Адрес, карта проезда, часы работы и все каналы связи со студией красивого тела «Импульс».",
      },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <div className="pt-28 md:pt-40">
      <section className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <span className="eyebrow">контакты</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 font-display text-4xl text-balance md:text-6xl">
            Ждём вас <span className="italic text-gold">в Истре</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-7">
            <Reveal delay={0.1}>
              <div className="flex gap-4">
                <MapPin className="mt-1 size-4 shrink-0 text-gold" />
                <div className="min-w-0">
                  <div className="eyebrow">адрес</div>
                  <p className="mt-1.5 text-[15px]">{site.address}</p>
                  <a
                    href={site.yandexMaps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[11px] tracking-[0.18em] text-gold uppercase"
                  >
                    построить маршрут
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex gap-4">
                <Clock className="mt-1 size-4 shrink-0 text-gold" />
                <div>
                  <div className="eyebrow">часы работы</div>
                  <p className="mt-1.5 text-[15px]">{site.hours}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex gap-4">
                <Phone className="mt-1 size-4 shrink-0 text-gold" />
                <div>
                  <div className="eyebrow">связь</div>
                  <a href={site.phoneHref} className="mt-1.5 block text-[15px] hover:text-gold">
                    {site.phone}
                  </a>
                  <div className="mt-3 flex flex-wrap gap-3 text-[11px] tracking-[0.18em] uppercase">
                    <a href={site.whatsapp} target="_blank" rel="noreferrer" className="glass-card rounded-full px-5 py-2.5">
                      WhatsApp
                    </a>
                    <a href={site.telegram} target="_blank" rel="noreferrer" className="glass-card rounded-full px-5 py-2.5">
                      Telegram
                    </a>
                    <a href={site.vk} target="_blank" rel="noreferrer" className="glass-card rounded-full px-5 py-2.5">
                      VK
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
              <iframe
                title="Студия «Импульс» на карте Истры"
                src="https://yandex.ru/map-widget/v1/?text=Истра%20улица%20Ленина%2075&z=16"
                loading="lazy"
                className="h-[360px] w-full border-0 md:h-[440px]"
              />
            </div>
          </Reveal>
        </div>

        <div className="py-20 md:py-28">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
