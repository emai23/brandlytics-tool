
import { ID } from './common';

/**
 * Types for dashboard components following container/presenter pattern
 */

/**
 * Dashboard interface
 */
export interface Dashboard {
  id: ID;
  name: string;
  widgets: Widget[];
}

/**
 * Widget interface
 */
export interface Widget {
  id: ID;
  type: 'chart' | 'table' | 'stat';
  data: any;
}

/**
 * Project data structure for dashboard display
 */
export interface DashboardProject {
  id: string;
  name: string;
  status: 'not_started' | 'planning' | 'in_progress' | 'completed' | 'on_hold';
  completion: number;
  startDate?: string;
  dueDate?: string;
  owner?: string;
}

/**
 * Market data point structure
 */
export interface MarketData {
  month: string;
  value: number;
  market: number;
}

/**
 * Channel data point structure
 */
export interface ChannelData {
  name: string;
  value: number;
  color?: string;
}

/**
 * Project Status data for charts
 */
export interface ProjectStatusData {
  name: string;
  value: number;
  color: string;
}

/**
 * Project Completion data
 */
export interface ProjectCompletionData {
  name: string;
  completion: number;
}

/**
 * Change indicator for metrics
 */
export interface ChangeIndicator {
  value: number;
  direction: 'up' | 'down' | 'neutral';
  type: 'increase' | 'decrease' | 'neutral';
}

/**
 * Project trend data structure
 */
export interface ProjectTrendData {
  month: string;
  created: number;
  completed: number;
}

/**
 * Activity item for recent activity feed
 */
export interface Activity {
  id: string;
  type: 'update' | 'creation' | 'completion' | 'milestone' | 'comment';
  projectId: string;
  projectName: string;
  description: string;
  timestamp: string;
  user?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

/**
 * Milestone data structure
 */
export interface Milestone {
  date: string;
  project: string;
  event: string;
}

/**
 * Dashboard metrics structure
 */
export interface DashboardMetrics {
  total: number;
  avgCompletionTime: string;
  successRate: string;
  activeProjects: number;
}

/**
 * Project metrics for dashboard
 */
export interface ProjectDashboardMetrics {
  totalProjects: number;
  activeProjects: number;
  avgCompletionTime: string;
  successRate: string;
}

/**
 * Container Data interface for dashboard components
 */
export interface DashboardContainerData {
  isLoading: boolean;
  error: Error | null;
  metrics: DashboardMetrics;
  projects: DashboardProject[];
  projectTrends: ProjectTrendData[];
  projectStatus: ProjectStatusData[];
  projectCompletion: ProjectCompletionData[];
  marketData: MarketData[];
  channelData: ChannelData[];
  milestones: Milestone[];
  activities: Activity[];
}

/**
 * Container Data interface specifically for project dashboard
 */
export interface ProjectDashboardContainerData {
  isLoading: boolean;
  error: Error | null;
  project: DashboardProject;
  metrics: ProjectDashboardMetrics;
  progressData: MarketData[];
  audienceData: ChannelData[];
  channelData: ChannelData[];
  keyInsights: string[];
  phases: {
    id: string;
    name: string;
    status: string;
    progress: number;
  }[];
}

/**
 * Presenter Props interfaces for components
 */

export interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export interface PerformanceMetricsProps {
  metrics: DashboardMetrics;
  isLoading: boolean;
}

export interface ProjectsOverviewProps {
  projects: DashboardProject[];
  isLoading: boolean;
  onViewProject: (id: string) => void;
}

export interface ProjectStatusChartProps {
  statusData: ProjectStatusData[];
  completionData: ProjectCompletionData[];
  isLoading: boolean;
}

export interface ProjectTimelineProps {
  timelineData: any[];
  milestones: Milestone[];
  isLoading: boolean;
}

export interface ProjectTrendsProps {
  trendData: ProjectTrendData[];
  isLoading: boolean;
}

export interface MarketingChannelProps {
  channelData: ChannelData[];
  isLoading: boolean;
}

export interface ResourceAllocationProps {
  allocationData: any;
  isLoading: boolean;
}

export interface RecentActivityProps {
  activities: Activity[];
  isLoading: boolean;
}
