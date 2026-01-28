"use client";

import { DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import type { ReportSummary } from "./types";
import { money } from "./types";

export default function ReportsStats({ summary }: { summary: ReportSummary }) {
  return (
    <div className="grid grid-cols-4 gap-5 mb-5">
      <div className="bg-[#fff7ef] border rounded-2xl p-5 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{money(summary.totalRevenue)}</p>
        </div>
        <DollarSign className="text-orange-300" size={28} />
      </div>

      <div className="bg-[#fff7ef] border rounded-2xl p-5 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Total Orders</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{summary.totalOrders}</p>
        </div>
        <ShoppingCart className="text-orange-300" size={28} />
      </div>

      <div className="bg-[#fff7ef] border rounded-2xl p-5 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Avg Order Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{money(summary.avgOrderValue)}</p>
        </div>
        <TrendingUp className="text-green-300" size={28} />
      </div>

      <div className="bg-[#fff7ef] border rounded-2xl p-5 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Total Tax</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{money(summary.totalTax)}</p>
        </div>
        <DollarSign className="text-orange-300" size={28} />
      </div>
    </div>
  );
}
