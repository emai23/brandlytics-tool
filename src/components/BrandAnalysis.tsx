
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const brandAttributes = [
  { subject: "Innovation", A: 80, B: 65, fullMark: 100 },
  { subject: "Quality", A: 85, B: 70, fullMark: 100 },
  { subject: "Design", A: 90, B: 60, fullMark: 100 },
  { subject: "User Experience", A: 82, B: 68, fullMark: 100 },
  { subject: "Value", A: 75, B: 80, fullMark: 100 },
  { subject: "Sustainability", A: 78, B: 58, fullMark: 100 },
];

const brandPerception = [
  { 
    attribute: "Brand Recognition", 
    value: 88,
    benchmark: 72,
    tags: ["Strong", "Distinctive"]
  },
  { 
    attribute: "Brand Loyalty", 
    value: 76,
    benchmark: 68,
    tags: ["Growing"]
  },
  { 
    attribute: "Perceived Quality", 
    value: 82,
    benchmark: 70,
    tags: ["Premium"]
  },
  { 
    attribute: "Market Relevance", 
    value: 92,
    benchmark: 65,
    tags: ["Leader", "Innovative"]
  },
  { 
    attribute: "Customer Trust", 
    value: 85,
    benchmark: 76,
    tags: ["Reliable"]
  },
];

export const BrandAnalysis = () => {
  return (
    <section id="brand-analysis" className="py-12 border-t">
      <MotionContainer delay={100}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Brand Analysis</h2>
          <p className="text-muted-foreground mt-1">
            Comprehensive analysis of brand positioning and perception.
          </p>
        </div>
      </MotionContainer>

      <div className="grid gap-6 md:grid-cols-2">
        <MotionContainer delay={200} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Brand Attribute Comparison</CardTitle>
              <CardDescription>
                Your brand vs. industry average across key attributes
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius="70%" data={brandAttributes}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                    />
                    <Radar
                      name="Your Brand"
                      dataKey="A"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Industry Average"
                      dataKey="B"
                      stroke="hsl(var(--muted-foreground))"
                      fill="hsl(var(--muted-foreground))"
                      fillOpacity={0.2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center mt-2 gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                  <span>Your Brand</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/60"></div>
                  <span>Industry Average</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionContainer>

        <MotionContainer delay={300} animation="slide-up">
          <Card>
            <CardHeader>
              <CardTitle>Brand Perception Metrics</CardTitle>
              <CardDescription>
                Key perception indicators compared to industry benchmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {brandPerception.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{item.attribute}</div>
                        <div className="flex gap-1">
                          {item.tags.map((tag, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm font-medium">
                        {item.value}%
                        <span className="text-xs text-muted-foreground ml-1">
                          (Benchmark: {item.benchmark}%)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={item.value} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionContainer>
      </div>
    </section>
  );
};
