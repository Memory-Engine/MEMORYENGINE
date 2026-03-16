import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, BookOpen, Rocket, Zap, Target, Gem } from "lucide-react";

const services = [
  { icon: Smartphone, label: "Social Management" },
  { icon: BookOpen, label: "Narrative Control" },
  { icon: Rocket, label: "Viral Growth Engineering" },
  { icon: Zap, label: "Community Flywheel Design" },
  { icon: Target, label: "Strategic Advisory" },
  { icon: Gem, label: "Venture Support & Launchpads" },
];

export const GrowthAutopilotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Growth on{" "}
            <span className="text-gradient-gold">Autopilot</span>
          </h2>
        </motion.div>

        {/* Orbital diagram */}
        <div className="relative mx-auto w-[320px] h-[320px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
          {/* Orbit rings */}
          <div className="absolute inset-[15%] rounded-full border border-border/30" style={{ animation: 'pulse-ring 4s ease-in-out infinite' }} />
          <div className="absolute inset-[5%] rounded-full border border-border/20" />

          {/* Center logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center glow-gold">
              <span className="font-display text-xl md:text-2xl font-bold text-primary">ME</span>
            </div>
          </motion.div>

          {/* Orbital items */}
          {services.map((service, i) => {
            const angle = (360 / services.length) * i - 90;
            const rad = (angle * Math.PI) / 180;
            // Use 42% of container as radius
            const radius = 42;
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);
            const Icon = service.icon;

            return (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="absolute group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Connector line to center */}
                <div
                  className="absolute hidden md:block"
                  style={{
                    width: '1px',
                    height: `${radius * 0.6}%`,
                    background: `linear-gradient(to bottom, hsl(40 92% 52% / 0.15), transparent)`,
                    transformOrigin: 'top center',
                    transform: `rotate(${angle + 90}deg)`,
                    left: '50%',
                    top: '50%',
                    pointerEvents: 'none',
                  }}
                />

                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-gradient-to-b from-primary/15 to-primary/5 border border-primary/25 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(40_92%_52%/0.2)]">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-[10px] md:text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors max-w-[90px] md:max-w-[110px] leading-tight font-medium">
                    {service.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
