import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import React, { StrictMode, Suspense } from "react"; // Added Suspense for lazy loading
import ErrorBoundary from "@/components/ErrorBoundary"; // 
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

const CustomFallback = () => (
  <div className="p-4 text-center">
    <h2 className="text-xl font-bold text-red-600">Oops! Something went wrong.</h2>
    <p className="text-sm text-muted-foreground">Please try refreshing the page or contact support if the issue persists.</p>
    <button
      onClick={() => window.location.reload()}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Refresh Page
    </button>
  </div>
);

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <ErrorBoundary fallback={<CustomFallback />}>
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
