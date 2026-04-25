import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Sorn Leang" },
      { name: "description", content: "Computer Science student at Cambodia Academy of Digital Technology (CADT), specializing in Software Engineering." },
      { property: "og:title", content: "Education — Sorn Leang" },
      { property: "og:description", content: "Academic background and ongoing studies." },
    ],
  }),
  component: Education,
});

const timeline = [
  {
    period: "2024 — Present",
    school: "Cambodia Academy of Digital Technology (CADT)",
    degree: "Bachelor of Computer Science",
    track: "Software Engineering Track",
    desc: "Studying core CS, data structures, algorithms, software design, and modern web/mobile development.",
  },
  {
    period: "2020 — 2023",
    school: "Western International School",
    degree: "High School Diploma — Science Stream",
    track: "Phnom Penh, Cambodia",
    desc: "Strong foundation in mathematics, physics, and early self-taught programming.",
  },
];

function Education() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral mb-4">Education</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-[1.05]">
          Where I <span className="text-gradient-coral">learn.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          A short walk through my academic journey so far.
        </p>
      </div>

      <div className="mt-16 relative">
        {/* vertical line */}
        <div className="absolute left-6 md:left-10 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {timeline.map((item) => (
            <div key={item.period} className="relative pl-16 md:pl-24">
              {/* dot */}
              <div className="absolute left-3 md:left-7 top-2 w-7 h-7 rounded-full bg-background border-2 border-coral grid place-items-center">
                <GraduationCap size={14} className="text-coral" />
              </div>
              <div className="rounded-3xl border border-border bg-card p-8 hover:border-coral transition-colors duration-300">
                <p className="font-mono text-xs text-coral">{item.period}</p>
                <h3 className="mt-2 font-display font-semibold text-2xl md:text-3xl tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-1 text-base text-foreground/90">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.track}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
