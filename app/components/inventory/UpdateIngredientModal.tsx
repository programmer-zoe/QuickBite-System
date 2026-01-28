"use client";

import { useEffect, useState } from "react";
import type { Ingredient } from "./types";

type Props = {
  open: boolean;
  item: Ingredient | null;
  onClose: () => void;
  onSave: (next: Ingredient) => void;
};

export default function UpdateIngredientModal({ open, item, onClose, onSave }: Props) {
  const [currentStock, setCurrentStock] = useState("");
  const [minStock, setMinStock] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");

  useEffect(() => {
    if (!item) return;
    setCurrentStock(String(item.currentStock));
    setMinStock(String(item.minStock));
    setCostPerUnit(String(item.costPerUnit));
  }, [item]);

  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-[640px] max-w-[92vw] bg-white rounded-2xl shadow-lg border p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Update Ingredient</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl">×</button>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{item.name}</span>
            <span className="ml-2">({item.unit})</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Stock</label>
              <input
                value={currentStock}
                onChange={(e) => setCurrentStock(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Min Stock</label>
              <input
                value={minStock}
                onChange={(e) => setMinStock(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cost/Unit</label>
              <input
                value={costPerUnit}
                onChange={(e) => setCostPerUnit(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>

          <button
            onClick={() => {
              const cs = Number(currentStock);
              const ms = Number(minStock);
              const cpu = Number(costPerUnit);

              onSave({
                ...item,
                currentStock: Number.isFinite(cs) ? cs : item.currentStock,
                minStock: Number.isFinite(ms) ? ms : item.minStock,
                costPerUnit: Number.isFinite(cpu) ? cpu : item.costPerUnit,
              });

              onClose();
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
