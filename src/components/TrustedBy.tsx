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
    <section className="relative py-16 overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase font-medium">
          Trusted by
        </span>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-3 shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-500"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-muted/10">
                <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-sm font-semibold text-foreground/60 whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
