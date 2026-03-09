import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Megaphone, Cog } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "TRAFFIC",
    color: "primary",
    items: [
      {
        name: "Alpha Groups",
        desc: "Private Discord communities where the most active Web3 participants gather. Your project spreads through people users already trust.",
      },
      {
        name: "Content Creators",
        desc: "Top-tier authors create deep threads, videos, and reviews around the project, building trust through storytelling.",
      },
      {
        name: "FnF & Cabals",
        desc: "Exclusive channels for whales, professional traders, and KOLs with high PNL. Real hype and liquidity around your token.",
      },
      {
        name: "High-Intent Streaming",
        desc: "Top streamers in Crypto/Gambling niches. Emotional traffic that converts users directly during the stream.",
      },
      {
        name: "Strategic Collabs",
        desc: "Partnerships with major crypto communities using gamified mechanisms for direct overflow of active users.",
      },
    ],
  },
  {
    icon: Megaphone,
    title: "MEDIA",
    color: "accent",
    items: [
      {
        name: "Content Production & Narrative",
        desc: "We transform complex technologies into investor-friendly narratives with posts and memetic content that resonate.",
      },
      {
        name: "Twitter Authority & Ecosystem",
        desc: "We turn your X account into a powerful asset — algorithmic visibility, Tier-1 followers (VCs/Founders), key discussions.",
      },
      {
        name: "Strategic Partnerships",
        desc: "Building relationships that expand the audience and open co-marketing opportunities across ecosystems.",
      },
      {
        name: "Direct AMAs",
        desc: "Real-time Q&A sessions in partner communities, converting viewers into project supporters.",
      },
    ],
  },
  {
    icon: Cog,
    title: "PRODUCT",
    color: "primary",
    items: [
      {
        name: "GTM Strategy & Marketing Mechanics",
        desc: "We align narrative, tokenomics, and distribution into a unified growth architecture that de-risks your launch.",
      },
      {
        name: "Community Architecture & Retention",
        desc: "We build on-chain tribes with retention loops, referral mechanics, and value-aligned incentive systems.",
      },
    ],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Full Spectrum{" "}
            <span className="text-primary glow-text">Growth Coverage</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.title}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground glow-purple"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                {s.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services[activeTab].items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group"
            >
              <h4 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.name}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
