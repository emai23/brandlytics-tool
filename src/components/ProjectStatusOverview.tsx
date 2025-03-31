
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MotionContainer } from "./MotionContainer";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export interface ProjectStatusOverviewProps {
  statusData?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  recentProjects?: Array<{
    id: number | string;
    name: string;
    status: string;
    progress: number;
    dueDate: string;
  }>;
  chartTitle?: string;
  chartDescription?: string;
  projectsTitle?: string;
  projectsDescription?: string;
  delay?: {
    chart: number;
    projects: number;
  };
  animation?: string;
}

// Default data
const defaultStatusData = [
  { name: "Not Started", value: 2, color: "#94a3b8" },
  { name: "In Progress", value: 7, color: "#3b82f6" },
  { name: "Completed", value: 12, color: "#22c55e" },
  { name: "On Hold", value: 1, color: "#f59e0b" },
];

const defaultRecentProjects = [
  {
    id: 1,
    name: "Health Tech Startup",
    status: "in_progress",
    progress: 65,
    dueDate: "2025-04-15",
  },
  {
    id: 2,
    name: "Eco-Friendly Fashion Brand",
    status: "completed",
    progress: 100,
    dueDate: "2025-03-20",
  },
  {
    id: 3,
    name: "Organic Food Delivery",
    status: "not_started",
    progress: 0,
    dueDate: "2025-05-01",
  },
  {
    id: 4,
    name: "Fitness App Rebrand",
    status: "in_progress",
    progress: 30,
    dueDate: "2025-04-30",
  },
];

export const ProjectStatusOverview = ({
  statusData = defaultStatusData,
  recentProjects = defaultRecentProjects,
  chartTitle = "Project Status Distribution",
  chartDescription = "Overview of all projects by current status",
  projectsTitle = "Recent Projects",
  projectsDescription = "Status and progress of your latest projects",
  delay = { chart: 400, projects: 500 },
  animation = "slide-up"
}: ProjectStatusOverviewProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "not_started":
        return "bg-slate-100 text-slate-800";
      case "on_hold":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const getStatusText = (status: string) => {
    return status.split("_").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8">
      <MotionContainer delay={delay.chart} animation={animation}>
        <Card>
          <CardHeader>
            <CardTitle>{chartTitle}</CardTitle>
            <CardDescription>
              {chartDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine={false}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} Projects`, 'Count']}
                    contentStyle={{ 
                      background: "hsl(var(--background))", 
                      border: "1px solid hsl(var(--border))", 
                      borderRadius: "var(--radius)" 
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {statusData.map((status) => (
                <div key={status.name} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: status.color }}
                  />
                  <span className="text-sm">{status.name}: {status.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={delay.projects} animation={animation}>
        <Card>
          <CardHeader>
            <CardTitle>{projectsTitle}</CardTitle>
            <CardDescription>
              {projectsDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentProjects.map((project) => (
                <div key={project.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Due: {new Date(project.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusText(project.status)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="h-2" />
                    <span className="text-xs font-medium">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};
