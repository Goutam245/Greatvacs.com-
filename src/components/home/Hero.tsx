import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import kirbyImage from "@/assets/kirby-vacuum.png";
import rainbowImage from "@/assets/rainbow-vacuum.png";

const Hero = () => {
  const fullText = "Premium Quality. Fraction of the Price.";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1200);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 60%, hsl(13 60% 78% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, hsl(13 60% 78% / 0.06) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Kirby — Left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="absolute left-0 bottom-0 hidden lg:block"
      >
        <img
          src={kirbyImage}
          alt="Professionally rebuilt Kirby vacuum cleaner"
          className="h-[70vh] object-contain opacity-75 drop-shadow-2xl"
        />
      </motion.div>

      {/* Rainbow — Right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        className="absolute right-0 bottom-0 hidden lg:block"
      >
        <img
          src={rainbowImage}
          alt="Professionally rebuilt Rainbow vacuum cleaner"
          className="h-[70vh] object-contain opacity-75 drop-shadow-2xl"
        />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-6"
        >
          Professionally Rebuilt Since 1998
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
        >
          Kirby & Rainbow Vacuums,{" "}
          <span className="italic text-accent">Reborn.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-2 h-10"
        >
          <p className="font-display text-xl md:text-2xl text-primary-foreground/80">
            {displayText}
            {showCursor && (
              <span className="animate-pulse text-accent">|</span>
            )}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-primary-foreground/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Save up to $2,000 vs buying new — backed by a 5-year warranty and
          60-day money-back guarantee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl">
            Shop Kirby Vacuums
          </Button>
          <Button variant="heroOutline" size="xl">
            Shop Rainbow Vacuums
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#trust" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-accent animate-bounce-gentle" />
        </a>
      </motion.div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path
            d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z"
            fill="#FAFAF9"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
