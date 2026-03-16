import { motion } from "framer-motion";

const clients = [
  "Switchboard",
  "EVEDEX",
  "Concordium",
  "$FURM",
  "Switchboard",
  "EVEDEX",
  "Concordium",
  "$FURM",
];

export const TrustedBy = () => {
  return (
    <section className="relative py-16 overflow-hidden border-t border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground">
          We are trusted by
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center whitespace-nowrap"
        >
          {clients.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border/40 bg-card/20 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <span className="font-display text-lg font-semibold text-muted-foreground/70">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
