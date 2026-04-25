import { Link } from "@tanstack/react-router";
import { SocialIcons } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Let's build <span className="text-coral">something great.</span>
            </h3>
            <a
              href="mailto:sornleang005@gmail.com"
              className="mt-6 inline-block text-sm font-mono text-muted-foreground hover:text-coral transition-colors"
            >
              sornleang005@gmail.com →
            </a>
            <div className="mt-6">
              <SocialIcons size="sm" />
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-coral transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-coral transition-colors">Services</Link></li>
              <li><Link to="/skills" className="hover:text-coral transition-colors">Skills</Link></li>
              <li><Link to="/education" className="hover:text-coral transition-colors">Education</Link></li>
              <li><Link to="/experience" className="hover:text-coral transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="hover:text-coral transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Reach out
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+85599630996" className="hover:text-coral transition-colors">+855 99 630 996</a></li>
              <li className="text-muted-foreground">Phnom Penh, KH</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Sorn Leang</span>
          <span>Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}
