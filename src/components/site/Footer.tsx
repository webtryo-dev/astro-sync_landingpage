import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo className="h-16 md:h-20 scale-125 md:scale-150 origin-left" />
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            AstroSync AI · Get every Shopify product approved on TikTok Shop, automatically.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="/#features" className="hover:text-foreground">Features</a></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><a href="/#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">About</a></li>
            <li><Link to="/help" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/tos" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="mx-auto max-w-6xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AstroSync AI. Not affiliated with TikTok or Shopify.
        </p>
      </div>
    </footer>
  );
}
