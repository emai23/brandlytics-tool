
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

// Sample data - replace with your actual data
const activityData = [
  { 
    time: "2 hours ago", 
    project: "Health Tech App", 
    action: "Phase completed", 
    details: "Market Research phase completed successfully" 
  },
  { 
    time: "Yesterday", 
    project: "Eco Fashion", 
    action: "New insight", 
    details: "Discovered key competitor weakness in sustainability messaging" 
  },
  { 
    time: "2 days ago", 
    project: "Food Delivery", 
    action: "Milestone reached", 
    details: "Target audience profiles finalized and approved" 
  },
  { 
    time: "3 days ago", 
    project: "Fitness Rebrand", 
    action: "Project created", 
    details: "New project initialized with initial requirements" 
  },
];

const alertsData = [
  { 
    type: "warning", 
    project: "Health Tech App", 
    message: "Brand Development phase deadline approaching (2 days remaining)" 
  },
  { 
    type: "info", 
    project: "Eco Fashion", 
    message: "New market research data available for review" 
  },
  { 
    type: "success", 
    project: "Food Delivery", 
    message: "Content Strategy phase completed ahead of schedule" 
  },
];

export const RecentActivity = () => {
  const getAlertColor = (type: string) => {
    switch (type) {
      case "warning": return "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "info": return "bg-blue-100/80 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "success": return "bg-green-100/80 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "error": return "bg-red-100/80 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-slate-100/80 text-slate-800 dark:bg-slate-800/30 dark:text-slate-300";
    }
  };

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      <MotionContainer delay={600}>
        <Card className="glass-effect h-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
            <CardDescription className="text-sm">
              Timeline of recent project updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative space-y-5 overflow-auto max-h-[320px] scrollbar-thin pr-2">
              {activityData.map((activity, index) => (
                <div key={index} className="flex gap-4 items-start">
                  {index < activityData.length - 1 && (
                    <div className="absolute top-7 left-3 bottom-0 w-px bg-border" style={{ height: '85%' }}></div>
                  )}
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary/80 text-primary-foreground text-xs backdrop-blur-sm">
                    {index + 1}
                  </div>
                  <div className="flex flex-col space-y-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <Badge variant="outline" className="text-xs truncate max-w-[120px]">
                        {activity.project}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground multiline-truncate-2">{activity.details}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={650}>
        <Card className="glass-effect h-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">Notifications</CardTitle>
            <CardDescription className="text-sm">
              Important alerts and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5 overflow-auto max-h-[320px] scrollbar-thin pr-2">
              {alertsData.map((alert, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-full flex-shrink-0">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <Badge className={getAlertColor(alert.type) + " backdrop-blur-sm"}>
                        {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                      </Badge>
                      <span className="font-medium text-sm truncate">{alert.project}</span>
                    </div>
                    <p className="text-sm text-muted-foreground multiline-truncate-2">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};
