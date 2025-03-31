
import { useParams } from "react-router-dom";
import { useProjectDashboard } from "@/hooks/useProjectDashboard";
import DashboardProjectPresenter from "./DashboardProjectPresenter";

export default function DashboardProjectContainer() {
  const { id } = useParams<{ id: string }>();
  const projectDashboardData = useProjectDashboard(id);
  return <DashboardProjectPresenter {...projectDashboardData} />;
}
