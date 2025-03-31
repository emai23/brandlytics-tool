
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/components/theme/ThemeProvider";

export interface ProjectStatusChartProps {
  statusData?: Array<{
    name: string;
    value: number;
    color: string;
    darkColor?: string;
  }>;
  completionData?: Array<{
    name: string;
    completion: number;
  }>;
  title?: string;
  description?: string;
  delay?: number;
  animation?: "fade-in" | "scale-in" | "slide-in" | "slide-up";
  variant?: 'default' | 'glass' | 'glassDark' | 'glassLight';
}

// Default data with dark mode colors
const defaultStatusData = [
  { 
    name: "Not Started", 
    value: 5, 
    color: "#94a3b8", 
    darkColor: "#64748b" 
  },
  { 
    name: "In Progress", 
    value: 7, 
    color: "#3b82f6", 
    darkColor: "#60a5fa" 
  },
  { 
    name: "Completed", 
    value: 12, 
    color: "#22c55e", 
    darkColor: "#4ade80" 
  },
  { 
    name: "On Hold", 
    value: 2, 
    color: "#f59e0b", 
    darkColor: "#fbbf24" 
  },
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
  animation = "fade-in",
  variant = "glass"
}: ProjectStatusChartProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Get the appropriate color based on the theme
  const getChartColors = (data: typeof statusData) => {
    return data.map(item => isDark && item.darkColor ? item.darkColor : item.color);
  };
  
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
      <MotionContainer delay={delay} animation={animation}>
        <Card variant={variant} className="theme-transition">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              {description}
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
                      <Cell 
                        key={`cell-${index}`} 
                        fill={isDark && entry.darkColor ? entry.darkColor : entry.color} 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} Projects`, 'Count']}
                    contentStyle={{ 
                      backgroundColor: isDark ? 'rgba(26, 32, 44, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                      borderColor: isDark ? 'rgba(45, 55, 72, 0.3)' : 'rgba(226, 232, 240, 0.3)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(4px)'
                    }}
                    labelStyle={{ 
                      color: isDark ? 'rgba(226, 232, 240, 0.9)' : 'rgba(45, 55, 72, 0.9)'
                    }}
                    itemStyle={{
                      color: isDark ? 'rgba(226, 232, 240, 0.9)' : 'rgba(45, 55, 72, 0.9)'
                    }}
                  />
                  <Legend 
                    formatter={(value, entry, index) => (
                      <span className="text-sm">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={delay + 50} animation={animation}>
        <Card variant={variant} className="theme-transition">
          <CardHeader>
            <CardTitle>Overall Completion Progress</CardTitle>
            <CardDescription>
              Progress across different project categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {completionData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.completion}%</span>
                  </div>
                  <Progress 
                    value={item.completion} 
                    className="h-2 theme-transition" 
                    indicatorClassName={`theme-transition ${
                      item.completion > 80 ? 'bg-success dark:bg-success' :
                      item.completion > 50 ? 'bg-primary dark:bg-primary' :
                      item.completion > 30 ? 'bg-warning dark:bg-warning' :
                      'bg-destructive dark:bg-destructive'
                    }`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};
