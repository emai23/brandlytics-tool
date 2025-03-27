// src/components/WorkflowPhaseItem.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CircleDashed, ArrowRight } from "lucide-react";
import { WorkflowPhase } from "@/types/workflow";

interface WorkflowPhaseItemProps {
  phase: WorkflowPhase;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  totalPhases: number;
  onRunPhase: (phaseId: string) => void;
  onSetActivePhase: (phaseId: string) => void;
}

export const WorkflowPhaseItem = ({
  phase,
  index,
  isActive,
  isCompleted,
  totalPhases,
  onRunPhase,
  onSetActivePhase,
}: WorkflowPhaseItemProps) => {
  return (
    <div className={`flex gap-6 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
      {/* Status Icon */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isCompleted
            ? 'bg-primary text-primary-foreground'
            : isActive
            ? 'bg-accent border border-primary'
            : 'bg-background border border-muted-foreground'
        }`}
      >
        {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : <CircleDashed className="h-5 w-5" />}
      </div>

      {/* Phase Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-lg font-medium">{phase.name}</h4>
            <p className="text-sm text-muted-foreground">{phase.description}</p>
          </div>
          <Button
            variant={isCompleted ? "outline" : "default"}
            size="sm"
            disabled={!isActive && !isCompleted}
            onClick={() => onRunPhase(phase.id)}
            className="ml-4"
          >
            {isCompleted ? "View Results" : "Run Phase"}
          </Button>
        </div>

        {/* Conditionally show content for active phase */}
        {isActive && !isCompleted && <PhaseConfiguration phase={phase} onRunPhase={onRunPhase} />}

        {/* Results area (when phase is completed) */}
        {isCompleted && (
          <PhaseResults 
            phase={phase} 
            index={index} 
            totalPhases={totalPhases} 
            onSetActivePhase={onSetActivePhase} 
          />
        )}
      </div>
    </div>
  );
};

// Sub-components
interface PhaseConfigurationProps {
  phase: WorkflowPhase;
  onRunPhase: (phaseId: string) => void;
}

const PhaseConfiguration = ({ phase, onRunPhase }: PhaseConfigurationProps) => {
  return (
    <Card className="mt-4 bg-accent/50 border-dashed">
      <CardContent className="p-4">
        <p className="text-sm">
          Configure parameters for the {phase.name.toLowerCase()} phase or click "Run Phase" to use
          default settings.
        </p>
        <div className="flex justify-end mt-4">
          <Button size="sm" variant="outline" className="mr-2">
            Configure
          </Button>
          <Button size="sm" onClick={() => onRunPhase(phase.id)}>
            Run with Defaults
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface PhaseResultsProps {
  phase: WorkflowPhase;
  index: number;
  totalPhases: number;
  onSetActivePhase: (phaseId: string) => void;
}

const PhaseResults = ({ phase, index, totalPhases, onSetActivePhase }: PhaseResultsProps) => {
  // Get the next phase ID if there is one
  const getNextPhaseId = (phases: WorkflowPhase[], currentIndex: number): string | null => {
    return currentIndex < phases.length - 1 ? phases[currentIndex + 1].id : null;
  };

  return (
    <Card className="mt-4 bg-secondary/50">
      <CardContent className="p-4">
        <p className="text-sm">
          {phase.name} phase completed successfully. View detailed results or proceed to the next
          phase.
        </p>
        {index < totalPhases - 1 && (
          <div className="flex justify-end mt-4">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => {
                const nextPhaseId = getNextPhaseId(
                  Array(totalPhases)
                    .fill(null)
                    .map((_, i) => ({ id: `phase_${i}` } as WorkflowPhase)),
                  index
                );
                if (nextPhaseId) {
                  onSetActivePhase(nextPhaseId);
                }
              }}
            >
              Next Phase <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
