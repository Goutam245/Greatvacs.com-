import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Shield, Award, Users } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "100,000+ Rebuilt",
    description:
      "Over 25 years rebuilding and servicing high-end vacuums. We know what fails, what lasts, and what's worth rebuilding.",
  },
  {
    icon: Shield,
    title: "Only the Best",
    description:
      "As the largest rebuilder in the US, we get first pick. We only select vacuums already in excellent condition.",
  },
  {
    icon: Award,
    title: "Expert Technicians",
    description:
      "Every vacuum is reconditioned, inspected, and tested by experienced USA-based technicians who know their craft.",
  },
  {
    icon: Users,
    title: "Real Support",
    description:
      "Real humans available when you need help. No chatbots, no runaround — just genuine expert assistance.",
  },
];

const WhyGreatVacs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref} id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-4">
            Why GreatVacs
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Experience <span className="italic">Matters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't sell everything. We focus on doing a few things extremely
            well.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGreatVacs;
