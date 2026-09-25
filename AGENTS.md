# AGENTS.md — my-web-tools-ui

## Governance
- Constitution: [`constitution/CONSTITUTION.md`](constitution/CONSTITUTION.md)
- Current Operating Model: [`organization/profiles/release-driven-solo.md`](organization/profiles/release-driven-solo.md)
- Project facts: `README.md`, `package.json`, source, tests/config, accepted docs.

## Boundaries
- This repository owns shared UI primitive source.
- Consumer hook implementations belong to consuming applications.
- `src/hooks/` standalone stubs are type shims, not consumer runtime implementations.
- Do not infer host integration correctness from standalone type-check alone.

## Toolchain
- Bun authority: `packageManager: bun@1.3.10`.
- Existing lint/type-check scripts remain canonical validation entry points.
- Agent Skills bootstrap/update uses mise + bunx without changing host package ownership.

## Delivery
- durable work: GitHub Issue.
- ticket branch: Issue number.
- ticket PR: current release branch.
- normal main integration: release PR only.
- landing: merge commit only.
