import { redirect } from "next/navigation";
import AnalyticsDashboard from "./AnalyticsDashboard";
import { isAdminAuthenticated } from "@/lib/auth/admin";

export default async function AnalyticsPage() {
  const authenticated =
    await isAdminAuthenticated();

  if (!authenticated) {
    redirect("/admin/login");
  }

  return <AnalyticsDashboard />;
}