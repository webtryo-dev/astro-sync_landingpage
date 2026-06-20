import { createFileRoute, Link } from '@tanstack/react-router'
import { Nav } from '../components/site/Nav'
import { Footer } from '../components/site/Footer'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl mb-4">AstroSync Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Effective Date: June 20, 2026</p>

        <div className="prose prose-slate max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>Welcome to AstroSync ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the AstroSync application installed via Shopify, as well as our website and related services (collectively, the "Service").</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-4">Because AstroSync integrates directly with your Shopify store and TikTok Shop, we collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Store Information:</strong> Store name, Shopify domain, and contact email associated with the Shopify account.</li>
              <li><strong>Catalog Data:</strong> Product titles, descriptions, pricing, inventory levels, variants, and images to facilitate synchronization and AI-driven copywriting.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Service, including API call logs, sync frequency, and feature usage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Delivery:</strong> To map, format, and synchronize your product catalog between Shopify and TikTok Shop.</li>
              <li><strong>AI Copywriting:</strong> To generate optimized product descriptions using third-party artificial intelligence providers (e.g., OpenAI).</li>
              <li><strong>Customer Support:</strong> To respond to your inquiries and provide technical assistance.</li>
              <li><strong>Service Improvement:</strong> To analyze usage trends and improve the functionality of AstroSync.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Sharing Your Information</h2>
            <p className="mb-4">We do not sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Third-Party Integrations:</strong> Platforms you explicitly connect to via our Service, namely TikTok Shop.</li>
              <li><strong>Service Providers:</strong> Third-party vendors that help us operate our Service (e.g., OpenAI for copywriting, cloud hosting providers). These providers are bound by strict data processing agreements.</li>
              <li><strong>Legal Obligations:</strong> When required by law or to protect our rights and users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention and Security</h2>
            <p>We implement robust security measures to protect your catalog data and store information. We retain your data only for as long as your Shopify store remains connected to AstroSync. Upon uninstallation, your data will be securely deleted from our active servers within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p>Depending on your jurisdiction (e.g., GDPR, CCPA), you may have the right to access, correct, or delete the personal data we hold about you. You can exercise these rights by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Effective Date."</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: <a href="mailto:help@astrosync.io" className="text-primary hover:underline">help@astrosync.io</a></p>
          </section>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
