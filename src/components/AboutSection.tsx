import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    num: "01",
    title: "Rocket to Nowhere",
    desc: "Big launch. Big noise. Then silence. Users spike. Liquidity fades. No compounding effect.",
    fix: "We design retention architecture and incentive systems that stabilize growth and turn spikes into sustained on-chain activity.",
  },
  {
    num: "02",
    title: "Crickets",
    desc: "Low engagement. Wrong crowd. Bot noise. Dashboards look alive. Wallets aren't.",
    fix: "We activate curated alpha networks and behavior-matched creators to inject real signal and qualified users.",
  },
  {
    num: "03",
    title: "Spending Without Scaling",
    desc: "Budget deployed. Traffic acquired. Nothing sticks. High spend. Low conversion.",
    fix: "We engineer conversion-first funnels & acquisition models where LTV exceeds CAC.",
  },
  {
    num: "04",
    title: "Built It. No One Gets It",
    desc: "Strong product. Zero packaging. No GTM. Built by engineers. Understood by no one.",
    fix: "We architect narrative-market fit & full GTM infrastructure, translating code into demand.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            You Don't Have a Traffic Problem.{" "}
            <span className="text-primary">You Have a Systems Problem.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most growth teams push traffic into products that aren't designed to hold users, liquidity, or attention. We don't start with campaigns — we start with architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
              <div className="relative z-10">
                <span className="font-display text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {p.num}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">
                  "{p.title}"
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <p className="text-sm text-primary/80 border-t border-border pt-4">
                  → {p.fix}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
