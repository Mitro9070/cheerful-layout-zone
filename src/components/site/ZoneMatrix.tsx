import { laserZones } from "@/data/site";
import { Reveal } from "./Reveal";

export function ZoneMatrix() {
  return (
    <div className="rounded-[1.75rem] bg-card p-5 shadow-soft md:p-10">
      <h3 className="font-display text-2xl md:text-3xl">Отдельные зоны</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Зоны сгруппированы по размеру — найдите свою группу и увидите цену на обоих аппаратах.
      </p>

      <div className="mt-7 hidden grid-cols-[auto_1fr_auto_auto] gap-x-8 gap-y-1 md:grid">
        <div className="eyebrow">Группа</div>
        <div className="eyebrow">Зоны</div>
        <div className="eyebrow text-right">Everlas</div>
        <div className="eyebrow text-right">Magic One</div>
        {laserZones.map((z) => (
          <div key={z.group} className="col-span-4 grid grid-cols-subgrid border-t border-border py-4">
            <div className="font-display text-2xl text-gold">{z.group}</div>
            <div className="text-[15px] leading-relaxed">{z.zones}</div>
            <div className="text-right font-display text-xl whitespace-nowrap">{z.everlas}</div>
            <div className="text-right font-display text-xl whitespace-nowrap">{z.magic}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4 md:hidden">
        {laserZones.map((z) => (
          <Reveal key={z.group}>
            <div className="border-t border-border pt-4">
              <div className="font-display text-xl text-gold">{z.group}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{z.zones}</p>
              <div className="mt-3 flex gap-6">
                <div>
                  <div className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Everlas</div>
                  <div className="font-display text-lg">{z.everlas}</div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Magic One</div>
                  <div className="font-display text-lg">{z.magic}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
