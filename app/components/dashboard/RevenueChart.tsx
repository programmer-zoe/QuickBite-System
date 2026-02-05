"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Fri", revenue: 220 },
  { day: "Sat", revenue: 0 },
  { day: "Sun", revenue: 0 },
  { day: "Mon", revenue: 0 },
  { day: "Tue", revenue: 0 },
  { day: "Wed", revenue: 0 },
  { day: "Thu", revenue: 0 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">
          Revenue (Last 7 Days)
        </h3>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 24, left: 8, bottom: 0 }}
          >
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F97316" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#F97316" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 6" stroke="#E5E7EB" />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              dy={8}
            />

            <YAxis
              width={36}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              domain={[0, 220]}
              ticks={[0, 55, 110, 165, 220]}
            />

            <Tooltip
              cursor={{ stroke: "#E5E7EB", strokeDasharray: "3 6" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
              labelStyle={{ color: "#111827", fontWeight: 600 }}
              formatter={(value: any) => [`$${value}`, "Revenue"]}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#F97316"
              strokeWidth={3}
              fill="url(#revFill)"
              dot={false}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
