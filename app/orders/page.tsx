"use client";

import OrderFilters from "@/components/orders/OrderFilters";
import OrdersGrid from "@/components/orders/OrdersGrid";


export default function OrdersPage() {
  return (
    <main className="flex-1 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <p className="text-sm text-gray-500">0 active orders</p>
      </div>

      {/* Filters */}
      <OrderFilters />

      {/* Orders */}
      <OrdersGrid />
    </main>
  );
}
