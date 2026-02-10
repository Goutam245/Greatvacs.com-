import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/greatvacs-logo.png";

const footerLinks = {
  Shop: [
    { label: "Rebuilt Kirby Vacuums", href: "https://www.greatvacs.com/collections/kirby-vacuum-cleaners" },
    { label: "Rebuilt Rainbow Vacuums", href: "https://www.greatvacs.com/collections/rainbow-vacuum-cleaners" },
    { label: "Parts & Supplies", href: "https://www.greatvacs.com/collections/vacuum-parts" },
    { label: "All Brands", href: "https://www.greatvacs.com/collections/see-all-brands" },
  ],
  Company: [
    { label: "About GreatVacs", href: "https://www.greatvacs.com/pages/about-greatvacs" },
    { label: "Education Center", href: "https://www.greatvacs.com/pages/education-center" },
    { label: "Blog", href: "https://www.greatvacs.com/blogs/news" },
    { label: "Contact Us", href: "#contact" },
  ],
  Support: [
    { label: "Delivery Policy", href: "https://www.greatvacs.com/pages/delievery-policy" },
    { label: "Refund Policy", href: "https://www.greatvacs.com/pages/refund-policy" },
    { label: "Terms of Service", href: "https://www.greatvacs.com/pages/terms-of-service" },
    { label: "Privacy Policy", href: "https://www.greatvacs.com/pages/privacy-policy" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-section">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src={logo}
                alt="GreatVacs - We Know Clean!"
                className="h-14 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6 max-w-sm">
              Professionally rebuilding high-end Kirby and Rainbow vacuum
              cleaners since 1998. Over 100,000 vacuums rebuilt with care and
              expertise.
            </p>
            <div className="space-y-3">
              <a
                href="tel:18887729227"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>1-888-77-VACS</span>
              </a>
              <a
                href="mailto:service@greatvacs.com"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>service@greatvacs.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Great Vacs, LLC<br />138 E 12300 S, Unit #885<br />Draper, UT 84020</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wide mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-primary-foreground/50 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-xs">
            © {currentYear} GreatVacs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.greatvacs.com/pages/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/30 hover:text-accent transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="https://www.greatvacs.com/pages/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/30 hover:text-accent transition-colors text-xs">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
