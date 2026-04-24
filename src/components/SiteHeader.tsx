import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">
            Sorn<span className="text-primary">.</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Frontend Dev
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "text-foreground",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
