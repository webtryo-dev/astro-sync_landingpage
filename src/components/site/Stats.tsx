import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { k: 4200, suffix: "+", v: "Shopify stores" },
  { k: 1.8, suffix: "M", v: "Products auto-fixed", isFloat: true },
  { k: 94, suffix: "%", v: "Approval rate" },
  { k: 12, suffix: " min", v: "Avg. time saved per product" },
];

export function Stats() {
  const container = useRef<HTMLElement>(null);
  const counters = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Reveal animation
    gsap.fromTo('.stat-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: container.current, start: 'top 85%' }
      }
    );

    // Number counting animation
    counters.current.forEach((counter, i) => {
      if (!counter) return;
      const targetData = stats[i];
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: targetData.k,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
        },
        onUpdate: () => {
          let formattedValue = targetData.isFloat 
            ? obj.val.toFixed(1) 
            : Math.floor(obj.val).toString();
            
          // Add commas for large numbers if needed
          if (!targetData.isFloat && targetData.k >= 1000) {
            formattedValue = Math.floor(obj.val).toLocaleString();
          }
            
          counter.innerText = formattedValue;
        }
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="bg-background py-20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 gap-x-8 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.v} className="stat-item flex flex-col items-center text-center">
            <div className="flex items-baseline justify-center">
              <span 
                ref={el => counters.current[i] = el}
                className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl"
              >
                0
              </span>
              <span className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl ml-1">
                {s.suffix}
              </span>
            </div>
            <div className="mt-3 text-sm font-medium text-muted-foreground max-w-[140px] leading-snug">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
