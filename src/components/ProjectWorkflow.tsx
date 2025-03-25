
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionContainer } from "./MotionContainer";
import { CheckCircle2, CircleDashed, ArrowRight } from "lucide-react";
import { useState } from "react";

const workflowPhases = [
  {
    id: "market_research",
    title: "Market Research",
    description: "Analyze market trends, opportunities, and competitive landscape",
    completed: false
  },
  {
    id: "target_audience",
    title: "Target Audience",
    description: "Define and analyze ideal customer profiles and segments",
    completed: false
  },
  {
    id: "brand_development",
    title: "Brand Development",
    description: "Create brand identity, positioning, and messaging framework",
    completed: false
  },
  {
    id: "brand_strategy",
    title: "Brand Strategy",
    description: "Develop actionable strategy for brand growth and differentiation",
    completed: false
  },
  {
    id: "content_strategy",
    title: "Content Strategy",
    description: "Plan content creation, distribution, and measurement approach",
    completed: false
  }
];

export const ProjectWorkflow = () => {
  const [activePhase, setActivePhase] = useState<string>("market_research");
  const [progress, setProgress] = useState<{[key: string]: boolean}>({
    market_research: false,
    target_audience: false,
    brand_development: false,
    brand_strategy: false,
    content_strategy: false
  });

  const handleRunPhase = (phaseId: string) => {
    // In a real implementation, this would trigger the actual processing
    console.log(`Running phase: ${phaseId}`);
    
    // For demo purposes, mark the phase as completed
    setProgress(prev => ({
      ...prev,
      [phaseId]: true
    }));
    
    // Move to next phase if available
    const currentIndex = workflowPhases.findIndex(phase => phase.id === phaseId);
    if (currentIndex < workflowPhases.length - 1) {
      setActivePhase(workflowPhases[currentIndex + 1].id);
    }
  };

  const handleRunAll = () => {
    // In a real implementation, this would trigger all phases in sequence
    console.log("Running complete workflow");
    
    // For demo purposes, mark all phases as completed
    const allCompleted = workflowPhases.reduce((acc, phase) => {
      acc[phase.id] = true;
      return acc;
    }, {} as {[key: string]: boolean});
    
    setProgress(allCompleted);
    setActivePhase(workflowPhases[workflowPhases.length - 1].id);
  };

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
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Workflow Progress</CardTitle>
                <CardDescription>Complete each phase or run the entire workflow at once</CardDescription>
              </div>
              <Button onClick={handleRunAll} className="px-6">Run Complete Workflow</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border z-0"></div>
              
              {/* Phases */}
              <div className="space-y-8 relative z-10">
                {workflowPhases.map((phase, index) => (
                  <div key={phase.id} className={`flex gap-6 ${activePhase === phase.id ? 'opacity-100' : 'opacity-70'}`}>
                    {/* Status Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      progress[phase.id] 
                        ? 'bg-primary text-primary-foreground' 
                        : activePhase === phase.id 
                          ? 'bg-accent border border-primary' 
                          : 'bg-background border border-muted-foreground'
                    }`}>
                      {progress[phase.id] ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <CircleDashed className="h-5 w-5" />
                      )}
                    </div>
                    
                    {/* Phase Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium">{phase.title}</h4>
                          <p className="text-sm text-muted-foreground">{phase.description}</p>
                        </div>
                        <Button 
                          variant={progress[phase.id] ? "outline" : "default"}
                          size="sm"
                          disabled={activePhase !== phase.id && !progress[phase.id]}
                          onClick={() => handleRunPhase(phase.id)}
                          className="ml-4"
                        >
                          {progress[phase.id] ? "View Results" : "Run Phase"}
                        </Button>
                      </div>

                      {/* Conditionally show content for active phase */}
                      {activePhase === phase.id && !progress[phase.id] && (
                        <Card className="mt-4 bg-accent/50 border-dashed">
                          <CardContent className="p-4">
                            <p className="text-sm">
                              Configure parameters for the {phase.title.toLowerCase()} phase or click "Run Phase" to use default settings.
                            </p>
                            <div className="flex justify-end mt-4">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="mr-2"
                              >
                                Configure
                              </Button>
                              <Button 
                                size="sm"
                                onClick={() => handleRunPhase(phase.id)}
                              >
                                Run with Defaults
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                      
                      {/* Results area (when phase is completed) */}
                      {progress[phase.id] && (
                        <Card className="mt-4 bg-secondary/50">
                          <CardContent className="p-4">
                            <p className="text-sm">
                              {phase.title} phase completed successfully. View detailed results or proceed to the next phase.
                            </p>
                            {index < workflowPhases.length - 1 && !progress[workflowPhases[index + 1].id] && (
                              <div className="flex justify-end mt-4">
                                <Button 
                                  size="sm"
                                  variant="outline" 
                                  className="flex items-center gap-1"
                                  onClick={() => setActivePhase(workflowPhases[index + 1].id)}
                                >
                                  Next Phase <ArrowRight className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};
