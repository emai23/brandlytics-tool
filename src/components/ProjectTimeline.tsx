import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample data - replace with your actual data
const timelineData = [
  { name: "Health Tech App", start: 0, duration: 14, phase: "Brand Development" },
  { name: "Eco Fashion", start: 7, duration: 21, phase: "Market Research" },
  { name: "Food Delivery", start: 14, duration: 28, phase: "Content Strategy" },
  { name: "Fitness Rebrand", start: 21, duration: 14, phase: "Target Audience" },
];

const milestoneData = [
  { date: "2025-04-01", project: "Health Tech App", event: "Brand Guidelines Delivery" },
  { date: "2025-04-10", project: "Eco Fashion", event: "Market Research Report" },
  { date: "2025-04-15", project: "Food Delivery", event: "Content Calendar Approval" },
  { date: "2025-04-22", project: "Fitness Rebrand", event: "Target Audience Presentation" },
];

export const ProjectTimeline = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
      <MotionContainer delay={400}>
        <Card>
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
            <CardDescription>
              Gantt chart of current projects (in days)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={timelineData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 42]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip
                    formatter={(value, name, props) => {
                      if (name === "start") return [`Day ${value}`, "Start"];
                      if (name === "duration") return [`${value} days`, "Duration"];
                      return [value, name];
                    }}
                    labelFormatter={(value) => `Project: ${value}`}
                  />
                  <Bar dataKey="duration" stackId="a" fill="#3b82f6" />
                  <Bar dataKey="start" stackId="a" fill="transparent" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={450}>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>
              Important project deadlines and events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestoneData.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{new Date(milestone.date).toLocaleDateString()}</span>
                      <Badge variant="outline">{milestone.project}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.event}</p>
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
