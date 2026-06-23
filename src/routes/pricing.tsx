import { createFileRoute, Link } from '@tanstack/react-router'
import { Nav } from '../components/site/Nav'
import { Footer } from '../components/site/Footer'

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
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to sync your Shopify catalog to TikTok Shop seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for small stores just getting started.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Up to 50 products synced
                </li>
                <li className="flex items-center text-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Basic field mapping
                </li>
                <li className="flex items-center text-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Daily sync
                </li>
              </ul>
              <button className="w-full rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="rounded-3xl border-2 border-primary bg-card p-8 shadow-lg flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <p className="text-muted-foreground mb-6">For growing brands that need more power.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Unlimited products synced
                </li>
                <li className="flex items-center text-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  AI-powered descriptions
                </li>
                <li className="flex items-center text-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Real-time sync
                </li>
                <li className="flex items-center text-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Priority support
                </li>
              </ul>
              <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]">
                Upgrade to Pro
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
