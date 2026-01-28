"use client";

import type { PaymentSlice } from "./types";

export default function PaymentDonut({ slices }: { slices: PaymentSlice[] }) {
  const total = slices.reduce((a, s) => a + s.value, 0) || 1;

  const colors = ["#16a34a", "#f59e0b", "#f97316"]; // cash, e-wallet, card style

  let acc = 0;
  const parts = slices.map((s, idx) => {
    const start = (acc / total) * 360;
    acc += s.value;
    const end = (acc / total) * 360;
    return { ...s, start, end, color: colors[idx % colors.length] };
  });

  const conic = `conic-gradient(${parts
    .map((p) => `${p.color} ${p.start}deg ${p.end}deg`)
    .join(",")})`;

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4">Payment Methods</h3>

      <div className="flex items-center justify-center py-10">
        <div
          className="h-44 w-44 rounded-full"
          style={{ background: conic }}
        >
          <div className="h-28 w-28 bg-white rounded-full mx-auto my-auto translate-y-8" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pb-2">
        {parts.map((p, idx) => (
          <div key={p.label} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: colors[idx % colors.length] }}
            />
            <span>{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
