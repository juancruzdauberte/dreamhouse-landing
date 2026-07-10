"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/sections/animated-section";
import { CreditCard, CalendarX, PawPrint, Clock } from "lucide-react";

const policies = [
  {
    icon: CreditCard,
    title: "Reserva con Seña",
    body: "La reserva se confirma abonando el 30% de la estadía.",
  },
  {
    icon: CalendarX,
    title: "Reembolso Reprogramado",
    body: "Una vez señada la reserva no se realiza reembolso del dinero. El cambio de la fecha puede reprogramarse; el precio puede variar según la fecha elegida.",
  },
  {
    icon: PawPrint,
    title: "Mascotas Bienvenidas",
    body: "Aceptamos todo tipo de mascotas, sin límite de cantidad.",
  },
  {
    icon: Clock,
    title: "Check-in / Check-out",
    body: "Check-in: 12:00 hs. Check-out: 10:00 hs. Late check-out disponible con costo adicional, consultanos.",
  },
];

export function PoliciesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Políticas
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitás saber antes de reservar
          </p>
        </AnimatedSection>

        <Accordion type="single" collapsible className="space-y-4">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <AnimatedSection
                key={policy.title}
                animation="fadeInUp"
                delay={index * 100}
              >
                <AccordionItem
                  value={policy.title}
                  className="bg-white rounded-lg px-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-primary/20"
                >
                  <AccordionTrigger className="cursor-pointer text-left hover:no-underline py-6">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary shrink-0" />
                      <span className="font-semibold">{policy.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {policy.body}
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
