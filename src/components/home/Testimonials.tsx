import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    text: "I was skeptical about buying a rebuilt vacuum, but my GreatVacs Kirby works like it just came off the assembly line. Saved $1,800 and couldn't be happier!",
    product: "Kirby Avalir",
  },
  {
    name: "Michael R.",
    location: "Portland, OR",
    rating: 5,
    text: "As someone with severe allergies, the Rainbow vacuum has been life-changing. GreatVacs' rebuild quality is exceptional — you'd never know it wasn't brand new.",
    product: "Rainbow SRX",
  },
  {
    name: "Jennifer L.",
    location: "Nashville, TN",
    rating: 5,
    text: "Third vacuum from GreatVacs. The 5-year warranty gives me complete peace of mind. Their team really does know vacuums inside and out.",
    product: "Kirby Sentria",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary" ref={ref} id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-4">
            Customer Stories
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Trusted by <span className="italic">Thousands</span> of Families
          </h2>
          <p className="text-muted-foreground text-lg">
            Over 10,000 customer reviews and counting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 luxury-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 font-display text-sm italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {testimonial.location} · {testimonial.product}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
