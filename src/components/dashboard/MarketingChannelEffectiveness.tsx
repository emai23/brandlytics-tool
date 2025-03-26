
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "@/components/MotionContainer";
import { BarChart as RechartsBarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChannelData } from "@/hooks/useDashboardData";

interface MarketingChannelEffectivenessProps {
  data: ChannelData[];
  isLoading?: boolean;
}

export const MarketingChannelEffectiveness = ({ data, isLoading = false }: MarketingChannelEffectivenessProps) => {
  return (
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
            {isLoading ? (
              <div className="h-full flex items-center justify-center bg-muted/10 rounded-md">
                <div className="text-muted-foreground animate-pulse">Loading chart data...</div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={data} barCategoryGap={20}>
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
            )}
          </div>
        </CardContent>
      </Card>
    </MotionContainer>
  );
};
