import { Card, CardContent } from "@/components/ui/card";
import { MotionContainer } from "../MotionContainer";
import { WorkflowHeader } from "./WorkflowHeader";
import { WorkflowPhaseItem } from "./WorkflowPhaseItem";
import { useWorkflow } from "@/hooks/useWorkflow";
import { WorkflowPhase } from "@/types/workflow";
import { PhaseType } from '@/types/phase';

// Define workflow phases with proper typing
const workflowPhases: WorkflowPhase[] = [
  {
    id: "market_research",
    name: "Market Research",
    description: "Analyze market trends, opportunities, and competitive landscape",
    completed: false,
    PhaseType: "market_research",
    status: "not_started",
    progress: 0,
    order: 1,
  },
  {
    id: "target_audience",
    name: "Target Audience",
    description: "Define and analyze ideal customer profiles and segments",
    completed: false,
    type: "target_audience",
    status: "not_started",
    progress: 0,
    order: 2,
  },
  {
    id: "brand_development",
    name: "Brand Development",
    description: "Create brand identity, positioning, and messaging framework",
    completed: false,
    type: "brand_development",
    status: "not_started",
    progress: 0,
    order: 3,
  },
  {
    id: "brand_strategy",
    name: "Brand Strategy",
    description: "Develop actionable strategy for brand growth and differentiation",
    completed: false,
    type: "brand_strategy",
    status: "not_started",
    progress: 0,
    order: 4,
  },
  {
    id: "content_strategy",
    name: "Content Strategy",
    description: "Plan content creation, distribution, and measurement approach",
    completed: false,
    type: "content_strategy",
    status: "not_started",
    progress: 0,
    order: 5,
  },
];

export const ProjectWorkflow = () => {
  // Use the custom hook for workflow state management
  const {
    phases,
    activePhase,
    progress,
    handleRunPhase,
    handleRunAll,
    setActivePhase,
  } = useWorkflow({
    initialPhases: workflowPhases,
    initialActivePhase: "market_research",
  });

  return (
    <div className="py-8">
      <MotionContainer delay={100}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Project Workflow</h2>
          <p className="text-muted-foreground mt-1">
            Step-by-step process to develop your market research and brand strategy
          </p>
        </div>
      </MotionContainer>

      <MotionContainer delay={200} animation="slide-up">
        <Card className="mb-6">
          {/* Extract header to separate component */}
          <WorkflowHeader onRunAll={handleRunAll} />

          <CardContent>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border z-0"></div>

              {/* Phases */}
              <div className="space-y-8 relative z-10">
                {phases.map((phase, index) => (
                  <WorkflowPhaseItem
                    key={phase.id}
                    phase={phase}
                    index={index}
                    isActive={activePhase === phase.id}
                    isCompleted={progress[phase.id]}
                    totalPhases={phases.length}
                    onRunPhase={handleRunPhase}
                    onSetActivePhase={setActivePhase}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};
