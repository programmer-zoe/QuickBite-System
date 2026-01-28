"use client";

import { useState } from "react";

const statuses = ["All", "Pending", "Preparing", "Ready", "Completed"] as const;

export type OrderStatusFilter = typeof statuses[number];

export default function OrderFilters({
  onChange,
}: {
  onChange?: (status: OrderStatusFilter) => void;
}) {
  const [activeStatus, setActiveStatus] =
    useState<OrderStatusFilter>("All");

  const handleClick = (status: OrderStatusFilter) => {
    setActiveStatus(status);
    onChange?.(status);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center mb-6">
      {/* Search */}
      <div className="flex items-center gap-2 border rounded-xl px-4 py-2 bg-white w-72">
        <span className="text-gray-400">🔍</span>
        <input
          placeholder="Search orders..."
          className="outline-none text-sm w-full"
        />
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2">
        {statuses.map((status) => {
          const isActive = activeStatus === status;

          return (
            <button
              key={status}
              onClick={() => handleClick(status)}
              className={[
                "px-4 py-2 rounded-xl text-sm font-medium border transition",
                isActive
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white hover:bg-orange-50",
              ].join(" ")}
            >
              {status}
            </button>
          );
        })}
      </div>
    </div>
  );
}
