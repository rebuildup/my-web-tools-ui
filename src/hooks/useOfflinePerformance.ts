"use client";

/**
 * Standalone stub of the parent's `@/hooks/useOfflinePerformance`.
 *
 * In `my-web-2025` this hook is implemented in `src/hooks/useOfflinePerformance.ts`.
 * When this package is consumed via Bun workspace, the consumer's tsconfig `paths`
 * will resolve `@/hooks/...` to the consumer's own hook implementations — this
 * stub is only consulted during this package's standalone type-check.
 */

export interface UseOfflinePerformanceOptions {
	toolName: string;
	enablePerformanceMonitoring?: boolean;
	enableOfflineNotifications?: boolean;
	autoSaveSettings?: boolean;
}

export interface StorageUsage {
	used: number;
	available: number;
	percentage: number;
}

export interface PerformanceMetrics {
	memoryUsage?: { used: number; total: number; percentage: number };
	lastProcessingTime: number;
}

export interface OfflinePerformanceState {
	isOnline: boolean;
	isProcessing: boolean;
	processingProgress: number;
	storageUsage: StorageUsage;
	performanceMetrics: PerformanceMetrics;
	error: string | null;
	clearError: () => void;
	clearData: () => void;
}

export default function useOfflinePerformance(
	_options: UseOfflinePerformanceOptions,
): OfflinePerformanceState {
	return {
		isOnline: true,
		isProcessing: false,
		processingProgress: 0,
		storageUsage: { used: 0, available: 0, percentage: 0 },
		performanceMetrics: { lastProcessingTime: 0 },
		error: null,
		clearError: () => {},
		clearData: () => {},
	};
}
