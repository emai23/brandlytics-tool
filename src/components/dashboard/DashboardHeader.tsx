
import { MotionContainer } from "@/components/MotionContainer";

interface DashboardHeaderProps {
  title: string;
  description: string;
}

export const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <MotionContainer delay={100}>
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </MotionContainer>
  );
};
