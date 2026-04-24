import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/sorn-leang-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorn Leang — Frontend Developer based in Phnom Penh" },
      { name: "description", content: "Computer Science student & frontend developer crafting responsive, user-friendly interfaces with React, TypeScript and Flutter." },
      { property: "og:title", content: "Sorn Leang — Frontend Developer" },
      { property: "og:description", content: "Selected work, about, and contact for Sorn Leang." },
    ],
  }),
  component: Home,
});

const marquee = ["React", "TypeScript", "Flutter", "Tailwind", "JavaScript", "Dart", "HTML", "CSS", "UI/UX", "Performance"];

function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for work · 2026
              </p>
              <h1 className="font-display tracking-tight leading-[0.88] text-balance text-[clamp(3rem,10vw,9rem)] font-medium">
                Frontend
                <br />
                developer
                <br />
                <span className="italic text-primary">building calm,</span>
                <br />
                <span className="italic text-primary">crafted</span> interfaces.
              </h1>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-ember rounded-3xl blur-2xl opacity-30" />
                <img
                  src={portrait}
                  alt="Portrait of Sorn Leang"
                  className="relative w-full max-w-xs rounded-3xl shadow-card animate-float"
                  loading="eager"
                />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                I'm <span className="text-foreground font-medium">Sorn Leang</span> — a Computer Science student at CADT in Phnom Penh, building responsive web and mobile apps with React, TypeScript and Flutter.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-105 transition-transform shadow-ember"
                >
                  See selected work →
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/50 overflow-hidden bg-card/30">
        <div className="flex animate-marquee whitespace-nowrap py-6">
          {[...marquee, ...marquee, ...marquee].map((s, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl tracking-tight px-8 flex items-center gap-8">
              {s}
              <span className="text-primary text-2xl">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">01 — About</p>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-balance">
              I focus on the small things — <span className="italic text-primary">spacing, motion, the click of a button</span> — because that's where good products live.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <Stat number="4+" label="Shipped projects" />
              <Stat number="2y" label="Building" />
              <Stat number="∞" label="Curiosity" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">02 — Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">Recent projects.</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            num="01"
            title="Codify"
            tag="Learning Management System"
            desc="Student & teacher dashboards with course listing and assignment management — built in React + TypeScript."
            year="2025 — Now"
            tone="ember"
          />
          <ProjectCard
            num="02"
            title="SBEK Jerng"
            tag="Shoe E-Commerce"
            desc="Responsive storefront with product filtering, dynamic UI updates and reusable components."
            year="2025"
            tone="ink"
          />
          <ProjectCard
            num="03"
            title="Simple Chat"
            tag="Real-Time Messaging"
            desc="Chat interface with real-time UI updates, smooth interactions, and a fully responsive layout."
            year="2025"
            tone="ink"
          />
          <ProjectCard
            num="04"
            title="Jay Luy"
            tag="Expense Tracker · Flutter"
            desc="Cross-platform mobile app to track daily income & expenses with offline local storage."
            year="2025"
            tone="ember"
          />
        </div>
      </section>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl md:text-6xl text-primary tracking-tight">{number}</p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

function ProjectCard({ num, title, tag, desc, year, tone }: { num: string; title: string; tag: string; desc: string; year: string; tone: "ember" | "ink" }) {
  return (
    <Link
      to="/projects"
      className="group relative overflow-hidden rounded-3xl border border-border p-8 lg:p-10 bg-card hover:border-primary transition-all duration-500 grain"
    >
      <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${tone === "ember" ? "bg-primary" : "bg-accent"}`} />
      <div className="relative flex items-start justify-between mb-8">
        <span className="font-mono text-xs text-muted-foreground">{num} / 04</span>
        <span className="font-mono text-xs text-muted-foreground">{year}</span>
      </div>
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">{tag}</p>
        <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-md">{desc}</p>
        <div className="mt-8 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
          Read case →
        </div>
      </div>
    </Link>
  );
}
