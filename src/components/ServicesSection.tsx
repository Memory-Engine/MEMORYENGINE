import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, BookOpen, Rocket, Zap, Target, Gem } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "KOL Management",
    desc: "2000+ verified KOLs across 10+ languages with on-chain performance tracking.",
  },
  {
    icon: BookOpen,
    title: "Narrative Control",
    desc: "We craft category-level narratives that position your project as the inevitable choice.",
  },
  {
    icon: Rocket,
    title: "Viral Growth Engineering",
    desc: "Coordinated distribution across 200+ FnF circles and whale syndicates.",
  },
  {
    icon: Zap,
    title: "Community Flywheel Design",
    desc: "Retention loops, referral mechanics, and value-aligned incentive systems.",
  },
  {
    icon: Target,
    title: "Strategic Advisory",
    desc: "GTM strategy, tokenomics alignment, and full launch architecture.",
  },
  {
    icon: Gem,
    title: "Venture Support & Launchpads",
    desc: "Strategic introductions and positioning for fundraising and listing.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Growth on{" "}
            <span className="text-gradient-gold">Autopilot</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            End-to-end growth infrastructure — from narrative to distribution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
                <div className="relative card-metallic rounded-2xl p-7 h-full transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_hsl(40_92%_52%/0.15)] transition-all duration-500">
                      <Icon className="w-5 h-5 text-primary" />
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
