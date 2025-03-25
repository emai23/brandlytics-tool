// src/pages/ProjectDetail.tsx
import { useParams } from "react-router-dom";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectWorkflow } from "@/components/project/ProjectWorkflow";
import { ProjectInsights } from "@/components/project/ProjectInsights";
import { ProjectTabs } from "@/components/project/ProjectTabs";
import { useProject } from "@/hooks/useProject";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { project, isLoading, error } = useProject(id);
  
  if (isLoading) return <div className="container py-8">Loading project details...</div>;
  if (error) return <div className="container py-8">Error loading project: {error.message}</div>;
  if (!project) return <div className="container py-8">Project not found</div>;
  
  return (
    <div className="container py-6 space-y-6">
      <ProjectHeader project={project} />
      <ProjectWorkflow project={project} />
      <ProjectInsights project={project} />
      <ProjectTabs project={project} />
    </div>
  );
}