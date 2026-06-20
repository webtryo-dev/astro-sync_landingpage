import { motion } from "framer-motion";
import hero from "@/assets/dashboard-hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky-hero pb-24 pt-16 md:pb-32">
      {/* Decorative drifting clouds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          className="absolute left-[8%] top-[18%] h-32 w-64 rounded-full bg-white cloud-blur"
          animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[6%] top-[28%] h-40 w-72 rounded-full bg-white cloud-blur"
          animate={{ x: [0, -40, 0], y: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[20%] top-[55%] h-24 w-48 rounded-full bg-white cloud-blur opacity-50"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[18%] bottom-[20%] h-28 w-56 rounded-full bg-[oklch(0.95_0.05_60)] cloud-blur opacity-60"
          animate={{ x: [0, -30, 0], y: [0, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-success" />
          New · TikTok Shop AI compliance for Shopify
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl"
        >
          Get every product{" "}
          <span className="font-display italic text-gradient">TikTok&nbsp;Shop ready</span> —
          automatically.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          AstroSync installs on your Shopify store, scans your catalog with AI, and fixes the
          listing issues blocking products from TikTok Shop — titles, images, categories,
          attributes and policy flags.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Install on Shopify
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
          >
            See how it works
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-4 text-xs text-muted-foreground"
        >
          Plans from $19.99/mo · Cancel anytime
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute inset-x-10 top-10 -z-10 h-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-glow">
            <img
              src={hero}
              alt="AstroSync dashboard scanning Shopify products for TikTok Shop eligibility"
              width={1600}
              height={1100}
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
