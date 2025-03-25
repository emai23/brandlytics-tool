import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Define the shape of a project phase
interface Phase {
  id: string;
  status: 'completed' | 'in_progress' | 'not_started';
  progress: number;
}

// Define the shape of the project object
interface Project {
  currentPhase: string;
  phases: Phase[];
}

// Define the props for the component
interface ProjectWorkflowProps {
  project: Project;
}

// Use React.FC with the defined props interface
export const ProjectWorkflow: React.FC<ProjectWorkflowProps> = ({ project }) => {
  const phases = [
    { id: "market_research", name: "Market Research", icon: "📊" },
    { id: "target_audience", name: "Target Audience", icon: "👥" },
    { id: "brand_development", name: "Brand Development", icon: "🎨" },
    { id: "brand_strategy", name: "Brand Strategy", icon: "🎯" },
    { id: "content_strategy", name: "Content Strategy", icon: "📝" }
  ];
  
  const getPhaseStatus = (phaseId: string): string => {
    const phase = project.phases.find(p => p.id === phaseId);
    return phase ? phase.status : "not_started";
  };
  
  const getPhaseProgress = (phaseId: string): number => {
    const phase = project.phases.find(p => p.id === phaseId);
    return phase ? phase.progress : 0;
  };
  
  const getStatusColor = (status: string): string => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in_progress": return "bg-blue-100 text-blue-800";
      case "not_started": return "bg-slate-100 text-slate-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };
  
  const handlePhaseClick = (phaseId: string): void => {
    // Navigate to phase detail or open modal
    console.log(`Viewing phase: ${phaseId}`);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workflow Progress</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Workflow visualization */}
        <div className="relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2"></div>
          <div className="relative flex justify-between">
            {phases.map((phase, index) => {
              const status = getPhaseStatus(phase.id);
              const isActive = project.currentPhase === phase.id;
              const isCompleted = status === "completed";
              
              return (
                <div 
                  key={phase.id} 
                  className="flex flex-col items-center"
                  onClick={() => handlePhaseClick(phase.id)}
                >
                  <div 
                    className={`
                      relative z-10 flex h-10 w-10 items-center justify-center rounded-full 
                      ${isActive ? 'ring-2 ring-primary' : ''} 
                      ${isCompleted ? 'bg-primary text-primary-foreground' : 'bg-background border border-input'}
                      cursor-pointer
                    `}
                  >
                    <span>{phase.icon}</span>
                  </div>
                  <span className="mt-2 text-xs font-medium">{phase.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Phase details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map((phase) => {
            const status = getPhaseStatus(phase.id);
            const progress = getPhaseProgress(phase.id);
            const isActive = project.currentPhase === phase.id;
            
            return (
              <Card 
                key={phase.id} 
                className={`${isActive ? 'border-primary' : ''}`}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{phase.name}</h3>
                    <Badge className={getStatusColor(status)}>
                      {status.replace(/_/g, ' ')}
                    </Badge>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{progress}% complete</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handlePhaseClick(phase.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
