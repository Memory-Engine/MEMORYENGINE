import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: "$80M+", label: "FDV Impact" },
  { value: "220K+", label: "Engaged Users" },
  { value: "10–18x", label: "Growth Spikes" },
  { value: "3–6x", label: "ROI Delivered" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[130px]"
      />
      {/* Third orb - cyan accent */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-[100px]"
        style={{ background: "hsl(190 90% 60% / 0.08)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm text-primary font-medium tracking-wide">Web3 Growth Architecture</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.92] tracking-tight mb-8"
        >
          <span className="text-foreground">Systematic Growth &</span>
          <br />
          <span className="glow-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Market Momentum
          </span>
          <br />
          <span className="text-foreground">for Web3</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          Most Web3 projects don't fail from lack of visibility — they fail because growth is treated as <span className="text-foreground font-medium">campaigns</span>, not <span className="text-primary font-medium">architecture</span>. We turn fleeting attention into lasting adoption.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
        >
          <a
            href="https://cal.com/potik"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-purple overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="relative">Book Strategic Call</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#cases"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5"
          >
            View Case Studies
          </a>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="text-center group"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary glow-text group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter target={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
