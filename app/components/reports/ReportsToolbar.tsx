"use client";

import { Download, Calendar } from "lucide-react";
import type { ReportRange } from "./types";

type Props = {
  range: ReportRange;
  onRangeChange: (v: ReportRange) => void;
  onExport: () => void;
};

export default function ReportsToolbar({ range, onRangeChange, onExport }: Props) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div />

      <div className="flex items-center gap-3">
        <div className="border rounded-xl bg-white px-3 py-2 flex items-center gap-2 shadow-sm">
          <Calendar size={18} className="text-gray-600" />
          <select
            value={range}
            onChange={(e) => onRangeChange(e.target.value as ReportRange)}
            className="outline-none text-sm bg-transparent"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Month</option>
          </select>
        </div>

        <button
          onClick={onExport}
          className="border rounded-xl bg-white px-4 py-2 font-semibold flex items-center gap-2 shadow-sm hover:bg-gray-50"
        >
          <Download size={18} />
          Export
        </button>
      </div>
    </div>
  );
}
