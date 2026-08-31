import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import { site, priceGroups } from "@/data/site";
import { Reveal } from "./Reveal";

export function BookingWidget({ promo, defaultService }: { promo?: string; defaultService?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService ?? priceGroups[0]!.label);
  const [when, setWhen] = useState("В ближайшие 3 дня");

  const message = encodeURIComponent(
    `Здравствуйте! Хочу записаться в студию «Импульс».\nИмя: ${name || "—"}\nТелефон: ${phone || "—"}\nУслуга: ${service}\nКогда: ${when}${promo ? `\nПромокод: ${promo}` : ""}`,
  );

  return (
    <section id="booking" className="scroll-mt-28">
      <Reveal>
        <div className="rounded-[1.75rem] bg-card p-6 shadow-soft md:p-10">
          <div className="flex items-center gap-3">
            <CalendarCheck className="size-4 text-gold" />
            <span className="eyebrow">онлайн-запись</span>
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Запись <span className="italic text-gold">в 1 минуту</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Оставьте заявку — мастер подтвердит время в мессенджере. Или напишите напрямую, если удобнее.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="eyebrow">имя</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className="mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="eyebrow">телефон</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="+7 ___ ___-__-__"
                className="mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="eyebrow">услуга</span>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-gold"
              >
                {priceGroups.map((g) => (
                  <option key={g.id} value={g.label}>
                    {g.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="eyebrow">когда удобно</span>
              <select
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                className="mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-gold"
              >
                <option>В ближайшие 3 дня</option>
                <option>На этой неделе</option>
                <option>Просто присматриваюсь</option>
              </select>
            </label>
          </div>

          {promo && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-secondary/60 px-4 py-2 text-[11px] tracking-[0.18em] uppercase">
              промокод <span className="text-gold">{promo}</span> применён
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${site.whatsapp}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-[11px] tracking-[0.22em] text-primary-foreground uppercase"
            >
              <span className="relative z-10">Записаться в WhatsApp</span>
              <span className="absolute inset-0 shimmer-gold opacity-40" />
            </a>
            <a
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-full px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase"
            >
              Telegram
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-input px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase"
            >
              Позвонить
            </a>
          </div>
          <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
            Место под виджет онлайн-записи (Dikidi / YClients / Altegio) — подключается после выбора системы
            студией, промокод и UTM передаются в заявку автоматически.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
