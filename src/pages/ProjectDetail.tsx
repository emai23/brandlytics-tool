
// src/pages/ProjectDetail.tsx
import { useParams } from "react-router-dom";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectWorkflow } from "@/components/projectworkflow/ProjectWorkflow";
import { ProjectInsights } from "@/components/project/ProjectInsights";
import { ProjectTabs } from "@/components/project/ProjectTabs";
import { useProject } from "@/hooks/useProject";
import { Navbar } from "@/components/Navbar";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { project, isLoading, error } = useProject(id);
  
  if (isLoading) return (
    <>
      <Navbar />
      <div className="container py-8">Loading project details...</div>
    </>
  );
  
  if (error) return (
    <>
      <Navbar />
      <div className="container py-8">Error loading project: {error.message}</div>
    </>
  );
  
  if (!project) return (
    <>
      <Navbar />
      <div className="container py-8">Project not found</div>
    </>
  );
  
  return (
    <>
      <Navbar />
      <div className="container py-6 space-y-6">
        <div className="glass-card glass-card-dark rounded-lg p-6">
          <ProjectHeader project={project} />
        </div>
        <div className="glass-card glass-card-dark rounded-lg p-6">
          <ProjectWorkflow project={project} />
        </div>
        <div className="glass-card glass-card-dark rounded-lg p-6">
          <ProjectInsights project={project} />
        </div>
        <div className="glass-card glass-card-dark rounded-lg p-6">
          <ProjectTabs project={project} />
        </div>
      </div>
    </>
  );
}
