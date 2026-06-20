import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const brands = ["NOVA", "Lumen&Co", "Drift", "Atlas Goods", "Halo", "Vertex", "Pebble", "Aura", "Zenith", "Quantum"];

export function LogoStrip() {
  const container = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite horizontal scroll
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2;
      
      gsap.to(trackRef.current, {
        x: `-=${trackWidth}`,
        ease: "none",
        duration: 30,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % trackWidth)
        }
      });
    }
  }, { scope: container });

  return (
    <section ref={container} className="border-y border-border/20 bg-background py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground/60">
          Trusted by high-volume Shopify merchants
        </p>
        
        <div className="relative mt-8 flex overflow-hidden">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
          
          <div ref={trackRef} className="flex w-max items-center gap-16 px-8 opacity-60">
            {/* Double the brands array for seamless looping */}
            {[...brands, ...brands].map((b, i) => (
              <span key={`${b}-${i}`} className="font-display text-4xl md:text-5xl font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
