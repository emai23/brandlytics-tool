export type ID = string;

export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Common type definitions used across the application
 */

/**
 * Status types for various entities
 */
export type Status = 'not_started' | 'in_progress' | 'completed' | 'failed' | 'archived';

/**
 * Geographic focus options
 */
export type GeographicFocus = 'local' | 'regional' | 'national' | 'global';

/**
 * Budget level options
 */
export type BudgetLevel = 'low' | 'medium' | 'high' | 'enterprise';

/**
 * Pagination parameters for API requests
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
}

/**
 * Standard API response format
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Date range for filtering
 */
export interface DateRange {
  startDate: string;
  endDate: string;
}

/**
 * Base entity interface with common properties
 */
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
