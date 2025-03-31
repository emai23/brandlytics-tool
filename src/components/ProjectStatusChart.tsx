
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Progress } from "@/components/ui/progress";

export interface ProjectStatusChartProps {
  statusData?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  completionData?: Array<{
    name: string;
    completion: number;
  }>;
  title?: string;
  description?: string;
  delay?: number;
  animation?: "fade-in" | "scale-in" | "slide-in" | "slide-up";
}

// Default data
const defaultStatusData = [
  { name: "Not Started", value: 5, color: "#94a3b8" },
  { name: "In Progress", value: 7, color: "#3b82f6" },
  { name: "Completed", value: 12, color: "#22c55e" },
  { name: "On Hold", value: 2, color: "#f59e0b" },
];

const defaultCompletionData = [
  { name: "Market Research", completion: 85 },
  { name: "Brand Development", completion: 62 },
  { name: "Content Strategy", completion: 45 },
  { name: "Social Media", completion: 30 },
];

export const ProjectStatusChart = ({
  statusData = defaultStatusData,
  completionData = defaultCompletionData,
  title = "Project Status Distribution",
  description = "Overview of all projects by current status",
  delay = 300,
  animation = "fade-in"
}: ProjectStatusChartProps) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      <MotionContainer delay={delay} animation={animation}>
        <Card className="h-full backdrop-blur-sm bg-card/80 border border-border/50 shadow-md">
          <CardHeader className="overflow-hidden">
            <CardTitle className="text-xl truncate">{title}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 overflow-hidden">
            <div className="h-[250px] w-full">
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
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    wrapperStyle={{
                      paddingTop: '10px',
                      fontSize: '12px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    formatter={(value) => value.length > 12 ? value.slice(0, 12) + '...' : value}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={delay + 50} animation={animation}>
        <Card className="h-full backdrop-blur-sm bg-card/80 border border-border/50 shadow-md">
          <CardHeader className="overflow-hidden">
            <CardTitle className="text-xl truncate">Overall Completion Progress</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              Progress across different project categories
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <div className="space-y-6 overflow-y-auto max-h-[250px] pr-2 scrollbar-thin">
              {completionData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium truncate max-w-[70%]">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.completion}%</span>
                  </div>
                  <Progress value={item.completion} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};
