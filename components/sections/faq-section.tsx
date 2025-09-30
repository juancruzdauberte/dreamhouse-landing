"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/sections/animated-section";
import { useState } from "react";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      question: "¿Cuál es la capacidad máxima de la propiedad?",
      answer:
        "Dreamhouse puede alojar cómodamente hasta 9 personas en 3 dormitorios con camas matrimoniales e individuales. Contamos con ropa de cama de alta  para todos los huéspedes pero no incluimos toallas de baño.",
    },
    {
      question: "¿Qué incluye el alquiler?",
      answer:
        "El alquiler incluye acceso completo a la propiedad, WiFi gratuito, uso de la piscina, parrilla, cocina totalmente equipada, aire acondicionado, Smart TV con Netflix y estacionamiento.",
    },
    {
      question: "¿Cuáles son las políticas de check-in y check-out?",
      answer:
        "El check-in es a partir de las 12:00 hs del mediodía y el check-out es a las 10:00 hs de la mañana. En caso de quedarse hasta luego del horario de check-out se debe abonar un adicional",
    },
    {
      question: "¿Se permiten mascotas?",
      answer: "Sí, aceptamos todo tipo de mascotas y mas de una.",
    },
    {
      question: "¿Qué actividades hay cerca de la propiedad?",
      answer:
        "Baradero ofrece navegación por el río Baradero y Paraná, visitas a estancias históricas, pesca deportiva, vistas extraordinarias, espacios verdes, restaurantes históricos.",
    },
    {
      question: "¿Cómo llegar desde Capital Federal?",
      answer:
        "Baradero está a 130km de Buenos Aires (2 horas en auto por Ruta 9).",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h6 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Preguntas Frecuentes
          </h6>
          <p className="text-xl text-muted-foreground">
            Resolvemos todas tus dudas sobre tu estadía
          </p>
        </AnimatedSection>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          value={openItem || ""}
          onValueChange={(value) => setOpenItem(value)}
        >
          {faqs.map((faq, index) => {
            const itemValue = `item-${index}`;
            const isActive = openItem === itemValue;

            return (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <AccordionItem
                  value={itemValue}
                  className={`bg-white rounded-lg px-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-primary/20`}
                >
                  <AccordionTrigger className="cursor-pointer text-left hover:no-underline py-6 transition-colors duration-200 ">
                    <span
                      className={`font-semibold ${
                        isActive &&
                        "border-b text-primary hover:text-primary/70"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
