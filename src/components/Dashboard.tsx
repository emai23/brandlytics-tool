import { useNavigate } from "react-router-dom";import { BarChart, LineChart, PieChart, TrendingUp, Users, Calendar, FileText, CheckCircle, Clock } from "lucide-react";



























export default Dashboard;};  );    </div>      {/* ...existing code... */}      ))}        </Card>          {/* Project card content */}        >          onClick={() => handleViewProject(project.id)}          className="hover-lift cursor-pointer"           key={project.id}         <Card       {projects.map((project) => (      {/* ...existing code... */}    <div>  return (  };    navigate(`/projects/${projectId}`);  const handleViewProject = (projectId) => {  const navigate = useNavigate();const Dashboard = () => {// ...existing code...import { MetricsCard } from "./MetricsCard";
import { MotionContainer } from "./MotionContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, BarChart as RechartsBarChart } from "recharts";
import { Progress } from "@/components/ui/progress";

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

export const Dashboard = () => {
  return (
    <section id="dashboard" className="py-12">
      <MotionContainer delay={100}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Market Intelligence Dashboard</h2>
          <p className="text-muted-foreground mt-1">
            Overview of key market metrics and brand performance indicators.
          </p>
        </div>
      </MotionContainer>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard
          title="Market Share"
          value="27.2%"
          description="Percentage of total addressable market"
          icon={<PieChart className="h-4 w-4" />}
          change={{ value: 2.4, type: "increase" }}
        />
        <MetricsCard
          title="Brand Engagement"
          value="78.5%"
          description="Overall engagement rate across channels"
          icon={<Users className="h-4 w-4" />}
          change={{ value: 1.8, type: "increase" }}
        />
        <MetricsCard
          title="Conversion Rate"
          value="3.6%"
          description="Average across all marketing channels"
          icon={<BarChart className="h-4 w-4" />}
          change={{ value: 0.5, type: "decrease" }}
        />
        <MetricsCard
          title="Market Growth"
          value="12.8%"
          description="Year-over-year market expansion"
          icon={<TrendingUp className="h-4 w-4" />}
          change={{ value: 0, type: "neutral" }}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8">
        <MotionContainer delay={300} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Brand Performance Trends</CardTitle>
              <CardDescription>
                Monthly brand performance compared to market average
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={marketData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
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
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--primary))" 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      strokeWidth={2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="market" 
                      stroke="hsl(var(--muted-foreground))" 
                      fillOpacity={1} 
                      fill="url(#colorMarket)" 
                      strokeWidth={1.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>

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
    </section>
  );
};
