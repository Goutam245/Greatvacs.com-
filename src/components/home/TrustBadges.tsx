import { Shield, Award, Flag, Clock, Star, Wrench } from "lucide-react";

const badges = [
  { icon: Flag, label: "Made in USA" },
  { icon: Clock, label: "25+ Years" },
  { icon: Wrench, label: "100,000+ Rebuilt" },
  { icon: Shield, label: "5-Year Warranty" },
  { icon: Star, label: "60-Day Guarantee" },
  { icon: Award, label: "BBB Accredited" },
];

const TrustBadges = () => {
  return (
    <section
      id="trust"
      className="py-5 bg-background border-b border-border/50 overflow-hidden"
    >
      <div className="flex animate-scroll-left" style={{ width: "200%" }}>
        {[...badges, ...badges].map((badge, i) => (
          <div key={i} className="flex items-center gap-2.5 px-10 shrink-0">
            <badge.icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide whitespace-nowrap">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
