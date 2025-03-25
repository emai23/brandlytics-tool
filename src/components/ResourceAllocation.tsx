import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data - replace with your actual data
const nicheData = [
  { name: "Healthcare", value: 35 },
  { name: "Fashion", value: 25 },
  { name: "Food & Beverage", value: 20 },
  { name: "Fitness", value: 15 },
  { name: "Technology", value: 30 },
];

const budgetData = [
  { name: "Healthcare", research: 12000, development: 8000, strategy: 5000 },
  { name: "Fashion", research: 8000, development: 10000, strategy: 7000 },
  { name: "Food & Beverage", research: 6000, development: 5000, strategy: 4000 },
  { name: "Fitness", research: 4000, development: 6000, strategy: 3000 },
];

export const ResourceAllocation = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
      <MotionContainer delay={500}>
        <Card>
          <CardHeader>
            <CardTitle>Market Niche Focus</CardTitle>
            <CardDescription>
              Distribution of research efforts by market niche
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={nicheData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <MotionContainer delay={550}>
        <Card>
          <CardHeader>
            <CardTitle>Budget Allocation</CardTitle>
            <CardDescription>
              Budget distribution across project categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={budgetData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Budget']} />
                  <Bar dataKey="research" stackId="a" fill="#8884d8" name="Research" />
                  <Bar dataKey="development" stackId="a" fill="#82ca9d" name="Development" />
                  <Bar dataKey="strategy" stackId="a" fill="#ffc658" name="Strategy" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>
    </div>
  );
};
