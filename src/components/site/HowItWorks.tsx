import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Install on Shopify",
    body: "One-click install from the Shopify App Store. AstroSync connects to your catalog in under 30 seconds.",
  },
  {
    n: "02",
    title: "AI scans every product",
    body: "Our model reviews titles, descriptions, images, categories and attributes against TikTok Shop's eligibility rules.",
  },
  {
    n: "03",
    title: "Review & auto-fix",
    body: "Approve fixes individually, or let AstroSync apply them automatically. Push the cleaned catalog straight to TikTok Shop.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="absolute -left-20 top-20 size-80 rounded-full bg-accent blur-3xl" />
        <div className="absolute right-0 bottom-0 size-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            How it works
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            From install to <span className="font-display italic">approved</span> in minutes.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="font-display text-5xl text-accent">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
