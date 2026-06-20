import { createFileRoute, Link } from '@tanstack/react-router'
import { FAQ } from '../components/site/FAQ'
import { Nav } from '../components/site/Nav'
import { Footer } from '../components/site/Footer'

export const Route = createFileRoute('/help')({
  component: HelpPage,
})

function HelpPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 pb-24 md:pb-32 pt-8 md:pt-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
        <FAQ />
      
      <section className="mx-auto max-w-3xl px-6 mt-16 text-center">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-8">
            Our support team is always ready to help you get your products live on TikTok Shop.
          </p>
          <a 
            href="mailto:help@astrosync.io" 
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Email us at help@astrosync.io
          </a>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
