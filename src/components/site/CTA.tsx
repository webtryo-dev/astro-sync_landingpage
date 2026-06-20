import { Logo } from "./Logo";

export function CTA() {
  return (
    <section id="install" className="bg-background px-6 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-glow md:p-20">
        <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-20 -bottom-20 size-96 rounded-full bg-[oklch(0.7_0.18_60)]/30 blur-3xl" aria-hidden />

        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <Logo variant="mark" className="size-12 brightness-0 invert" />
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              Ready to be <span className="font-display italic">TikTok Shop ready?</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Install AstroSync on your Shopify store in under a minute. Your first 50 products
              are on us.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              Install on Shopify
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
