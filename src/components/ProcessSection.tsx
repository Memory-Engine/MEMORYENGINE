import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Layers, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Systems & Friction Audit",
    desc: "We identify value leaks across UX, tokenomics, positioning, GTM strategy, and behavioral loops before spending a single dollar on distribution.",
    details: [
      "Product friction analysis",
      "Weak positioning diagnosis",
      "Broken incentives mapping",
      "Behavior loop assessment",
    ],
  },
  {
    icon: Layers,
    num: "02",
    title: "Growth Architecture Design",
    desc: "We build integrated systems combining narrative frameworks, retention mechanics, liquidity dynamics, & distribution infrastructure that work together.",
    details: [
      "User & liquidity flows",
      "Activation & retention mechanics",
      "Narrative positioning",
      "On-chain behavior patterns",
    ],
  },
  {
    icon: Zap,
    num: "03",
    title: "Precision Distribution",
    desc: "Once the systems are ready, we deploy high-intent audiences through 200+ FnF circles, 2000+ verified KOLs, 700+ creators, & 200+ ecosystem partnerships.",
    details: [
      "200+ FnF circles & whale syndicates",
      "2000+ verified KOLs",
      "700+ narrative content creators",
      "200+ ecosystem partnerships",
    ],
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            How We Fix the{" "}
            <span className="text-primary glow-text">'Growth Gap'</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-px bg-gradient-to-r from-primary/40 to-transparent z-20" />
                )}

                <div className="relative p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 h-full">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/5 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <span className="text-xs font-mono text-primary/60 tracking-widest">
                      STEP {step.num}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
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
