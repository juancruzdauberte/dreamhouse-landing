# Políticas Section — Change Spec

**Change:** policies-section
**Domains affected:** policies-section (new), landing-page (modified), navigation (modified)
**Canonical spec base:** none (openspec/specs/ does not exist yet — full specs provided)

> No canonical domain specs exist yet for this project. This file contains full domain specs for each affected area.

---

## Domain: Policies Section Component

### Purpose

Self-contained, client-side accordion component that displays the four property rental policies for Dreamhouse. Renders on the landing page between the Availability section and the FAQ section.

### Requirements

#### Requirement: Component Export

The component MUST be exported as a named export `PoliciesSection` from `components/sections/policies-section.tsx` with no required props.

##### Scenario: Default mount

- GIVEN the landing page loads
- WHEN React mounts the PoliciesSection component
- THEN it renders without errors and displays a section with heading text "Políticas"

#### Requirement: Client Directive

The file MUST include `"use client"` as its first directive because accordion interactions require client-side state.

##### Scenario: No hydration mismatch

- GIVEN Next.js 14 App Router with SSR
- WHEN PoliciesSection is imported by a Server Component page
- THEN the `"use client"` boundary prevents hydration errors

#### Requirement: Four Policy Items

The component MUST render exactly four accordion items using the exact Spanish copy and icons as specified below:

| # | Icon (lucide-react) | Title | Body |
|---|---|---|---|
| 0 | `CreditCard` | Reserva con Seña | La reserva se confirma abonando el 30% de la estadía. |
| 1 | `CalendarX` | Sin Reembolso | Una vez señada la reserva no se realiza reembolso. La fecha puede reprogramarse; el precio puede variar según la fecha elegida. |
| 2 | `PawPrint` | Mascotas Bienvenidas | Aceptamos todo tipo de mascotas, sin límite de cantidad. |
| 3 | `Clock` | Check-in / Check-out | Check-in: 12:00 hs. Check-out: 10:00 hs. Late check-out disponible con costo adicional, consultanos. |

##### Scenario: All four policies visible

- GIVEN the PoliciesSection is mounted
- WHEN the component finishes rendering
- THEN exactly 4 AccordionItem triggers are visible with the correct Spanish titles

##### Scenario: Policy copy is exact

- GIVEN AccordionItem for "Sin Reembolso" is expanded
- WHEN its content is read
- THEN the text matches: "Una vez señada la reserva no se realiza reembolso. La fecha puede reprogramarse; el precio puede variar según la fecha elegida."

#### Requirement: Single-Select Accordion

The accordion MUST use `type="single"` with the `collapsible` prop, so that at most one item is expanded at a time and clicking an open item closes it.

##### Scenario: Single expansion

- GIVEN the Políticas section is rendered with all items collapsed
- WHEN the user clicks "Reserva con Seña"
- THEN its content expands AND all other items remain collapsed

##### Scenario: Collapse on second click

- GIVEN "Reserva con Seña" is the currently expanded item
- WHEN the user clicks its trigger again
- THEN its content collapses and no item is expanded

#### Requirement: All Items Collapsed by Default

No accordion item SHALL be pre-opened on initial render.

##### Scenario: Initial state

- GIVEN the page has just loaded
- WHEN PoliciesSection first renders
- THEN all four AccordionContent panels are hidden

#### Requirement: Icon Display

Each accordion trigger MUST display its associated lucide-react icon with class `h-6 w-6 text-primary shrink-0 mr-3` to the left of the title text.

##### Scenario: Icon visible on collapsed item

- GIVEN PoliciesSection is rendered
- WHEN a trigger is in its collapsed state
- THEN the icon is visible and uses `text-primary` color

#### Requirement: Layout and Styling

The component MUST apply the following Tailwind classes to match site visual conventions:

- Section element: `py-20 px-4 bg-muted/30`
- Inner container: `max-w-4xl mx-auto`
- Heading (`h2`): `font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6`
- AccordionItem wrapper: `bg-white rounded-lg px-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-primary/20`
- AccordionContent text: `pb-6 text-muted-foreground leading-relaxed`

##### Scenario: Background alternation

- GIVEN AvailabilitySection uses no background tint
- WHEN PoliciesSection renders immediately after it
- THEN `bg-muted/30` provides a visible alternating stripe

##### Scenario: Hover state

- GIVEN a policy item is in its default state
- WHEN the user hovers over the AccordionItem
- THEN `hover:shadow-md` and `hover:scale-[1.02]` transitions are applied

#### Requirement: Accessibility

The component MUST rely on Radix UI's built-in accessibility features; no additional ARIA attributes are required beyond those provided by `@/components/ui/accordion`.

