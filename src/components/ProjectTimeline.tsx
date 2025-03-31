
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProjectTimelineProps {
  timelineData?: Array<{
    name: string;
    start: number;
    duration: number;
    phase: string;
  }>;
  milestoneData?: Array<{
    date: string;
    project: string;
    event: string;
  }>;
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

export const ProjectTimeline = ({
  timelineData = defaultTimelineData,
  milestoneData = defaultMilestoneData,
  title = "Project Timeline",
  description = "Gantt chart of current projects (in days)",
  milestonesTitle = "Upcoming Milestones",
  milestonesDescription = "Important project deadlines and events",
  delay = 400
}: ProjectTimelineProps) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
      <MotionContainer delay={delay}>
        <Card className="glass-effect h-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[280px] chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={timelineData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" domain={[0, 42]} />
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
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={delay + 50}>
        <Card className="glass-effect h-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">{milestonesTitle}</CardTitle>
            <CardDescription className="text-sm">
              {milestonesDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5 overflow-auto max-h-[280px] scrollbar-thin pr-2">
              {milestoneData.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-full flex-shrink-0">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="font-medium text-sm">{new Date(milestone.date).toLocaleDateString()}</span>
                      <Badge variant="outline" className="text-xs font-normal truncate max-w-[120px]">
                        {milestone.project}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground multiline-truncate-2">{milestone.event}</p>
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
