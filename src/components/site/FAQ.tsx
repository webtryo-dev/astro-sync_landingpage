import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    q: "What does AstroSync actually do?",
    a: "AstroSync is a Shopify app that uses AI to scan your product catalog, identify issues that prevent products from being eligible on TikTok Shop, and automatically fix them — titles, descriptions, images, categories, attributes and policy compliance.",
  },
  {
    q: "Do I need a TikTok Shop account already?",
    a: "Yes — you'll need a TikTok Shop seller account. AstroSync prepares your Shopify catalog and pushes compliant products to TikTok Shop via the official integration.",
  },
  {
    q: "Will AstroSync edit my Shopify products without asking?",
    a: "By default no. Every fix requires your approval. You can enable auto-fix per category (e.g. only image fixes) or fully automatic mode once you trust the recommendations.",
  },
  {
    q: "How fast is the initial scan?",
    a: "For a typical catalog of 500 products, the initial AI scan completes in 3–5 minutes. Auto-fixes apply in batches of ~100 products per minute.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. The trial is free for 14 days with no credit card. After that you can cancel from your Shopify admin in one click — no contracts.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">FAQ</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Questions, <span className="font-display italic">answered</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
