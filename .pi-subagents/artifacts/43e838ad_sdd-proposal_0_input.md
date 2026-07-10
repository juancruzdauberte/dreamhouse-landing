# Task for sdd-proposal

## SDD Proposal — dreamhouse-landing: policies-section

**Project root:** /mnt/c/Users/juanc/Desktop/dreamhouse/landing
**OpenSpec config:** openspec/config.yaml
**Change name:** policies-section
**Artifact store:** openspec
**Output path:** openspec/changes/policies-section/proposal.md

---

## Explore findings (already done)
Read openspec/changes/policies-section/explore.md for full technical context.

Key findings:
- Stack: Next.js 14, TypeScript, Tailwind v4, shadcn/ui, lucide-react
- Template: faq-section.tsx (accordion, bg-muted/30, max-w-4xl)
- Insert point: after `<div id="disponibilidad">`, before FAQSection
- Files to change: CREATE policies-section.tsx, MODIFY page.tsx, MODIFY floating-navbar.tsx
- ~60–80 LOC total — well within 400-line review budget

---

## User decisions (confirmed in this session)
1. **Visual structure:** Accordion with simple list (like FAQSection pattern)
2. **Navbar:** YES — add "Políticas" nav item (id="politicas")
3. **Pets:** No limit on number of pets, no restrictions
4. **Late check-out:** "Consultanos" — no fixed price shown

---

## Confirmed policies content
1. **Reserva con seña** — La reserva se guarda abonando el 30% de la estadía
2. **Sin reembolso** — Una vez señada la reserva no se realiza reembolso. Se puede reprogramar la fecha (el precio puede variar según la fecha elegida)
3. **Mascotas bienvenidas** — Aceptamos todo tipo de mascotas, sin límite de cantidad
4. **Check-in / Check-out** — Check-in: 12:00 hs del mediodía. Check-out: 10:00 hs de la mañana. Late check-out disponible con costo adicional, consultanos

---

## Task
Write a concise PRD/proposal artifact covering:
- Problem / motivation (why add a policies section)
- Target users and context of use
- Business rules for each policy
- Product outcome and success criteria
- Scope (in/out)
- Risks and open questions
- Non-goals

Save to: openspec/changes/policies-section/proposal.md

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