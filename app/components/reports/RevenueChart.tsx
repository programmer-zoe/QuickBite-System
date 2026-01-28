"use client";

import type { RevenuePoint } from "./types";
import { money } from "./types";

export default function RevenueChart({ points }: { points: RevenuePoint[] }) {
  const max = Math.max(...points.map((p) => p.value), 1);

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4">Revenue Over Time</h3>

      <div className="h-[320px] w-full">
        <div className="h-full w-full border rounded-xl p-4 bg-white">
          <div className="h-full w-full relative">
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400">
              {[max, max * 0.75, max * 0.5, max * 0.25, 0].map((v) => (
                <div key={v} className="flex items-center gap-2">
                  <span className="w-10">{Math.round(v)}</span>
                  <div className="flex-1 border-t border-dashed" />
                </div>
              ))}
            </div>

            <div className="absolute inset-0 pt-2 pb-6 pl-12 pr-2 flex items-end gap-2">
              {points.map((p) => {
                const h = Math.round((p.value / max) * 100);
                return (
                  <div key={p.label} className="flex-1 flex flex-col items-center justify-end gap-2">
                    <div
                      title={`${p.label}: ${money(p.value)}`}
                      className="w-full rounded-lg bg-orange-200 border border-orange-300"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="absolute left-12 right-2 bottom-1 flex items-center gap-2 text-xs text-gray-500">
              {points.map((p) => (
                <div key={p.label} className="flex-1 text-center">{p.label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
