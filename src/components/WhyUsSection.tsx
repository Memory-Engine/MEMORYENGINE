import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Network, Eye, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Audits Before Distribution",
    desc: "No bots, no airdrop farmers. Only on-chain native users who add real value to your protocol.",
  },
  {
    icon: Network,
    title: "Network-as-Infrastructure",
    desc: "Strategic access to influencers, alpha communities, and ecosystem partners most agencies can't reach.",
  },
  {
    icon: Eye,
    title: "Radical Honesty",
    desc: "Realistic expectations, strategy validation before invoices, focus on P&L and long-term valuation.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    desc: "$80M+ FDV impact, 220K+ engaged users, $5M+ on-chain volume, 10x–18x growth, 3–6x ROI.",
  },
];

export const WhyUsSection = () => {
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
            Why Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            We Don't Do{" "}
            <span className="text-gradient-gold">Generic Marketing</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg">
            We engineer market systems that users, capital, and protocols trust
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
                
                <div className="relative card-metallic rounded-2xl p-8 h-full transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/25 group-hover:shadow-[0_0_25px_hsl(40_92%_52%/0.12)] transition-all duration-500">
                      <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
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
