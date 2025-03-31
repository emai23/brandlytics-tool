import { useNavigate } from "react-router-dom";
import { DashboardContainerData } from "@/types/dashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionContainer } from "@/components/MotionContainer";
import MetricsCard from "@/components/MetricsCard";
import { ProjectStatusChart } from "@/components/ProjectStatusChart";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ResourceAllocation } from "@/components/ResourceAllocation";
import { RecentActivity } from "@/components/RecentActivity";
import { Package, BarChart2, Clock, CheckCircle } from "lucide-react";
import { AreaChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, BarChart as RechartsBarChart } from "recharts";

export interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

const DashboardHeader = ({ title, subtitle }: DashboardHeaderProps) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    <p className="text-muted-foreground mt-1">{subtitle}</p>
  </div>
);

interface ProjectsListProps {
  projects: DashboardContainerData["projects"];
  isLoading: boolean;
  onViewProject: (id: string) => void;
}

const ProjectsList = ({ projects, isLoading, onViewProject }: ProjectsListProps) => {
  if (isLoading) {
    return <div className="p-8 text-center">Loading projects...</div>;
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onViewProject(project.id)}
        >
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{project.name}</h4>
                <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                  {project.status.replace('_', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                </Badge>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Completion</span>
                <span>{project.completion}%</span>
              </div>
              <Progress value={project.completion} className="h-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

interface ProjectTrendsChartProps {
  trendData: DashboardContainerData["projectTrends"];
  isLoading: boolean;
}

const ProjectTrendsChart = ({ trendData, isLoading }: ProjectTrendsChartProps) => {
  if (isLoading) {
    return <div className="h-[300px] flex items-center justify-center">Loading trend data...</div>;
  }

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={trendData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ 
              background: "hsl(var(--background))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
            }}
          />
          <Bar dataKey="created" name="Projects Created" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="completed" name="Projects Completed" fill="hsl(var(--accent-foreground))" radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface MarketingChannelChartProps {
  channelData: DashboardContainerData["channelData"];
  isLoading: boolean;
}

const MarketingChannelChart = ({ channelData, isLoading }: MarketingChannelChartProps) => {
  if (isLoading) {
    return <div className="h-[300px] flex items-center justify-center">Loading channel data...</div>;
  }

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={channelData} barCategoryGap={20}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Effectiveness']}
            contentStyle={{ 
              background: "hsl(var(--background))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
            }}
          />
          <Bar 
            dataKey="value" 
            fill="hsl(var(--primary))" 
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

const DashboardMainPresenter = (props: DashboardContainerData) => {
  const {
    isLoading,
    error,
    metrics,
    projects,
    projectTrends,
    projectStatus,
    projectCompletion,
    marketData,
    channelData,
    milestones,
    activities
  } = props;
  
  const navigate = useNavigate();

  const handleViewProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  if (error) {
    return (
      <div className="container py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error Loading Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error.message}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section id="dashboard" className="py-8">
      <MotionContainer delay={100}>
        <DashboardHeader 
          title="Market Intelligence Dashboard" 
          subtitle="Overview of key market metrics and project performance indicators." 
        />
      </MotionContainer>

      {/* Performance Metrics - KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <MetricsCard
          title="Total Projects"
          value={metrics.total.toString()}
          description="Across all categories"
          icon={<Package className="h-4 w-4" />}
          change={{ value: 2, type: "increase" }}
          isLoading={isLoading}
        />
        <MetricsCard
          title="Active Projects"
          value={metrics.activeProjects.toString()}
          description="Currently in progress"
          icon={<BarChart2 className="h-4 w-4" />}
          change={{ value: 1, type: "increase" }}
          isLoading={isLoading}
        />
        <MetricsCard
          title="Avg. Completion Time"
          value={metrics.avgCompletionTime}
          description="From start to finish"
          icon={<Clock className="h-4 w-4" />}
          change={{ value: 3, type: "decrease" }}
          isLoading={isLoading}
        />
        <MetricsCard
          title="Success Rate"
          value={metrics.successRate}
          description="Projects meeting objectives"
          icon={<CheckCircle className="h-4 w-4" />}
          change={{ value: 0.5, type: "increase" }}
          isLoading={isLoading}
        />
      </div>

      {/* Project Status Overview - Moved to its own row and full width */}
      <MotionContainer delay={300} animation="slide-up">
        <Card className="mb-8">
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
      </MotionContainer>
      
      {/* Recent Projects - Moved to its own row and full width */}
      <MotionContainer delay={350} animation="slide-up">
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Recent Projects</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => navigate('/projects')}>View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <ProjectsList 
              projects={projects} 
              isLoading={isLoading}
              onViewProject={handleViewProject} 
            />
          </CardContent>
        </Card>
      </MotionContainer>

      {/* Project Timeline Visualization */}
      <MotionContainer delay={400} animation="slide-up">
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
        <MotionContainer delay={450} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Project Trends</CardTitle>
              <CardDescription>
                Created vs completed projects over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectTrendsChart trendData={projectTrends} isLoading={isLoading} />
            </CardContent>
          </Card>
        </MotionContainer>

        {/* Marketing Channel Effectiveness */}
        <MotionContainer delay={500} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Channel Effectiveness</CardTitle>
              <CardDescription>
                Distribution of engagement across marketing channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MarketingChannelChart channelData={channelData} isLoading={isLoading} />
            </CardContent>
          </Card>
        </MotionContainer>
      </div>

      {/* Resource Allocation Section */}
      <MotionContainer delay={550} animation="slide-up">
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
      <MotionContainer delay={600} animation="slide-up">
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

export default DashboardMainPresenter;
