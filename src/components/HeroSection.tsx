import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const stats = [
  { value: "$80M+", label: "FDV Impact" },
  { value: "220K+", label: "Engaged Users" },
  { value: "$5M+", label: "On-Chain Volume" },
  { value: "10–18x", label: "Growth Spikes" },
  { value: "3–6x", label: "ROI Delivered" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />

      {/* Premium orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.06, 0.14, 0.06],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[20%] w-[700px] h-[700px] rounded-full blur-[200px]"
        style={{ background: "hsl(40 92% 52% / 0.1)" }}
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] rounded-full blur-[180px]"
        style={{ background: "hsl(30 80% 55% / 0.08)" }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/15 bg-primary/[0.04] mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-primary/90 font-medium tracking-[0.2em] uppercase">
            Systemic Growth for Web3
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.88] tracking-[-0.03em] mb-8"
        >
          <span className="text-gradient-gold">MEMORY</span>
          <br />
          <span className="text-gradient-gold">ENGINE</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-14 leading-relaxed"
        >
          We don't rent attention. We engineer growth systems that protocols, users, and capital{" "}
          <span className="text-foreground font-semibold">commit to</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
        >
          <a
            href="https://cal.com/potik"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold rounded-xl bg-primary text-primary-foreground transition-all duration-500 glow-gold hover:glow-gold-intense overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Book Strategic Call</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="https://t.me/memoryengine"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-xl border border-border/80 hover:border-primary/30 text-foreground/80 hover:text-primary transition-all duration-500 hover:bg-primary/[0.03]"
          >
            <Send className="w-4 h-4" />
            Contact on Telegram
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="relative"
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 opacity-60" />
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 p-8 md:p-10 rounded-2xl bg-card/50 backdrop-blur-sm">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.08 }}
                className="text-center"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary glow-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
