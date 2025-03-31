
// src/pages/ProjectDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectWorkflow } from "@/components/projectworkflow/ProjectWorkflow";
import { ProjectInsights } from "@/components/project/ProjectInsights";
import { ProjectTabs } from "@/components/project/ProjectTabs";
import { useProject } from "@/hooks/useProject";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { project, isLoading, error } = useProject(id);
  
  if (isLoading) return <div className="container py-8">Loading project details...</div>;
  if (error) return <div className="container py-8">Error loading project: {error.message}</div>;
  if (!project) return <div className="container py-8">Project not found</div>;
  
  const handleViewDashboard = () => {
    navigate(`/projects/${id}/dashboard`);
  };
  
  return (
    <div className="container py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Project Details</h1>
        <Button 
          variant="outline"
          onClick={handleViewDashboard}
          className="flex items-center gap-2"
        >
          <LayoutDashboard className="h-4 w-4" />
          View Dashboard
        </Button>
      </div>
      
      <ProjectHeader project={project} />
      <ProjectWorkflow project={project} />
      <ProjectInsights project={project} />
      <ProjectTabs project={project} />
    </div>
  );
}
