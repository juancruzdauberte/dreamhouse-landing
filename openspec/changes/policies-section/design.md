# Design — policies-section

## policies-section.tsx (complete file)

**Path:** `components/sections/policies-section.tsx`

```tsx
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
    title: "Sin Reembolso",
    body: "Una vez señada la reserva no se realiza reembolso. La fecha puede reprogramarse; el precio puede variar según la fecha elegida.",
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
              <AnimatedSection key={policy.title} animation="fadeInUp" delay={index * 100}>
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
```

## app/page.tsx (diff)

**Add import** alongside other section imports at the top:

```diff
+ import { PoliciesSection } from "@/components/sections/policies-section";
```

**Insert JSX** after the `<div id="disponibilidad">` block and before the FAQSection line:

```diff
+ <AnimatedSection animation="fadeInUp" delay={200}>
+   <div id="politicas">
+     <PoliciesSection />
+   </div>
+ </AnimatedSection>
  <AnimatedSection animation="fadeInUp" delay={300}>
    <FAQSection />
  </AnimatedSection>
```

## floating-navbar.tsx (diff)

**Path:** `components/layouts/floating-navbar.tsx`

```diff
  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Galería", id: "galeria" },
    { label: "Servicios", id: "servicios" },
    { label: "Disponibilidad", id: "disponibilidad" },
+   { label: "Políticas", id: "politicas" },
    { label: "Ubicación", id: "ubicacion" },
    { label: "Contacto", id: "reservar" },
  ];
```

## Implementation Notes

- `icon` in the policies array is stored as a component reference (capitalized `Icon`), not as JSX — this avoids the React element-in-array type issue.
- `AnimatedSection` wraps each `AccordionItem` individually, consistent with the pattern used in `faq-section.tsx`.
- The section `id="politicas"` is placed on the wrapper `<div>` in `page.tsx`, **not** inside `PoliciesSection` — keeps the component reusable and scroll-target ownership in the page.
- Accordion uses shadcn/ui (`@radix-ui/react-accordion: 1.2.2`), already installed — no new dependencies required.
- `delay` values on the outer `AnimatedSection` wrappers in `page.tsx`: the new Políticas block uses `delay={200}` (matching the existing pattern), FAQSection stays at `delay={300}`.
