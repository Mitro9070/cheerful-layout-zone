import { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Search, ScrollText } from "lucide-react";
import { priceGroups, legalNote, pricingTopNote } from "@/data/site";

const PRICE_EVENT = "impulse:open-prices";

export function openPriceDrawer() {
  window.dispatchEvent(new Event(PRICE_EVENT));
}

export function PriceDrawer() {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState(priceGroups[0]!.id);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(PRICE_EVENT, onOpen);
    return () => window.removeEventListener(PRICE_EVENT, onOpen);
  }, []);

  const searching = query.trim().length > 1;
  const rows = useMemo(() => {
    if (searching) {
      const q = query.trim().toLowerCase();
      return priceGroups.flatMap((g) =>
        g.rows.filter((r) => r.zone.toLowerCase().includes(q)).map((r) => ({ ...r, group: g.label })),
      );
    }
    const current = priceGroups.find((g) => g.id === group) ?? priceGroups[0]!;
    return current.rows.map((r) => ({ ...r, group: current.label }));
  }, [group, query, searching]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Открыть прайс"
        className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-l-full border border-gold/50 border-r-0 bg-card/90 py-4 pr-3 pl-4 text-[10px] tracking-[0.24em] uppercase shadow-lift backdrop-blur-xl transition-colors hover:bg-card lg:flex"
        style={{ writingMode: "vertical-rl" }}
      >
        <ScrollText className="size-3.5 rotate-90 text-gold" />
        Прайс
      </button>

      <button
        onClick={() => setOpen(true)}
        aria-label="Открыть прайс"
        className="fixed right-4 bottom-[calc(11.5rem+env(safe-area-inset-bottom))] z-50 grid size-12 place-items-center rounded-full border border-gold/50 bg-card/90 shadow-lift backdrop-blur-xl lg:hidden"
      >
        <ScrollText className="size-5 text-gold" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-full flex-col gap-0 overflow-hidden p-0 sm:max-w-xl"
        >
          <div className="border-b border-border px-6 pt-6 pb-4">
            <span className="eyebrow">прайс студии</span>
            <h2 className="mt-3 font-display text-3xl">
              Цены <span className="italic text-gold">без звонка</span>
            </h2>
            <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2.5">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Найти зону или услугу"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            {!searching && (
              <div className="-mx-1 mt-3 flex gap-1.5 overflow-x-auto pb-1">
                {priceGroups.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGroup(g.id)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[10px] tracking-[0.16em] whitespace-nowrap uppercase transition-colors ${
                      group === g.id
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-border">
              {rows.map((r, i) => (
                <li key={`${r.zone}-${i}`} className="flex items-baseline justify-between gap-5 py-3.5">
                  <span className="text-[15px]">
                    {r.zone}
                    {(r.note || searching) && (
                      <span className="mt-0.5 block text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                        {searching ? r.group : r.note}
                      </span>
                    )}
                  </span>
                  <span className="font-display text-lg whitespace-nowrap">{r.price}</span>
                </li>
              ))}
              {rows.length === 0 && (
                <li className="py-6 text-sm text-muted-foreground">
                  Ничего не нашли — напишите нам, подскажем цену.
                </li>
              )}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{pricingTopNote}</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{legalNote}</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
