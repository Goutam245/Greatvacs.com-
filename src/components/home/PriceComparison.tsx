import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const PriceComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-4">
            Smart Savings
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Buying a High-End Vacuum?{" "}
            <span className="italic">You Have Options.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Why pay full dealer price when you can get the same legendary
            performance for a fraction of the cost?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* New from dealer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                New from Dealer
              </p>
              <p className="font-stats text-4xl font-bold text-foreground">
                $2,500–$3,000
              </p>
            </div>
            <div className="space-y-4">
              {[
                { text: "High-pressure in-home sales demo", bad: true },
                { text: "3-year warranty (Kirby)", bad: false },
                { text: "Only 30-day return (Kirby)", bad: true },
                { text: "Brand new condition", bad: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {item.bad ? (
                    <X className="h-4 w-4 text-ruby shrink-0" />
                  ) : (
                    <Check className="h-4 w-4 text-emerald shrink-0" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rebuilt from GreatVacs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 border-2 border-accent relative luxury-shadow"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rose-gradient px-5 py-1.5 rounded-full shadow-md">
              <span className="text-xs font-bold text-primary tracking-wide uppercase">
                Best Value
              </span>
            </div>
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
                Rebuilt from GreatVacs
              </p>
              <p className="font-stats text-4xl font-bold text-foreground">
                ~$1,000
              </p>
              <p className="text-sm text-emerald font-semibold mt-1">
                Save up to $2,000
              </p>
            </div>
            <div className="space-y-4">
              {[
                "No pressure — shop online at your pace",
                "5-year bumper-to-bumper warranty",
                "60-day money-back guarantee",
                "Professionally rebuilt like new",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14 text-muted-foreground italic font-display text-lg"
        >
          "Save $2,000 and put that money in your kid's college fund."
        </motion.p>
      </div>
    </section>
  );
};

export default PriceComparison;
