import { createFileRoute } from "@tanstack/react-router";

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

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-32">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">Contact</p>
      <h1 className="font-display text-6xl md:text-9xl tracking-tight leading-[0.85] text-balance">
        Say <span className="italic text-primary">hello.</span>
      </h1>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
        I'm currently open to frontend opportunities, freelance work, and interesting collaborations. The fastest way to reach me is email.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        <ContactCard
          label="Email"
          value="ounleang180@gmail.com"
          href="mailto:ounleang180@gmail.com"
          cta="Send a message →"
          big
        />
        <ContactCard
          label="Phone"
          value="+855 99 630 996"
          href="tel:+85599630996"
          cta="Give a call →"
        />
        <ContactCard
          label="Location"
          value="Street 1982, Phnom Penh Thmey, Sen Sok"
          cta="Phnom Penh, Cambodia"
        />
        <ContactCard
          label="Reference"
          value="Ronan Ogor — Lecturer & Researcher, CADT"
          href="mailto:Ronan.ogor@cadt.edu.kh"
          cta="Ronan.ogor@cadt.edu.kh →"
        />
      </div>

      <div className="mt-20 rounded-3xl border border-border bg-gradient-ember p-10 md:p-16 relative overflow-hidden grain">
        <div className="relative max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/70 mb-4">Now booking</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-ink leading-[0.95]">
            Got a project in mind? Let's make it real.
          </h2>
          <a
            href="mailto:ounleang180@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream hover:scale-105 transition-transform"
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
  cta,
  big,
}: {
  label: string;
  value: string;
  href?: string;
  cta: string;
  big?: boolean;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={`group block rounded-3xl border border-border bg-card p-8 transition-all duration-300 ${
        href ? "hover:border-primary cursor-pointer" : ""
      } ${big ? "md:col-span-2" : ""}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">{label}</p>
      <p className={`font-display tracking-tight ${big ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
        {value}
      </p>
      <p className="mt-6 text-sm text-primary opacity-70 group-hover:opacity-100 transition-opacity">
        {cta}
      </p>
    </Wrapper>
  );
}
