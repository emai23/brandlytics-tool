import { ArrowLeft, Calendar, Users, Tag, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

export function ProjectHeader({ project }) {
  const navigate = useNavigate();
  
  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in_progress": return "bg-blue-100 text-blue-800";
      case "not_started": return "bg-slate-100 text-slate-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };
  
  return (
    <div className="space-y-4">
      {/* Back button and title */}
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
          <Button variant="outline">Export</Button>
          <Button>Generate Report</Button>
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
              <p className="text-sm font-medium">Created</p>
              <p className="text-sm">{new Date(project.createdAt).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Owner</p>
              <p className="text-sm">{project.owner}</p>
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
                {project.status.replace(/_/g, ' ')}
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
            {project.summary || "No summary available yet. Complete more phases to generate an executive summary."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
