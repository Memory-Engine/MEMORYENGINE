import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, TrendingUp, Users, Network, Eye } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Audits Before Distribution",
    desc: "No bots, no airdrop farmers. Only on-chain native users. We fix before we scale.",
  },
  {
    icon: Network,
    title: "Network as Infrastructure",
    desc: "Strategic access to 2000+ KOLs, 200+ alpha communities, and ecosystem partners built over years.",
  },
  {
    icon: Eye,
    title: "Radical Honesty",
    desc: "Realistic expectations, strategy validation before invoices, focus on P&L and long-term valuation.",
  },
  {
    icon: TrendingUp,
    title: "Investment, Not Expense",
    desc: "Systems where attention converts into capital, retained liquidity, and long-term community value.",
  },
  {
    icon: Target,
    title: "Protocol-Ready Traffic",
    desc: "High-intent, on-chain native users who deposit, trade, and govern — not dashboard inflaters.",
  },
  {
    icon: Users,
    title: "From Invisible to Inevitable",
    desc: "We help projects become the default choice in their category through credible momentum.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Why Memory Engine
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Don't Do Generic Marketing.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We engineer market systems that users, capital, and protocols trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Network stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 glow-border"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            Our Distribution Infrastructure
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "FnF Circles & Whale Syndicates" },
              { value: "2,000+", label: "Verified KOLs" },
              { value: "700+", label: "Content Creators" },
              { value: "200+", label: "Ecosystem Partnerships" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl md:text-3xl font-bold text-primary glow-text">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
