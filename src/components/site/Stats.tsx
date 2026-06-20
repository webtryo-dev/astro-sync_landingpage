const stats = [
  { k: "4,200+", v: "Shopify stores" },
  { k: "1.8M", v: "Products auto-fixed" },
  { k: "94%", v: "Approval rate" },
  { k: "12 min", v: "Avg. time saved per product" },
];

export function Stats() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="text-center">
            <div className="font-display text-5xl text-foreground md:text-6xl">{s.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
