import { motion } from "motion/react";
import type { PriceRow } from "@/data/site";

export function PriceTable({ rows, title }: { rows: PriceRow[]; title?: string }) {
  return (
    <div className="rounded-[1.5rem] bg-card p-5 shadow-soft md:rounded-[1.75rem] md:p-10">
      {title && <h3 className="mb-5 font-display text-2xl md:text-3xl">{title}</h3>}
      <ul className="divide-y divide-border">
        {rows.map((r, i) => (
          <motion.li
            key={r.zone}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: Math.min(i * 0.03, 0.3) }}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3.5 md:flex md:justify-between md:gap-6"
          >
            <span className="min-w-0 text-[14px] md:text-[15px]">
              {r.zone}
              {r.note && (
                <span className="mt-0.5 block text-[10px] tracking-[0.16em] text-gold uppercase">{r.note}</span>
              )}
            </span>
            <span className="hairline hidden flex-1 md:block" />
            <span className="font-display text-lg whitespace-nowrap md:text-xl">{r.price}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
