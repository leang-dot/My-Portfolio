import { createFileRoute } from "@tanstack/react-router";
import { Code2, Smartphone, Layout, Sparkles, Zap, Wrench } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sorn Leang" },
      { name: "description", content: "Frontend development, responsive web design, mobile apps with Flutter, UI/UX implementation, and performance optimization." },
      { property: "og:title", content: "Services — Sorn Leang" },
      { property: "og:description", content: "What I can build for you — from responsive web apps to cross-platform mobile experiences." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive interfaces with React and TypeScript. Component-driven, accessible, and maintainable.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps built with Flutter & Dart. One codebase, native feel on iOS and Android.",
  },
  {
    icon: Code2,
    title: "Clean Codebases",
    desc: "Reusable components, sensible state management, and code your future team will thank you for.",
  },
  {
    icon: Sparkles,
    title: "UI / UX Implementation",
    desc: "Turning Figma designs into smooth, interactive experiences with attention to spacing, motion, and detail.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Fast loads, smooth scrolling, and snappy interactions. Optimizing bundles, images, and rendering paths.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Iteration",
    desc: "Ongoing improvements, bug fixes, and feature additions for existing web and mobile products.",
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral mb-4">Services</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-[1.05]">
          What I <span className="text-gradient-coral">do.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          A focused set of services for teams and founders who want clean, fast, and friendly products.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-coral transition-all duration-500"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-coral/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-14 h-14 grid place-items-center rounded-2xl bg-coral/10 border border-coral/30 text-coral mb-6 group-hover:bg-coral group-hover:text-primary-foreground transition-all duration-300">
                <Icon size={24} />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
