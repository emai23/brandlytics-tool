
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function DesignShowcase() {
  const { resolvedTheme } = useTheme();
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-12">
        <section>
          <h2 className="h2">Design System</h2>
          <p className="lead mb-8">A showcase of the design system components and styles</p>
          
          <Tabs defaultValue="typography" className="w-full">
            <TabsList>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="forms">Form Elements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="typography" className="space-y-8 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Typography Scale</CardTitle>
                  <CardDescription>Font styles used throughout the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h1 className="h1">Heading 1 (h1)</h1>
                    <h2 className="h2">Heading 2 (h2)</h2>
                    <h3 className="h3">Heading 3 (h3)</h3>
                    <h4 className="h4">Heading 4 (h4)</h4>
                    <h5 className="h5">Heading 5 (h5)</h5>
                    <h6 className="h6">Heading 6 (h6)</h6>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <p className="lead">Lead paragraph - used for introductions and important text</p>
                    <p>Default paragraph - standard body text used for content</p>
                    <p className="large">Large text - slightly larger than regular text</p>
                    <p className="small">Small text - used for less important information</p>
                    <p className="muted">Muted text - for secondary information</p>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <p className="font-normal">Font weight: normal (400)</p>
                    <p className="font-medium">Font weight: medium (500)</p>
                    <p className="font-semibold">Font weight: semibold (600)</p>
                    <p className="font-bold">Font weight: bold (700)</p>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <code className="font-mono bg-muted p-1 rounded">Monospace text - used for code blocks</code>
                    <p className="font-display">Display text - used for featured content</p>
                    <p className="text-gradient-primary font-bold text-lg">Gradient Text - useful for emphasis</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="colors" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Color Palette</CardTitle>
                  <CardDescription>The application's color scheme showcasing primary, secondary and utility colors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Primary Colors */}
                    <div>
                      <h4 className="mb-2 font-medium">Primary</h4>
                      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                        {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((shade) => (
                          <div key={`primary-${shade}`} className="flex flex-col items-center">
                            <div 
                              className={`w-12 h-12 rounded-md bg-primary-${shade}`}
                              aria-label={`Primary ${shade}`}
                            ></div>
                            <span className="text-xs mt-1">{shade}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Secondary Colors */}
                    <div>
                      <h4 className="mb-2 font-medium">Secondary</h4>
                      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                        {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((shade) => (
                          <div key={`secondary-${shade}`} className="flex flex-col items-center">
                            <div 
                              className={`w-12 h-12 rounded-md bg-secondary-${shade}`} 
                              aria-label={`Secondary ${shade}`}
                            ></div>
                            <span className="text-xs mt-1">{shade}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Semantic Colors */}
                    <div>
                      <h4 className="mb-2 font-medium">Semantic</h4>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-destructive" aria-label="Destructive"></div>
                          <span className="text-xs mt-1">Destructive</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-success" aria-label="Success"></div>
                          <span className="text-xs mt-1">Success</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-warning" aria-label="Warning"></div>
                          <span className="text-xs mt-1">Warning</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-info" aria-label="Info"></div>
                          <span className="text-xs mt-1">Info</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* UI Colors */}
                    <div>
                      <h4 className="mb-2 font-medium">UI Colors</h4>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-background border" aria-label="Background"></div>
                          <span className="text-xs mt-1">Background</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-foreground" aria-label="Foreground"></div>
                          <span className="text-xs mt-1">Foreground</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-muted" aria-label="Muted"></div>
                          <span className="text-xs mt-1">Muted</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-muted-foreground" aria-label="Muted Foreground"></div>
                          <span className="text-xs mt-1">Muted Text</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-accent" aria-label="Accent"></div>
                          <span className="text-xs mt-1">Accent</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-md bg-border" aria-label="Border"></div>
                          <span className="text-xs mt-1">Border</span>
                        </div>
                      </div>
                    </div>

                    {/* Current Theme */}
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <span>Current theme: <span className="font-medium">{resolvedTheme}</span></span>
                      <ThemeToggle />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="components" className="space-y-8 mt-6">
              {/* Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Interactive button elements with different variants and sizes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">Button Variants</h4>
                      <div className="flex flex-wrap gap-4">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Button Sizes</h4>
                      <div className="flex flex-wrap items-center gap-4">
                        <Button size="sm">Small</Button>
                        <Button>Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon" aria-label="Icon button">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Button States</h4>
                      <div className="flex flex-wrap gap-4">
                        <Button disabled>Disabled</Button>
                        <Button className="focus-visible">Focused</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Compact elements to represent status or tags</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </CardContent>
              </Card>
              
              {/* Cards */}
              <Card>
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                  <CardDescription>Flexible containers for content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card-bordered p-4">
                      <h3 className="text-lg font-medium mb-2">Bordered Card</h3>
                      <p className="text-muted-foreground">Content inside a bordered card variant.</p>
                    </div>
                    
                    <div className="card-gradient p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Gradient Card</h3>
                      <p className="text-muted-foreground">Content inside a gradient card variant.</p>
                    </div>
                  </div>
                  
                  <div className="card-interactive p-4 rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">Interactive Card</h3>
                    <p className="text-muted-foreground">Hover over this card to see the interaction effect.</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                  <CardDescription>Provide contextual feedback messages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Default Alert</AlertTitle>
                    <AlertDescription>
                      This is a default alert with informational content.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Destructive Alert</AlertTitle>
                    <AlertDescription>
                      This is a destructive alert for error states.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
              
              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>Display progress in various states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">25% Complete</span>
                      <span className="text-sm">25/100</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">50% Complete</span>
                      <span className="text-sm">50/100</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">75% Complete</span>
                      <span className="text-sm">75/100</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>Vertically collapsing content sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Section 1</AccordionTrigger>
                      <AccordionContent>
                        Content for the first section of the accordion. This can contain any type of content including text, images, or interactive elements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Section 2</AccordionTrigger>
                      <AccordionContent>
                        Content for the second section of the accordion. Clicking the header toggles visibility.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Section 3</AccordionTrigger>
                      <AccordionContent>
                        Content for the third section of the accordion. You can have as many accordion items as needed.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="forms" className="space-y-8 mt-6">
              {/* Form Elements */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>Interactive inputs for collecting user data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Text Input */}
                  <div className="space-y-2">
                    <Label htmlFor="text-input">Text Input</Label>
                    <Input id="text-input" placeholder="Enter text here..." />
                  </div>
                  
                  {/* Textarea */}
                  <div className="space-y-2">
                    <Label htmlFor="textarea">Textarea</Label>
                    <Textarea id="textarea" placeholder="Enter longer text here..." />
                  </div>
                  
                  {/* Checkbox */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  
                  {/* Radio Group */}
                  <div className="space-y-3">
                    <Label>Radio Options</Label>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {/* Switch */}
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Toggle Switch</Label>
                  </div>
                  
                  {/* Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label htmlFor="slider">Slider (0-100)</Label>
                      <span className="text-sm">50</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Submit Form</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Accessibility Features */}
        <section>
          <h2 className="h2 mb-4">Accessibility Features</h2>
          <Card>
            <CardHeader>
              <CardTitle>WCAG AA Compliance</CardTitle>
              <CardDescription>Our design system incorporates accessibility best practices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Color Contrast</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    All text and interface elements maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
                  </p>
                  <div className="flex space-x-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-md">
                      Primary Button Text
                    </div>
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-md">
                      Secondary Button Text
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Focus Indicators</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    All interactive elements have visible focus states that meet WCAG requirements.
                  </p>
                  <div className="space-y-2">
                    <Button className="focus-visible">Focus Visible State</Button>
                    <p className="text-xs text-muted-foreground">Try tabbing to this button to see the focus indicator</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Text Scaling</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Text can be resized up to 200% without loss of content or functionality.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Semantic Markup</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    The system uses proper semantic HTML elements to improve screen reader compatibility.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
