import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

export function Pricing({ showViewMore = false }: { showViewMore?: boolean }) {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.pricing-card');
    
    gsap.fromTo('.pricing-header', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.8, 
        scrollTrigger: { trigger: '.pricing-header', start: 'top 85%' }
      }
    );

    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' }
      }
    );

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: 'back.out(2)' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

  }, { scope: container });

  return (
    <section id="pricing" ref={container} className="bg-background py-24 md:py-32 relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="pricing-header mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Simple plans that <span className="font-display italic text-accent">scale</span> with you.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pick the plan that matches your catalog size. Switch or cancel anytime.
          </p>
        </div>

        <div className="pricing-grid mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`pricing-card relative flex flex-col rounded-3xl p-6 md:p-8 transition-colors ${
                t.featured
                  ? "border-2 border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border border-border bg-card shadow-soft hover:border-primary/50"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-lg">
                  {t.badge}
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className={`mt-2 text-sm min-h-[40px] ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {t.desc}
                </p>
              </div>
              
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold tracking-tight">{t.price}</span>
                <span className={`text-sm font-medium ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {t.cadence}
                </span>
              </div>
              <p className={`text-sm mb-8 ${t.featured ? "text-white/60" : "text-muted-foreground"}`}>
                {t.yearly}
              </p>
              
              <a
                href="#install"
                className={`mt-auto inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.01] ${
                  t.featured
                    ? "bg-white text-primary shadow-md"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {t.cta}
              </a>
              
              <div className="mt-8 pt-8 border-t border-border">
                <ul className="space-y-4 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`mt-0.5 grid size-5 place-items-center rounded-full`}>
                        <Check className={`size-3.5 ${t.featured ? "text-accent" : "text-success"}`} strokeWidth={3} />
                      </div>
                      <span className={`${t.featured ? "text-white/90" : "text-foreground"} leading-tight`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {showViewMore && (
          <div className="mt-12 text-center flex justify-center">
            <Link 
              to="/pricing" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-6 py-2 shadow-sm hover:border-primary/50"
            >
              View More Pricing Details &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
