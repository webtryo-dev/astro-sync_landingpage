import { createFileRoute, Link } from '@tanstack/react-router'
import { Nav } from '../components/site/Nav'
import { Footer } from '../components/site/Footer'
import { Pricing } from '../components/site/Pricing'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
})

function PricingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            &larr; Back to Home
          </Link>
        </div>

        {/* Pricing component without the "view more" button */}
        <Pricing showViewMore={false} />

        {/* More Info Section */}
        <div className="mx-auto max-w-4xl px-6 mt-16 mb-24">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
            <h2 className="text-3xl font-semibold mb-6">More Information About Our Pricing</h2>
            <div className="prose prose-slate max-w-none text-foreground/80 space-y-6">
              <p>
                We believe in simple, transparent pricing that scales with your Shopify store. 
                Whether you're just starting out on TikTok Shop or processing thousands of orders, 
                we have a plan that fits your needs.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mt-8">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Can I change my plan later?</h4>
                  <p>Absolutely. You can upgrade or downgrade your plan at any time directly from your dashboard. Upgrades are prorated.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">What happens if I exceed my AI Fix Credits?</h4>
                  <p>If you run out of credits, you can seamlessly purchase additional credits without having to upgrade your tier, or simply upgrade if your volume consistently exceeds your plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
