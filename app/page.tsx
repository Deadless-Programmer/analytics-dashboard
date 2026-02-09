"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import KPICard from "@/components/kpi/KPICard";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import OrdersBarChart from "@/components/charts/OrdersBarChart";
import UserPieChart from "@/components/charts/UserPieChart";
import FilterBar from "@/components/filters/FilterBar";
import Skeleton from "@/components/ui/Skeleton";
import { fetchDashboardData } from "@/services/api";

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchDashboardData(true);
      setData(res);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <FilterBar />

        {loading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-24" />
              ))}
            </div>
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-80 w-full" />
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-xl flex flex-col items-center gap-4">
            <p>{error}</p>
            <button
              onClick={loadData}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {/* KPI */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KPICard title="Total Revenue" value={`$${data.kpi.revenue}`} change="+12.4%" />
              <KPICard title="Total Users" value={data.kpi.users} change="+5.2%" />
              <KPICard title="Orders" value={data.kpi.orders} change="-8.7%" positive={false} />
              <KPICard title="Conversion Rate" value={`${data.kpi.conversion}%`} change="+1.1%" />
            </div>

            {/* Charts */}
            <RevenueLineChart data={data.revenue} />
            <OrdersBarChart data={data.orders} />
            <UserPieChart data={data.users} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}