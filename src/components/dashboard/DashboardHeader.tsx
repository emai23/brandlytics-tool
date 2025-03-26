
import { MotionContainer } from "@/components/MotionContainer";

interface DashboardHeaderProps {
  title: string;
  description: string;
}

export const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <MotionContainer delay={100}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground mt-1">
          {description}
        </p>
      </div>
    </MotionContainer>
  );
};
