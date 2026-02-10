import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/greatvacs-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Kirby Vacuums", href: "#products" },
  { label: "Rainbow Vacuums", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 glass shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src={logo}
            alt="GreatVacs - We Know Clean!"
            className={cn(
              "h-12 md:h-14 object-contain transition-all duration-300",
              scrolled ? "brightness-100" : "brightness-0 invert"
            )}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent",
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:18887729227"
            className={cn(
              "flex items-center gap-2 text-sm transition-colors duration-300",
              scrolled ? "text-foreground" : "text-primary-foreground/80"
            )}
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">1-888-77-VACS</span>
          </a>
          <Button variant="luxury" size="sm" asChild>
            <a href="https://www.greatvacs.com" target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-primary-foreground")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-primary-foreground")} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 glass border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground font-medium py-2 border-b border-border/50 transition-colors hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:18887729227"
              className="flex items-center gap-2 text-foreground py-2"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span className="font-medium">1-888-77-VACS</span>
            </a>
            <Button variant="luxury" className="mt-2" asChild>
              <a href="https://www.greatvacs.com" target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
