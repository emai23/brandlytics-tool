
import { Navbar } from "@/components/Navbar";
import { MotionContainer } from "@/components/MotionContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { User, Settings, Shield, Bell } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <MotionContainer delay={100}>
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-2">Account Settings</h1>
              <p className="text-lg text-muted-foreground">
                Manage your account preferences and settings
              </p>
            </div>
          </MotionContainer>

          <MotionContainer delay={200} animation="slide-up">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" /> Profile
                  </CardTitle>
                  <CardDescription>
                    Manage your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm">Name</p>
                      <p className="text-muted-foreground">Demo User</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-muted-foreground">user@example.com</p>
                    </div>
                    <Separator />
                    <Button variant="outline" size="sm" className="w-full">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" /> Preferences
                  </CardTitle>
                  <CardDescription>
                    Configure your application settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm">Theme</p>
                      <p className="text-muted-foreground">System Default</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Language</p>
                      <p className="text-muted-foreground">English (US)</p>
                    </div>
                    <Separator />
                    <Button variant="outline" size="sm" className="w-full">
                      Update Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Security
                  </CardTitle>
                  <CardDescription>
                    Manage your security settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm">Password</p>
                      <p className="text-muted-foreground">Last changed 30 days ago</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Two-Factor Authentication</p>
                      <p className="text-muted-foreground">Not enabled</p>
                    </div>
                    <Separator />
                    <Button variant="outline" size="sm" className="w-full">
                      Update Security Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </MotionContainer>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container px-4 md:px-6">
          <MotionContainer animation="slide-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="text-lg font-medium">Market Research & Brand Development Tool</div>
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

export default Account;
