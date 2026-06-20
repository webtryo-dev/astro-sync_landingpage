import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Logo } from "./Logo";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CTA() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cta-content',
      { opacity: 0, scale: 0.95, y: 30 },
      { 
        opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      }
    );
    
    // Continuous subtle pulse for the background blur
    gsap.to('.cta-glow', {
      scale: 1.1, opacity: 0.6, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut"
    });

  }, { scope: container });

  return (
    <section id="install" ref={container} className="bg-background px-6 py-20">
      <div className="cta-content relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-glow md:p-20">
        <div className="cta-glow pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="cta-glow pointer-events-none absolute -left-20 -bottom-20 size-96 rounded-full bg-[oklch(0.7_0.18_60)]/30 blur-3xl" aria-hidden />

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <Logo className="h-14 md:h-20 brightness-0 invert scale-125 md:scale-150 origin-left" />
            <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              Ready to be <span className="font-display italic">TikTok Shop ready?</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Install AstroSync on your Shopify store in under a minute. Plans start at $19.99/month.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              Install on Shopify
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
