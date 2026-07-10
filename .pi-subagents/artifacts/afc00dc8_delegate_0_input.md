# Task for delegate

Write a delta spec artifact and save it to openspec/changes/policies-section/spec.md in /mnt/c/Users/juanc/Desktop/dreamhouse/landing.

## Context
Project: dreamhouse-landing — vacation rental landing page (Next.js 14, TypeScript, Tailwind v4, shadcn/ui, lucide-react).

## Change: policies-section

### Component: PoliciesSection
- File: `components/sections/policies-section.tsx`
- Export: `export function PoliciesSection()`
- No props (self-contained, data is static)
- "use client" directive required
- Uses shadcn/ui Accordion (AccordionItem/AccordionTrigger/AccordionContent from @/components/ui/accordion)
- Uses AnimatedSection from @/components/sections/animated-section
- Uses lucide-react icons: CreditCard, CalendarX, PawPrint, Clock
- Background: `bg-muted/30`
- Container: `max-w-4xl mx-auto`
- Heading: `font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6`
- Section id: `id="politicas"` (on the wrapper div in page.tsx, not in the component itself)

### 4 policies (static data)
```
[
  { icon: CreditCard, title: "Reserva con Seña", body: "La reserva se confirma abonando el 30% de la estadía." },
  { icon: CalendarX, title: "Sin Reembolso", body: "Una vez señada la reserva no se realiza reembolso. La fecha puede reprogramarse; el precio puede variar según la fecha elegida." },
  { icon: PawPrint, title: "Mascotas Bienvenidas", body: "Aceptamos todo tipo de mascotas, sin límite de cantidad." },
  { icon: Clock, title: "Check-in / Check-out", body: "Check-in: 12:00 hs. Check-out: 10:00 hs. Late check-out disponible con costo adicional, consultanos." }
]
```

### Integration: app/page.tsx
- Add import: `import { PoliciesSection } from "@/components/sections/policies-section";`
- Insert after `<div id="disponibilidad">` block, before `<AnimatedSection ...><FAQSection /></AnimatedSection>`
- Wrapper: `<AnimatedSection animation="fadeInUp" delay={200}><div id="politicas"><PoliciesSection /></div></AnimatedSection>`

### Integration: floating-navbar.tsx
- Add to navItems array: `{ label: "Políticas", id: "politicas" }` after the "Disponibilidad" entry (index 3 → new index 4)

### Acceptance scenarios

**SC-01: Section renders with heading**
Given the page loads, the PoliciesSection is present with heading "Políticas" using Playfair Display font and subtitle "Todo lo que necesitás saber antes de reservar".

**SC-02: All 4 policies are rendered as accordion items**
Given the section renders, 4 AccordionItems are present. Each has a trigger showing the policy title. Content is collapsed by default.

**SC-03: Accordion expand/collapse**
Given a user clicks an AccordionTrigger, the AccordionContent expands showing the policy body text. Clicking again collapses it. Only one item is open at a time (type="single").

**SC-04: Icons present**
Each accordion item trigger shows a lucide-react icon (h-6 w-6, text-primary color) alongside the title.

**SC-05: Nav link present and functional**
The floating navbar contains a "Políticas" button. Clicking it calls scrollToSection("politicas") which scrolls to id="politicas".

**SC-06: Visual consistency**
Section background is bg-muted/30. Section spacing is py-20 px-4. Cards/items use bg-white, rounded-lg, border, hover:shadow-md, hover:border-primary/20 consistent with FAQSection.

**SC-07: Mobile responsive**
On mobile (< md breakpoint), the section renders full-width single column. Nav item appears in the mobile dropdown menu.

**SC-08: No TypeScript errors**
tsc --noEmit passes with no new errors.

### Non-functional requirements
- Accessible: accordion uses radix-ui (keyboard navigable, aria attributes built-in)
- No new dependencies required (all imports already in project)
- No backend/API calls
- Static data only

---

Write the spec as structured markdown. Save to:
/mnt/c/Users/juanc/Desktop/dreamhouse/landing/openspec/changes/policies-section/spec.md

Format:
# Spec — policies-section
## Component Interface
## Static Data
## Integration Spec
### page.tsx
### floating-navbar.tsx
## Acceptance Scenarios
## Non-functional Requirements
## Constraints

## Acceptance Contract
Acceptance level: checked
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Implement the requested change without widening scope

Required evidence: changed-files, tests-added, commands-run, residual-risks, no-staged-files

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```