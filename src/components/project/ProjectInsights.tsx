
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the SWOT data structure
interface SwotData {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// Define the project interface
interface Project {
  insights?: string[];
  swotAnalysis?: SwotData;
}

// Define the component props
interface ProjectInsightsProps {
  project: Project;
}

export const ProjectInsights: React.FC<ProjectInsightsProps> = ({ project }) => {
  // Sample data - replace with actual project data
  const keyInsights = project.insights || [
    "Market size expected to grow 15% annually through 2030",
    "Primary competitors lack mobile-first approach",
    "Target users prioritize privacy and data security",
    "Opportunity for subscription-based revenue model",
    "Regulatory compliance is a major barrier to entry"
  ];
  
  const swotData: SwotData = project.swotAnalysis || {
    strengths: [
      "Strong technical expertise",
      "Innovative product features",
      "Established customer base"
    ],
    weaknesses: [
      "Limited marketing budget",
      "New to healthcare regulations",
      "Small development team"
    ],
    opportunities: [
      "Growing market demand",
      "Competitor weaknesses",
      "New technology adoption"
    ],
    threats: [
      "Regulatory changes",
      "New market entrants",
      "Economic downturn"
    ]
  };
  
  return (
    <Card className="glass-effect overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl">Key Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="insights">
          <TabsList className="mb-6 backdrop-blur-sm bg-background/30">
            <TabsTrigger value="insights" className="text-sm">Top Findings</TabsTrigger>
            <TabsTrigger value="swot" className="text-sm">SWOT Analysis</TabsTrigger>
            <TabsTrigger value="positioning" className="text-sm">Market Positioning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="insights" className="mt-0">
            <ul className="space-y-3 max-h-[400px] overflow-auto scrollbar-thin pr-2">
              {keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg backdrop-blur-sm">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span className="text-sm">{insight}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="swot" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-green-200/50 bg-green-50/50 dark:bg-green-950/30 dark:border-green-900/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="font-medium text-green-800 dark:text-green-300 mb-2">Strengths</h3>
                  <ul className="space-y-2">
                    {swotData.strengths.map((item, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <span className="multiline-truncate-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-200/50 bg-red-50/50 dark:bg-red-950/30 dark:border-red-900/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="font-medium text-red-800 dark:text-red-300 mb-2">Weaknesses</h3>
                  <ul className="space-y-2">
                    {swotData.weaknesses.map((item, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                        <span className="multiline-truncate-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200/50 bg-blue-50/50 dark:bg-blue-950/30 dark:border-blue-900/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Opportunities</h3>
                  <ul className="space-y-2">
                    {swotData.opportunities.map((item, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        <span className="multiline-truncate-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200/50 bg-amber-50/50 dark:bg-amber-950/30 dark:border-amber-900/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Threats</h3>
                  <ul className="space-y-2">
                    {swotData.threats.map((item, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                        <span className="multiline-truncate-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="positioning">
            <div className="h-[300px] flex items-center justify-center bg-background/20 rounded-xl backdrop-blur-sm">
              <p className="text-muted-foreground">Positioning map visualization will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
