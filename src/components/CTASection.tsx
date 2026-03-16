import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Send } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[180px] rounded-full" style={{ background: "hsl(40 92% 52% / 0.1)" }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your competitors are building growth systems{" "}
            <span className="text-gradient-gold">right now</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            The question isn't whether you need one — it's whether you'll build it before they lock up your category.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/potik"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-gold"
            >
              Book Strategic Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://t.me/memoryengine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold rounded-2xl border border-border hover:border-primary/40 text-foreground hover:text-primary transition-all duration-300"
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
