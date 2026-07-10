# Task for delegate

Write a PRD/proposal artifact and save it to openspec/changes/policies-section/proposal.md in /mnt/c/Users/juanc/Desktop/dreamhouse/landing.

## Context
Landing page for DreamHouse Baradero — a vacation rental property in Argentina. Built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui.

## Change: Add "Políticas" section

### Problem / Motivation
Potential guests currently have no clear, scannable summary of house rules and booking conditions. This information is buried in the FAQ as individual answers. A dedicated Políticas section reduces pre-booking friction and sets expectations upfront, leading to fewer questions and disputes.

### Target users
Potential guests visiting the landing page before deciding to book. They need a quick-scan summary of terms before contacting to reserve.

### Confirmed policies (4 items)
1. **Reserva con Seña** — La reserva se confirma abonando el 30% de la estadía
2. **Sin Reembolso** — Una vez señada la reserva no se realiza reembolso. Se puede reprogramar la fecha (el precio puede variar según la fecha elegida)
3. **Mascotas Bienvenidas** — Aceptamos todo tipo de mascotas, sin límite de cantidad
4. **Check-in / Check-out** — Check-in: 12:00 hs. Check-out: 10:00 hs. Late check-out disponible con costo adicional — consultanos

### User decisions
- Visual structure: **Accordion** (like existing FAQSection)
- Navbar: **Yes** — add "Políticas" link pointing to id="politicas"
- Pets: No limits, no restrictions
- Late check-out price: Not shown — "consultanos"

### Technical scope
- CREATE `components/sections/policies-section.tsx` — accordion variant (not card grid)
- MODIFY `app/page.tsx` — import and insert after `id="disponibilidad"`, before FAQSection
- MODIFY `components/layouts/floating-navbar.tsx` — add `{ label: "Políticas", id: "politicas" }` after "Disponibilidad"
- Estimated lines changed: ~70–90 LOC

### Out of scope
- Removing FAQ items that reference policies (keep for detail)
- Pricing display for late check-out
- Any backend changes

### Risks
1. Navbar may overflow on md-breakpoint with 7 items — needs visual test
2. Content overlap with FAQ — intentional (Políticas = summary, FAQ = detail)
3. Background alternation: Políticas uses `bg-muted/30` to alternate with plain AvailabilitySection

### Success criteria
- Section visible at id="politicas" in page scroll flow
- All 4 policies rendered in accordion
- Nav link "Políticas" scrolls to section
- Consistent with existing design system (Playfair heading, terracotta primary, lucide icons)

---

Write the proposal as a structured markdown document covering all of the above. Save it to:
/mnt/c/Users/juanc/Desktop/dreamhouse/landing/openspec/changes/policies-section/proposal.md

Use this exact format:
# Proposal — policies-section
## Problem
## Target Users
## Business Rules
## Product Outcome
## Scope
### In scope
### Out of scope
## Risks
## Non-goals
## Success Criteria

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