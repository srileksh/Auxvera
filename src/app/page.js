import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import ProductSection from "@/components/ProductSection";
import ServicesSection from "@/components/ServiceSection";
import WhyUsSection from "@/components/WhyUsSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <ProductSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
}
