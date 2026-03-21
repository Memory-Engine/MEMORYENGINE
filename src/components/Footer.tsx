import { Send, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Cases", href: "#cases" },
  { label: "Network", href: "#network" },
  { label: "Services", href: "#services" },
];

const socials = [
  { label: "Twitter / X", href: "https://x.com/", icon: ArrowUpRight },
  { label: "Telegram", href: "https://t.me/memoryengine", icon: Send },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-2xl font-bold tracking-tight inline-block mb-4">
              <span className="text-gradient-gold">MEMORY ENGINE</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We engineer market systems that protocols, users, and capital commit to.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-foreground/60 tracking-[0.2em] uppercase mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold text-foreground/60 tracking-[0.2em] uppercase mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5"
                >
                  {social.label}
                  <social.icon className="w-3 h-3" />
                </a>
              ))}
              <a
                href="https://cal.com/potik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                Book a Call →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Memory Engine. All rights reserved.
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/20 to-transparent md:hidden" />
          <p className="text-xs text-muted-foreground/30">
            Systemic Growth for Web3
          </p>
        </div>
      </div>
    </footer>
  );
};
