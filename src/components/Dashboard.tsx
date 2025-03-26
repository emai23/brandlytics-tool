
import { useNavigate } from "react-router-dom";
import { BarChart, LineChart, PieChart, TrendingUp, Users, Calendar, FileText, CheckCircle, Clock, Package, BarChart2 } from "lucide-react";
import { MetricsCard } from "./MetricsCard";
import { MotionContainer } from "./MotionContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, BarChart as RechartsBarChart } from "recharts";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

// Project trend data
const projectTrendData = [
  { month: "Jan", created: 2, completed: 1 },
  { month: "Feb", created: 3, completed: 2 },
  { month: "Mar", created: 4, completed: 3 },
  { month: "Apr", created: 2, completed: 4 },
  { month: "May", created: 5, completed: 2 },
  { month: "Jun", created: 3, completed: 3 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="dashboard" className="py-8 dashboard-bg-pattern">
      <div className="container px-4 md:px-6">
        <MotionContainer delay={100} animation="fade-in">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">Market Intelligence Dashboard</h2>
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
          <MotionContainer delay={200} animation="slide-up">
            <Card className="md:col-span-1 glass-card">
              <CardHeader className="pb-3 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-gradient">Recent Projects</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => navigate('/create-project')} 
                          className="text-primary hover:text-white hover:bg-primary/20">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  {mockProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="glass-panel hover:border-primary/30 transition-all duration-300 cursor-pointer"
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
                          <Progress value={project.completion} className="h-2 bg-secondary" indicatorClassName="bg-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionContainer>

          {/* Project Trends Chart */}
          <MotionContainer delay={300} animation="slide-up">
            <Card className="md:col-span-2 glass-card">
              <CardHeader className="pb-2 border-b border-white/10">
                <CardTitle className="text-gradient">Brand Performance Trends</CardTitle>
                <CardDescription>
                  Monthly brand performance compared to market average
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={marketData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fontSize: 12, fill: "rgba(255,255,255,0.6)" }}
                        tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                        axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      />
                      <YAxis 
                        tick={{ fontSize: 12, fill: "rgba(255,255,255,0.6)" }} 
                        tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                        axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          background: "rgba(30,30,45,0.8)", 
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "var(--radius)",
                          backdropFilter: "blur(4px)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                        }}
                        itemStyle={{ color: "rgba(255,255,255,0.8)" }}
                        labelStyle={{ color: "white", fontWeight: "bold" }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="market" 
                        stroke="hsl(var(--muted-foreground))" 
                        strokeWidth={1.5}
                        fillOpacity={1} 
                        fill="url(#colorMarket)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </MotionContainer>
        </div>

        {/* Two-column layout for additional metrics */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
          {/* Project Creation and Completion Trends */}
          <MotionContainer delay={400} animation="slide-up">
            <Card className="glass-card">
              <CardHeader className="pb-2 border-b border-white/10">
                <CardTitle className="text-gradient">Project Trends</CardTitle>
                <CardDescription>
                  Created vs completed projects over time
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={projectTrendData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fontSize: 12, fill: "rgba(255,255,255,0.6)" }}
                        tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                        axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      />
                      <YAxis 
                        tick={{ fontSize: 12, fill: "rgba(255,255,255,0.6)" }}
                        tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                        axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          background: "rgba(30,30,45,0.8)", 
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "var(--radius)",
                          backdropFilter: "blur(4px)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                        }}
                        itemStyle={{ color: "rgba(255,255,255,0.8)" }}
                        labelStyle={{ color: "white", fontWeight: "bold" }}
                      />
                      <Bar 
                        dataKey="created" 
                        name="Projects Created" 
                        fill="hsl(var(--primary))" 
                        radius={[4, 4, 0, 0]} 
                      />
                      <Bar 
                        dataKey="completed" 
                        name="Projects Completed" 
                        fill="rgba(255,255,255,0.2)" 
                        radius={[4, 4, 0, 0]} 
                      />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </MotionContainer>

          {/* Marketing Channel Effectiveness */}
          <MotionContainer delay={500} animation="slide-up">
            <Card className="glass-card">
              <CardHeader className="pb-2 border-b border-white/10">
                <CardTitle className="text-gradient">Marketing Channel Effectiveness</CardTitle>
                <CardDescription>
                  Distribution of engagement across marketing channels
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={channelData} barCategoryGap={20}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fontSize: 12, fill: "rgba(255,255,255,0.6)" }}
                        tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                        axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      />
                      <YAxis 
                        tick={{ fontSize: 12, fill: "rgba(255,255,255,0.6)" }}
                        tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
                        axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Effectiveness']}
                        contentStyle={{ 
                          background: "rgba(30,30,45,0.8)", 
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "var(--radius)",
                          backdropFilter: "blur(4px)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                        }}
                        itemStyle={{ color: "rgba(255,255,255,0.8)" }}
                        labelStyle={{ color: "white", fontWeight: "bold" }}
                      />
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--primary)/0.6)" />
                        </linearGradient>
                      </defs>
                      <Bar 
                        dataKey="value" 
                        fill="url(#barGradient)" 
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
      </div>
    </section>
  );
};

export default Dashboard;
