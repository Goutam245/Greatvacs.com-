import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Check } from "lucide-react";
import beforeImage from "@/assets/vacuum-before.png";
import afterImage from "@/assets/vacuum-after.png";

const rebuildSteps = [
  "Complete disassembly & inspection",
  "Motor serviced or replaced",
  "New belts, brushes & filters",
  "Body cleaned & polished",
  "All parts tested & certified",
  "Final quality check & packaging",
];

const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) =>
    updatePosition(e.touches[0].clientX);

  return (
    <section className="py-24 bg-background" ref={ref} id="rebuild">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-4">
            The Rebuild Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            From Worn to <span className="italic">Reborn</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every vacuum goes through our rigorous 47-point inspection and
            professional rebuild process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            ref={sliderRef}
            className="relative aspect-square rounded-2xl overflow-hidden cursor-col-resize select-none border border-border"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After (background) */}
            <img
              src={afterImage}
              alt="After professional rebuild"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before (clipped overlay) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={beforeImage}
                alt="Before rebuild"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-accent/80 z-10 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-4 bg-primary rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-primary/70 glass px-3 py-1 rounded-full pointer-events-none">
              <span className="text-xs font-medium text-primary-foreground tracking-wide">
                Before
              </span>
            </div>
            <div className="absolute top-4 right-4 bg-accent/70 glass px-3 py-1 rounded-full pointer-events-none">
              <span className="text-xs font-medium text-primary tracking-wide">
                After
              </span>
            </div>
          </motion.div>

          {/* Rebuild checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl text-foreground mb-8">
              Our 47-Point Rebuild Process
            </h3>
            <div className="space-y-5">
              {rebuildSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
