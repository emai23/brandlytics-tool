import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionContainer } from "./MotionContainer";
import { ArrowLeft, Download, Share2, Calendar, Users, Target, BarChart3, FileText } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

// Sample data - replace with your actual project data
const projectData = {
  id: 1,
  name: "Health Tech Startup",
  niche: "Healthcare Technology",
  status: "in_progress",
  progress: 65,
  startDate: "2025-03-01",
  dueDate: "2025-04-15",
  owner: "John Doe",
  team: ["John Doe", "Jane Smith", "Robert Johnson"],
  currentPhase: "brand_development",
  phases: [
    { id: "market_research", name: "Market Research", status: "completed", progress: 100 },
    { id: "target_audience", name: "Target Audience", status: "completed", progress: 100 },
    { id: "brand_development", name: "Brand Development", status: "in_progress", progress: 60 },
    { id: "brand_strategy", name: "Brand Strategy", status: "not_started", progress: 0 },
    { id: "content_strategy", name: "Content Strategy", status: "not_started", progress: 0 }
  ],
  keyInsights: [
    "Market size expected to grow 15% annually through 2030",
    "Primary competitors lack mobile-first approach",
    "Target users prioritize privacy and data security",
    "Opportunity for subscription-based revenue model",
    "Regulatory compliance is a major barrier to entry"
  ]
};

// Sample chart data
const progressData = [
  { date: "Week 1", progress: 15 },
  { date: "Week 2", progress: 30 },
  { date: "Week 3", progress: 45 },
  { date: "Week 4", progress: 65 },
];

const audienceData = [
  { name: "18-24", value: 15 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

const channelData = [
  { name: "Social", value: 35 },
  { name: "Search", value: 25 },
  { name: "Direct", value: 20 },
  { name: "Email", value: 15 },
  { name: "Other", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export const ProjectDetailDashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "not_started":
        return "bg-slate-100 text-slate-800";
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{projectData.name}</h1>
            <p className="text-sm text-muted-foreground">{projectData.niche}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">Generate Report</Button>
        </div>
      </div>

      {/* Project Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <MotionContainer delay={100}>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Due Date</p>
                <p className="text-lg">{new Date(projectData.dueDate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>

        <MotionContainer delay={150}>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Team Size</p>
                <p className="text-lg">{projectData.team.length} Members</p>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>

        <MotionContainer delay={200}>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Progress</p>
                <p className="text-lg">{projectData.progress}% Complete</p>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>

        <MotionContainer delay={250}>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Status</p>
                <Badge className={getStatusColor(projectData.status)}>
                  {getStatusText(projectData.status)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="brand">Brand</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Progress Chart */}
          <MotionContainer delay={300}>
            <Card>
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
                <CardDescription>Weekly progress tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={progressData}>
                      <defs>
                        <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ 
                          background: "hsl(var(--background))", 
                          border: "1px solid hsl(var(--border))", 
                          borderRadius: "var(--radius)" 
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="progress" 
                        stroke="hsl(var(--primary))" 
                        fillOpacity={1} 
                        fill="url(#progressGradient)" 
                        strokeWidth={2} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </MotionContainer>

          {/* Phases and Key Insights */}
          <div className="grid gap-6 md:grid-cols-2">
            <MotionContainer delay={400}>
              <Card>
                <CardHeader>
                  <CardTitle>Project Phases</CardTitle>
                  <CardDescription>Current status of each project phase</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectData.phases.map((phase) => (
                      <div key={phase.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">{phase.name}</div>
                          <Badge className={getStatusColor(phase.status)}>
                            {getStatusText(phase.status)}
                          </Badge>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${phase.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-right text-muted-foreground">
                          {phase.progress}% complete
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionContainer>

            <MotionContainer delay={500}>
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>Important findings from research</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc pl-5">
                    {projectData.keyInsights.map((insight, index) => (
                      <li key={index} className="text-sm">{insight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionContainer>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <MotionContainer>
              <Card>
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                  <CardDescription>Target audience by age group</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={audienceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          labelLine={false}
                        >
                          {audienceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Percentage']}
                          contentStyle={{ 
                            background: "hsl(var(--background))", 
                            border: "1px solid hsl(var(--border))", 
                            borderRadius: "var(--radius)" 
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </MotionContainer>

            <MotionContainer>
              <Card>
                <CardHeader>
                  <CardTitle>Channel Distribution</CardTitle>
                  <CardDescription>Audience reach by channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={channelData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                        <XAxis type="number" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Percentage']}
                          contentStyle={{ 
                            background: "hsl(var(--background))", 
                            border: "1px solid hsl(var(--border))", 
                            borderRadius: "var(--radius)" 
                          }}
                        />
                        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </MotionContainer>
          </div>
        </TabsContent>

        {/* Add other tab contents as needed */}
      </Tabs>
    </div>
  );
};
