import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Progress } from "@/components/ui/progress";

// Sample data - replace with your actual data
const projectStatusData = [
  { name: "Not Started", value: 5, color: "#94a3b8" },
  { name: "In Progress", value: 7, color: "#3b82f6" },
  { name: "Completed", value: 12, color: "#22c55e" },
  { name: "On Hold", value: 2, color: "#f59e0b" },
];

const projectCompletionData = [
  { name: "Market Research", completion: 85 },
  { name: "Brand Development", completion: 62 },
  { name: "Content Strategy", completion: 45 },
  { name: "Social Media", completion: 30 },
];

export const ProjectStatusChart = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
      <MotionContainer delay={300}>
        <Card>
          <CardHeader>
            <CardTitle>Project Status Distribution</CardTitle>
            <CardDescription>
              Overview of all projects by current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine={false}
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} Projects`, 'Count']}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={350}>
        <Card>
          <CardHeader>
            <CardTitle>Overall Completion Progress</CardTitle>
            <CardDescription>
              Progress across different project categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projectCompletionData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
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
