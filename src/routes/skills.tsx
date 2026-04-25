import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Sorn Leang" },
      { name: "description", content: "Frontend, mobile, and soft skills: React, TypeScript, Flutter, Tailwind, responsive design, and team collaboration." },
      { property: "og:title", content: "Skills — Sorn Leang" },
      { property: "og:description", content: "The tools I work with and the principles I work by." },
    ],
  }),
  component: Skills,
});

const skillGroups = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    label: "Concepts",
    items: ["Responsive UI", "Clean Code", "State Management", "Performance"],
  },
  {
    label: "Soft Skills",
    items: ["Teamwork", "Communication", "Time Management", "Problem-Solving"],
  },
];

function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral mb-4">Skills</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-[1.05]">
          My <span className="text-gradient-coral">toolkit.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          The tech I reach for, plus the soft skills I bring to every project.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-3xl border border-border bg-card p-8 hover:border-coral transition-colors duration-300"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-coral mb-6">
              {group.label}
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground/90 hover:border-coral hover:text-coral transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
