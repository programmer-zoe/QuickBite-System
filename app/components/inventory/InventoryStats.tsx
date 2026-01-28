"use client";

import { AlertTriangle, Package, Wallet } from "lucide-react";
import type { Ingredient } from "./types";
import { getStatus, money } from "./types";

export default function InventoryStats({ items }: { items: Ingredient[] }) {
  const totalItems = items.length;
  const lowStock = items.filter((i) => getStatus(i) === "Low Stock").length;
  const totalValue = items.reduce((sum, i) => sum + i.currentStock * i.costPerUnit, 0);

  return (
    <div className="grid grid-cols-3 gap-5 mb-5">
      <div className="bg-[#fff7ef] border rounded-2xl p-5 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Total Items</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{totalItems}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-white/60 flex items-center justify-center">
          <Package className="text-orange-400" size={22} />
        </div>
      </div>

      <div className="bg-[#fff7ef] border rounded-2xl p-5 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Low Stock Items</p>
          <p className="text-2xl font-bold text-red-500 mt-1">{lowStock}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-white/60 flex items-center justify-center">
          <AlertTriangle className="text-red-300" size={22} />
        </div>
      </div>

      <div className="bg-[#fff7ef] border rounded-2xl p-5 flex justify-between items-center shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Total Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{money(totalValue)}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-white/60 flex items-center justify-center">
          <Wallet className="text-green-400" size={22} />
        </div>
      </div>
    </div>
  );
}
