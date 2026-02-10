"use client";

import {
  AreaChart,
  Area,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RevenueLineChartProps {
  data?: { month?: string; date?: string; value: number }[];
}

export default function RevenueLineChart({ data }: RevenueLineChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow h-full">
        <h3 className="mb-4 font-semibold text-gray-800">Revenue Over Time</h3>
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
        <AreaChart data={formattedData}>
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0c00ff" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
            </linearGradient>
          </defs>

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
            formatter={(value) => `$${Number(value).toLocaleString()}`}
            labelFormatter={(label) => label}
            contentStyle={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              padding: "12px 16px",
              fontSize: "14px",
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