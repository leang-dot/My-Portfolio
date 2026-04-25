import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services", exact: false },
  { to: "/skills", label: "Skills", exact: false },
  { to: "/education", label: "Education", exact: false },
  { to: "/experience", label: "Experience", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl md:text-3xl font-bold tracking-tight text-coral">
          Sorn Leang<span className="text-foreground">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="relative text-base font-medium text-foreground/80 hover:text-coral transition-colors py-2"
              activeProps={{
                className: "text-coral",
              }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coral rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground hover:text-coral transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80 hover:text-coral transition-colors border-b border-border/20"
                activeProps={{ className: "text-coral" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
