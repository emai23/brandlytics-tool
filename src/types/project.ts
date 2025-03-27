/**
 * Project-related type definitions
 */
import { BaseEntity, Status, GeographicFocus, BudgetLevel } from './common';
import { Phase } from './phase';
import { User } from './user';

/**
 * Project interface representing a market research and brand development project
 */
export interface Project extends BaseEntity {
  name: string;
  niche: string;
  description?: string;
  owner: User | string; // Can be either a User object or a user ID
  status: Status;
  currentPhase: string;
  progress: number; // 0-100
  geographicFocus: GeographicFocus;
  budgetLevel: BudgetLevel;
  goals: string[];
  researchQuestions?: string[];
  summary?: string;
  phases: Phase[];
  tags?: string[];
  isArchived?: boolean;
}

/**
 * Project creation data
 */
export interface ProjectCreation {
  name: string;
  niche: string;
  description?: string;
  geographicFocus: GeographicFocus;
  budgetLevel: BudgetLevel;
  goals: string[];
  researchQuestions?: string[];
}

/**
 * Project update data
 */
export interface ProjectUpdate {
  name?: string;
  niche?: string;
  description?: string;
  status?: Status;
  currentPhase?: string;
  progress?: number;
  geographicFocus?: GeographicFocus;
  budgetLevel?: BudgetLevel;
  goals?: string[];
  researchQuestions?: string[];
  summary?: string;
  isArchived?: boolean;
}

/**
 * Project filters for listing projects
 */
export interface ProjectFilters {
  status?: Status | Status[];
  niche?: string;
  owner?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  searchTerm?: string;
  tags?: string[];
}

/**
 * Type guard to check if an object is a Project
 */
export function isProject(obj: any): obj is Project {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.niche === 'string' &&
    typeof obj.status === 'string' &&
    typeof obj.currentPhase === 'string' &&
    typeof obj.progress === 'number' &&
    Array.isArray(obj.phases)
  );
}
