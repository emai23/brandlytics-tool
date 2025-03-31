
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectDashboardContainerData, ChannelData, MarketData } from "@/types/dashboard";
import DashboardProjectPresenter from "./DashboardProjectPresenter";

// Simulated API function to fetch project data
const fetchProjectData = async (projectId: string): Promise<ProjectDashboardContainerData> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock data for demonstration
  const progressData: MarketData[] = [
    { month: "Week 1", value: 10, market: 0 },
    { month: "Week 2", value: 25, market: 0 },
    { month: "Week 3", value: 40, market: 0 },
    { month: "Week 4", value: 55, market: 0 },
    { month: "Week 5", value: 65, market: 0 },
    { month: "Week 6", value: 75, market: 0 },
  ];

  const audienceData: ChannelData[] = [
    { name: "18-24", value: 15, color: "hsl(var(--primary))" },
    { name: "25-34", value: 30, color: "hsl(var(--secondary))" },
    { name: "35-44", value: 25, color: "hsl(var(--accent))" },
    { name: "45-54", value: 20, color: "hsl(var(--muted-foreground))" },
    { name: "55+", value: 10, color: "hsl(var(--destructive))" },
  ];

  const channelData: ChannelData[] = [
    { name: "Social Media", value: 35, color: "hsl(var(--primary))" },
    { name: "Search", value: 25, color: "hsl(var(--secondary))" },
    { name: "Direct", value: 20, color: "hsl(var(--accent))" },
    { name: "Email", value: 15, color: "hsl(var(--destructive))" },
    { name: "Referral", value: 5, color: "hsl(var(--muted-foreground))" },
  ];

  return {
    isLoading: false,
    error: null,
    project: {
      id: projectId,
      name: "Healthcare Technology Market Analysis",
      status: "in_progress",
      completion: 65,
      startDate: "2023-11-01",
      dueDate: "2024-01-15",
      owner: "John Doe"
    },
    metrics: {
      totalProjects: 1,
      activeProjects: 1,
      avgCompletionTime: "45 days",
      successRate: "90%"
    },
    progressData,
    audienceData,
    channelData,
    keyInsights: [
      "Healthcare technology adoption is increasing by 15% annually",
      "Telehealth services show highest growth potential",
      "Data privacy remains the top concern for consumers",
      "Mobile health apps are preferred by 67% of users under 45"
    ],
    phases: [
      { id: "market_research", name: "Market Research", status: "completed", progress: 100 },
      { id: "target_audience", name: "Target Audience", status: "completed", progress: 100 },
      { id: "brand_development", name: "Brand Development", status: "in_progress", progress: 60 },
      { id: "brand_strategy", name: "Brand Strategy", status: "not_started", progress: 0 },
      { id: "content_strategy", name: "Content Strategy", status: "not_started", progress: 0 }
    ]
  };
};

export default function DashboardProjectContainer() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ProjectDashboardContainerData>({
    isLoading: true,
    error: null,
    project: {
      id: "",
      name: "",
      status: "not_started",
      completion: 0
    },
    metrics: {
      totalProjects: 0,
      activeProjects: 0,
      avgCompletionTime: "",
      successRate: ""
    },
    progressData: [],
    audienceData: [],
    channelData: [],
    keyInsights: [],
    phases: []
  });

  useEffect(() => {
    const getProjectData = async () => {
      if (!id) return;
      
      try {
        const projectData = await fetchProjectData(id);
        setData(projectData);
      } catch (error) {
        setData(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error : new Error('Failed to fetch project data')
        }));
      }
    };

    getProjectData();
  }, [id]);

  return <DashboardProjectPresenter {...data} />;
}
