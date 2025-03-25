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
    <Card>
      <CardHeader>
        <CardTitle>Key Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="insights">
          <TabsList className="mb-4">
            <TabsTrigger value="insights">Top Findings</TabsTrigger>
            <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
            <TabsTrigger value="positioning">Market Positioning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="insights">
            <ul className="space-y-2">
              {keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="swot">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <h3 className="font-medium text-green-800 mb-2">Strengths</h3>
                  <ul className="space-y-1">
                    {swotData.strengths.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <h3 className="font-medium text-red-800 mb-2">Weaknesses</h3>
                  <ul className="space-y-1">
                    {swotData.weaknesses.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <h3 className="font-medium text-blue-800 mb-2">Opportunities</h3>
                  <ul className="space-y-1">
                    {swotData.opportunities.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-4">
                  <h3 className="font-medium text-amber-800 mb-2">Threats</h3>
                  <ul className="space-y-1">
                    {swotData.threats.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="positioning">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">Positioning map visualization will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
