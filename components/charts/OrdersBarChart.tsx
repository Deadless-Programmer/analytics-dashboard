"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OrdersBarChart({ data }: any) {
  const filter = useSelector((state: RootState) => state.dashboard.filter);

  const filteredData = useMemo(() => {
    if (filter === "7d") return data.slice(-4);
    if (filter === "30d") return data.slice(-6);
    return data;
  }, [filter, data]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="mb-4 font-semibold">Orders Per Month</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredData}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}