##### Scenario: Keyboard navigation

- GIVEN PoliciesSection is rendered
- WHEN the user navigates with Tab and presses Enter/Space
- THEN accordion items open and close correctly without mouse interaction

#### Requirement: No New Dependencies

The implementation MUST NOT introduce any npm dependencies not already present in the project. All required imports (`@radix-ui/react-accordion` via shadcn/ui, `lucide-react`, `AnimatedSection`) are already available.

##### Scenario: Dependency check

- GIVEN the current package.json
- WHEN policies-section.tsx is added
- THEN `npm install` output shows no new packages

---

## Domain: Landing Page Integration

### Purpose

The landing page (`app/page.tsx`) MUST include PoliciesSection in the correct position in the page scroll order, wrapped in an `AnimatedSection` and anchor div.

### Requirements

#### Requirement: Import Statement

`app/page.tsx` MUST add the import:

```ts
import { PoliciesSection } from "@/components/sections/policies-section";
```

##### Scenario: No missing module error

- GIVEN the import is added
- WHEN `tsc --noEmit` runs
- THEN no "Cannot find module" error for policies-section

#### Requirement: Insertion Position

The PoliciesSection block MUST be inserted after the closing tag of the `id="disponibilidad"` wrapper div and before `<FAQSection />`.

##### Scenario: Page scroll order

- GIVEN the full landing page is rendered
- WHEN the user scrolls down
- THEN sections appear in order: Disponibilidad → Políticas → FAQ

#### Requirement: Anchor and Animation Wrapper

The insertion MUST use this exact JSX shape so that scroll-navigation and entry animations function correctly:

```tsx
<AnimatedSection animation="fadeInUp" delay={200}>
  <div id="politicas">
    <PoliciesSection />
  </div>
</AnimatedSection>
```

The `id="politicas"` attribute MUST live on the wrapper div in `page.tsx`, NOT inside `PoliciesSection`.

##### Scenario: Nav scroll target exists

- GIVEN the page is loaded
- WHEN JavaScript queries `document.getElementById("politicas")`
- THEN it returns a non-null element that is the wrapper div

##### Scenario: Animated entry

- GIVEN the user scrolls the Políticas section into the viewport
- WHEN the IntersectionObserver triggers AnimatedSection
- THEN the section fades in upward with a 200 ms delay

---

## Domain: Navigation Bar Integration

### Purpose

The floating navigation bar MUST include a "Políticas" entry so users can jump directly to the section.

### Requirements

#### Requirement: Nav Item Added

`components/layouts/floating-navbar.tsx` MUST add the following object to the `navItems` array after the `{ label: "Disponibilidad", id: "disponibilidad" }` entry:

```ts
{ label: "Políticas", id: "politicas" },
```

##### Scenario: Nav item appears in desktop bar

- GIVEN the landing page is loaded on a desktop viewport
- WHEN the floating navbar renders
- THEN a "Políticas" link is visible after "Disponibilidad"

##### Scenario: Nav item appears in mobile menu

- GIVEN the landing page is loaded on a mobile viewport (< md)
- WHEN the user opens the mobile menu
- THEN "Políticas" appears in the list after "Disponibilidad"

#### Requirement: Scroll Behavior

Clicking the "Políticas" nav item MUST invoke the existing `scrollToSection("politicas")` function, which scrolls the viewport to `id="politicas"`.

##### Scenario: Click scrolls to section

- GIVEN the user is at the top of the page
- WHEN the user clicks "Políticas" in the navbar
- THEN the viewport scrolls smoothly to the `id="politicas"` wrapper div

#### Requirement: No Reordering

The existing navItems array order MUST NOT change. The new item is inserted at index 4 (after Disponibilidad at index 3), pushing Ubicación to index 5.

##### Scenario: Other nav items unchanged

- GIVEN the updated navItems array
- WHEN it is rendered
- THEN "Inicio", "Galería", "Servicios", "Disponibilidad", "Políticas", "Ubicación", "Contacto" appear in that order

---

## Cross-Cutting Constraints

1. **Scope:** Exactly 3 files are touched: `components/sections/policies-section.tsx` (CREATE), `app/page.tsx` (MODIFY), `components/layouts/floating-navbar.tsx` (MODIFY).
2. **TypeScript:** Running `tsc --noEmit` after the change MUST produce zero new type errors.
3. **Static data only:** The PoliciesSection MUST contain no API calls, async operations, or server actions.
4. **Copy fidelity:** The exact Spanish strings specified above MUST be used verbatim; do not paraphrase, translate, or punctuate differently.
5. **Component isolation:** PoliciesSection MUST NOT accept or use any props or context from parent components; all data is internal.
