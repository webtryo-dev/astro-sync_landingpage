import { createFileRoute, Link } from '@tanstack/react-router'
import { Nav } from '../components/site/Nav'
import { Footer } from '../components/site/Footer'

export const Route = createFileRoute('/tos')({
  component: ToSPage,
})

function ToSPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl mb-4">AstroSync Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Effective Date: June 20, 2026</p>

        <div className="prose prose-slate max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By installing, accessing, or using the AstroSync application ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p>AstroSync provides an automated catalog synchronization platform that connects your Shopify store with TikTok Shop. Features include, but are not limited to, variant mapping, live XML feeds, and AI-powered product description rewriting.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Account and Installation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must have an active Shopify store and TikTok Shop account to use the Service.</li>
              <li>By installing AstroSync on your Shopify store, you grant us permission to access, read, and modify your product catalog as necessary to perform the synchronization services.</li>
              <li>You are responsible for maintaining the security of your Shopify and TikTok Shop accounts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Subscriptions and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>AstroSync offers various subscription tiers (Starter, Growth, Pro, Enterprise).</li>
              <li>By selecting a paid tier, you agree to pay the specified monthly or annual fees.</li>
              <li>Overage charges apply for AI Fix Credits that exceed your plan's monthly allotment, as detailed on our pricing page.</li>
              <li>Payments are processed through Shopify's billing system. All fees are non-refundable unless legally required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Acceptable Use</h2>
            <p className="mb-4">You agree not to use AstroSync to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sync illegal, fraudulent, or counterfeit products.</li>
              <li>Violate the terms of service of Shopify, TikTok Shop, or OpenAI.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of our software.</li>
              <li>Overload or attempt to disrupt our infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>AstroSync retains all rights, title, and interest in the software, logos, and features of the Service.</li>
              <li>You retain all ownership of your store's catalog data.</li>
              <li>Any AI-generated copy produced through the Service is licensed to you for use in your e-commerce operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, AstroSync shall not be liable for any indirect, incidental, special, or consequential damages, including lost profits, lost data, or business interruption, resulting from your use of the Service. AstroSync does not guarantee uninterrupted syncs or specific sales outcomes on TikTok Shop.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, if you violate these Terms or for any other reason at our sole discretion. You may terminate these Terms by uninstalling AstroSync from your Shopify store.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AstroSync is registered, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-2">Email: <a href="mailto:help@astrosync.io" className="text-primary hover:underline">help@astrosync.io</a></p>
          </section>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
