import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/hero-portrait.jpg";
import { SocialIcons } from "@/components/SocialIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorn Leang — Frontend Developer in Phnom Penh" },
      { name: "description", content: "Hi, I'm Sorn Leang — a frontend developer crafting responsive, user-friendly interfaces with React, TypeScript and Flutter." },
      { property: "og:title", content: "Sorn Leang — Frontend Developer" },
      { property: "og:description", content: "Frontend developer based in Phnom Penh. Available for work." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient red glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-coral/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-coral/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait — left */}
          <div className="relative order-1 lg:order-1 mx-auto lg:mx-0 w-full max-w-md lg:max-w-lg">
            <div className="relative aspect-square">
              {/* glow ring */}
              <div className="absolute inset-0 rounded-full bg-coral/40 blur-3xl animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full bg-gradient-coral opacity-30 blur-2xl" />
              <img
                src={portrait}
                alt="Portrait of Sorn Leang"
                width={1024}
                height={1024}
                loading="eager"
                className="relative w-full h-full object-cover rounded-full border border-coral/30 shadow-coral animate-float"
              />
            </div>
          </div>

          {/* Text — right */}
          <div className="order-2 lg:order-2 animate-fade-up">
            <h1 className="font-display font-bold tracking-tight leading-[1.05] text-balance text-5xl md:text-6xl lg:text-7xl">
              Hi, It's <span className="text-gradient-coral">Sorn Leang</span>
              <br />
              I'm a <span className="text-gradient-coral">Developer</span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              A Computer Science student at CADT in Phnom Penh, building responsive,
              user-friendly web and mobile interfaces with React, TypeScript and Flutter.
              I care deeply about clean UI, smooth interactions, and code that other
              people can actually read.
            </p>

            <div className="mt-10">
              <SocialIcons />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-coral px-8 py-3 text-base font-medium text-coral hover:bg-coral hover:text-primary-foreground transition-all duration-300"
              >
                Hire me
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 text-base font-medium text-primary-foreground hover:scale-105 transition-transform shadow-coral"
              >
                See my work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
