import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/sorn-leang-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sorn Leang" },
      { name: "description", content: "Computer Science student at CADT specializing in Software Engineering. Frontend & Flutter developer based in Phnom Penh." },
      { property: "og:title", content: "About — Sorn Leang" },
      { property: "og:description", content: "Background, skills, and education of frontend developer Sorn Leang." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"],
  Mobile: ["Flutter", "Dart"],
  Concepts: ["Responsive UI", "Clean Code", "State Management", "Performance"],
  Soft: ["Teamwork", "Communication", "Time Management", "Problem-Solving"],
};

function About() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">About</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
              A student, a builder,<br />
              <span className="italic text-primary">a curious mind</span> with<br />
              an eye for detail.
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
              <p>
                I'm a Computer Science student at <span className="text-foreground">Cambodia Academy of Digital Technology (CADT)</span>, specializing in Software Engineering.
              </p>
              <p>
                My focus is building responsive, user-friendly web applications. I care a lot about clean UI, smooth interactions, and code that other people can actually read.
              </p>
              <p>
                Outside of class, I'm usually shipping side projects — most recently a learning management system, an e-commerce site, a real-time chat, and a Flutter expense tracker.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-ember rounded-3xl blur-3xl opacity-25" />
              <img
                src={portrait}
                alt="Sorn Leang"
                className="relative w-full rounded-3xl shadow-card"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Info label="Based in" value="Phnom Penh, KH" />
              <Info label="Status" value="Open to work" />
              <Info label="Languages" value="Khmer · English" />
              <Info label="Education" value="CADT · CS" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border/50">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">Toolkit</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">What I work with.</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="border-t border-border/50 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 border-t border-border/50">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">Education</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">School.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="font-mono text-xs text-muted-foreground">2024 — Present</p>
              <h3 className="mt-2 font-display text-3xl tracking-tight">Cambodia Academy of Digital Technology</h3>
              <p className="mt-2 text-muted-foreground">Bachelor of Computer Science · Software Engineering track</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}
