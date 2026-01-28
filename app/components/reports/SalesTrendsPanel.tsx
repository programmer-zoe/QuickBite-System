"use client";

import RevenueChart from "./RevenueChart";
import PaymentDonut from "./PaymentDonut";
import type { PaymentSlice, RevenuePoint } from "./types";

export default function SalesTrendsPanel({
  revenue,
  payments,
}: {
  revenue: RevenuePoint[];
  payments: PaymentSlice[];
}) {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <RevenueChart points={revenue} />
      </div>
      <div className="col-span-1">
        <PaymentDonut slices={payments} />
      </div>
    </div>
  );
}
