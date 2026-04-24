import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95]">
              Let's build<br />
              <span className="italic text-primary">something good.</span>
            </h3>
            <a
              href="mailto:ounleang180@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              ounleang180@gmail.com →
            </a>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Index</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+85599630996" className="hover:text-primary transition-colors">+855 99 630 996</a></li>
              <li className="text-muted-foreground">Phnom Penh, KH</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Sorn Leang</span>
          <span>Built with care in Phnom Penh</span>
        </div>
      </div>
    </footer>
  );
}
