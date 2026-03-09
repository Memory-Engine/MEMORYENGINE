import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/15 blur-[150px] rounded-full" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Engineer{" "}
            <span className="text-primary glow-text">Real Growth?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            If you're building something real and ready to turn attention into sustained growth — MEMORY ENGINE is ready when you are.
          </p>

          <a
            href="https://cal.com/potik"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-purple"
          >
            Book Your Strategic Scoping Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-sm text-muted-foreground mt-6">
            Free consultation · No commitment · Strategy validation first
          </p>
        </motion.div>
      </div>
    </section>
  );
};
