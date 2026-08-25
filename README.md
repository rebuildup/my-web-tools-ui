# @rebuildup/my-web-tools-ui

Shared UI primitives for `my-web-2025` tools.

## Exports

- `ToolWrapper` (default export) — wraps a tool with consistent shell, error boundary, and analytics
- `RawDOMContainer` (named export) — renders tool output into a managed DOM container (used when a tool needs to bypass React for performance)
- `BreadcrumbItem` (named type) — breadcrumb item shape consumed by `RawDOMContainer`
- `PerformanceOptimizer` (default export) — memoization + render-tracking wrapper

## Usage

This package is consumed via Bun workspace from `my-web-2025`. See the
[submodule extraction spec](../../my-web-2025/docs/superpowers/specs/2026-08-25-git-submodule-extraction-design.md).

## Standalone development

```bash
bun install
bun run lint
bun run type-check
```

## Cross-package imports

This package's source files import two hooks via path aliases:

- `@/hooks/useAccessibility` (consumed by `ToolWrapper`)
- `@/hooks/useOfflinePerformance` (consumed by `PerformanceOptimizer`)

This is a pre-existing architectural quirk — the source files have always
imported from `@/hooks/...` since they lived in `my-web-2025/src/app/tools/components/`,
and Phase 0 preserves them byte-for-byte.

### Resolution in consumer builds

When this package is consumed via Bun workspace (e.g. from `my-web-2025`),
the consumer's `tsconfig.json` `paths` entry for `@/*` resolves those
imports to the **consumer's own** hook implementations. The stub hooks
shipped under `src/hooks/` in this package are **not** used at runtime by
consumers.

### Standalone type-check

For this package's standalone `bun run type-check` to pass, the
`src/hooks/` stubs exist as minimal type shims. They satisfy the source
files' import surface (signatures and returned shape) but contain no
runtime behavior — they exist solely to keep `tsc --noEmit` happy when
this repo is built in isolation.

### Consumer contract

Consumers MUST provide the following hooks at the documented paths:

- `<consumer-root>/src/hooks/useAccessibility.ts` — exports `useAccessibility()`
  returning `{ containerRef, state, announce, runAccessibilityChecks }`
- `<consumer-root>/src/hooks/useOfflinePerformance.ts` — exports a default
  function taking `{ toolName, enablePerformanceMonitoring?, enableOfflineNotifications?, autoSaveSettings? }`
  and returning `{ isOnline, isProcessing, processingProgress, storageUsage, performanceMetrics, error, clearError, clearData }`

If either hook is missing or its signature drifts, the consumer's
`bun run type-check` will fail. See `my-web-2025/src/hooks/` for reference
implementations.
