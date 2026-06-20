const brands = ["NOVA", "Lumen&Co", "Drift", "Atlas Goods", "Halo", "Vertex", "Pebble"];

export function LogoStrip() {
  return (
    <section className="border-y border-border/60 bg-background py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by 4,200+ Shopify merchants selling on TikTok Shop
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {brands.map((b) => (
            <span key={b} className="font-display text-2xl text-muted-foreground">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
