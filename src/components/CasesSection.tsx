import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import logoEvedex from "@/assets/logo-evedex.png";
import logoSwitchboard from "@/assets/logo-switchboard.png";
import logoConcordium from "@/assets/logo-concordium.png";
import logoFurm from "@/assets/logo-furm.png";

const cases = [
  {
    name: "EVEDEX",
    logo: logoEvedex,
    tag: "Perpetual DEX",
    stats: [
      { value: "$5M+", label: "Volume" },
      { value: "200+", label: "Whales" },
      { value: "10x", label: "Growth" },
    ],
    desc: "Built sustainable viral loops that generated $5M+ volume with 200+ whale participants through coordinated alpha activation.",
    link: "https://evedex.com/",
    highlight: "$5M+",
  },
  {
    name: "Switchboard",
    logo: logoSwitchboard,
    tag: "Oracle Infrastructure",
    stats: [
      { value: "$15K+", label: "Staked" },
      { value: "3x", label: "ROI" },
      { value: "20K+", label: "Growth" },
    ],
    desc: "Drove $15K+ in new staked capital with 3x ROI through 70+ alpha servers and 15 strategic partnerships.",
    link: "https://switchboard.xyz/",
    highlight: "3x ROI",
  },
  {
    name: "Concordium",
    logo: logoConcordium,
    tag: "L1 Blockchain",
    stats: [
      { value: "+30%", label: "Price Impact" },
      { value: "150K+", label: "Impressions" },
      { value: "$15.7", label: "CPM" },
    ],
    desc: "Delivered +30% price impact and acquired long-term holders through organic alpha activation across 50+ communities.",
    link: "https://concordium.com/",
    highlight: "+30%",
  },
  {
    name: "$FURM",
    logo: logoFurm,
    tag: "MemeCoin / Efficiency",
    stats: [
      { value: "+50%", label: "Market Cap" },
      { value: "250K+", label: "Impressions" },
      { value: "$2-3M", label: "Volume" },
    ],
    desc: "Turned inefficient alpha traffic into real market momentum with 250+ alpha calls and clustered timing strategy.",
    link: "https://furmula.games/",
    highlight: "+50%",
  },
];

export const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="cases" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-premium" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="text-primary/70 font-medium text-xs tracking-[0.25em] uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            See What This Looks Like{" "}
            <span className="text-gradient-gold">for You</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto text-lg"
        >
          Real results for Web3 protocols that fixed their systems before scaling
        </motion.p>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-2xl"
            >
              {/* Animated border glow */}
              <div
                className={`absolute -inset-[1px] rounded-2xl transition-all duration-700 ${
                  hoveredCard === i
                    ? "opacity-100 bg-gradient-to-b from-primary/50 via-primary/15 to-transparent"
                    : "opacity-0 bg-gradient-to-b from-primary/20 to-transparent"
                }`}
              />

              <div className="relative card-metallic rounded-2xl p-6 h-full flex flex-col transition-all duration-500 overflow-hidden">
                {/* Hover inner glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo + link */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg overflow-hidden bg-muted/20 border border-border/50 flex items-center justify-center">
                      <img src={c.logo} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground/50 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-1">
                    {c.name}
                  </h3>
                  <span className="text-[10px] text-primary/50 font-mono tracking-wider uppercase mb-6">
                    {c.tag}
                  </span>

                  {/* Highlight stat */}
                  <div className="flex items-center gap-2 mb-5 py-3 px-4 rounded-lg bg-primary/[0.04] border border-primary/10">
                    <TrendingUp className="w-3.5 h-3.5 text-primary/60" />
                    <span className="font-display text-lg font-bold text-primary glow-text">
                      {c.highlight}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2.5 mb-5 flex-1">
                    {c.stats.map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between">
                        <span className="text-[11px] text-muted-foreground/70 uppercase tracking-wide">
                          {s.label}
                        </span>
                        <span className="font-display text-base font-bold text-foreground/90">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent mb-4" />

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
