"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueLineChart({ data }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="mb-4 font-semibold">Revenue Over Time</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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