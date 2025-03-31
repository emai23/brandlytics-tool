
import { ProjectDashboardContainerData } from "@/types/dashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MotionContainer } from "@/components/MotionContainer";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";

const ProjectProgressChart = ({ progressData, isLoading }: { progressData: ProjectDashboardContainerData["progressData"], isLoading: boolean }) => {
  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading progress data...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={progressData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
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
        <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorProgress)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const AudienceDistributionChart = ({ audienceData, isLoading }: { audienceData: ProjectDashboardContainerData["audienceData"], isLoading: boolean }) => {
  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading audience data...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={audienceData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="hsl(var(--primary))"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {audienceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || `hsl(var(--primary))`} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          }}
          formatter={(value) => [`${value}%`, 'Percentage']}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

const ChannelPerformanceChart = ({ channelData, isLoading }: { channelData: ProjectDashboardContainerData["channelData"], isLoading: boolean }) => {
  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading channel data...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={channelData} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
        <XAxis type="number" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <Tooltip
          formatter={(value) => [`${value}%`, 'Effectiveness']}
          contentStyle={{
            background: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          }}
        />
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const ProjectInsightsList = ({ insights }: { insights: string[] }) => (
  <ul className="space-y-2">
    {insights.map((insight, index) => (
      <li key={index} className="flex items-start gap-2">
        <span className="bg-primary/20 text-primary rounded-full p-1 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span>{insight}</span>
      </li>
    ))}
  </ul>
);

const ProjectPhases = ({ phases, isLoading }: { phases: ProjectDashboardContainerData["phases"], isLoading: boolean }) => {
  if (isLoading) {
    return <div className="p-4 text-center">Loading project phases...</div>;
  }

  return (
    <div className="space-y-4">
      {phases.map((phase) => (
        <div key={phase.id} className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">{phase.name}</h4>
            <Badge variant={
              phase.status === "completed" ? "default" :
              phase.status === "in_progress" ? "secondary" : "outline"
            }>
              {phase.status.replace('_', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
            </Badge>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{phase.progress}%</span>
          </div>
          <Progress value={phase.progress} className="h-2" />
        </div>
      ))}
    </div>
  );
};

const DashboardProjectPresenter = (props: ProjectDashboardContainerData) => {
  const {
    isLoading,
    error,
    project,
    metrics,
    progressData,
    audienceData,
    channelData,
    keyInsights,
    phases
  } = props;

  if (error) {
    return (
      <div className="container py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error Loading Project Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error.message}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <MotionContainer delay={100}>
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight">{project.name}</h2>
          <p className="text-muted-foreground">Project dashboard and analytics overview</p>
        </div>
      </MotionContainer>

      {/* Project Overview Card */}
      <MotionContainer delay={150}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>Current status and progress summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                  {project.status.replace('_', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Completion</p>
                <div className="font-medium">{project.completion}%</div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Start Date</p>
                <div className="font-medium">{project.startDate || "N/A"}</div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Due Date</p>
                <div className="font-medium">{project.dueDate || "N/A"}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Overall Progress</span>
                  <span>{project.completion}%</span>
                </div>
                <Progress value={project.completion} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      {/* Progress Chart */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <MotionContainer delay={200}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Project Progress</CardTitle>
              <CardDescription>Weekly progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ProjectProgressChart progressData={progressData} isLoading={isLoading} />
              </div>
            </CardContent>
          </Card>
        </MotionContainer>
        
        <MotionContainer delay={250}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Target Audience</CardTitle>
              <CardDescription>Distribution by age group</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <AudienceDistributionChart audienceData={audienceData} isLoading={isLoading} />
              </div>
            </CardContent>
          </Card>
        </MotionContainer>
      </div>

      {/* Insights and Phases */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <MotionContainer delay={300}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
              <CardDescription>Important findings from research</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectInsightsList insights={keyInsights} />
            </CardContent>
          </Card>
        </MotionContainer>
        
        <MotionContainer delay={350}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Project Phases</CardTitle>
              <CardDescription>Status of project workflow phases</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectPhases phases={phases} isLoading={isLoading} />
            </CardContent>
          </Card>
        </MotionContainer>
      </div>

      {/* Marketing Channel Performance */}
      <MotionContainer delay={400}>
        <Card>
          <CardHeader>
            <CardTitle>Channel Performance</CardTitle>
            <CardDescription>Effectiveness of different marketing channels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ChannelPerformanceChart channelData={channelData} isLoading={isLoading} />
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};

export default DashboardProjectPresenter;
