import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/month",
    desc: "For new stores testing TikTok Shop.",
    features: ["Up to 50 products", "AI compliance scan", "Manual fix approvals", "Email support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$49",
    cadence: "/month",
    desc: "For stores actively selling on TikTok Shop.",
    features: [
      "Up to 2,000 products",
      "Auto-fix titles, images, attributes",
      "Continuous sync",
      "Category mapping",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Scale",
    price: "$149",
    cadence: "/month",
    desc: "For high-volume catalogs and agencies.",
    features: [
      "Unlimited products",
      "Bulk auto-fix",
      "Multi-store management",
      "API access",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Simple plans that <span className="font-display italic">scale</span> with you.
          </h2>
          <p className="mt-4 text-muted-foreground">14-day free trial on all paid plans. No credit card required.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                t.featured
                  ? "relative rounded-3xl border-2 border-primary bg-primary p-8 text-primary-foreground shadow-glow"
                  : "rounded-3xl border border-border bg-card p-8 shadow-soft"
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className={t.featured ? "mt-1 text-sm text-white/70" : "mt-1 text-sm text-muted-foreground"}>
                {t.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl">{t.price}</span>
                <span className={t.featured ? "text-sm text-white/70" : "text-sm text-muted-foreground"}>
                  {t.cadence}
                </span>
              </div>
              <a
                href="#install"
                className={
                  t.featured
                    ? "mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.01]"
                    : "mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
                }
              >
                {t.cta}
              </a>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={t.featured ? "mt-0.5 size-4 shrink-0 text-accent" : "mt-0.5 size-4 shrink-0 text-success"} />
                    <span className={t.featured ? "text-white/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
