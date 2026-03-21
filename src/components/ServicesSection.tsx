import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, BookOpen, Rocket, Zap, Target, Gem } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "KOL Management",
    desc: "2000+ verified KOLs across 10+ languages with on-chain performance tracking.",
    accent: "from-primary/20 to-accent/10",
  },
  {
    icon: BookOpen,
    title: "Narrative Control",
    desc: "Category-level narratives that position your project as the inevitable choice.",
    accent: "from-accent/20 to-primary/10",
  },
  {
    icon: Rocket,
    title: "Viral Growth Engineering",
    desc: "Coordinated distribution across 200+ FnF circles and whale syndicates.",
    accent: "from-primary/15 to-accent/15",
  },
  {
    icon: Zap,
    title: "Community Flywheel",
    desc: "Retention loops, referral mechanics, and value-aligned incentive systems.",
    accent: "from-accent/15 to-primary/20",
  },
  {
    icon: Target,
    title: "Strategic Advisory",
    desc: "GTM strategy, tokenomics alignment, and full launch architecture.",
    accent: "from-primary/20 to-accent/5",
  },
  {
    icon: Gem,
    title: "Venture & Launchpads",
    desc: "Strategic introductions and positioning for fundraising and listing.",
    accent: "from-accent/20 to-primary/5",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-premium" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary/70 font-medium text-xs tracking-[0.25em] uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Growth on{" "}
            <span className="text-gradient-gold">Autopilot</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg">
            End-to-end growth infrastructure — from narrative to distribution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
                
                <div className="relative card-metallic rounded-2xl p-7 h-full transition-all duration-500 overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${service.accent} pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/25 group-hover:shadow-[0_0_25px_hsl(40_92%_52%/0.12)] transition-all duration-500">
                      <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
