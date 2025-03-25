
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, TrendingDown, TrendingUp } from "lucide-react";

const marketTrendData = [
  { month: "Jan", segment1: 120, segment2: 150, segment3: 80 },
  { month: "Feb", segment1: 132, segment2: 145, segment3: 85 },
  { month: "Mar", segment1: 141, segment2: 162, segment3: 88 },
  { month: "Apr", segment1: 158, segment2: 170, segment3: 90 },
  { month: "May", segment1: 165, segment2: 175, segment3: 95 },
  { month: "Jun", segment1: 172, segment2: 168, segment3: 98 },
  { month: "Jul", segment1: 190, segment2: 172, segment3: 102 },
  { month: "Aug", segment1: 202, segment2: 178, segment3: 110 },
  { month: "Sep", segment1: 218, segment2: 184, segment3: 112 },
  { month: "Oct", segment1: 230, segment2: 190, segment3: 116 },
  { month: "Nov", segment1: 245, segment2: 195, segment3: 120 },
  { month: "Dec", segment1: 262, segment2: 205, segment3: 125 },
];

const insightCards = [
  {
    title: "Premium Segment",
    growth: 12.5,
    positive: true,
    insight: "Premium products continue to outperform budget options despite economic uncertainty",
    tags: ["Premium", "Luxury"]
  },
  {
    title: "Mid-Market Segment",
    growth: 6.2,
    positive: true,
    insight: "Steady growth in mid-market as consumers seek balance between quality and value",
    tags: ["Mid-Tier", "Value"]
  },
  {
    title: "Budget Segment",
    growth: -2.3,
    positive: false,
    insight: "Budget segment facing challenges as consumers upgrade to mid-tier products",
    tags: ["Budget", "Mass Market"]
  },
  {
    title: "Direct-to-Consumer",
    growth: 18.7,
    positive: true,
    insight: "D2C channels showing strongest growth across all market segments",
    tags: ["D2C", "Digital"]
  }
];

export const MarketTrends = () => {
  return (
    <section id="market-trends" className="py-12 border-t">
      <MotionContainer delay={100}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Market Trends</h2>
          <p className="text-muted-foreground mt-1">
            Analysis of emerging market trends and growth opportunities.
          </p>
        </div>
      </MotionContainer>

      <MotionContainer delay={200} animation="slide-up">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Segment Growth Analysis</CardTitle>
            <CardDescription>
              Year-to-date growth across key market segments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={marketTrendData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      background: "hsl(var(--background))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                    }}
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle" />
                  <Line 
                    type="monotone" 
                    dataKey="segment1" 
                    name="Premium Segment" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="segment2" 
                    name="Mid-Market Segment" 
                    stroke="hsl(var(--accent-foreground))" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="segment3" 
                    name="Budget Segment" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </MotionContainer>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {insightCards.map((card, i) => (
          <MotionContainer key={i} delay={300 + (i * 100)} animation="slide-up">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">{card.title}</CardTitle>
                  <div className={`flex items-center ${card.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {card.positive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    <span className="font-bold">{Math.abs(card.growth)}%</span>
                  </div>
                </div>
                <div className="flex gap-1 mt-1">
                  {card.tags.map((tag, j) => (
                    <Badge key={j} variant="outline" className="text-xs font-normal">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{card.insight}</p>
              </CardContent>
            </Card>
          </MotionContainer>
        ))}
      </div>
    </section>
  );
};
