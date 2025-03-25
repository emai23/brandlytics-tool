
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const competitorData = [
  { 
    name: "Your Brand", 
    marketShare: 27.5, 
    growth: 8.2, 
    satisfaction: 87,
    color: "hsl(var(--primary))"
  },
  { 
    name: "Competitor A", 
    marketShare: 22.3, 
    growth: 5.4, 
    satisfaction: 82,
    color: "hsl(var(--muted-foreground))"
  },
  { 
    name: "Competitor B", 
    marketShare: 18.7, 
    growth: -1.2, 
    satisfaction: 79,
    color: "hsl(var(--accent-foreground))"
  },
  { 
    name: "Competitor C", 
    marketShare: 15.2, 
    growth: 3.8, 
    satisfaction: 75,
    color: "hsl(var(--secondary-foreground))"
  },
  { 
    name: "Competitor D", 
    marketShare: 10.5, 
    growth: 7.6, 
    satisfaction: 81,
    color: "hsl(var(--destructive))"
  },
];

const strengthsWeaknesses = [
  {
    competitor: "Competitor A",
    strengths: ["Product Quality", "Customer Service", "Brand Heritage"],
    weaknesses: ["Digital Presence", "Innovation", "Price Point"],
    marketPosition: "Premium Established"
  },
  {
    competitor: "Competitor B",
    strengths: ["Pricing Strategy", "Distribution Network", "Market Reach"],
    weaknesses: ["Product Quality", "Customer Satisfaction", "Brand Perception"],
    marketPosition: "Value-focused"
  },
  {
    competitor: "Competitor C",
    strengths: ["Technical Innovation", "Specialized Features", "Customer Loyalty"],
    weaknesses: ["Limited Market Reach", "Marketing Effectiveness", "Price Premium"],
    marketPosition: "Niche Innovator"
  },
  {
    competitor: "Competitor D",
    strengths: ["Rapid Growth", "Digital Strategy", "Price Competitiveness"],
    weaknesses: ["Brand Recognition", "Product Range", "Customer Support"],
    marketPosition: "Emerging Disruptor"
  }
];

export const CompetitorAnalysis = () => {
  return (
    <section id="competitor-analysis" className="py-12 border-t">
      <MotionContainer delay={100}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Competitor Analysis</h2>
          <p className="text-muted-foreground mt-1">
            Comparative analysis of key competitors in the market.
          </p>
        </div>
      </MotionContainer>

      <div className="grid gap-6 md:grid-cols-2">
        <MotionContainer delay={200} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Market Share Comparison</CardTitle>
              <CardDescription>
                Current market share distribution among top competitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={competitorData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 0,
                      bottom: 5,
                    }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
                    <XAxis 
                      type="number" 
                      tick={{ fontSize: 12 }} 
                      tickLine={false} 
                      axisLine={false}
                      domain={[0, 30]}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fontSize: 12 }} 
                      tickLine={false} 
                      axisLine={false}
                      width={100}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Market Share"]}
                      contentStyle={{ 
                        background: "hsl(var(--background))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                      }}
                    />
                    <Bar 
                      dataKey="marketShare" 
                      name="Market Share"
                      barSize={24}
                      radius={[0, 4, 4, 0]}
                    >
                      {competitorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>

        <MotionContainer delay={300} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Competitor SWOT Analysis</CardTitle>
              <CardDescription>
                Key strengths and weaknesses of major competitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto max-h-[350px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[140px]">Competitor</TableHead>
                      <TableHead>Strengths</TableHead>
                      <TableHead>Weaknesses</TableHead>
                      <TableHead className="text-right">Position</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {strengthsWeaknesses.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.competitor}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {item.strengths.map((strength, j) => (
                              <Badge key={j} variant="outline" className="bg-emerald-50 border-emerald-200 text-emerald-700 text-xs">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {item.weaknesses.map((weakness, j) => (
                              <Badge key={j} variant="outline" className="bg-rose-50 border-rose-200 text-rose-700 text-xs">
                                {weakness}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge variant="secondary" className="text-xs">
                            {item.marketPosition}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>
      </div>
    </section>
  );
};
