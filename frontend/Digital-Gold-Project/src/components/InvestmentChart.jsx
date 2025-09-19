import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

export default function InvestmentChart({ data }) {
  const chartData = data.map((inv) => ({
    name: inv.name,
    value: inv.amount,
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
