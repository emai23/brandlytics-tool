
import { useState, useEffect } from "react";

export interface Project {
  id: string;
  name: string;
  status: string;
  completion: number;
}

export interface ProjectMetrics {
  total: number;
  avgCompletionTime: string;
  successRate: string;
  activeProjects: number;
}

export interface ProjectTrendData {
  month: string;
  created: number;
  completed: number;
}

export interface ChannelData {
  name: string;
  value: number;
}

export interface MarketData {
  month: string;
  value: number;
  market: number;
}

export interface DashboardData {
  projects: Project[];
  projectMetrics: ProjectMetrics;
  projectTrendData: ProjectTrendData[];
  channelData: ChannelData[];
  marketData: MarketData[];
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData>({
    projects: [],
    projectMetrics: {
      total: 0,
      avgCompletionTime: "",
      successRate: "",
      activeProjects: 0
    },
    projectTrendData: [],
    channelData: [],
    marketData: []
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // In a real application, this would be an API call
        // For now, we'll simulate with mock data
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setData({
          projects: [
            { id: "1", name: "Market Analysis for Tech Startup", status: "In Progress", completion: 65 },
            { id: "2", name: "Retail Brand Development", status: "Completed", completion: 100 },
            { id: "3", name: "Healthcare Market Research", status: "Planning", completion: 20 },
          ],
          projectMetrics: {
            total: 12,
            avgCompletionTime: "28 days",
            successRate: "85%",
            activeProjects: 8
          },
          projectTrendData: [
            { month: "Jan", created: 2, completed: 1 },
            { month: "Feb", created: 3, completed: 2 },
            { month: "Mar", created: 4, completed: 3 },
            { month: "Apr", created: 2, completed: 4 },
            { month: "May", created: 5, completed: 2 },
            { month: "Jun", created: 3, completed: 3 },
          ],
          channelData: [
            { name: "Social", value: 35 },
            { name: "Search", value: 25 },
            { name: "Direct", value: 20 },
            { name: "Email", value: 15 },
            { name: "Other", value: 5 },
          ],
          marketData: [
            { month: "Jan", value: 400, market: 240 },
            { month: "Feb", value: 300, market: 250 },
            { month: "Mar", value: 520, market: 260 },
            { month: "Apr", value: 480, market: 280 },
            { month: "May", value: 600, market: 300 },
            { month: "Jun", value: 580, market: 320 },
            { month: "Jul", value: 650, market: 340 },
            { month: "Aug", value: 700, market: 360 },
            { month: "Sep", value: 720, market: 380 },
          ]
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
