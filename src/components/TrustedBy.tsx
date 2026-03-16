import { motion } from "framer-motion";
import logoEvedex from "@/assets/logo-evedex.png";
import logoSwitchboard from "@/assets/logo-switchboard.png";
import logoConcordium from "@/assets/logo-concordium.png";
import logoFurm from "@/assets/logo-furm.png";

const clients = [
  { name: "EVEDEX", logo: logoEvedex },
  { name: "Switchboard", logo: logoSwitchboard },
  { name: "Concordium", logo: logoConcordium },
  { name: "$FURM", logo: logoFurm },
  { name: "EVEDEX", logo: logoEvedex },
  { name: "Switchboard", logo: logoSwitchboard },
  { name: "Concordium", logo: logoConcordium },
  { name: "$FURM", logo: logoFurm },
];

export const TrustedBy = () => {
  return (
    <section className="relative py-16 overflow-hidden border-t border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground">
          We are trusted by
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center whitespace-nowrap"
        >
          {clients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted/20">
                <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-lg font-semibold text-muted-foreground/60">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
