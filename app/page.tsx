import { HeroSection } from "@/components/hero-section";
import { PropertyDescription } from "@/components/property-description";
import { GallerySection } from "@/components/gallery-section";
import { AmenitiesSection } from "@/components/amenities-section";
import { FAQSection } from "@/components/faq-section";
import { LocationSection } from "@/components/location-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { FloatingNavbar } from "@/components/floating-navbar";
import { AnimatedSection } from "@/components/animated-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";

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
