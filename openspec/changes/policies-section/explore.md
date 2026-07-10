# SDD Explore — policies-section
Generated: 2026-07-10

## 1. Component Anatomy — Standard Section Pattern

All three reference sections share a consistent skeleton:

```tsx
"use client";                          // always present (client component)

import { AnimatedSection } from "@/components/sections/animated-section";
// + lucide-react icons
// + shadcn/ui cards, accordion, badges as needed

export function XxxSection() {
  const items = [ /* data array */ ];

  return (
    <section className="py-20 px-4 [bg-muted/30 optional]">
      <div className="max-w-4xl|max-w-6xl mx-auto">

        {/* Heading block */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Section Title
          </h2>
          <p className="text-xl text-muted-foreground [max-w-3xl mx-auto]">
            Subtitle
          </p>
        </AnimatedSection>

        {/* Content grid / list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-N gap-6">
          {items.map((item, index) => (
            <AnimatedSection key={index} animation="scaleIn|fadeInUp" delay={index * 100}>
              {/* Card or list item */}
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
```

### Background alternation (visual rhythm)
| Section             | Background        |
|---------------------|-------------------|
| PropertyDescription | plain (white)     |
| AmenitiesSection    | plain (white)     |
| FAQSection          | `bg-muted/30`     |
| **PoliciesSection** | **plain (white)** — alternates with FAQ's muted bg |

### Container width
- `max-w-4xl` — narrow, text-heavy (FAQ)
- `max-w-6xl` — wide, grid-based (Amenities, PropertyDescription)
- Políticas: `max-w-4xl` fits well for a 2-column card grid of 4 items

---

## 2. Key Tailwind Classes & CSS Variables

### CSS Custom Properties (globals.css :root)
```css
--background:         oklch(0.98 0.01 45)   /* warm off-white */
--foreground:         oklch(0.15 0.02 25)   /* near-black */
--primary:            oklch(0.45 0.15 35)   /* warm brown/terracotta */
--primary-foreground: oklch(0.98 0.01 45)   /* white on primary */
--secondary:          oklch(0.92 0.02 45)
--muted:              oklch(0.94 0.015 45)
--muted-foreground:   oklch(0.55 0.02 25)   /* medium gray */
--accent:             oklch(0.88 0.03 35)
--border:             oklch(0.9 0.02 45)
--radius:             0.75rem
```

### Tailwind utility classes in use
| Class                                               | Usage                              |
|-----------------------------------------------------|------------------------------------|
| `py-20 px-4`                                        | Section spacing                    |
| `max-w-4xl mx-auto` / `max-w-6xl mx-auto`          | Content container                  |
| `text-center mb-16`                                 | Heading block                      |
| `font-[family-name:var(--font-playfair)]`           | Playfair Display for h2/h6         |
| `text-4xl md:text-5xl font-bold mb-6`              | Heading size                       |
| `text-xl text-muted-foreground`                     | Subtitle                           |
| `bg-white rounded-lg px-6`                          | Card surface                       |
| `hover:shadow-md hover:scale-[1.02]`                | Card hover effect                  |
| `text-primary`                                      | Icon / accent color (warm brown)   |
| `border border-transparent hover:border-primary/20` | Subtle card border on hover        |
| `transition-all duration-300`                       | Standard transition                |
| `bg-muted/30`                                       | Alternate section background       |
| `grid sm:grid-cols-2 gap-6`                         | Two-column responsive grid         |

### Font
- Headings: `var(--font-playfair)` (Playfair Display — serif, set in Next.js font loader)
- Body: system/sans (Tailwind default)

---

## 3. Icon Library

**Library:** `lucide-react` v0.454.0

### Usage pattern (from amenities-section.tsx)
```tsx
import { Wifi, Car, Waves, ChefHat, Tv, Wind } from "lucide-react";

{ icon: <Waves className="h-8 w-8" />, title: "...", description: "..." }

// In JSX:
<div className="flex justify-center mb-4 text-primary
                transition-all duration-300
                group-hover:scale-110 group-hover:text-primary/80">
  {spec.icon}
</div>
```

### Recommended icons for the 4 policies
| Policy                                  | Icon suggestion        |
|-----------------------------------------|------------------------|
| Reserva con seña del 30%                | `CreditCard`           |
| Sin reembolso — se reprograma fecha     | `CalendarX` / `RefreshCw` |
| Se aceptan mascotas                     | `Dog` / `PawPrint`     |
| Check-in 12:00 / Check-out 10:00 hs    | `Clock`                |

