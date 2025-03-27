import { useState } from "react";
import { WorkflowPhase } from "@/types/workflow";

interface UseWorkflowProps {
  initialPhases: WorkflowPhase[];
  initialActivePhase?: string;
}

export const useWorkflow = ({
  initialPhases,
  initialActivePhase = "market_research",
}: UseWorkflowProps) => {
  const [activePhase, setActivePhase] = useState<string>(initialActivePhase);
  
  // Initialize progress state
  const initialProgress = initialPhases.reduce((acc, phase) => {
    acc[phase.id] = false;
    return acc;
  }, {} as { [key: string]: boolean });
  
  const [progress, setProgress] = useState<{ [key: string]: boolean }>(initialProgress);

  const handleRunPhase = (phaseId: string) => {
    // Mark the phase as completed
    setProgress(prev => ({ ...prev, [phaseId]: true }));
    
    // Move to next phase if available
    const currentIndex = initialPhases.findIndex(phase => phase.id === phaseId);
    if (currentIndex < initialPhases.length - 1) {
      setActivePhase(initialPhases[currentIndex + 1].id);
    }
  };

  const handleRunAll = () => {
    // Mark all phases as completed
    const allCompleted = initialPhases.reduce((acc, phase) => {
      acc[phase.id] = true;
      return acc;
    }, {} as { [key: string]: boolean });
    
    setProgress(allCompleted);
    setActivePhase(initialPhases[initialPhases.length - 1].id);
  };

  return {
    phases: initialPhases,
    activePhase,
    progress,
    handleRunPhase,
    handleRunAll,
    setActivePhase,
  };
};
