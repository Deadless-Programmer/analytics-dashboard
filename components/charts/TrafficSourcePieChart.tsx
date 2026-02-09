"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"]; 

interface TrafficSourcePieChartProps {
  data?: { source: string; value: number }[];
}

export default function TrafficSourcePieChart({ data }: TrafficSourcePieChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="mb-4 font-semibold text-gray-800">Traffic Sources</h3>
        <div className="h-75 flex items-center justify-center text-gray-400">
          No traffic data available
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="mb-4 font-semibold text-gray-800">Traffic Sources</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="source"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            label={({ payload, percent }) => `${payload.source} ${((percent ?? 0) * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} visits`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}