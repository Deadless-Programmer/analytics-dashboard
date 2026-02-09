"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMemo } from "react";

export default function RevenueLineChart({ data }: any) {
  const filter = useSelector((state: RootState) => state.dashboard.filter);

  const filteredData = useMemo(() => {
    if (filter === "7d") return data.slice(-4);
    if (filter === "30d") return data.slice(-6);
    return data;
  }, [filter, data]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="mb-4 font-semibold">Revenue Over Time</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}