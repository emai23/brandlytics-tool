import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export function ProjectTabs({ project }) {
  // Sample data - replace with actual project data
  const audienceData = [
    { name: "18-24", value: 15 },
    { name: "25-34", value: 35 },
    { name: "35-44", value: 25 },
    { name: "45-54", value: 15 },
    { name: "55+", value: 10 },
  ];
  
  const contentTypeData = [
    { name: "Blog Posts", value: 40 },
    { name: "Social Media", value: 30 },
    { name: "Videos", value: 15 },
    { name: "Infographics", value: 10 },
    { name: "Podcasts", value: 5 },
  ];
  
  const channelData = [
    { name: "Website", effectiveness: 85 },
    { name: "Instagram", effectiveness: 75 },
    { name: "LinkedIn", effectiveness: 65 },
    { name: "Email", effectiveness: 60 },
    { name: "Twitter", effectiveness: 45 },
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];
  
  const reports = [
    { id: 1, name: "Market Research Report", date: "2025-03-15", downloads: 12 },
    { id: 2, name: "Target Audience Analysis", date: "2025-03-20", downloads: 8 },
    { id: 3, name: "Brand Strategy Document", date: "2025-03-25", downloads: 5 },
  ];
  
  return (
    <Tabs defaultValue="audience" className="space-y-4">
      <TabsList className="grid grid-cols-5 w-full">
        <TabsTrigger value="audience">Target Audience</TabsTrigger>
        <TabsTrigger value="brand">Brand Development</TabsTrigger>
        <TabsTrigger value="content">Content Strategy</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
      </TabsList>
      
      {/* Target Audience Tab */}
      <TabsContent value="audience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Age Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={audienceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      labelLine={false}
                    >
                      {audienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Audience Personas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card className="bg-muted/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        👩‍💼
                      </div>
                      <div>
                        <h4 className="font-medium">Professional Pam</h4>
                        <p className="text-xs text-muted-foreground">35-44, Urban Professional</p>
                      </div>
                    </div>
                    <p className="text-sm">Career-focused individual seeking efficiency and professional growth.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        👨‍💻
                      </div>
                      <div>
                        <h4 className="font-medium">Tech-Savvy Tim</h4>
                        <p className="text-xs text-muted-foreground">25-34, Early Adopter</p>
                      </div>
                    </div>
                    <p className="text-sm">Digital native who values innovation and cutting-edge solutions.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      {/* Brand Development Tab */}
      <TabsContent value="brand">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Attributes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Brand attribute radar chart will appear here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Competitor Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Brand</th>
                      <th className="text-left py-2 font-medium">Market Share</th>
                      <th className="text-left py-2 font-medium">Price Point</th>
                      <th className="text-left py-2 font-medium">Key Strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Your Brand</td>
                      <td className="py-2">12%</td>
                      <td className="py-2">Premium</td>
                      <td className="py-2">Innovation</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Competitor A</td>
                      <td className="py-2">25%</td>
                      <td className="py-2">Premium</td>
                      <td className="py-2">Brand Recognition</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Competitor B</td>
                      <td className="py-2">18%</td>
                      <td className="py-2">Mid-range</td>
                      <td className="py-2">Affordability</td>
                    </tr>
                    <tr>
                      <td className="py-2">Competitor C</td>
                      <td className="py-2">15%</td>
                      <td className="py-2">Economy</td>
                      <td className="py-2">Distribution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      {/* Content Strategy Tab */}
      <TabsContent value="content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={contentTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      labelLine={false}
                    >
                      {contentTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Channel Effectiveness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={channelData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Effectiveness']} />
                    <Bar dataKey="effectiveness" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      {/* Reports Tab */}
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Generated Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reports.map((report) => (
                <Card key={report.id} className="hover-lift">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-muted/20 rounded-md mb-3 flex items-center justify-center">
                      📄
                    </div>
                    <h4 className="font-medium mb-1">{report.name}</h4>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Generated: {new Date(report.date).toLocaleDateString()}</span>
                      <span>{report.downloads} downloads</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Collaboration Tab */}
      <TabsContent value="collaboration">
        <Card>
          <CardHeader>
            <CardTitle>Team Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Comments</h3>
                <div className="space-y-4">
                  <Card className="bg-muted/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                          JD
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">John Doe</span>
                            <span className="text-xs text-muted-foreground">2 days ago</span>
                          </div>
                          <p className="text-sm">The target audience analysis looks great, but we should consider adding more detail about the geographic distribution.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                          JS
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">Jane Smith</span>
                            <span className="text-xs text-muted-foreground">1 day ago</span>
                          </div>
                          <p className="text-sm">I've updated the brand positioning based on our latest research findings. Please review when you get a chance.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Tasks</h3>
                <div className="space-y-2">
                  <Card className="bg-muted/20">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Review competitor analysis</h4>
                        <p className="text-xs text-muted-foreground">Assigned to: John Doe • Due: Tomorrow</p>
                      </div>
                      <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                        In Progress
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/20">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Finalize content calendar</h4>
                        <p className="text-xs text-muted-foreground">Assigned to: Jane Smith • Due: Friday</p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        Not Started
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
