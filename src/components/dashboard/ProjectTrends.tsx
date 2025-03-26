
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "@/components/MotionContainer";
import { BarChart as RechartsBarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ProjectTrendData } from "@/hooks/useDashboardData";

interface ProjectTrendsProps {
  data: ProjectTrendData[];
  isLoading?: boolean;
}

export const ProjectTrends = ({ data, isLoading = false }: ProjectTrendsProps) => {
  return (
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
            {isLoading ? (
              <div className="h-full flex items-center justify-center bg-muted/10 rounded-md">
                <div className="text-muted-foreground animate-pulse">Loading chart data...</div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={data}
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
            )}
          </div>
        </CardContent>
      </Card>
    </MotionContainer>
  );
};
