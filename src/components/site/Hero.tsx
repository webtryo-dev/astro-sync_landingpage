import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import hero from "@/assets/dashboard-hero.jpg";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLElement>(null);
  const cloud1 = useRef<HTMLDivElement>(null);
  const cloud2 = useRef<HTMLDivElement>(null);
  const cloud3 = useRef<HTMLDivElement>(null);
  const cloud4 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Cloud drift animations
    gsap.to(cloud1.current, { x: 30, y: -10, duration: 7, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(cloud2.current, { x: -40, y: 12, duration: 9, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(cloud3.current, { x: 50, duration: 11, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(cloud4.current, { x: -30, y: -8, duration: 8, yoyo: true, repeat: -1, ease: "sine.inOut" });

    // Entrance Stagger Animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(".hero-badge", 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(".hero-title", 
      { opacity: 0, y: 25 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      "-=0.6"
    )
    .fromTo(".hero-subtitle", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      "-=0.6"
    )
    .fromTo(".hero-cta", 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 
      "-=0.6"
    )
    .fromTo(".hero-image", 
      { opacity: 0, y: 40, scale: 0.96 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }, 
      "-=0.4"
    );

    // Micro-interactions on hover
    gsap.utils.toArray<HTMLElement>('.btn-primary').forEach(btn => {
      btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'back.out(2)' }));
      btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' }));
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative overflow-hidden bg-sky-hero pb-24 pt-16 md:pb-32">
      {/* Decorative drifting clouds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div
          ref={cloud1}
          className="absolute left-[8%] top-[18%] h-32 w-64 rounded-full bg-white cloud-blur"
        />
        <div
          ref={cloud2}
          className="absolute right-[6%] top-[28%] h-40 w-72 rounded-full bg-white cloud-blur"
        />
        <div
          ref={cloud3}
          className="absolute left-[20%] top-[55%] h-24 w-48 rounded-full bg-white cloud-blur opacity-50"
        />
        <div
          ref={cloud4}
          className="absolute right-[18%] bottom-[20%] h-28 w-56 rounded-full bg-[oklch(0.95_0.05_60)] cloud-blur opacity-60"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="hero-badge mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-success" />
          Seamless Shopify ↔ TikTok Shop Integration
        </div>

        <h1 className="hero-title mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          You ship your products. <br className="hidden md:block"/> AstroSync handles your{" "}
          <span className="font-display italic text-gradient">TikTok&nbsp;Shop.</span>
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          A completely frictionless, all-in-one catalog synchronization software. No external portals. Install directly on Shopify and let our AI optimize, map, and auto-fix your entire product catalog for TikTok Shop's algorithm.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="hero-cta btn-primary inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Install on Shopify
          </a>
          <a
            href="#features"
            className="hero-cta inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
          >
            See how it works
          </a>
        </div>

        <p className="hero-cta mt-4 text-xs text-muted-foreground">
          Plans from $19.99/mo · Cancel anytime
        </p>

        <div className="hero-image relative mx-auto mt-16 max-w-5xl">
          <div className="absolute inset-x-10 top-10 -z-10 h-64 rounded-full bg-primary/20 blur-3xl" />
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
