"use client";

import {
  AreaChart,
  Area,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMemo } from "react";

interface RevenueLineChartProps {
  data?: { month: string; value: number }[];
}

export default function RevenueLineChart({ data }: RevenueLineChartProps) {
  const filter = useSelector((state: RootState) => state.dashboard.filter);

  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return [];
    }

    if (filter === "7d") return data.slice(-4);
    if (filter === "30d") return data.slice(-6);
    return data;
  }, [filter, data]);

  if (filteredData.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="mb-4 font-semibold text-gray-800">Revenue Over Time</h3>
        <div className="h-85 flex items-center justify-center text-gray-400">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="mb-4 font-semibold text-gray-800">Revenue Over Time</h3>

      <ResponsiveContainer width="100%" height={340}>
        <AreaChart data={filteredData}>
          {/* Gradient for area fill */}
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0c00ff" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            interval={0}           
            angle={-45}              
            textAnchor="end"         
            height={60}               
          />

          <Tooltip
            formatter={(value) => `$${Number(value).toLocaleString()}`} 
            contentStyle={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              padding: "12px 16px",
            }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#areaGradient)"
            fillOpacity={1}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              stroke: "#2563eb",
              strokeWidth: 3,
              fill: "white",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}