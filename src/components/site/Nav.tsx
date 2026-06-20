import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 px-3 py-2 pl-5 shadow-soft backdrop-blur-xl md:mt-6">
        <Link to="/" className="flex shrink-0 items-center">
          <Logo className="h-7" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#install"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          Install free
        </a>
      </div>
    </header>
  );
}
