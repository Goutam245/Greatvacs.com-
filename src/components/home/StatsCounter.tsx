import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 100000, suffix: "+", label: "Vacuums Rebuilt" },
  { value: 25, suffix: "+", label: "Years in Business" },
  { value: 10000, suffix: "+", label: "Customer Reviews" },
  { value: 5, suffix: "-Year", label: "Warranty" },
];

const AnimatedNumber = ({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-stats text-4xl md:text-5xl font-bold text-accent">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-background border-y border-border/50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
