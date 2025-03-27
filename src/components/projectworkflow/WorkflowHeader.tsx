// src/components/WorkflowHeader.tsx
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkflowHeaderProps {
  onRunAll: () => void;
}

export const WorkflowHeader = ({ onRunAll }: WorkflowHeaderProps) => {
  return (
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle>Workflow Progress</CardTitle>
          <CardDescription>Complete each phase or run the entire workflow at once</CardDescription>
        </div>
        <Button onClick={onRunAll} className="px-6">
          Run Complete Workflow
        </Button>
      </div>
    </CardHeader>
  );
};
