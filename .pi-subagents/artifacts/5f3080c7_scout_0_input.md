# Task for scout

Map the codebase at /mnt/c/Users/juanc/Desktop/dreamhouse/landing for a new "Políticas" section. Read and summarize:

1. components/sections/faq-section.tsx
2. components/sections/amenities-section.tsx  
3. components/sections/property-description.tsx
4. app/globals.css (first 80 lines)
5. app/page.tsx
6. components/layouts/floating-navbar.tsx
7. package.json (dependencies only)

Return a compressed context report with: section component pattern, CSS variables/colors used, icon library name + import example, nav link pattern, and where in page.tsx to insert a new policies section.

---
**Output:**
Write your findings to exactly this path: /mnt/c/Users/juanc/Desktop/dreamhouse/landing/.pi-subagents/artifacts/outputs/5f3080c7/context.md
This path is authoritative for this run.
Ignore any other output filename or output path mentioned elsewhere, including output destinations in the base agent prompt, system prompt, or task instructions.

## Acceptance Contract
Acceptance level: attested
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return concrete findings with file paths and severity when applicable

Required evidence: review-findings, residual-risks

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