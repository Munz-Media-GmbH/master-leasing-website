import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WasWirLeasenSection from "@/components/WasWirLeasenSection";
import WhySection from "@/components/WhySection";
import Testimonials from "@/components/Testimonials";
import VehiclesSection from "@/components/VehiclesSection";
import SaleLeaseBack from "@/components/SaleLeaseBack";
import ContactCTA from "@/components/ContactCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { getVehicles } from "@/lib/sanity";

export default async function Home() {
  const vehicles = await getVehicles();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <AboutSection />
        <ServicesSection />
        <WasWirLeasenSection overline="Was wir für Sie leasen" />
        <WhySection />
        <Testimonials />
        <VehiclesSection vehicles={vehicles} />
        <SaleLeaseBack hideFaq hideProcess hideOverview hideCases />
        <FAQSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
