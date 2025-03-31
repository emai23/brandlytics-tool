
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MotionContainer } from "@/components/MotionContainer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Star, Clock, ChevronRight, Filter } from "lucide-react";

// Mock data for projects
const mockProjects = [
  {
    id: "1",
    name: "Brand Positioning Research",
    status: "In Progress",
    lastUpdated: "2 days ago",
    progress: 45,
    niche: "Tech Startup",
    isFavorite: true,
    isRecent: true,
  },
  {
    id: "2",
    name: "Market Expansion Analysis",
    status: "Completed",
    lastUpdated: "1 week ago",
    progress: 100,
    niche: "Retail",
    isFavorite: true,
    isRecent: true,
  },
  {
    id: "3",
    name: "Customer Journey Mapping",
    status: "Planning",
    lastUpdated: "3 days ago",
    progress: 15,
    niche: "Healthcare",
    isFavorite: false,
    isRecent: true,
  },
  {
    id: "4",
    name: "Competitor Analysis",
    status: "On Hold",
    lastUpdated: "2 weeks ago",
    progress: 60,
    niche: "Finance",
    isFavorite: false,
    isRecent: false,
  },
  {
    id: "5",
    name: "Social Media Strategy",
    status: "In Progress",
    lastUpdated: "5 days ago",
    progress: 30,
    niche: "Education",
    isFavorite: false,
    isRecent: false,
  },
];

const ProjectsList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  
  const filteredProjects = mockProjects.filter(project => {
    // Filter by search query
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.niche.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tab
    if (currentTab === "favorites") return matchesSearch && project.isFavorite;
    if (currentTab === "recent") return matchesSearch && project.isRecent;
    
    return matchesSearch;
  });
  
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case "completed": return "bg-green-100 text-green-800";
      case "in progress": return "bg-blue-100 text-blue-800";
      case "planning": return "bg-purple-100 text-purple-800";
      case "on hold": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <div className="space-y-6">
      <MotionContainer delay={100}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground mt-1">
              Manage and access all your market research projects
            </p>
          </div>
          <Button onClick={() => navigate("/create-project")}>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>
      </MotionContainer>
      
      <MotionContainer delay={200}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center w-full md:w-auto">
            <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button variant="outline" size="icon" className="ml-2">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </MotionContainer>
      
      <MotionContainer delay={300}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2 overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 overflow-hidden min-w-0 flex-1">
                      <CardTitle className="text-xl truncate">{project.name}</CardTitle>
                      <CardDescription className="truncate">{project.niche}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full flex-shrink-0">
                      {project.isFavorite ? (
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ) : (
                        <Star className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" /> {project.lastUpdated}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="overflow-hidden">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between truncate"
                    onClick={() => navigate(`/projects/${project.id}/dashboard`)}
                  >
                    <span className="truncate">View Details</span> <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
              <div className="rounded-full bg-muted p-3 mb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">No projects found</h3>
              <p className="text-muted-foreground mt-1">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </MotionContainer>
    </div>
  );
};

export default ProjectsList;
