import DashboardLayout from "@/components/layout/DashboardLayout";
import KPICard from "@/components/kpi/KPICard";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import FilterBar from "@/components/filters/FilterBar";
import data from "@/data/dashboard.json";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Filters */}
        <FilterBar />

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

        {/* Chart */}
        <RevenueLineChart data={data.revenue} />
      </div>
    </DashboardLayout>
  );
}