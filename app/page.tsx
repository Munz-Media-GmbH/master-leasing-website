import type { Metadata } from "next";
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
import RatgeberTeaser from "@/components/RatgeberTeaser";
import Footer from "@/components/Footer";
import { getVehiclesForListing } from "@/lib/sanity";

// Canonical nur für die Startseite (nicht im Root-Layout, sonst erben alle Seiten ohne
// eigenen Canonical – z.B. Fahrzeug-Detailseiten – die Startseite als Canonical)
export const metadata: Metadata = {
  alternates: { canonical: "https://master-leasing.com/" },
};

export default async function Home() {
  const vehicles = await getVehiclesForListing();

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
        <SaleLeaseBack hideFaq hideProcess hideOverview hideCases landingLink />
        <RatgeberTeaser />
        <FAQSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
