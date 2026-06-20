import { motion } from "framer-motion";
import { ScanLine, Wand2, ShieldCheck, Image as ImageIcon, Tag, RefreshCw } from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "AI catalog scan",
    body: "We crawl every product in your Shopify store and check it against the latest TikTok Shop policies in seconds.",
  },
  {
    icon: Wand2,
    title: "One-click auto-fix",
    body: "Rewrite titles, regenerate descriptions, normalize variants and attributes — approved by you or fully automatic.",
  },
  {
    icon: ImageIcon,
    title: "Image compliance",
    body: "Detect watermarks, low-res, and white-background violations. AstroSync regenerates compliant product images.",
  },
  {
    icon: Tag,
    title: "Smart categorization",
    body: "Map your Shopify products to the correct TikTok Shop categories and required attributes — every time.",
  },
  {
    icon: ShieldCheck,
    title: "Restricted product check",
    body: "Flag prohibited or restricted items before TikTok does. Avoid suspensions and listing rejections.",
  },
  {
    icon: RefreshCw,
    title: "Continuous sync",
    body: "New product added in Shopify? AstroSync scans, fixes and pushes it to TikTok Shop within minutes.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Features
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything you need to stay <span className="font-display italic">eligible</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stop manually editing products to please TikTok Shop's reviewers. AstroSync handles
            the entire compliance loop in the background.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-card p-8 transition-colors hover:bg-secondary/40"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110 group-hover:rotate-3">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
