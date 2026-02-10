import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, RotateCcw, Truck, Headphones } from "lucide-react";

const guarantees = [
  {
    icon: RotateCcw,
    title: "60-Day Money Back",
    description:
      "Try it in your home risk-free. Not satisfied? Full refund, no questions asked.",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description:
      "Our bumper-to-bumper warranty beats the competition. Longer than buying new.",
  },
  {
    icon: Truck,
    title: "Ships from USA",
    description:
      "Fast, secure shipping directly from our facility in Montpelier, Idaho.",
  },
  {
    icon: Headphones,
    title: "Real Humans",
    description:
      "Talk to actual vacuum experts who know these machines inside and out.",
  },
];

const RiskReversal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 dark-section relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-4">
            Our Promise
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Try It in Your Home —{" "}
            <span className="italic text-accent">Risk Free</span>
          </h2>
          <p className="text-primary-foreground/55 text-lg max-w-2xl mx-auto">
            We remove every barrier to your confidence. If you're not delighted,
            neither are we.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-base font-semibold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-primary-foreground/45 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
