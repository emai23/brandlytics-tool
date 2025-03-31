
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { CalendarIcon, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Milestone } from "@/types/dashboard";

export interface ProjectTimelineProps {
  timelineData?: Array<{
    name: string;
    start: number;
    duration: number;
    phase: string;
  }>;
  milestoneData?: Array<Milestone>;
  title?: string;
  description?: string;
  milestonesTitle?: string;
  milestonesDescription?: string;
  delay?: number;
}

// Default data
const defaultTimelineData = [
  { name: "Health Tech App", start: 0, duration: 14, phase: "Brand Development" },
  { name: "Eco Fashion", start: 7, duration: 21, phase: "Market Research" },
  { name: "Food Delivery", start: 14, duration: 28, phase: "Content Strategy" },
  { name: "Fitness Rebrand", start: 21, duration: 14, phase: "Target Audience" },
];

const defaultMilestoneData = [
  { date: "2025-04-01", project: "Health Tech App", event: "Brand Guidelines Delivery" },
  { date: "2025-04-10", project: "Eco Fashion", event: "Market Research Report" },
  { date: "2025-04-15", project: "Food Delivery", event: "Content Calendar Approval" },
  { date: "2025-04-22", project: "Fitness Rebrand", event: "Target Audience Presentation" },
];

// Helper function to get today's position on the timeline
const getTodayPosition = () => {
  // For demo purposes, we'll set today at day 14
  return 14;
};

export const ProjectTimeline = ({
  timelineData = defaultTimelineData,
  milestoneData = defaultMilestoneData,
  title = "Project Timeline",
  description = "Gantt chart of current projects (in days)",
  milestonesTitle = "Upcoming Milestones",
  milestonesDescription = "Important project deadlines and events",
  delay = 400
}: ProjectTimelineProps) => {
  // Generate milestone markers for the Gantt chart
  const milestoneMarkers = milestoneData.map((milestone, index) => {
    // For demo purposes, convert dates to day positions on the timeline
    // In a real app, you'd calculate actual day differences
    const dayPosition = 7 + (index * 7); // just for demo
    return { position: dayPosition, milestone };
  });

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      <MotionContainer delay={delay}>
        <Card className="h-full overflow-hidden backdrop-blur-sm bg-card/80 border border-border/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl truncate">{title}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 overflow-hidden">
            <div className="h-[280px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={timelineData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    type="number" 
                    domain={[0, 42]} 
                    ticks={[0, 7, 14, 21, 28, 35, 42]}
                    tickFormatter={(value) => `Day ${value}`}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={100}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => {
                      return value.length > 12 ? value.substring(0, 12) + '...' : value;
                    }}
                  />
                  <Tooltip
                    formatter={(value, name, props) => {
                      if (name === "start") return [`Day ${value}`, "Start"];
                      if (name === "duration") return [`${value} days`, "Duration"];
                      return [value, name];
                    }}
                    labelFormatter={(value) => `Project: ${value}`}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(8px)'
                    }}
                  />
                  <Bar dataKey="duration" stackId="a" fill="rgba(59, 130, 246, 0.8)" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="start" stackId="a" fill="transparent" />
                  
                  {/* Today marker */}
                  <ReferenceLine x={getTodayPosition()} stroke="rgba(220, 38, 38, 0.8)" label={{ position: 'top', value: 'Today', fill: 'rgba(220, 38, 38, 0.8)' }} />
                  
                  {/* Milestone markers */}
                  {milestoneMarkers.map((marker, index) => (
                    <ReferenceLine 
                      key={`milestone-${index}`} 
                      x={marker.position} 
                      stroke="rgba(249, 168, 37, 0.8)" 
                      strokeDasharray="3 3"
                      label={{ 
                        position: 'top', 
                        value: <Flag size={12} />, 
                        fill: 'rgba(249, 168, 37, 0.9)',
                      }} 
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={delay + 50}>
        <Card className="h-full overflow-hidden backdrop-blur-sm bg-card/80 border border-border/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl truncate">{milestonesTitle}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {milestonesDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5 overflow-auto max-h-[280px] scrollbar-thin pr-2">
              {milestoneData.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-full flex-shrink-0">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="font-medium text-sm">{new Date(milestone.date).toLocaleDateString()}</span>
                      <Badge variant="outline" className="text-xs font-normal truncate max-w-[120px]">
                        {milestone.project}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{milestone.event}</p>
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
