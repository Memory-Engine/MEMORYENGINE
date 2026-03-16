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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="network" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Distribution
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Network as{" "}
            <span className="text-gradient-gold">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Closed distribution channels most agencies can't access
          </p>
        </motion.div>

        {/* 3 network stat cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {networkStats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="group relative rounded-2xl card-metallic p-8 text-center hover:border-primary/30 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-4xl font-bold text-primary glow-text mb-2">
                    {item.value}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Language distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-2xl card-metallic p-8"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            The Languages Our KOLs Speak
          </h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
                className="flex items-center gap-4"
              >
                <span className="text-lg w-8 text-center">{lang.flag}</span>
                <span className="text-sm text-foreground w-24 shrink-0">{lang.name}</span>
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.pct}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.06, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
                <span className="text-sm font-mono text-primary w-10 text-right">{lang.pct}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
