
import { useState, useEffect } from "react";
import { DashboardContainerData, ProjectStatusData, ProjectCompletionData, DashboardProject, Activity } from "@/types/dashboard";

// Simulated API function to fetch dashboard data
const fetchDashboardData = async (): Promise<DashboardContainerData> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock data for demonstration
  const marketData = [
    { month: "Jan", value: 400, market: 240 },
    { month: "Feb", value: 300, market: 250 },
    { month: "Mar", value: 520, market: 260 },
    { month: "Apr", value: 480, market: 280 },
    { month: "May", value: 600, market: 300 },
    { month: "Jun", value: 580, market: 320 },
    { month: "Jul", value: 650, market: 340 },
    { month: "Aug", value: 700, market: 360 },
    { month: "Sep", value: 720, market: 380 },
  ];

  const channelData = [
    { name: "Social", value: 35, color: "hsl(var(--primary))" },
    { name: "Search", value: 25, color: "hsl(var(--secondary))" },
    { name: "Direct", value: 20, color: "hsl(var(--accent))" },
    { name: "Email", value: 15, color: "hsl(var(--destructive))" },
    { name: "Other", value: 5, color: "hsl(var(--muted-foreground))" },
  ];

  const projects: DashboardProject[] = [
    { id: "1", name: "Market Analysis for Tech Startup", status: "in_progress", completion: 65, startDate: "2023-11-01", dueDate: "2023-12-15", owner: "John Doe" },
    { id: "2", name: "Retail Brand Development", status: "completed", completion: 100, startDate: "2023-10-01", dueDate: "2023-11-15", owner: "Jane Smith" },
    { id: "3", name: "Healthcare Market Research", status: "planning", completion: 20, startDate: "2023-12-01", dueDate: "2024-01-30", owner: "Alex Brown" },
  ];

  const projectStatusData: ProjectStatusData[] = [
    { name: "Completed", value: 4, color: "hsl(var(--primary))" },
    { name: "In Progress", value: 6, color: "hsl(var(--secondary))" },
    { name: "Planning", value: 3, color: "hsl(var(--accent))" },
    { name: "Not Started", value: 2, color: "hsl(var(--muted-foreground))" },
  ];

  const projectCompletionData: ProjectCompletionData[] = [
    { name: "Market Analysis", completion: 75 },
    { name: "Audience Research", completion: 60 },
    { name: "Brand Strategy", completion: 45 },
    { name: "Content Planning", completion: 30 },
    { name: "Campaign Design", completion: 20 },
  ];

  const projectTrendData = [
    { month: "Jan", created: 2, completed: 1 },
    { month: "Feb", created: 3, completed: 2 },
    { month: "Mar", created: 4, completed: 3 },
    { month: "Apr", created: 2, completed: 4 },
    { month: "May", created: 5, completed: 2 },
    { month: "Jun", created: 3, completed: 3 },
  ];

  const milestones = [
    { date: "2023-12-15", project: "Market Analysis", event: "Final Report Due" },
    { date: "2023-12-20", project: "Brand Strategy", event: "Client Presentation" },
    { date: "2023-12-31", project: "Healthcare Research", event: "Data Collection Complete" },
  ];

  const activities: Activity[] = [
    { 
      id: "1", 
      type: "update", 
      projectId: "1", 
      projectName: "Market Analysis", 
      description: "Updated project status to In Progress",
      timestamp: "2023-12-01T09:30:00Z", 
      user: { id: "u1", name: "John Doe", avatar: "/avatar1.png" } 
    },
    { 
      id: "2", 
      type: "completion", 
      projectId: "2", 
      projectName: "Retail Brand", 
      description: "Completed brand strategy phase",
      timestamp: "2023-12-02T14:45:00Z", 
      user: { id: "u2", name: "Jane Smith", avatar: "/avatar2.png" } 
    },
    { 
      id: "3", 
      type: "milestone", 
      projectId: "3", 
      projectName: "Healthcare Research", 
      description: "Reached milestone: Survey completion",
      timestamp: "2023-12-03T11:15:00Z", 
      user: { id: "u3", name: "Alex Brown", avatar: "/avatar3.png" } 
    },
  ];

  return {
    isLoading: false,
    error: null,
    metrics: {
      total: 15,
      avgCompletionTime: "28 days",
      successRate: "85%",
      activeProjects: 8
    },
    projects,
    projectTrends: projectTrendData,
    projectStatus: projectStatusData,
    projectCompletion: projectCompletionData,
    marketData,
    channelData,
    milestones,
    activities
  };
};

/**
 * Custom hook for fetching and managing main dashboard data
 * @returns Dashboard data including projects, metrics, and visualization data
 */
export function useDashboard() {
  const [data, setData] = useState<DashboardContainerData>({
    isLoading: true,
    error: null,
    metrics: {
      total: 0,
      avgCompletionTime: "",
      successRate: "",
      activeProjects: 0
    },
    projects: [],
    projectTrends: [],
    projectStatus: [],
    projectCompletion: [],
    marketData: [],
    channelData: [],
    milestones: [],
    activities: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(prev => ({ ...prev, isLoading: true }));
        const dashboardData = await fetchDashboardData();
        setData(dashboardData);
      } catch (error) {
        setData(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error : new Error('Failed to fetch dashboard data')
        }));
      }
    };

    fetchData();
  }, []);

  return data;
}
