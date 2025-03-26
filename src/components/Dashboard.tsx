
import { useNavigate } from "react-router-dom";
import { MotionContainer } from "./MotionContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardData } from "@/hooks/useDashboardData";

// Import sub-components for modular approach
import { ProjectStatusChart } from "./ProjectStatusChart";
import { ProjectTimeline } from "./ProjectTimeline";
import { ResourceAllocation } from "./ResourceAllocation";
import { RecentActivity } from "./RecentActivity";
import { DashboardHeader } from "./dashboard/DashboardHeader";
import { PerformanceMetrics } from "./dashboard/PerformanceMetrics";
import { ProjectsOverview } from "./dashboard/ProjectsOverview";
import { ProjectTrends } from "./dashboard/ProjectTrends";
import { MarketingChannelEffectiveness } from "./dashboard/MarketingChannelEffectiveness";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useDashboardData();

  return (
    <section id="dashboard" className="py-8">
      <DashboardHeader 
        title="Market Intelligence Dashboard" 
        description="Overview of key market metrics and project performance indicators."
      />

      {/* Performance Metrics - KPI Cards */}
      <PerformanceMetrics metrics={data.projectMetrics} isLoading={isLoading} />

      {/* Projects Overview & Status */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* Projects List */}
        <ProjectsOverview projects={data.projects} isLoading={isLoading} />

        {/* Project Status Overview - Donut Chart */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Project Status Overview</CardTitle>
            <CardDescription>
              Distribution of projects by current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ProjectStatusChart />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Timeline Visualization */}
      <MotionContainer delay={300} animation="slide-up">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
            <CardDescription>
              Timeline showing project phases and upcoming milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ProjectTimeline />
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      {/* Two-column layout for additional metrics */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
        {/* Project Creation and Completion Trends */}
        <ProjectTrends data={data.projectTrendData} isLoading={isLoading} />

        {/* Marketing Channel Effectiveness */}
        <MarketingChannelEffectiveness data={data.channelData} isLoading={isLoading} />
      </div>

      {/* Resource Allocation Section */}
      <MotionContainer delay={450} animation="slide-up">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Resource Allocation</CardTitle>
            <CardDescription>
              Distribution of resources across market niches and budget allocation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResourceAllocation />
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      {/* Recent Activity Feed */}
      <MotionContainer delay={500} animation="slide-up">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates and notifications across all projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] overflow-auto">
              <RecentActivity />
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </section>
  );
};
