"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function UserPieChart({ data }: any) {
  const COLORS = ["#0c00ff", "#10b981", "#f59e0b"];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
  
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
        label={false}
          >
            {data.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}