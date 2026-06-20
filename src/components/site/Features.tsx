import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waypoints, Sparkles, Activity, Users } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  {
    icon: Waypoints,
    title: "Smart Variant Mapping",
    body: "Intelligently maps an existing Shopify product taxonomy to TikTok's strict category and variant requirements automatically.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Copywriting",
    body: "Leverages OpenAI to instantly rewrite, optimize, and format product descriptions to maximize conversions for the TikTok algorithm.",
  },
  {
    icon: Activity,
    title: "Live XML Feeds & Real-Time Sync",
    body: "Native API connections ensure inventory, pricing, and new variants are always up to date across platforms without manual intervention.",
  },
  {
    icon: Users,
    title: "Realtime Collaboration",
    body: "Built-in team communication features (comments, messages, and project chats) to keep marketing and operations teams perfectly aligned.",
  },
];

export function Features() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.feature-card');
    
    // Scroll reveal for header
    gsap.fromTo('.features-header', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.8, 
        scrollTrigger: {
          trigger: '.features-header',
          start: 'top 85%',
        }
      }
    );

    // Staggered reveal for cards
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
        }
      }
    );

    // Hover interactions
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
        gsap.to(card.querySelector('.feature-icon'), { scale: 1.15, rotate: 5, duration: 0.3, ease: 'back.out(2)' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(card.querySelector('.feature-icon'), { scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

  }, { scope: container });

  return (
    <section id="features" ref={container} className="bg-background py-24 md:py-32 relative">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="features-header mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Core Features
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything you need to stay <span className="font-display italic text-primary">eligible</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Stop manually editing products to please TikTok Shop's reviewers. AstroSync handles
            the entire compliance loop in the background.
          </p>
        </div>

        <div className="features-grid mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card group bg-card p-8 md:p-10 transition-colors hover:bg-secondary/40 cursor-pointer"
            >
              <div className="feature-icon grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                <f.icon className="size-6" />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
