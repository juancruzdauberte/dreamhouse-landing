# Codebase Context: New "Políticas" Section

## Files Retrieved
1. `components/sections/faq-section.tsx` (full) — closest structural match for a Políticas section (accordion list, `bg-muted/30` bg variant)
2. `components/sections/amenities-section.tsx` (full) — card grid pattern, icon usage
3. `components/sections/property-description.tsx` (full) — two-column layout, Badge usage
4. `app/globals.css` (lines 1–80) — CSS custom properties / design tokens
5. `app/page.tsx` (full) — section composition, insertion point
6. `components/layouts/floating-navbar.tsx` (full) — navItems array pattern
7. `package.json` (dependencies) — icon library version

---

## Section Component Pattern

All section components follow this consistent shell:

```tsx
"use client";

import { AnimatedSection } from "@/components/sections/animated-section";

export function PoliciesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">  {/* or no bg for alternation */}
      <div className="max-w-4xl mx-auto">           {/* or max-w-6xl for wide layouts */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Title
          </h2>
          <p className="text-xl text-muted-foreground">Subtitle</p>
        </AnimatedSection>
        {/* content */}
      </div>
    </section>
  );
}
```

Key observations:
- `"use client"` always present
- `AnimatedSection` wraps heading and often each content item
- Headings use `font-[family-name:var(--font-playfair)]`
- Subtitle/body text: `text-muted-foreground`
- Section bg alternates: plain (`py-20 px-4`) vs `bg-muted/30`
- `max-w-4xl` for list/accordion content; `max-w-6xl` for grids

---

## CSS Variables / Colors Used

From `app/globals.css` `:root` (warm terracotta + cream theme, oklch):

| Token | Value | Usage |
|---|---|---|
| `--background` | `oklch(0.98 0.01 45)` | page bg (cream) |
| `--foreground` | `oklch(0.15 0.02 25)` | body text |
| `--primary` | `oklch(0.45 0.15 35)` | brand color (terracotta) |
| `--primary-foreground` | `oklch(0.98 0.01 45)` | text on primary |
| `--muted` | `oklch(0.94 0.015 45)` | section bg tint |
| `--muted-foreground` | `oklch(0.55 0.02 25)` | secondary text |
| `--secondary` | `oklch(0.92 0.02 45)` | badge/card bg |
| `--accent` | `oklch(0.88 0.03 35)` | hover states |
| `--border` | `oklch(0.9 0.02 45)` | card borders |
| `--radius` | `0.75rem` | border radius |

In-component class usage seen:
- `text-primary` — brand color on icons / active accordion item
- `bg-muted/30` — section background (FAQ, likely Políticas too)
- `hover:border-primary/20`, `hover:text-primary/70` — hover states
- `bg-white` — card/accordion item backgrounds
- CTA button hardcodes: `bg-amber-700 hover:bg-amber-900/45`

---

## Icon Library

**`lucide-react` v0.454.0**

Import example (from `amenities-section.tsx`):
```tsx
import {
  Wifi, Car, Waves, ChefHat, Tv, Wind, Utensils, Bed, Bath, TreePine
} from "lucide-react";

// Usage:
<Waves className="h-8 w-8" />

// With primary color and group hover:
<div className="flex justify-center mb-4 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80">
  <Waves className="h-8 w-8" />
</div>
```

Relevant icons for a Políticas section: `Clock`, `DollarSign`, `Dog`, `Users`, `Ban`, `AlertCircle`, `CheckCircle`, `Key`, `CreditCard`.

---

## Nav Link Pattern

From `components/layouts/floating-navbar.tsx` (lines 32–39):

```tsx
const navItems = [
  { label: "Inicio",        id: "hero" },
  { label: "Galería",       id: "galeria" },
  { label: "Servicios",     id: "servicios" },
  { label: "Disponibilidad",id: "disponibilidad" },
  { label: "Ubicación",     id: "ubicacion" },
  { label: "Contacto",      id: "reservar" },
];
```

Navigation is **scroll-based** (`document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })`). No routing.

**To add a Políticas link:**
1. Add `{ label: "Políticas", id: "politicas" }` to `navItems` array (suggested position: after "Disponibilidad", before "Ubicación")
2. Wrap the section in `app/page.tsx` with `<div id="politicas">` (see below)

⚠️ Desktop nav already has 6 items. Adding a 7th may cause horizontal overflow on medium screens. Consider replacing a less-used item or using an abbreviated label like `"Política"`.

---

## Insertion Point in `app/page.tsx`

Current section order (lines 16–52):
```
hero → descripcion → galeria → servicios → disponibilidad → [FAQSection, no id] → ubicacion → reservar → Footer
```

**Recommended insertion: after FAQSection, before `id="ubicacion"`**

```tsx
// After FAQSection (~line 43), before LocationSection:
<AnimatedSection animation="fadeInUp" delay={200}>
  <div id="politicas">
    <PoliciesSection />
  </div>
</AnimatedSection>
```

Add import at top:
```tsx
import { PoliciesSection } from "@/components/sections/policies-section";
```

Note: `FAQSection` currently has no wrapping `id` div — if scroll-nav to FAQ is ever needed, that's a pre-existing gap.

---

## Architecture

```
app/page.tsx
  └─ FloatingNavbar          ← navItems[] drives scroll-nav
  └─ sections (by id div)
       ├─ hero / descripcion / galeria / servicios
       ├─ disponibilidad
       ├─ FAQSection          ← no id wrapper currently
       ├─ [INSERT PoliciesSection here, id="politicas"]
       ├─ ubicacion
       └─ reservar (CTASection)
  └─ Footer
```

`AnimatedSection` accepts `animation: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"` and `delay` (ms).

All sections are `"use client"` — no server components in the section layer.

---

## Start Here

Open `components/sections/faq-section.tsx` first — it's the closest structural template for a Políticas section (accordion pattern, `bg-muted/30` background, `max-w-4xl` container, `AnimatedSection` per item). Copy it as `components/sections/policies-section.tsx` and replace content.

---

## Risks & Open Questions

1. **Navbar overflow**: 7 desktop nav items may overflow on `md` breakpoint — test before shipping.
2. **FAQSection missing `id`**: If a nav link to FAQ is ever needed, it has no scroll target.
3. **Content definition**: Políticas content (check-in/out times, cancellation, pets, etc.) is partly in the FAQ — decide if FAQ items should be removed to avoid duplication.
4. **Section background alternation**: Current pattern is `plain → plain → plain → plain → plain → muted/30 → plain → plain`. Políticas between FAQ (muted/30) and Ubicación (plain) should be plain `py-20 px-4` for visual rhythm.
