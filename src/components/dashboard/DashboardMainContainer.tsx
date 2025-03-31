
import { useDashboard } from "@/hooks/useDashboard";
import DashboardMainPresenter from "./DashboardMainPresenter";

export default function DashboardMainContainer() {
  const dashboardData = useDashboard();
  return <DashboardMainPresenter {...dashboardData} />;
}
