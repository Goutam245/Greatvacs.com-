import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 hero-gradient relative overflow-hidden" ref={ref}>
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-6 leading-tight">
            Ready to Choose the Right Vacuum{" "}
            <span className="italic text-accent">for Your Family?</span>
          </h2>
          <p className="text-primary-foreground/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join over 100,000 smart buyers who chose professionally rebuilt
            vacuums and saved thousands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Shop Kirby Vacuums
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Shop Rainbow Vacuums
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
