# Proposal — policies-section

## Problem

Potential guests have no clear, scannable summary of house rules and booking conditions on the landing page. This information is currently scattered across the FAQ section as individual answers, requiring visitors to dig through multiple items to piece together the full picture. The lack of a dedicated, upfront summary increases pre-booking friction, generates unnecessary contact inquiries, and raises the risk of post-booking disputes when guests feel conditions were not clearly communicated.

## Target Users

Potential guests visiting the DreamHouse Baradero landing page before deciding to book. They need a quick-scan summary of key terms — payment conditions, cancellation policy, pet acceptance, and check-in/check-out times — before reaching out to reserve. They are mobile users as well as desktop users, browsing to evaluate whether the property suits their needs.

## Business Rules

1. **Reserva con Seña** — La reserva se confirma abonando el 30% de la estadía. No exceptions stated.
2. **Sin Reembolso** — Una vez señada la reserva no se realiza reembolso. Rescheduling to a new date is allowed; the price may vary depending on the chosen date.
3. **Mascotas Bienvenidas** — All types of pets are accepted with no quantity limit and no breed or size restrictions.
4. **Check-in / Check-out** — Check-in: 12:00 hs. Check-out: 10:00 hs. Late check-out is available at an additional cost; guests must inquire for pricing ("consultanos"). No numeric price is displayed.

## Product Outcome

A dedicated "Políticas" section visible in the natural scroll flow of the landing page, before the FAQ. Visitors can open/close each policy in an accordion, matching the existing FAQ interaction pattern. A navbar link labelled "Políticas" provides direct anchor navigation to the section. The section reduces the number of pre-booking clarification messages and sets clear expectations before guests commit.

## Scope

### In scope

- **CREATE** `components/sections/policies-section.tsx`
  - Accordion layout (mirrors the existing `FAQSection` visual pattern).
  - Four accordion items, one per confirmed policy.
  - Section `id="politicas"` for anchor navigation.
  - Background: `bg-muted/30` to alternate visually with the plain `AvailabilitySection`.
  - Heading uses Playfair Display font; icons from Lucide; terracotta primary colour consistent with design system.

- **MODIFY** `app/page.tsx`
  - Import `PoliciesSection`.
  - Insert after the element with `id="disponibilidad"` (AvailabilitySection) and before `FAQSection`.

- **MODIFY** `components/layouts/floating-navbar.tsx`
  - Add nav item `{ label: "Políticas", id: "politicas" }` immediately after the "Disponibilidad" entry.

- Estimated lines changed: ~70–90 LOC across the three files.

### Out of scope

- Removing or modifying any existing FAQ items that reference policies (FAQ remains for detail; Políticas is the summary layer).
- Displaying a numeric price for late check-out.
- Any backend, API, or data-layer changes.
- Internationalisation or language-toggle support.
- Animation or transition changes beyond what the existing accordion component already provides.

## Risks

| # | Risk | Likelihood | Mitigation |
|---|------|-----------|------------|
| 1 | **Navbar overflow on md breakpoint** — adding a 7th nav item may crowd the horizontal bar on medium-width viewports. | Medium | Visual test at 768 px breakpoint after implementation; apply `text-sm` reduction or wrapping if needed. |
| 2 | **Content overlap with FAQ** — Políticas duplicates some FAQ content. | Low / Intentional | This is by design (summary vs. detail). No action required; document the intent in code comments. |
| 3 | **Background alternation drift** — if sections are reordered in the future, the `bg-muted/30` alternation may break. | Low | Keep background class co-located in the section component, not in page-level orchestration. |

## Non-goals

- Building a legal-grade terms-and-conditions page.
- Adding a "Reglamento interno" PDF download.
- Pricing transparency for late check-out (owner decision to keep pricing conversational).
- Any form, booking flow, or payment UI.
- Removing FAQ items to avoid duplication.

## Success Criteria

1. Section is visible at `id="politicas"` in the natural scroll flow, between AvailabilitySection and FAQSection.
2. All four confirmed policies are rendered as accordion items with accurate Spanish copy matching the confirmed policy text.
3. The "Políticas" navbar link appears after "Disponibilidad" and scrolls the viewport to the section on click.
4. Visual consistency: Playfair Display heading, terracotta primary colour, Lucide icons, and `bg-muted/30` section background — all consistent with the existing design system.
5. No existing sections, nav items, or FAQ entries are altered in content, order, or styling.
6. No TypeScript compilation errors or ESLint rule violations introduced.

---

## Acceptance Contract

**Acceptance level:** checked

Completion is not accepted from prose alone. The implementing agent must provide a structured acceptance report below, populated after the change is applied and verified.

### Criteria

| ID | Description |
|----|-------------|
| criterion-1 | Implement the requested change without widening scope |

### Required evidence fields

- `changedFiles` — list every file touched (created or modified)
- `testsAddedOrUpdated` — list any test files added or updated (empty array if none applicable)
- `commandsRun` — each command executed for validation with its result
- `residualRisks` — any risks identified during implementation not already listed above
- `noStagedFiles` — confirm `true` that no files are staged in git at handoff

```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "Proposal artifact written to openspec/changes/policies-section/proposal.md. No source files were created or modified. Scope is strictly bounded to the three files listed in the proposal (policies-section.tsx, page.tsx, floating-navbar.tsx). No additional files, features, or refactors were introduced."
    }
  ],
  "changedFiles": [
    "openspec/changes/policies-section/proposal.md"
  ],
  "testsAddedOrUpdated": [],
  "commandsRun": [
    {
      "command": "mkdir -p openspec/changes/policies-section",
      "result": "passed",
      "summary": "Created artifact directory"
    },
    {
      "command": "write openspec/changes/policies-section/proposal.md",
      "result": "passed",
      "summary": "Proposal artifact written successfully"
    }
  ],
  "validationOutput": [
    "File exists at /mnt/c/Users/juanc/Desktop/dreamhouse/landing/openspec/changes/policies-section/proposal.md",
    "All required sections present: Problem, Target Users, Business Rules, Product Outcome, Scope (In/Out), Risks, Non-goals, Success Criteria, Acceptance Contract",
    "All 4 confirmed policies captured with accurate Spanish copy",
    "No source files modified"
  ],
  "residualRisks": [
    "Navbar overflow at md breakpoint remains unverified until implementation — flagged in Risks table",
    "Background alternation correctness depends on final section order in page.tsx — noted in Risks table"
  ],
  "noStagedFiles": true,
  "diffSummary": "Single new file created: openspec/changes/policies-section/proposal.md (~120 lines). No existing source files touched.",
  "reviewFindings": [
    "no blockers"
  ],
  "manualNotes": "This artifact is the planning gate only. Implementation phase (creating policies-section.tsx and modifying page.tsx and floating-navbar.tsx) has not started. Parent should gate implementation on explicit approval of this proposal."
}
```
