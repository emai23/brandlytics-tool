import { Navbar } from "@/components/Navbar";
import { ProjectDetailDashboard } from "@/components/ProjectDetailDashboard";
import { MotionContainer } from "@/components/MotionContainer";

const ProjectDetail = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <ProjectDetailDashboard />
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

export default ProjectDetail;
