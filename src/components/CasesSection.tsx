import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
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
    desc: "Built sustainable viral loops that generated $5M+ volume with 200+ whale participants through coordinated alpha activation and community flywheel design.",
    link: "https://evedex.com/",
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
    desc: "Drove $15K+ in new staked capital with 3x ROI while strengthening positioning through 70+ alpha servers and 15 strategic partnerships.",
    link: "https://switchboard.xyz/",
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
    desc: "Delivered +30% price impact and acquired long-term holders through organic alpha activation across 50+ high-intent communities.",
    link: "https://concordium.com/",
  },
  {
    name: "$FURM",
    logo: logoFurm,
    tag: "MemeCoin / Efficiency Play",
    stats: [
      { value: "+50%", label: "Market Cap" },
      { value: "250K+", label: "Impressions" },
      { value: "$2-3M", label: "Volume" },
    ],
    desc: "Turned inefficient alpha traffic into real market momentum with 250+ alpha calls, insight-driven narrative, and clustered timing strategy.",
    link: "https://furmula.games/",
  },
];

export const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="cases" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            See What This Looks Like{" "}
            <span className="text-gradient-gold">for You</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Real results for Web3 protocols that fixed their systems before scaling
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Gold border glow on hover */}
              <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/40 via-primary/10 to-primary/5 transition-opacity duration-700 ${
                hoveredCard === i ? "opacity-100" : "opacity-0"
              }`} />

              <div className="relative card-metallic rounded-2xl p-6 h-full flex flex-col transition-all duration-500">
                {/* Metallic texture */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 1px, hsl(0 0% 100% / 0.1) 1px, transparent 2px)`,
                      backgroundSize: '4px 4px'
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo + link */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted/30 flex items-center justify-center">
                      <img src={c.logo} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors mt-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {c.name}
                  </h3>
                  <span className="text-xs text-primary/60 font-mono mb-5">{c.tag}</span>

                  {/* Divider */}
                  <div className="w-8 h-[2px] bg-gradient-to-r from-primary/60 to-transparent mb-5" />

                  {/* Stats */}
                  <div className="space-y-3 mb-5 flex-1">
                    {c.stats.map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between">
                        <span className="text-xs text-muted-foreground">{s.label}</span>
                        <span className="font-display text-lg font-bold text-primary">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
