const items = [
  "лазерная эпиляция",
  "шугаринг и воск",
  "аппаратная коррекция фигуры",
  "электроэпиляция",
  "ЛимфаЛик",
  "мужской комплекс",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-secondary/40 py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 font-display text-xl tracking-wide text-muted-foreground md:text-2xl"
          >
            {item}
            <span className="size-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
