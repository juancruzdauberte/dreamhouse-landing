# Task for sdd-tasks

## SDD Tasks — dreamhouse-landing: policies-section

**Project root:** /mnt/c/Users/juanc/Desktop/dreamhouse/landing
**Change name:** policies-section
**Output path:** openspec/changes/policies-section/tasks.md

## Read first
- openspec/changes/policies-section/spec.md
- openspec/changes/policies-section/design.md

## Context
3 files to touch, ~80 LOC total. No tests. Straightforward implementation.

## Task
Break the design into ordered, atomic implementation tasks. Each task must be:
- Independently verifiable
- Bounded to one file or one concern
- Sequenced correctly (dependencies first)

Suggested task order:
1. Create `components/sections/policies-section.tsx` (new file, complete implementation)
2. Modify `app/page.tsx` — add import + insert JSX block
3. Modify `components/layouts/floating-navbar.tsx` — add navItems entry
4. Verify: run `pnpm build` or `npx tsc --noEmit` to confirm no TypeScript errors

Include review workload forecast: estimated lines changed per file.

Save to: openspec/changes/policies-section/tasks.md

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