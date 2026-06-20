import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const quotes = [
  {
    q: "We had 600 products rejected from TikTok Shop. AstroSync fixed 94% of them in a single afternoon. Sales went live the next morning.",
    a: "Priya Shah",
    r: "Founder, Lumen&Co",
  },
  {
    q: "It's the only tool that actually understands TikTok Shop's category requirements. Saved our ops team weeks of manual editing.",
    a: "Marcus Lee",
    r: "Head of Ecom, Atlas Goods",
  },
  {
    q: "Install, scan, approve. That was the entire onboarding. Two days later we were live on TikTok Shop with our full catalog.",
    a: "Jules Martin",
    r: "Director, Drift Apparel",
  },
];

export function Testimonials() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');

    gsap.fromTo('.testimonials-header',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.8, 
        scrollTrigger: { trigger: '.testimonials-header', start: 'top 85%' }
      }
    );

    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: '.testimonials-grid', start: 'top 80%' }
      }
    );

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -5, duration: 0.3, ease: 'back.out(2)' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="bg-secondary/30 py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h2 className="testimonials-header max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
          Merchants ship to TikTok Shop <span className="font-display italic text-accent">faster</span>.
        </h2>

        <div className="testimonials-grid mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((t) => (
            <figure
              key={t.a}
              className="testimonial-card flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <blockquote className="text-base leading-relaxed text-foreground">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="size-10 rounded-full bg-primary/10 grid place-items-center font-bold text-primary">
                  {t.a.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.a}</div>
                  <div className="text-sm text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
