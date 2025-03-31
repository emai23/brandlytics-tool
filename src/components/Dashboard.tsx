import { useNavigate } from "react-router-dom";
import { BarChart, LineChart, PieChart, TrendingUp, Users, Calendar, FileText, CheckCircle, Clock, Package, BarChart2 } from "lucide-react";
import MetricsCard from "./MetricsCard";
import { MotionContainer } from "./MotionContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, BarChart as RechartsBarChart } from "recharts";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Import sub-components for modular approach
// These components would be refactored to accept props for customization
import { ProjectStatusChart } from "./ProjectStatusChart";
import { ProjectTimeline } from "./ProjectTimeline";
import { ResourceAllocation } from "./ResourceAllocation";
import { RecentActivity } from "./RecentActivity";

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
  { name: "Social", value: 35 },
  { name: "Search", value: 25 },
  { name: "Direct", value: 20 },
  { name: "Email", value: 15 },
  { name: "Other", value: 5 },
];

// Mock projects data for the dashboard
const mockProjects = [
  { id: "1", name: "Market Analysis for Tech Startup", status: "In Progress", completion: 65 },
  { id: "2", name: "Retail Brand Development", status: "Completed", completion: 100 },
  { id: "3", name: "Healthcare Market Research", status: "Planning", completion: 20 },
];

// Project metrics data
const projectMetrics = {
  total: 12,
  avgCompletionTime: "28 days",
  successRate: "85%",
  activeProjects: 8
};

// Project trend data
const projectTrendData = [
  { month: "Jan", created: 2, completed: 1 },
  { month: "Feb", created: 3, completed: 2 },
  { month: "Mar", created: 4, completed: 3 },
  { month: "Apr", created: 2, completed: 4 },
  { month: "May", created: 5, completed: 2 },
  { month: "Jun", created: 3, completed: 3 },
];

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="dashboard" className="py-8">
      <MotionContainer delay={100}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Market Intelligence Dashboard</h2>
          <p className="text-muted-foreground mt-1">
            Overview of key market metrics and project performance indicators.
          </p>
        </div>
      </MotionContainer>

      {/* Performance Metrics - KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <MetricsCard
          title="Total Projects"
          value={projectMetrics.total.toString()}
          description="Across all categories"
          icon={<Package className="h-4 w-4" />}
          change={{ value: 2, type: "increase" }}
        />
        <MetricsCard
          title="Active Projects"
          value={projectMetrics.activeProjects.toString()}
          description="Currently in progress"
          icon={<BarChart2 className="h-4 w-4" />}
          change={{ value: 1, type: "increase" }}
        />
        <MetricsCard
          title="Avg. Completion Time"
          value={projectMetrics.avgCompletionTime}
          description="From start to finish"
          icon={<Clock className="h-4 w-4" />}
          change={{ value: 3, type: "decrease" }}
        />
        <MetricsCard
          title="Success Rate"
          value={projectMetrics.successRate}
          description="Projects meeting objectives"
          icon={<CheckCircle className="h-4 w-4" />}
          change={{ value: 0.5, type: "increase" }}
        />
      </div>

      {/* Projects Overview & Status */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* Projects List */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Recent Projects</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => navigate('/projects')}>View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleViewProject(project.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{project.name}</h4>
                        <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                          {project.status}
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
          </CardContent>
        </Card>

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
        <MotionContainer delay={350} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Project Trends</CardTitle>
              <CardDescription>
                Created vs completed projects over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={projectTrendData}
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
            </CardContent>
          </Card>
        </MotionContainer>

        {/* Marketing Channel Effectiveness */}
        <MotionContainer delay={400} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Channel Effectiveness</CardTitle>
              <CardDescription>
                Distribution of engagement across marketing channels
              </CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </MotionContainer>
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