---

## 4. Insertion Point in page.tsx

### Current order
```tsx
<div id="hero">          <HeroSection />           </div>
<div id="descripcion">   <PropertyDescription />   </div>
<div id="galeria">       <GallerySection />         </div>
<div id="servicios">     <AmenitiesSection />       </div>
<div id="disponibilidad"><AvailabilitySection />    </div>
                         <FAQSection />              {/* no id wrapper */}
<div id="ubicacion">     <LocationSection />        </div>
<div id="reservar">      <CTASection />             </div>
```

### Recommended insertion: **after AvailabilitySection, before FAQSection**

Rationale: Users see availability first, then understand house rules (policies) before diving into detailed Q&A. FAQSection already references these policies as answers — the Políticas card grid is the quick-scan summary, FAQ is the expanded detail.

```tsx
<AnimatedSection animation="fadeInUp" delay={200}>
  <div id="politicas"><PoliciesSection /></div>
</AnimatedSection>
```

Insert after the `disponibilidad` block and before the FAQSection line.

---

## 5. Navigation — Should "Políticas" be Added?

### Current nav items (6)
```ts
{ label: "Inicio",         id: "hero" }
{ label: "Galería",        id: "galeria" }
{ label: "Servicios",      id: "servicios" }
{ label: "Disponibilidad", id: "disponibilidad" }
{ label: "Ubicación",      id: "ubicacion" }
{ label: "Contacto",       id: "reservar" }
```

### Observation
FAQSection has no nav link and no `id` wrapper — it is intentionally excluded from the navbar. This establishes a pattern: secondary/informational sections are scroll-only.

### Recommendation: **Skip nav link for Políticas** (consistent with FAQ)
- Adding a 7th item risks layout overflow on md-breakpoint desktops.
- The section remains reachable via page scroll.
- If the user *wants* a nav link, add it; the section must have `id="politicas"` (already planned).

---

## 6. Proposed Component Structure

```tsx
// components/sections/policies-section.tsx
"use client";

import { CreditCard, RefreshCw, Dog, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/sections/animated-section";

const policies = [
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Reserva con Seña",
    description: "Se reserva abonando el 30% de la estadía.",
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Sin Reembolso",
    description: "No se realizan reembolsos. La fecha puede reprogramarse (el precio puede variar).",
  },
  {
    icon: <Dog className="h-8 w-8" />,
    title: "Mascotas Bienvenidas",
    description: "Se aceptan mascotas. Más de una es bienvenida.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Check-in / Check-out",
    description: "Check-in: 12:00 hs. Check-out: 10:00 hs. Late check-out tiene costo adicional.",
  },
];

export function PoliciesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Políticas
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitás saber antes de reservar
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
          {policies.map((policy, index) => (
            <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80">
                    {policy.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{policy.title}</h3>
                  <p className="text-sm text-muted-foreground">{policy.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 7. Gotchas & Constraints

1. **`"use client"` required** — All section components are client components.
2. **Tailwind v4, no tailwind.config.ts** — All customization lives in `globals.css`.
3. **Font class is a CSS variable** — Use `font-[family-name:var(--font-playfair)]` exactly.
4. **AnimatedSection double-wrapping** — page.tsx wraps sections in AnimatedSection; sections also use it internally. Established pattern.
5. **FAQSection already mentions policies** — Minor content overlap. Políticas = scannable summary; FAQ = expanded detail.
6. **`id="politicas"` needed** — Even if nav link is skipped, the id enables anchor links.
7. **Background rhythm** — Políticas (plain) between AvailabilitySection and FAQSection (bg-muted/30). Verify AvailabilitySection bg to avoid visual merge.
8. **lucide-react `Dog` icon** — Available in v0.454.0. `PawPrint` also available.

---

## 8. Files to Create/Modify

| Action           | File                                              |
|------------------|---------------------------------------------------|
| CREATE           | `components/sections/policies-section.tsx`        |
| MODIFY           | `app/page.tsx` — import + insert after disponibilidad |
| MODIFY (optional)| `components/layouts/floating-navbar.tsx` — add nav item if desired |

Total estimated changed lines: ~60–80 (well within 400 LOC budget).
