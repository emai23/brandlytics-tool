
import { MotionContainer } from "@/components/MotionContainer";
import { MetricsCard } from "@/components/MetricsCard";
import { Package, BarChart2, Clock, CheckCircle } from "lucide-react";
import { ProjectMetrics } from "@/hooks/useDashboardData";

interface PerformanceMetricsProps {
  metrics: ProjectMetrics;
  isLoading?: boolean;
}

export const PerformanceMetrics = ({ metrics, isLoading = false }: PerformanceMetricsProps) => {
  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {[1, 2, 3, 4].map((index) => (
          <MotionContainer key={index}>
            <div className="rounded-lg border bg-card/80 backdrop-blur-md p-6 h-[120px] animate-pulse">
              <div className="h-4 bg-muted/30 rounded w-1/2 mb-4"></div>
              <div className="h-6 bg-muted/30 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-muted/30 rounded w-2/3"></div>
            </div>
          </MotionContainer>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <MetricsCard
        title="Total Projects"
        value={metrics.total.toString()}
        description="Across all categories"
        icon={<Package className="h-4 w-4" />}
        change={{ value: 2, type: "increase" }}
      />
      <MetricsCard
        title="Active Projects"
        value={metrics.activeProjects.toString()}
        description="Currently in progress"
        icon={<BarChart2 className="h-4 w-4" />}
        change={{ value: 1, type: "increase" }}
      />
      <MetricsCard
        title="Avg. Completion Time"
        value={metrics.avgCompletionTime}
        description="From start to finish"
        icon={<Clock className="h-4 w-4" />}
        change={{ value: 3, type: "decrease" }}
      />
      <MetricsCard
        title="Success Rate"
        value={metrics.successRate}
        description="Projects meeting objectives"
        icon={<CheckCircle className="h-4 w-4" />}
        change={{ value: 0.5, type: "increase" }}
      />
    </div>
  );
};
