import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
];

export function SocialIcons({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-9 h-9" : "w-11 h-11";
  const icon = size === "sm" ? 16 : 18;
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`${dim} grid place-items-center rounded-full border border-coral/60 text-coral hover:bg-coral hover:text-primary-foreground transition-all duration-300 hover:scale-110`}
        >
          <Icon size={icon} />
        </a>
      ))}
    </div>
  );
}
