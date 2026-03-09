import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const cases = [
  {
    name: "Switchboard",
    tag: "Oracle Infrastructure",
    stage: "Growth & Ecosystem Expansion",
    stats: [
      { value: "20,000+", label: "New Audience" },
      { value: "5,000+", label: "Discord Members" },
      { value: "300K+", label: "Impressions" },
      { value: "3x", label: "ROI" },
    ],
    desc: "Expanded cross-platform presence and drove real on-chain participation through 70+ alpha servers, 300+ community collabs, and 15 strategic partnerships.",
    link: "https://switchboard.xyz/",
  },
  {
    name: "EVEDEX",
    tag: "Perp DEX",
    stage: "Growth & Engagement",
    stats: [
      { value: "22,000+", label: "New Audience" },
      { value: "7,000+", label: "Discord Members" },
      { value: "40K+", label: "Engagements" },
      { value: "280+", label: "Collabs" },
    ],
    desc: "Scaled high-quality community with viral-ready growth mechanics through 45 alpha calls, 20 strategic partnerships, and coordinated engagement campaigns.",
    link: "https://evedex.com/",
  },
  {
    name: "Tonzo",
    tag: "On-Chain Lottery / TG Mini App",
    stage: "Pre-Launch → Active Growth",
    stats: [
      { value: "50K+", label: "MAU (from 0)" },
      { value: "16,000", label: "Community" },
      { value: "756K+", label: "Impressions" },
      { value: "$40K+", label: "Budget Saved" },
    ],
    desc: "Full-funnel audit and KOL/streamer campaign with 48 KOLs, 30 live streams, 108 promotional posts, and traffic audit that saved $40K+ in budget.",
    link: "https://t.me/tonzo_bot",
  },
  {
    name: "Concordium",
    tag: "L1 Blockchain",
    stage: "Post-Launch",
    stats: [
      { value: "+30%", label: "Price Impact" },
      { value: "150K+", label: "Impressions" },
      { value: "$15.7", label: "CPM" },
      { value: "50+", label: "Alpha Communities" },
    ],
    desc: "Activated 50+ high-intent alpha communities and coordinated 25 Tier-1/2 KOLs with structured narrative distribution and synchronized posting.",
    link: "https://concordium.com/",
  },
  {
    name: "$FURM",
    tag: "MemeCoin / Efficiency Play",
    stage: "Mid-Cap / Momentum Recovery",
    stats: [
      { value: "+50%", label: "Market Cap" },
      { value: "250K+", label: "Impressions" },
      { value: "$2-3M", label: "Campaign Volume" },
      { value: "0", label: "Dump Pressure" },
    ],
    desc: "Turned inefficient alpha traffic into real market momentum with 250+ alpha calls, coordinated insight-driven narrative, and clustered timing strategy.",
    link: "https://furmula.games/",
  },
  {
    name: "Bluff",
    tag: "iGaming Platform",
    stage: "Growth / Launch Support",
    stats: [
      { value: "230K+", label: "Impressions" },
      { value: "200+", label: "Smart Followers" },
      { value: ">$5M", label: "Wallet Volume" },
      { value: "110", label: "FNF Groups" },
    ],
    desc: "KOL and streamer-driven campaign with 27 KOLs, 12 live streams, promo creative packs, and coordinated posting schedules for maximum visibility.",
    link: "https://bluff.com/",
  },
];

export const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="cases" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Proven <span className="text-primary glow-text">Results</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="group relative rounded-2xl cursor-pointer"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/50 group-hover:via-accent/30 group-hover:to-primary/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              <div className="relative p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm group-hover:border-transparent group-hover:bg-card/50 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <span className="text-xs text-primary/70 font-mono">{c.tag}</span>
                  </div>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                  {c.stage}
                </span>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-lg font-bold text-primary">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>

                <p className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                  expanded === i ? "" : "line-clamp-2"
                }`}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
