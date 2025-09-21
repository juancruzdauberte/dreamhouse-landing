import { HeroSection } from "@/components/sections/hero-section";
import { PropertyDescription } from "@/components/sections/property-description";
import { GallerySection } from "@/components/sections/gallery-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { FAQSection } from "@/components/sections/faq-section";
import { LocationSection } from "@/components/sections/location-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layouts/footer";
import { FloatingNavbar } from "@/components/layouts/floating-navbar";
import { AnimatedSection } from "@/components/sections/animated-section";
import { WhatsAppFloat } from "@/components/widgets/whatsapp-float";
import AvailabilitySection from "@/components/sections/availability-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      <WhatsAppFloat />
      <div id="hero">
        <HeroSection />
      </div>
      <AnimatedSection animation="fadeInUp" delay={200}>
        <div id="descripcion">
          <PropertyDescription />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fadeInLeft" delay={300}>
        <div id="galeria">
          <GallerySection />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fadeInRight" delay={200}>
        <div id="servicios">
          <AmenitiesSection />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={300}>
        <div id="disponibilidad">
          <AvailabilitySection />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={300}>
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection animation="scaleIn" delay={200}>
        <div id="ubicacion">
          <LocationSection />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <div id="reservar">
          <CTASection />
        </div>
      </AnimatedSection>
      <Footer />
    </main>
  );
}
