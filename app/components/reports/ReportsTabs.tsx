"use client";

import type { ReportsTab } from "./types";

const tabs: ReportsTab[] = ["Sales Trends", "Product Performance", "Time Analysis"];

export default function ReportsTabs({
  value,
  onChange,
}: {
  value: ReportsTab;
  onChange: (t: ReportsTab) => void;
}) {
  return (
    <div className="inline-flex bg-gray-100 rounded-xl p-1 mb-5">
      {tabs.map((t) => {
        const active = value === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={[
              "px-4 py-2 rounded-lg text-sm font-semibold",
              active ? "bg-white border shadow-sm" : "text-gray-600 hover:text-gray-900",
            ].join(" ")}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
