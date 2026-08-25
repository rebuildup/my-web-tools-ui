"use client";

/**
 * Standalone stub of the parent's `@/hooks/useAccessibility`.
 *
 * In `my-web-2025` this hook is implemented in `src/hooks/useAccessibility.ts`.
 * When this package is consumed via Bun workspace, the consumer's tsconfig `paths`
 * will resolve `@/hooks/...` to the consumer's own hook implementations — this
 * stub is only consulted during this package's standalone type-check.
 */

export interface AccessibilityState {
	prefersReducedMotion: boolean;
	textScaling: number;
	highContrastMode: boolean;
	keyboardNavigation: boolean;
	accessibilityIssues: string[];
}

export interface UseAccessibilityResult {
	containerRef: { current: HTMLElement | null };
	state: AccessibilityState;
	announce: (message: string) => void;
	runAccessibilityChecks: () => string[];
}

export function useAccessibility(): UseAccessibilityResult {
	return {
		containerRef: { current: null },
		state: {
			prefersReducedMotion: false,
			textScaling: 1,
			highContrastMode: false,
			keyboardNavigation: false,
			accessibilityIssues: [],
		},
		announce: () => {},
		runAccessibilityChecks: () => [],
	};
}
