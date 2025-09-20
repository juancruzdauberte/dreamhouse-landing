"use client";

import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Users, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/ContactForm";

export function CTASection() {
  return (
    <section id="reservar" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fadeInUp" className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6 text-balance">
            ¿Listo para tu Escape Soñado?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Reserva ahora y asegura tu lugar en el paraíso. Tu experiencia
            perfecta te está esperando.
          </p>
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection
          animation="scaleIn"
          delay={200}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            {
              icon: Star,
              text: "Calificación 5 estrellas",
              iconClass: "fill-yellow-400 text-yellow-400",
            },
            { icon: Calendar, text: "Cancelación flexible" },
            { icon: Users, text: "Hasta 9 huéspedes" },
            { icon: Shield, text: "Reserva segura" },
          ].map((item, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 hover:scale-105 transition-transform duration-200 hover:shadow-md"
            >
              <item.icon className={`h-4 w-4 ${item.iconClass || ""}`} />
              <span>{item.text}</span>
            </Badge>
          ))}
        </AnimatedSection>

        <ContactForm />

        <AnimatedSection
          animation="fadeIn"
          delay={600}
          className="mt-8 text-sm text-muted-foreground"
        >
          <p>
            Respuesta garantizada en menos de 2 horas • Atención personalizada •
            Mejor precio directo
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
