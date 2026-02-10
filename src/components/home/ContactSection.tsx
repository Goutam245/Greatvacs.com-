import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import warehouseImage from "@/assets/greatvacs-warehouse.png";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto link with pre-filled info
    const subject = encodeURIComponent(`Contact from ${formData.name}${formData.orderNumber ? ` - Order #${formData.orderNumber}` : ""}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n${formData.orderNumber ? `Order Number: ${formData.orderNumber}\n` : ""}\n${formData.message}`);
    window.location.href = `mailto:service@greatvacs.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening your email client...",
      description: "Your message details have been pre-filled. Just hit send!",
    });
  };

  return (
    <section className="py-24 bg-secondary" ref={ref} id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-wide-luxury uppercase text-sm font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            We're Here to <span className="italic">Help</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Email is the quickest way to reach us. Include your order number and
            product name for faster assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Email Us</h3>
                  <a href="mailto:service@greatvacs.com" className="text-accent hover:underline text-sm">
                    service@greatvacs.com
                  </a>
                  <p className="text-muted-foreground text-xs mt-1">Quickest way to reach us</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:18887729227" className="text-accent hover:underline text-sm">
                    1-888-77-VACS (1-888-772-9227)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Our Office</h3>
                  <p className="text-muted-foreground text-sm">
                    Great Vacs, LLC<br />
                    138 E 12300 S, Unit #885<br />
                    Draper, UT 84020
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1 italic">
                    For returns, please email service@greatvacs.com for the returns address.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon – Fri: 9:00 AM – 5:00 PM (MST)<br />
                    Sat – Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Warehouse Image */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={warehouseImage}
                alt="GreatVacs warehouse and facility"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border luxury-shadow space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                  Full Name *
                </label>
                <Input
                  id="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="orderNumber" className="text-sm font-medium text-foreground mb-1.5 block">
                  Order Number (if applicable)
                </label>
                <Input
                  id="orderNumber"
                  placeholder="#12345"
                  value={formData.orderNumber}
                  onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="How can we help you? Please include the product name you're inquiring about."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button variant="luxury" className="w-full" type="submit">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                This will open your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
