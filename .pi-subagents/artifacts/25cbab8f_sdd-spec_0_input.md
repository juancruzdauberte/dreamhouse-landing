# Task for sdd-spec

## SDD Spec — dreamhouse-landing: policies-section

**Project root:** /mnt/c/Users/juanc/Desktop/dreamhouse/landing
**Change name:** policies-section
**Artifact store:** openspec
**Output path:** openspec/changes/policies-section/spec.md

## Context — read these files first
- openspec/changes/policies-section/proposal.md (approved by user)
- openspec/changes/policies-section/explore.md

## Change summary
Add a "Políticas" section to the landing page with 4 policies in accordion layout.

## Files to create/modify
1. CREATE `components/sections/policies-section.tsx`
2. MODIFY `app/page.tsx`
3. MODIFY `components/layouts/floating-navbar.tsx`

## Confirmed decisions
- Layout: **accordion** (same pattern as faq-section.tsx — uses @radix-ui/react-accordion via shadcn/ui)
- Background: `bg-muted/30` (alternates with plain AvailabilitySection before it)
- Insert position: after `<div id="disponibilidad">`, before `<FAQSection />`
- Nav: add `{ label: "Políticas", id: "politicas" }` after "Disponibilidad"
- No strict TDD (no test suite configured)

## 4 policies (exact Spanish copy)
1. **Reserva con Seña** — La reserva se confirma abonando el 30% de la estadía
2. **Sin Reembolso** — Una vez señada la reserva no se realiza reembolso. La fecha puede reprogramarse; el precio puede variar según la fecha elegida
3. **Mascotas Bienvenidas** — Aceptamos todo tipo de mascotas, sin límite de cantidad
4. **Check-in / Check-out** — Check-in: 12:00 hs. Check-out: 10:00 hs. Late check-out disponible con costo adicional, consultanos

## Task
Write delta specs with:
- Component interface (props, exports)
- Acceptance scenarios (Given/When/Then) for each requirement
- CSS/Tailwind constraints
- Integration requirements (page.tsx, navbar)
- Non-functional requirements (accessibility, mobile)

Save to: openspec/changes/policies-section/spec.md

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