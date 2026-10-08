"use client";

import BookingBar from "@/components/widgets/BookingBar";
import { AnimatedSection } from "@/components/sections/animated-section";

export function BookingSection() {
  return (
    <section id="reservar" className="py-16 px-4 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 text-brand-charcoal">
            Reservá Tu Estadía
          </h2>
          <p className="text-lg text-brand-olive max-w-2xl mx-auto">
            Selecciona tus fechas y cantidad de huéspedes para consultar
            disponibilidad
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={200} className="w-full">
          <BookingBar />
        </AnimatedSection>
      </div>
    </section>
  );
}
