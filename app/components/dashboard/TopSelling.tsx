"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Cheese Burger\nMeal", value: 52 },
  { name: "Double Burger\nMeal", value: 48 },
  { name: "Classic Burger\nMeal", value: 47 },
  { name: "Chicken Meal", value: 36 },
  { name: "Family Feast", value: 34 },
];

export default function TopSelling() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-base font-semibold text-gray-900 mb-4">
        Top Selling Items
      </h3>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 24, left: 28, bottom: 10 }}
            barCategoryGap={16}
          >
            <CartesianGrid strokeDasharray="3 6" stroke="#E5E7EB" />
            <XAxis
              type="number"
              domain={[0, 60]}
              ticks={[0, 15, 30, 45, 60]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={120}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#374151", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.03)" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
              formatter={(value: any) => [value, "Orders"]}
              labelFormatter={(label: any) =>
                String(label).replaceAll("\n", " ")
              }
            />
            <Bar dataKey="value" fill="#F97316" radius={[8, 8, 8, 8]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
