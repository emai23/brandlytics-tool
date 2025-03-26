import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { StrictMode, Suspense } from "react"; // Added Suspense for lazy loading
import ErrorBoundary from "@/components/ErrorBoundary"; // Create an ErrorBoundary component
import Loading from "@/components/Loading"; // Create a Loading component for fallback

// Lazy-loaded pages
const Index = React.lazy(() => import("./pages/Index"));
const ProjectCreation = React.lazy(() => import("./pages/ProjectCreation"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Account = React.lazy(() => import("./pages/Account"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

const queryClient = new QueryClient();

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/create-project" element={<ProjectCreation />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    {/* Add all custom routes above the catch-all "*" route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            {/* Optional footer content */}
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);

export default App;
