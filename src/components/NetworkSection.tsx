import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Megaphone, Pen } from "lucide-react";

const networkStats = [
  {
    icon: Users,
    value: "200+",
    title: "FnF Circles & Whale Syndicates",
    desc: "High-conviction capital aligned with protocol health",
  },
  {
    icon: Megaphone,
    value: "2000+",
    title: "Verified KOLs",
    desc: "On-chain performance, not follower counts",
  },
  {
    icon: Pen,
    value: "700+",
    title: "Narrative Creators",
    desc: "Shaping category-level discourse",
  },
];

// Placeholder — will update when user provides real data from spreadsheet
const languages = [
  { flag: "🇺🇸", name: "English", pct: 45 },
  { flag: "🇨🇳", name: "Chinese", pct: 20 },
  { flag: "🇰🇷", name: "Korean", pct: 12 },
  { flag: "🇯🇵", name: "Japanese", pct: 8 },
  { flag: "🇷🇺", name: "Russian", pct: 7 },
  { flag: "🇹🇷", name: "Turkish", pct: 5 },
  { flag: "🇻🇳", name: "Vietnamese", pct: 3 },
];

export const NetworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="network" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary/70 font-medium text-xs tracking-[0.25em] uppercase mb-4 block">
            Distribution
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Network as{" "}
            <span className="text-gradient-gold">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg">
            Closed distribution channels most agencies can't access
          </p>
        </motion.div>

        {/* Network stat cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {networkStats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
                
                <div className="relative card-metallic rounded-2xl p-8 text-center h-full transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-primary/[0.04] to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-primary/[0.06] border border-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 group-hover:border-primary/25 group-hover:shadow-[0_0_30px_hsl(40_92%_52%/0.12)] transition-all duration-500">
                      <Icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="font-display text-5xl font-bold text-primary glow-text mb-3">
                      {item.value}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Language distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-40" />
          <div className="relative card-metallic rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-xl font-bold text-foreground mb-8 text-center">
              The Languages Our KOLs Speak
            </h3>
            <div className="max-w-2xl mx-auto space-y-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
                  className="flex items-center gap-4 group/bar"
                >
                  <span className="text-lg w-8 text-center">{lang.flag}</span>
                  <span className="text-sm text-foreground/80 w-24 shrink-0">{lang.name}</span>
                  <div className="flex-1 h-2.5 rounded-full bg-muted/50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + i * 0.06, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent group-hover/bar:shadow-[0_0_12px_hsl(40_92%_52%/0.3)] transition-shadow duration-300"
                    />
                  </div>
                  <span className="text-sm font-mono text-primary/80 w-10 text-right">{lang.pct}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
