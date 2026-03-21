import { motion } from "framer-motion";
import { useMemo } from "react";

export const FloatingParticles = ({ count = 30 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.3 + 0.05,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: `hsl(40 92% 52% / ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 4}px hsl(40 92% 52% / ${p.opacity * 0.5})`,
          }}
          animate={{
            y: ["100vh", "-10vh"],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
