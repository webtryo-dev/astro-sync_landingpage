import hero from "@/assets/dashboard-hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky-hero pb-24 pt-16 md:pb-32">
      {/* Decorative clouds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-[8%] top-[18%] h-32 w-64 rounded-full bg-white cloud-blur" />
        <div className="absolute right-[6%] top-[28%] h-40 w-72 rounded-full bg-white cloud-blur" />
        <div className="absolute left-[20%] top-[55%] h-24 w-48 rounded-full bg-white cloud-blur opacity-50" />
        <div className="absolute right-[18%] bottom-[20%] h-28 w-56 rounded-full bg-[oklch(0.95_0.05_60)] cloud-blur opacity-60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-success" />
          New · TikTok Shop AI compliance for Shopify
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Get every product <span className="font-display italic text-gradient">TikTok&nbsp;Shop ready</span> — automatically.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          AstroSync installs on your Shopify store, scans your catalog with AI, and fixes the
          listing issues blocking products from TikTok Shop — titles, images, categories,
          attributes and policy flags.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Install on Shopify — free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
          >
            See how it works
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Free 14-day trial · No credit card · Cancel anytime
        </p>

        <div className="relative mx-auto mt-16 max-w-5xl">
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
        </div>
      </div>
    </section>
  );
}
