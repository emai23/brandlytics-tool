
import { MotionContainer } from "@/components/MotionContainer";
import { Navbar } from "@/components/Navbar";
import { ProjectWorkflow } from "@/components/projectworkflow/ProjectWorkflow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const projectFormSchema = z.object({
  projectName: z.string().min(3, { message: "Project name must be at least 3 characters" }),
  marketNiche: z.string().min(2, { message: "Please specify a market niche" }),
  businessGoals: z.string().min(10, { message: "Please describe your business goals" }),
  geographicFocus: z.string().min(2, { message: "Please specify a geographic focus" }),
  budgetLevel: z.enum(["low", "medium", "high"]),
  researchQuestions: z.string().min(10, { message: "Please provide at least one research question" }),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

const defaultValues: Partial<ProjectFormValues> = {
  projectName: "",
  marketNiche: "",
  businessGoals: "",
  geographicFocus: "",
  budgetLevel: "medium",
  researchQuestions: "",
};

const ProjectCreation = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues,
  });

  const onSubmit = (data: ProjectFormValues) => {
    console.log("Project data:", data);
    toast({
      title: "Project Created",
      description: `Project "${data.projectName}" has been created successfully.`,
    });
    
    // In a real implementation, this would save the project to a database
    // and then navigate to the project workflow page
    
    // For now, we'll just scroll to the workflow section
    const workflowSection = document.getElementById("project-workflow");
    if (workflowSection) {
      workflowSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <MotionContainer delay={100}>
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-2">Create New Project</h1>
              <p className="text-lg text-muted-foreground">
                Set up your market research and brand development project
              </p>
            </div>
          </MotionContainer>

          <MotionContainer delay={200} animation="slide-up">
            <Card>
              <CardHeader>
                <CardTitle>Project Configuration</CardTitle>
                <CardDescription>
                  Provide details about your project to customize the research process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="projectName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Name</FormLabel>
                            <FormControl>
                              <Input placeholder="My Brand Research Project" {...field} />
                            </FormControl>
                            <FormDescription>
                              A descriptive name for your research project
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="marketNiche"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Market Niche</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Sustainable Fashion, B2B SaaS" {...field} />
                            </FormControl>
                            <FormDescription>
                              The specific market segment you're targeting
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="businessGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Goals</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="What do you want to achieve with this research?" 
                              className="min-h-20"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Outline your key business objectives
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="geographicFocus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Geographic Focus</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., North America, Global" {...field} />
                            </FormControl>
                            <FormDescription>
                              Target geographic regions for your research
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budgetLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="low">Low Budget</SelectItem>
                                <SelectItem value="medium">Medium Budget</SelectItem>
                                <SelectItem value="high">High Budget</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Determines depth and scope of research
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="researchQuestions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Research Questions</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="What specific questions do you want this research to answer?" 
                              className="min-h-20"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Key questions you want answered through the research
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button type="submit" className="px-8">Create Project</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </MotionContainer>

          <div id="project-workflow" className="mt-12">
            <ProjectWorkflow />
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container px-4 md:px-6">
          <MotionContainer animation="slide-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="text-lg font-medium">Brandlytics</div>
                <span className="text-sm text-muted-foreground">© 2023 All rights reserved</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </MotionContainer>
        </div>
      </footer>
    </div>
  );
};

export default ProjectCreation;
