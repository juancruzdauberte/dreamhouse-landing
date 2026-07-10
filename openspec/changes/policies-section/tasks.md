# Tasks — policies-section

## Review Workload Forecast

| File | Action | Est. lines |
|------|--------|-----------|
| `components/sections/policies-section.tsx` | CREATE | ~55 |
| `app/page.tsx` | MODIFY | +6 |
| `components/layouts/floating-navbar.tsx` | MODIFY | +1 |
| **Total** | | **~62 lines** ✅ well under 400-line budget |

---

## Implementation Tasks

- [ ] **T-01** — Create `components/sections/policies-section.tsx` with complete accordion implementation (4 policies, lucide icons, AnimatedSection, bg-muted/30, Playfair heading)
- [ ] **T-02** — Modify `app/page.tsx`: add import for PoliciesSection and insert `<AnimatedSection animation="fadeInUp" delay={200}><div id="politicas"><PoliciesSection /></div></AnimatedSection>` after the `disponibilidad` block and before FAQSection
- [ ] **T-03** — Modify `components/layouts/floating-navbar.tsx`: add `{ label: "Políticas", id: "politicas" }` to navItems after "Disponibilidad"
- [ ] **T-04** — Verify: run `npx tsc --noEmit` from project root and confirm zero new TypeScript errors

---

## Task Details

### T-01: Create policies-section.tsx
**File:** `components/sections/policies-section.tsx` (new file)
**Depends on:** nothing
**Verification:** file exists, exports `PoliciesSection`, no TS errors in isolation

Implementation (from design.md):
- `"use client"` directive
- Imports: Accordion/AccordionItem/AccordionTrigger/AccordionContent, AnimatedSection, CreditCard/CalendarX/PawPrint/Clock
- Static `policies` array with icon component refs (not JSX elements)
- Accordion type="single" collapsible
- Each item wrapped in AnimatedSection fadeInUp with delay={index * 100}
- AccordionItem classes: `bg-white rounded-lg px-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-primary/20`
- Icon rendered as `<Icon className="h-6 w-6 text-primary shrink-0" />`

### T-02: Modify app/page.tsx
**File:** `app/page.tsx`
**Depends on:** T-01
**Verification:** PoliciesSection appears between disponibilidad and FAQSection in DOM order

Changes:
1. Add at top with other imports: `import { PoliciesSection } from "@/components/sections/policies-section";`
2. Insert after `</AnimatedSection>` closing the disponibilidad block:
```tsx
<AnimatedSection animation="fadeInUp" delay={200}>
  <div id="politicas">
    <PoliciesSection />
  </div>
</AnimatedSection>
```

### T-03: Modify floating-navbar.tsx
**File:** `components/layouts/floating-navbar.tsx`
**Depends on:** T-02 (id="politicas" must exist in DOM)
**Verification:** nav renders 7 items; "Políticas" at index 4

Change: insert after `{ label: "Disponibilidad", id: "disponibilidad" }`:
```ts
{ label: "Políticas", id: "politicas" },
```

### T-04: TypeScript verification
**Command:** `npx tsc --noEmit` (run from `/mnt/c/Users/juanc/Desktop/dreamhouse/landing`)
**Depends on:** T-01, T-02, T-03
**Pass criteria:** exit code 0, no new errors
