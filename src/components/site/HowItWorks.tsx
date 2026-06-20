import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    n: "01",
    title: "Install on Shopify",
    body: "One-click install from the Shopify App Store. AstroSync connects to your catalog in under 30 seconds, seamlessly.",
  },
  {
    n: "02",
    title: "AI scans every product",
    body: "Our model reviews titles, descriptions, images, categories and attributes against TikTok Shop's strict eligibility rules.",
  },
  {
    n: "03",
    title: "Review & auto-fix",
    body: "Approve fixes individually, or let AstroSync apply them automatically. Push the compliant catalog straight to TikTok Shop.",
  },
];

export function HowItWorks() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.step-card');

    gsap.fromTo('.how-header',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.8, 
        scrollTrigger: { trigger: '.how-header', start: 'top 85%' }
      }
    );

    gsap.fromTo(cards,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: '.steps-grid', start: 'top 80%' }
      }
    );

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, backgroundColor: "rgba(255,255,255,0.08)", duration: 0.3, ease: 'back.out(2)' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, backgroundColor: "rgba(255,255,255,0.05)", duration: 0.3, ease: 'power2.out' });
      });
    });

  }, { scope: container });

  return (
    <section id="how" ref={container} className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="absolute -left-20 top-20 size-80 rounded-full bg-accent blur-3xl" />
        <div className="absolute right-0 bottom-0 size-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="how-header mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            How it works
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            From install to <span className="font-display italic">approved</span> in minutes.
          </h2>
        </div>

        <div className="steps-grid mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="step-card rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors"
            >
              <div className="font-display text-5xl text-accent">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
