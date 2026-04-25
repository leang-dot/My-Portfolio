import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sorn Leang" },
      { name: "description", content: "Selected projects: Codify LMS, SBEK Jerng e-commerce, Simple Chat, and Jay Luy expense tracker." },
      { property: "og:title", content: "Experience — Sorn Leang" },
      { property: "og:description", content: "Real-world projects I've built with React, TypeScript, JavaScript, and Flutter." },
    ],
  }),
  component: Experience,
});

const projects = [
  {
    num: "01",
    title: "Codify",
    tag: "Learning Management System",
    role: "Frontend Developer",
    period: "Sep 2025 — Present",
    stack: ["React", "TypeScript", "HTML", "CSS"],
    points: [
      "Developed responsive UIs with React & TypeScript.",
      "Implemented reusable UI components for scalable architecture.",
      "Focused on clean UI/UX and performance optimization.",
      "Built student and teacher dashboards with course & assignment management.",
    ],
  },
  {
    num: "02",
    title: "SBEK Jerng",
    tag: "Shoe-Selling E-Commerce",
    role: "Frontend Developer",
    period: "Feb 2025 — Mar 2026",
    stack: ["HTML", "CSS", "JavaScript"],
    points: [
      "Built a responsive e-commerce site from scratch.",
      "Product listing, filtering, and dynamic UI updates.",
      "Designed reusable components for maintainability.",
      "User-friendly design with performance focus.",
    ],
  },
  {
    num: "03",
    title: "Simple Chat",
    tag: "Real-Time Chat Application",
    role: "Frontend Developer",
    period: "Jun 2025 — Jul 2026",
    stack: ["JavaScript", "HTML", "CSS"],
    points: [
      "Developed chat interface with vanilla JavaScript.",
      "Real-time UI updates for messaging.",
      "Responsive layout for mobile and desktop.",
      "Smooth user experience and interactions.",
    ],
  },
  {
    num: "04",
    title: "Jay Luy",
    tag: "Expense & Income Tracker",
    role: "Mobile Developer",
    period: "Nov 2025 — Jan 2026",
    stack: ["Flutter", "Dart", "Local Storage"],
    points: [
      "Cross-platform mobile app for tracking daily income & expenses.",
      "Clean and user-friendly Flutter interface.",
      "Local storage for offline data persistence.",
      "Add, edit and delete financial records.",
    ],
  },
];

function Experience() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral mb-4">Experience</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-[1.05]">
          Things I've <span className="text-gradient-coral">built.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Selected frontend and mobile projects — from learning platforms to chat apps and finance trackers.
        </p>
      </div>

      <div className="mt-16 space-y-6">
        {projects.map((p) => (
          <article
            key={p.num}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:border-coral transition-all duration-500"
          >
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative grid md:grid-cols-12 gap-8 p-8 md:p-12">
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground mb-2">{p.num} / 0{projects.length}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-coral">{p.tag}</p>
                <p className="mt-4 text-sm text-muted-foreground">{p.period}</p>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
              <div className="md:col-span-6">
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight group-hover:text-coral transition-colors">
                  {p.title}
                </h2>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border px-3 py-1 text-xs font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
