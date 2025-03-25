
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { MotionContainer } from "./MotionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignLeft, BarChart2, FileText, LineChart, MessageSquare, PieChart, Search, Sliders } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const toolCards = [
  {
    title: "Survey Builder",
    description: "Create custom surveys for brand perception and market research",
    icon: <MessageSquare className="h-12 w-12 text-primary/80" />,
    tags: ["Surveys", "Data Collection"]
  },
  {
    title: "Trend Analyzer",
    description: "Track and predict market trends using advanced analytics",
    icon: <LineChart className="h-12 w-12 text-primary/80" />,
    tags: ["Analytics", "Forecasting"]
  },
  {
    title: "Competitor Tracker",
    description: "Monitor competitor marketing, positioning and pricing strategies",
    icon: <BarChart2 className="h-12 w-12 text-primary/80" />,
    tags: ["Competition", "Strategy"]
  },
  {
    title: "Brand Perception",
    description: "Measure and analyze how consumers perceive your brand",
    icon: <PieChart className="h-12 w-12 text-primary/80" />,
    tags: ["Branding", "Perception"]
  },
  {
    title: "Report Generator",
    description: "Create beautiful, insightful reports from your research data",
    icon: <FileText className="h-12 w-12 text-primary/80" />,
    tags: ["Reporting", "Presentation"]
  },
  {
    title: "Sentiment Analysis",
    description: "Analyze consumer sentiment across social media and reviews",
    icon: <AlignLeft className="h-12 w-12 text-primary/80" />,
    tags: ["Social", "Sentiment"]
  }
];

export const ResearchTools = () => {
  return (
    <section id="research-tools" className="py-12 border-t">
      <MotionContainer delay={100}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Research Tools</h2>
          <p className="text-muted-foreground mt-1">
            Powerful tools to conduct market research and analyze results.
          </p>
        </div>
      </MotionContainer>

      <MotionContainer delay={200} animation="slide-up">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Market Research Assistant</CardTitle>
            <CardDescription>
              Find insights from our comprehensive market database
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="search" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="search">Search</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="custom">Custom Research</TabsTrigger>
              </TabsList>
              <TabsContent value="search">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search for market trends, competitor data, or consumer insights..." 
                      className="pl-9 py-6"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">Market Trends</Button>
                    <Button variant="outline" size="sm">Consumer Behavior</Button>
                    <Button variant="outline" size="sm">Competitor Analysis</Button>
                    <Button variant="outline" size="sm">Brand Perception</Button>
                    <Button variant="outline" size="sm">Industry Reports</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analyze">
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Select Analysis Type</label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex gap-1 items-center">
                        <BarChart2 className="h-4 w-4" />
                        <span>Trend Analysis</span>
                      </Button>
                      <Button variant="outline" className="flex gap-1 items-center">
                        <PieChart className="h-4 w-4" />
                        <span>Market Share</span>
                      </Button>
                      <Button variant="outline" className="flex gap-1 items-center">
                        <Sliders className="h-4 w-4" />
                        <span>Custom</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="px-8">Analyze</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="custom">
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">
                    Our team can create custom research projects tailored to your specific needs.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Research Objective</label>
                      <Input placeholder="What do you want to learn?" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Target Market</label>
                      <Input placeholder="Who do you want to research?" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="px-8">Request Custom Research</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </MotionContainer>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {toolCards.map((tool, i) => (
          <MotionContainer key={i} delay={300 + (i * 75)} animation="scale-in">
            <Card className="hover-lift overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <CardTitle className="text-center">{tool.title}</CardTitle>
                <CardDescription className="text-center mt-1">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center gap-2 pt-4">
                {tool.tags.map((tag, j) => (
                  <Badge key={j} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button variant="outline">Open Tool</Button>
              </CardFooter>
            </Card>
          </MotionContainer>
        ))}
      </div>
    </section>
  );
};
