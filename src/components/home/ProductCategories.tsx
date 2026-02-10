import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kirbyImage from "@/assets/kirby-vacuum.png";
import rainbowImage from "@/assets/rainbow-vacuum.png";

const products = [
  {
    name: "Rebuilt Kirby Vacuums",
    tagline: "Built to Last Decades",
    description:
      "Powerful, proven, and perfect for pet hair. Kirby vacuums are rated #1 most dependable vacuum in the world by Consumer Reports. Made in the USA.",
    image: kirbyImage,
    features: [
      "Powerful deep cleaning",
      "Perfect for pet hair",
      "#1 dependable vacuum",
      "Made in USA",
    ],
    cta: "Shop Kirby Vacuums",
  },
  {
    name: "Rebuilt Rainbow Vacuums",
    tagline: "Water-Based Filtration",
    description:
      "Great for allergies and air quality. Rainbow's water filtration technology captures what others miss. Rated #1 canister vacuum. Made in the USA.",
    image: rainbowImage,
    features: [
      "Water-based filtration",
      "Great for allergies",
      "#1 canister vacuum",
      "Made in USA",
    ],
    cta: "Shop Rainbow Vacuums",
  },
];

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary" ref={ref} id="products">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-4">
            Our Collection
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Two Legendary Brands,{" "}
            <span className="italic">Rebuilt Right</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 luxury-shadow hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="hero-gradient p-8 flex items-center justify-center h-72 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-accent text-sm font-medium tracking-wide uppercase mb-2">
                  {product.tagline}
                </p>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-xs text-muted-foreground">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="luxury" className="w-full group/btn">
                  {product.cta}
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
