
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
  animation?: "fade-in" | "scale-in" | "slide-in" | "slide-up";
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
  animation = "fade-in"
}: ProjectStatusOverviewProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100/80 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "in_progress":
        return "bg-blue-100/80 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "not_started":
        return "bg-slate-100/80 text-slate-800 dark:bg-slate-800/30 dark:text-slate-300";
      case "on_hold":
        return "bg-amber-100/80 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-slate-100/80 text-slate-800 dark:bg-slate-800/30 dark:text-slate-300";
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
        <Card className="glass-effect h-full overflow-hidden">
          <CardHeader className="overflow-hidden">
            <CardTitle className="text-xl truncate">{chartTitle}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {chartDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 overflow-hidden">
            <div className="h-[260px] chart-container overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name.length > 10 ? name.slice(0, 10) + '...' : name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine={{ stroke: 'rgba(255,255,255,0.3)', strokeWidth: 1 }}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={1} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} Projects`, 'Count']}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(8px)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 overflow-hidden">
              {statusData.map((status) => (
                <div key={status.name} className="flex items-center overflow-hidden">
                  <div 
                    className="w-3 h-3 rounded-full mr-2 flex-shrink-0" 
                    style={{ backgroundColor: status.color }}
                  />
                  <span className="text-sm truncate">{status.name}: {status.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={delay.projects} animation={animation}>
        <Card className="glass-effect h-full overflow-hidden">
          <CardHeader className="overflow-hidden">
            <CardTitle className="text-xl truncate">{projectsTitle}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {projectsDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <div className="space-y-5 overflow-y-auto max-h-[320px] scrollbar-thin pr-2">
              {recentProjects.map((project) => (
                <div key={project.id} className="space-y-2 bg-background/10 p-3 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between items-center gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="font-medium truncate">{project.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Due: {new Date(project.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                    <Badge className={getStatusColor(project.status) + " whitespace-nowrap flex-shrink-0"}>
                      {getStatusText(project.status)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={project.progress} className="h-2 flex-grow" />
                    <span className="text-xs font-medium whitespace-nowrap flex-shrink-0">{project.progress}%</span>
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
