// src/pages/ProjectDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  ArrowLeft, Calendar, Users, Tag, MoreHorizontal, 
  Download, Share2, FileText, CheckCircle 
} from "lucide-react";
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  AreaChart, Area, LineChart, Line 
} from "recharts";

// Sample project data - replace with your actual API call
const useProject = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchProject = async () => {
      try {
        // In a real app, this would be an API call
        setLoading(true);
        // Simulated API response
        const data = {
          id,
          name: "Health Tech Startup",
          niche: "Healthcare Technology",
          createdAt: "2025-03-01",
          dueDate: "2025-04-15",
          owner: "John Doe",
          team: ["John Doe", "Jane Smith", "Robert Johnson"],
          status: "in_progress",
          progress: 65,
          currentPhase: "brand_development",
          summary: "This healthcare technology startup is targeting the growing telemedicine market with innovative AI-driven diagnostic tools. Initial research shows strong market potential with key differentiators in privacy and user experience.",
          phases: [
            { id: "market_research", name: "Market Research", status: "completed", progress: 100 },
            { id: "target_audience", name: "Target Audience", status: "completed", progress: 100 },
            { id: "brand_development", name: "Brand Development", status: "in_progress", progress: 60 },
            { id: "brand_strategy", name: "Brand Strategy", status: "not_started", progress: 0 },
            { id: "content_strategy", name: "Content Strategy", status: "not_started", progress: 0 }
          ],
          insights: [
            "Market size expected to grow 15% annually through 2030",
            "Primary competitors lack mobile-first approach",
            "Target users prioritize privacy and data security",
            "Opportunity for subscription-based revenue model",
            "Regulatory compliance is a major barrier to entry"
          ],
          swot: {
            strengths: [
              "Strong technical expertise",
              "Innovative product features",
              "Established customer base"
            ],
            weaknesses: [
              "Limited marketing budget",
              "New to healthcare regulations",
              "Small development team"
            ],
            opportunities: [
              "Growing market demand",
              "Competitor weaknesses",
              "New technology adoption"
            ],
            threats: [
              "Regulatory changes",
              "New market entrants",
              "Economic downturn"
            ]
          }
        };
        
        setProject(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return { project, loading, error };
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

const contentTypeData = [
  { name: "Blog Posts", value: 40 },
  { name: "Social Media", value: 30 },
  { name: "Videos", value: 15 },
  { name: "Infographics", value: 10 },
  { name: "Podcasts", value: 5 },
];

const channelData = [
  { name: "Website", effectiveness: 85 },
  { name: "Instagram", effectiveness: 75 },
  { name: "LinkedIn", effectiveness: 65 },
  { name: "Email", effectiveness: 60 },
  { name: "Twitter", effectiveness: 45 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const reports = [
  { id: 1, name: "Market Research Report", date: "2025-03-15", downloads: 12 },
  { id: 2, name: "Target Audience Analysis", date: "2025-03-20", downloads: 8 },
  { id: 3, name: "Brand Strategy Document", date: "2025-03-25", downloads: 5 },
];

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { project, loading, error } = useProject(id);
  
  if (loading) return (
    <div className="container py-8 flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading project details...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="container py-8">
      <Card>
        <CardContent className="py-8">
          <div className="text-center">
            <div className="bg-destructive/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-destructive" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Error Loading Project</h2>
            <p className="text-muted-foreground mb-4">
              {error.message || "There was an error loading the project details."}
            </p>
            <Button onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
  
  if (!project) return (
    <div className="container py-8">
      <Card>
        <CardContent className="py-8">
          <div className="text-center">
            <div className="bg-muted p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Project Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
  
  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in_progress": return "bg-blue-100 text-blue-800";
      case "not_started": return "bg-slate-100 text-slate-800";
      case "on_hold": return "bg-amber-100 text-amber-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };
  
  const getStatusText = (status) => {
    return status.split("_").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };
  
  return (
    <div className="container py-6 space-y-6">
      {/* Project Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{project.name}</h1>
              <p className="text-muted-foreground">{project.niche}</p>
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
        
        {/* Project metadata cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Due Date</p>
                <p className="text-sm">{new Date(project.dueDate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Team</p>
                <p className="text-sm">{project.team.length} Members</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Tag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Status</p>
                <Badge className={getStatusColor(project.status)}>
                  {getStatusText(project.status)}
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium">Progress</p>
                <p className="text-sm font-medium">{project.progress}%</p>
              </div>
              <Progress value={project.progress} className="h-2" />
            </CardContent>
          </Card>
        </div>
        
        {/* Executive summary */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-2">Executive Summary</h3>
            <p className="text-sm text-muted-foreground">
              {project.summary}
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Workflow Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Progress</CardTitle>
          <CardDescription>Current status of each project phase</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Workflow visualization */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {project.phases.map((phase, index) => {
                const isActive = project.currentPhase === phase.id;
                const isCompleted = phase.status === "completed";
                
                return (
                  <div 
                    key={phase.id} 
                    className="flex flex-col items-center"
                  >
                    <div 
                      className={`
                        relative z-10 flex h-10 w-10 items-center justify-center rounded-full 
                        ${isActive ? 'ring-2 ring-primary' : ''} 
                        ${isCompleted ? 'bg-primary text-primary-foreground' : 'bg-background border border-input'}
                        cursor-pointer
                      `}
                    >
                      {isCompleted ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
                    </div>
                    <span className="mt-2 text-xs font-medium">{phase.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Phase details */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {project.phases.map((phase) => {
              const isActive = project.currentPhase === phase.id;
              
              return (
                <Card 
                  key={phase.id} 
                  className={`${isActive ? 'border-primary' : ''}`}
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{phase.name}</h3>
                      <Badge className={getStatusColor(phase.status)}>
                        {getStatusText(phase.status)}
                      </Badge>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{phase.progress}% complete</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
          <CardDescription>Important findings from research</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="insights">
            <TabsList className="mb-4">
              <TabsTrigger value="insights">Top Findings</TabsTrigger>
              <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
              <TabsTrigger value="positioning">Market Positioning</TabsTrigger>
            </TabsList>
            
            <TabsContent value="insights">
              <ul className="space-y-2">
                {project.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="swot">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-green-800 mb-2">Strengths</h3>
                    <ul className="space-y-1">
                      {project.swot.strengths.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-red-800 mb-2">Weaknesses</h3>
                    <ul className="space-y-1">
                      {project.swot.weaknesses.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-blue-800 mb-2">Opportunities</h3>
                    <ul className="space-y-1">
                      {project.swot.opportunities.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200 bg-amber-50">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-amber-800 mb-2">Threats</h3>
                    <ul className="space-y-1">
                      {project.swot.threats.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="positioning">
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Positioning map visualization will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Detailed Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audience">Target Audience</TabsTrigger>
          <TabsTrigger value="brand">Brand Development</TabsTrigger>
          <TabsTrigger value="content">Content Strategy</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview">
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
        </TabsContent>
        
        {/* Target Audience Tab */}
        <TabsContent value="audience">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Age Demographics</CardTitle>
                <CardDescription>Distribution by age group</CardDescription>
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
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Audience Personas</CardTitle>
                <CardDescription>Key customer profiles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="bg-muted/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          👩‍💼
                        </div>
                        <div>
                          <h4 className="font-medium">Professional Pam</h4>
                          <p className="text-xs text-muted-foreground">35-44, Urban Professional</p>
                        </div>
                      </div>
                      <p className="text-sm">Career-focused individual seeking efficiency and professional growth.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          👨‍💻
                        </div>
                        <div>
                          <h4 className="font-medium">Tech-Savvy Tim</h4>
                          <p className="text-xs text-muted-foreground">25-34, Early Adopter</p>
                        </div>
                      </div>
                      <p className="text-sm">Digital native who values innovation and cutting-edge solutions.</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Brand Development Tab */}
        <TabsContent value="brand">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Attributes</CardTitle>
                <CardDescription>Key brand characteristics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <p className="text-muted-foreground">Brand attribute radar chart will appear here</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Competitor Comparison</CardTitle>
                <CardDescription>Market positioning analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium">Brand</th>
                        <th className="text-left py-2 font-medium">Market Share</th>
                        <th className="text-left py-2 font-medium">Price Point</th>
                        <th className="text-left py-2 font-medium">Key Strength</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-medium">Your Brand</td>
                        <td className="py-2">12%</td>
                        <td className="py-2">Premium</td>
                        <td className="py-2">Innovation</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Competitor A</td>
                        <td className="py-2">25%</td>
                        <td className="py-2">Premium</td>
                        <td className="py-2">Brand Recognition</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Competitor B</td>
                        <td className="py-2">18%</td>
                        <td className="py-2">Mid-range</td>
                        <td className="py-2">Affordability</td>
                      </tr>
                      <tr>
                        <td className="py-2">Competitor C</td>
                        <td className="py-2">15%</td>
                        <td className="py-2">Economy</td>
                        <td className="py-2">Distribution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Content Strategy Tab */}
        <TabsContent value="content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Type Distribution</CardTitle>
                <CardDescription>Breakdown by content format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contentTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        labelLine={false}
                      >
                        {contentTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Channel Effectiveness</CardTitle>
                <CardDescription>Performance by distribution channel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={channelData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Effectiveness']} />
                      <Bar dataKey="effectiveness" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Generated Reports</CardTitle>
              <CardDescription>Project documentation and deliverables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reports.map((report) => (
                  <Card key={report.id} className="hover-lift">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted/20 rounded-md mb-3 flex items-center justify-center">
                        📄
                      </div>
                      <h4 className="font-medium mb-1">{report.name}</h4>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Generated: {new Date(report.date).toLocaleDateString()}</span>
                        <span>{report.downloads} downloads</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
