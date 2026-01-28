"use client";

import { Pencil } from "lucide-react";
import type { Ingredient } from "./types";
import { formatQty, getStatus, money } from "./types";

type Props = {
  items: Ingredient[];
  onUpdate: (item: Ingredient) => void;
};

export default function InventoryTable({ items, onUpdate }: Props) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      <div className="grid grid-cols-7 gap-0 px-5 py-4 text-sm text-gray-500 border-b">
        <div className="font-semibold text-gray-600">Ingredient</div>
        <div className="font-semibold text-gray-600">Current Stock</div>
        <div className="font-semibold text-gray-600">Min Stock</div>
        <div className="font-semibold text-gray-600">Status</div>
        <div className="font-semibold text-gray-600">Cost/Unit</div>
        <div className="font-semibold text-gray-600">Total Value</div>
        <div className="font-semibold text-gray-600 text-right">Actions</div>
      </div>

      {items.map((i) => {
        const status = getStatus(i);
        const totalValue = i.currentStock * i.costPerUnit;

        const denom = Math.max(i.currentStock, i.minStock * 2, 1);
        const pct = Math.min(100, Math.round((i.currentStock / denom) * 100));

        return (
          <div key={i.id} className="grid grid-cols-7 gap-0 px-5 py-5 border-b last:border-b-0 items-center">
            <div className="font-semibold text-gray-900">{i.name}</div>

            <div>
              <div className="text-gray-900">{formatQty(i.currentStock, i.unit)}</div>
              <div className="mt-2 h-2 w-[180px] bg-gray-100 rounded-full overflow-hidden">
                <div className="h-2 bg-orange-500 rounded-full" style={{ width: `${pct}%` }} />
              </div>
            </div>

            <div className="text-gray-900">{formatQty(i.minStock, i.unit)}</div>

            <div>
              <span
                className={[
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
                  status === "In Stock"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white",
                ].join(" ")}
              >
                {status}
              </span>
            </div>

            <div className="text-gray-900">{money(i.costPerUnit)}</div>

            <div className="text-gray-900 font-semibold">{money(totalValue)}</div>

            <div className="flex justify-end">
              <button
                onClick={() => onUpdate(i)}
                className="text-gray-900 font-semibold flex items-center gap-2 hover:text-orange-600"
              >
                <Pencil size={18} />
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
