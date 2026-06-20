const quotes = [
  {
    q: "We had 600 products rejected from TikTok Shop. AstroSync fixed 94% of them in a single afternoon. Sales went live the next morning.",
    a: "Priya Shah",
    r: "Founder, Lumen&Co",
  },
  {
    q: "It's the only tool that actually understands TikTok Shop's category requirements. Saved our ops team weeks of manual editing.",
    a: "Marcus Lee",
    r: "Head of Ecom, Atlas Goods",
  },
  {
    q: "Install, scan, approve. That was the entire onboarding. Two days later we were live on TikTok Shop with our full catalog.",
    a: "Jules Martin",
    r: "Director, Drift Apparel",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          Merchants ship to TikTok Shop <span className="font-display italic">faster</span>.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((t) => (
            <figure
              key={t.a}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <blockquote className="text-base leading-relaxed text-foreground">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.a}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
