"use client";

import { useMemo, useState } from "react";
import ReportsHeader from "@/components/reports/ReportsHeader";
import ReportsToolbar from "@/components/reports/ReportsToolbar";
import ReportsStats from "@/components/reports/ReportsStats";
import ReportsTabs from "@/components/reports/ReportsTabs";
import SalesTrendsPanel from "@/components/reports/SalesTrendsPanel";
import type { ReportsTab, ReportRange, ReportSummary } from "@/components/reports/types";

export default function ReportsPage() {
  const [range, setRange] = useState<ReportRange>("Last 7 Days");
  const [tab, setTab] = useState<ReportsTab>("Sales Trends");

  const summary: ReportSummary = useMemo(() => {
    // mock numbers same as screenshot
    return {
      totalRevenue: 940.51,
      totalOrders: 30,
      avgOrderValue: 31.35,
      totalTax: 69.67,
    };
  }, [range]);

  const revenue = useMemo(() => {
    // mock curve like screenshot
    if (range === "Last 7 Days") {
      return [
        { label: "Thu", value: 240 },
        { label: "Fri", value: 140 },
        { label: "Sat", value: 95 },
        { label: "Sun", value: 80 },
        { label: "Mon", value: 200 },
        { label: "Tue", value: 90 },
        { label: "Wed", value: 15 },
      ];
    }
    return [
      { label: "W1", value: 820 },
      { label: "W2", value: 640 },
      { label: "W3", value: 910 },
      { label: "W4", value: 740 },
    ];
  }, [range]);

  const payments = useMemo(() => {
    return [
      { label: "Cash", value: 25 },
      { label: "E-wallet", value: 40 },
      { label: "Card", value: 35 },
    ];
  }, [range]);

  return (
    <main className="flex-1 p-6">
      <div className="flex items-start justify-between">
        <ReportsHeader />
        <ReportsToolbar
          range={range}
          onRangeChange={setRange}
          onExport={() => alert("Export clicked")}
        />
      </div>

      <ReportsStats summary={summary} />

      <ReportsTabs value={tab} onChange={setTab} />

      {tab === "Sales Trends" && (
        <SalesTrendsPanel revenue={revenue} payments={payments} />
      )}

      {tab === "Product Performance" && (
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">Product Performance</h3>
          <p className="text-gray-500 text-sm">Next: add top products table and best sellers chart.</p>
        </div>
      )}

      {tab === "Time Analysis" && (
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">Time Analysis</h3>
          <p className="text-gray-500 text-sm">Next: add hourly heatmap and peak hours.</p>
        </div>
      )}
    </main>
  );
}
