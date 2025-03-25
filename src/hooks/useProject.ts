
import { useState, useEffect } from "react";

// This would be replaced with your actual API call
const fetchProject = async (id) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "Health Tech Startup",
        niche: "Healthcare Technology",
        createdAt: "2025-03-01",
        owner: "John Doe",
        status: "in_progress",
        progress: 65,
        currentPhase: "brand_development",
        summary: "This healthcare technology startup is targeting the growing telemedicine market with innovative AI-driven diagnostic tools. Initial research shows strong market potential with key differentiators in privacy and user experience.",
        phases: [
          { id: "market_research", status: "completed", progress: 100 },
          { id: "target_audience", status: "completed", progress: 100 },
          { id: "brand_development", status: "in_progress", progress: 60 },
          { id: "brand_strategy", status: "not_started", progress: 0 },
          { id: "content_strategy", status: "not_started", progress: 0 }
        ],
        // Other project data would be included here
      });
    }, 500);
  });
};

export function useProject(id) {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getProject = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProject(id);
        setProject(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    getProject();
  }, [id]);
  
  return { project, isLoading, error };
}
