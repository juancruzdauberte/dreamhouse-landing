import { HeroSection } from "@/components/sections/hero-section";
import { PropertyDescription } from "@/components/sections/property-description";
import { GallerySection } from "@/components/sections/gallery-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { FAQSection } from "@/components/sections/faq-section";
import { PoliciesSection } from "@/components/sections/policies-section";
import { LocationSection } from "@/components/sections/location-section";
import { Footer } from "@/components/layouts/footer";
import { FloatingNavbar } from "@/components/layouts/floating-navbar";
import { AnimatedSection } from "@/components/sections/animated-section";
import { FloatButtons } from "@/components/widgets/float-buttons";
import { BookingSection } from "@/components/sections/booking-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      <FloatButtons />
      <div id="hero">
        <HeroSection />
      </div>
      {/* Booking Section - Formulario de Reservas */}
      <BookingSection />
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
      <AnimatedSection animation="fadeInUp" delay={200}>
        <div id="politicas">
          <PoliciesSection />
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
      <Footer />
    </main>
  );
}
