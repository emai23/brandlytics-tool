/**
 * Workflow-related type definitions
 */
import { BaseEntity, Status } from './common';
import { PhaseType } from './phase';

/**
 * Workflow interface representing the entire project workflow
 */
export interface Workflow extends BaseEntity {
  projectId: string;
  status: Status;
  progress: number; // 0-100
  startedAt?: string;
  completedAt?: string;
  currentPhase: PhaseType;
  phaseOrder: PhaseType[];
}

/**
 * Workflow execution options
 */
export interface WorkflowExecutionOptions {
  runAll?: boolean;
  phaseToRun?: PhaseType;
  forceRerun?: boolean;
  saveIntermediateResults?: boolean;
}

/**
 * Workflow execution status
 */
export interface WorkflowExecutionStatus {
  projectId: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  currentPhase?: PhaseType;
  progress: number;
  startedAt?: string;
  estimatedCompletion?: string;
  error?: string;
}

/**
 * Workflow phase transition
 */
export interface PhaseTransition {
  fromPhase: PhaseType;
  toPhase: PhaseType;
  transitionedAt: string;
  automatic: boolean;
}

/**
 * Workflow phase interface
 */
export interface WorkflowPhase {
  id: string;
  name: string;  
  description: string;
  completed: boolean;
  type: PhaseType;
  status: Status;
  progress: number; // 0-100
  startedAt?: string;
  completedAt?: string;
  order: number
}

/**
 * Type guard to check if an object is a Workflow
 */
export function isWorkflow(obj: any): obj is Workflow {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.projectId === 'string' &&
    typeof obj.status === 'string' &&
    typeof obj.progress === 'number' &&
    typeof obj.currentPhase === 'string' &&
    Array.isArray(obj.phaseOrder)
  );
}
