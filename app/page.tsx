import KPICard from "@/components/kpi/KPICard";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import data from "@/data/dashboard.json";

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6">
      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Total Revenue" value="$54,230" change="+12.4%" />
        <KPICard title="Total Users" value="1,245" change="+5.2%" />
        <KPICard
          title="Orders"
          value="342"
          change="-8.7%"
          positive={false}
        />
        <KPICard title="Conversion Rate" value="4.3%" change="+1.1%" />
      </div>

      {/* Charts */}
      <RevenueLineChart data={data.revenue} />
    </main>
  );
}