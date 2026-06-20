import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$19.99",
    cadence: "/month",
    yearly: "or $199/year",
    desc: "For new stores testing TikTok Shop.",
    features: [
      "50 AI Fix Credits per month",
      "Basic taxonomy mapping",
      "Email support",
    ],
    cta: "Get Starter",
    featured: false,
  },
  {
    name: "Growth",
    price: "$49.99",
    cadence: "/month",
    yearly: "or $499/year",
    desc: "For stores actively selling on TikTok Shop.",
    features: [
      "250 AI Fix Credits per month",
      "Standard sync speed",
      "Advanced checklists",
      "Priority email support",
    ],
    cta: "Get Growth",
    featured: false,
  },
  {
    name: "Pro",
    price: "$149.99",
    cadence: "/month",
    yearly: "or $1,499/year",
    desc: "Best value for scaling brands.",
    features: [
      "1,000 AI Fix Credits per month",
      "Priority sync speed",
      "Custom prompting rules",
      "Dedicated chat support",
    ],
    cta: "Get Pro",
    featured: true,
    badge: "Best value",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    yearly: "Volume pricing",
    desc: "Unlimited access for large teams.",
    features: [
      "Unlimited AI Fix Credits",
      "Multi-store management",
      "Dedicated account manager",
      "Custom API access",
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
          <p className="mt-4 text-muted-foreground">
            Pick the plan that matches your catalog size. Switch or cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={
                t.featured
                  ? "relative rounded-3xl border-2 border-primary bg-primary p-8 text-primary-foreground shadow-glow"
                  : "relative rounded-3xl border border-border bg-card p-8 shadow-soft"
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {t.badge}
                </div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className={t.featured ? "mt-1 text-sm text-white/70" : "mt-1 text-sm text-muted-foreground"}>
                {t.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">{t.price}</span>
                <span className={t.featured ? "text-sm text-white/70" : "text-sm text-muted-foreground"}>
                  {t.cadence}
                </span>
              </div>
              <p className={t.featured ? "mt-1 text-xs text-white/60" : "mt-1 text-xs text-muted-foreground"}>
                {t.yearly}
              </p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
