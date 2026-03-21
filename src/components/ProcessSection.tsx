import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Systems & Friction Audit",
    desc: "We identify value leaks across UX, tokenomics, positioning, GTM strategy, and behavioral loops before spending a single dollar on distribution.",
    details: ["UX & retention analysis", "Tokenomics review", "GTM gap mapping", "Behavioral loop design"],
  },
  {
    icon: Cpu,
    number: "02",
    title: "Growth Architecture Design",
    desc: "We build integrated systems combining narrative frameworks, retention mechanics, liquidity dynamics, and distribution infrastructure.",
    details: ["Narrative framework", "Retention mechanics", "Liquidity dynamics", "Distribution mapping"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Precision Distribution",
    desc: "Once systems are ready, we deploy high-intent audiences through 200+ FnF circles, 2000+ verified KOLs, 700+ creators, and 200+ partnerships.",
    details: ["200+ FnF circles", "2000+ verified KOLs", "700+ creators", "200+ partnerships"],
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary/70 font-medium text-xs tracking-[0.25em] uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            How We <span className="text-gradient-gold">Engineer Growth</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg">
            Audit → Architect → Activate. No shortcuts.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative card-metallic rounded-2xl p-8 h-full transition-all duration-500">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-primary/[0.04] to-transparent pointer-events-none" />
                    
                    <div className="relative z-10">
                      {/* Number + Icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-display text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/15 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/25 group-hover:shadow-[0_0_25px_hsl(40_92%_52%/0.12)] transition-all duration-500">
                          <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      {/* Detail tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] px-2.5 py-1 rounded-full border border-border/50 text-muted-foreground/70 bg-muted/20 tracking-wide"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
