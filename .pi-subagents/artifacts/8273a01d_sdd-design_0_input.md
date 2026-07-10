# Task for sdd-design

## SDD Design — dreamhouse-landing: policies-section

**Project root:** /mnt/c/Users/juanc/Desktop/dreamhouse/landing
**Change name:** policies-section
**Output path:** openspec/changes/policies-section/design.md

## Read first
- openspec/changes/policies-section/spec.md
- openspec/changes/policies-section/explore.md

## Task
Produce the technical design for the policies-section change. The spec is complete and approved — no need to re-derive requirements. Focus on:

1. **Exact implementation code** for `components/sections/policies-section.tsx` — complete file ready to copy-paste
2. **Exact diffs** for `app/page.tsx` — show precisely what lines to add and where
3. **Exact diffs** for `components/layouts/floating-navbar.tsx` — show precisely what lines to add and where
4. **Implementation notes** — any ordering, constraint, or gotcha the implementer must know

### Key constraints from spec
- `"use client"` directive required
- Accordion: `type="single"` with `collapsible` prop
- Icons: CreditCard, CalendarX, PawPrint, Clock from lucide-react
- Background: `bg-muted/30`
- Heading: `font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6`
- AccordionItem wrapper: `bg-white rounded-lg border hover:shadow-md hover:border-primary/20 mb-3`
- Icon in trigger: `h-6 w-6 text-primary mr-3 shrink-0`
- Section id `"politicas"` lives on wrapper div in page.tsx, NOT inside the component
- navItems: insert `{ label: "Políticas", id: "politicas" }` after "Disponibilidad" (index 3)

### Existing faq-section.tsx accordion pattern to follow
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// AccordionItem uses: bg-white rounded-lg px-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-primary/20
// AccordionTrigger: cursor-pointer text-left hover:no-underline py-6
// AccordionContent: pb-6 text-muted-foreground leading-relaxed
```

Save complete design to: openspec/changes/policies-section/design.md

## Acceptance Contract
Acceptance level: attested
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return a concise result and residual risks when applicable

Required evidence: manual-notes, residual-risks

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