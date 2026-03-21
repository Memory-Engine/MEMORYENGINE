import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Send } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] blur-[200px] rounded-full"
          style={{ background: "hsl(40 92% 52% / 0.08)" }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/15 bg-primary/[0.04] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary/80 font-medium tracking-[0.15em] uppercase">
              Limited Availability
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.05]">
            Your competitors are building growth systems{" "}
            <span className="text-gradient-gold">right now</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed">
            The question isn't whether you need one — it's whether you'll build it before they lock up your category.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/potik"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-primary text-primary-foreground transition-all duration-500 glow-gold hover:glow-gold-intense overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative">Book Strategic Call</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://t.me/memoryengine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold rounded-2xl border border-border/80 hover:border-primary/30 text-foreground/80 hover:text-primary transition-all duration-500 hover:bg-primary/[0.03]"
            >
              <Send className="w-5 h-5" />
              @memoryengine
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
