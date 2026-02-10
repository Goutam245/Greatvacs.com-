import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import PriceComparison from "@/components/home/PriceComparison";
import WhyGreatVacs from "@/components/home/WhyGreatVacs";
import StatsCounter from "@/components/home/StatsCounter";
import ProductCategories from "@/components/home/ProductCategories";
import BeforeAfter from "@/components/home/BeforeAfter";
import RiskReversal from "@/components/home/RiskReversal";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <PriceComparison />
        <WhyGreatVacs />
        <StatsCounter />
        <ProductCategories />
        <BeforeAfter />
        <RiskReversal />
        <Testimonials />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
