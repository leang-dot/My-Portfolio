import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { SocialIcons } from "@/components/SocialIcons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sorn Leang" },
      { name: "description", content: "Get in touch with Sorn Leang — frontend developer in Phnom Penh. Available for freelance and full-time work." },
      { property: "og:title", content: "Contact — Sorn Leang" },
      { property: "og:description", content: "Reach out by email or phone." },
    ],
  }),
  component: Contact,
});

const cards = [
  { Icon: Mail, label: "Email", value: "sornleang005@gmail.com", href: "mailto:sornleang005@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+855 99 630 996", href: "tel:+85599630996" },
  { Icon: MapPin, label: "Location", value: "Phnom Penh, Cambodia" },
];

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral mb-4">Contact</p>
        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.05]">
          Say <span className="text-gradient-coral">hello.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          I'm currently open to frontend opportunities, freelance work, and interesting collaborations.
          The fastest way to reach me is by email.
        </p>

        <div className="mt-8">
          <SocialIcons />
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-6">
        {cards.map(({ Icon, label, value, href }) => {
          const Wrapper: "a" | "div" = href ? "a" : "div";
          const wrapperProps = href ? { href } : {};
          return (
            <Wrapper
              key={label}
              {...wrapperProps}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 ${
                href ? "hover:border-coral cursor-pointer" : ""
              }`}
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-5">
                <div className="w-12 h-12 grid place-items-center rounded-2xl bg-coral/10 border border-coral/30 text-coral group-hover:bg-coral group-hover:text-primary-foreground transition-all">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{label}</p>
                  <p className="font-display text-xl md:text-2xl font-semibold tracking-tight">{value}</p>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-coral p-10 md:p-14 relative overflow-hidden">
        <div className="relative max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-background/70 mb-4">Now booking</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-background leading-[1.05]">
            Got a project in mind? Let's make it real.
          </h2>
          <a
            href="mailto:sornleang005@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3 text-base font-medium text-coral hover:scale-105 transition-transform"
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </div>
  );
}
