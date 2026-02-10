"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "@/components/layout/DashboardLayout";
import KPICard from "@/components/kpi/KPICard";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import OrdersBarChart from "@/components/charts/OrdersBarChart";
import UserPieChart from "@/components/charts/UserPieChart";
import FilterBar from "@/components/filters/FilterBar";
import Skeleton from "@/components/ui/Skeleton";
import TrafficSourcePieChart from "@/components/charts/TrafficSourcePieChart";
import { RootState } from "@/redux/store";
import { fetchDashboardData } from "@/services/api";

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filter = useSelector((state: RootState) => state.dashboard.filter);

  const getRevenueData = () => {
    if (!data) return [];
    if (filter === "12m") return data.revenue_monthly || [];
    if (filter === "7d") return data.revenue_daily?.slice(-7) || [];
    return data.revenue_daily?.slice(-30) || []; // 30d or default
  };

  const getOrdersData = () => {
    if (!data) return [];
    if (filter === "12m") return data.orders_monthly || [];
    if (filter === "7d") return data.orders_daily?.slice(-7) || [];
    return data.orders_daily?.slice(-30) || [];
  };

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
      <div className="space-y-6 md:space-y-8 p-4 md:p-6 lg:p-8">
        <FilterBar />

        {loading ? (
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-28 md:h-32" />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Skeleton className="h-80 md:h-96" />
              <Skeleton className="h-80 md:h-96" />
              <Skeleton className="h-80 md:h-96" />
            </div>
            <Skeleton className="h-80 md:h-96" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl flex flex-col items-center gap-4 text-center">
            <p className="text-lg">{error}</p>
            <button
              onClick={loadData}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <KPICard
                title="Total Revenue"
                value={`$${data.kpi.revenue.toLocaleString()}`}
                change="+12.4%"
              />
              <KPICard
                title="Total Users"
                value={data.kpi.users.toLocaleString()}
                change="+5.2%"
              />
              <KPICard
                title="Orders"
                value={data.kpi.orders.toLocaleString()}
                change="-8.7%"
                positive={false}
              />
              <KPICard
                title="Conversion Rate"
                value={`${data.kpi.conversion}%`}
                change="+1.1%"
              />
            </div>

            {/* Main Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 md:p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Revenue Over Time
                  </h3>
                </div>
                <div className="p-4 md:p-6">
                  <RevenueLineChart data={getRevenueData()} />
                </div>
              </div>

              {/* Orders Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 md:p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Orders Over Time
                  </h3>
                </div>
                <div className="p-4 md:p-6">
                  <OrdersBarChart data={getOrdersData()} barColor="#1E40AF" />
                </div>
              </div>

              {/* User Distribution */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 md:p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">
                    User Distribution
                  </h3>
                </div>
                <div className="p-4 md:p-6">
                  <UserPieChart
                    data={data.users}
                    colors={["#3B82F6", "#1E40AF", "#2563EB"]}
                  />
                </div>
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 md:p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">
                  Traffic Sources
                </h3>
              </div>
              <div className="p-4 md:p-6">
                <TrafficSourcePieChart data={data?.traffic || []} />
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}