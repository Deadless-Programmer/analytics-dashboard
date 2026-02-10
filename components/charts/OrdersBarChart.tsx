"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface OrdersBarChartProps {
  data?: { month?: string; date?: string; value: number }[];
  barColor?: string;
}

export default function OrdersBarChart({ data, barColor = "#0c00ff" }: OrdersBarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow h-full">
        <h3 className="mb-4 font-semibold text-gray-800">Orders Over Time</h3>
        <div className="h-72 flex items-center justify-center text-gray-400">
          No data available
        </div>
      </div>
    );
  }

 
  const formattedData = data.map(item => {
    if (item.date) {
      const d = new Date(item.date);
      const day = d.getDate().toString().padStart(2, '0');
      const month = d.toLocaleString('default', { month: 'short' });
      return { ...item, displayDate: `${day} ${month}` };
    }
    return { ...item, displayDate: item.month };
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow h-full">
     

      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={formattedData}>
          <XAxis
            dataKey="displayDate"
            stroke="#9ca3af"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
            angle={-35}
            textAnchor="end"
            height={70}
            dy={10}
          />
          <Tooltip
            formatter={(value) => `${value} orders`}
            contentStyle={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              padding: "12px 16px",
              fontSize: "14px",
            }}
          />
          <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}