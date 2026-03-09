import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: string;
  className?: string;
}

export const AnimatedCounter = ({ target, className }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const match = target.match(/[\d.]+/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const numericStr = match[0];
    const numericValue = parseFloat(numericStr);
    const prefix = target.slice(0, match.index);
    const suffix = target.slice((match.index || 0) + numericStr.length);
    const hasDecimal = numericStr.includes(".");
    const decimalPlaces = hasDecimal ? numericStr.split(".")[1]?.length || 0 : 0;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (numericValue - start) * eased;

      const formatted = hasDecimal ? current.toFixed(decimalPlaces) : Math.floor(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setDisplay(`${prefix}0${suffix}`);
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
