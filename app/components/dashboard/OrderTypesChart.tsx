"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Dine In", value: 45 },
  { name: "Take Out", value: 55 },
];

// matches your orange tones
const COLORS = ["#F97316", "#FB923C"];

function CustomLegend(props: any) {
  const payload = props?.payload || [];
  return (
    <div className="mt-4 flex items-center justify-center gap-8 text-sm text-gray-600">
      {payload.map((entry: any, idx: number) => (
        <div key={idx} className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function OrderTypesChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-base font-semibold text-gray-900 mb-4">
        Order Types
      </h3>

      <div className="h-72 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
              formatter={(value: any) => [value, "Orders"]}
            />

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              stroke="#FFFFFF"
              strokeWidth={6}
              cx="50%"
              cy="48%"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Legend
              verticalAlign="bottom"
              align="center"
              content={<CustomLegend />}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
