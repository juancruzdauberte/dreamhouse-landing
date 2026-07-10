# Task for sdd-explore

## SDD Explore — dreamhouse-landing: Policies Section

**Project root:** /mnt/c/Users/juanc/Desktop/dreamhouse/landing
**OpenSpec config:** openspec/config.yaml (already created)
**Change name:** policies-section

### Goal
Map the codebase to understand patterns needed for adding a new "Políticas" (Policies) section to the landing page.

### Policies to display (confirmed by user)
1. Reserva con seña del 30%
2. Sin reembolso — se reprograma la fecha (precio puede variar)
3. Se aceptan mascotas
4. Check-in: 12:00 hs — Check-out: 10:00 hs. Late check-out tiene costo adicional

### What to explore
1. Read 3 existing section components: components/sections/faq-section.tsx, components/sections/amenities-section.tsx, components/sections/property-description.tsx — identify the structural pattern (container, heading, content layout)
2. Read app/globals.css and/or tailwind.config if present — identify color palette, font classes, custom CSS variables
3. Read app/page.tsx — understand how AnimatedSection wraps sections and how new section would integrate
4. Read components/layouts/floating-navbar.tsx — understand nav links to know if "políticas" needs a nav anchor
5. Identify icon library in use (check package.json)

### Output
Produce an explore report with:
- Component anatomy: typical section pattern (wrapper, heading, content)
- Key Tailwind classes / CSS variables for colors and typography
- Icon library used and example usage
- Where in page.tsx the new section should be inserted (before/after which section, with what id)
- Whether nav needs updating
- Any gotchas or constraints to respect

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