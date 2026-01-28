"use client";

import { useMemo, useState } from "react";
import type { Ingredient, Unit } from "./types";

type Draft = {
  name: string;
  currentStock: string;
  minStock: string;
  unit: Unit;
  costPerUnit: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (item: Omit<Ingredient, "id">) => void;
};

export default function AddIngredientModal({ open, onClose, onSubmit }: Props) {
  const [draft, setDraft] = useState<Draft>({
    name: "",
    currentStock: "",
    minStock: "",
    unit: "pieces",
    costPerUnit: "",
  });

  const canSave = useMemo(() => {
    return draft.name.trim().length > 0;
  }, [draft.name]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-[720px] max-w-[92vw] bg-white rounded-2xl shadow-lg border p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Add Ingredient</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl">×</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
            <input
              value={draft.name}
              onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))}
              placeholder="Ingredient name"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Stock</label>
              <input
                value={draft.currentStock}
                onChange={(e) => setDraft((p) => ({ ...p, currentStock: e.target.value }))}
                placeholder="0"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Min Stock</label>
              <input
                value={draft.minStock}
                onChange={(e) => setDraft((p) => ({ ...p, minStock: e.target.value }))}
                placeholder="0"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Unit</label>
              <select
                value={draft.unit}
                onChange={(e) => setDraft((p) => ({ ...p, unit: e.target.value as Unit }))}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200 bg-white"
              >
                <option value="pieces">pieces</option>
                <option value="kg">kg</option>
                <option value="liters">liters</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cost/Unit</label>
              <input
                value={draft.costPerUnit}
                onChange={(e) => setDraft((p) => ({ ...p, costPerUnit: e.target.value }))}
                placeholder="0.00"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
            <div />
          </div>

          <button
            disabled={!canSave}
            onClick={() => {
              const currentStock = Number(draft.currentStock);
              const minStock = Number(draft.minStock);
              const costPerUnit = Number(draft.costPerUnit);

              onSubmit({
                name: draft.name.trim(),
                currentStock: Number.isFinite(currentStock) ? currentStock : 0,
                minStock: Number.isFinite(minStock) ? minStock : 0,
                unit: draft.unit,
                costPerUnit: Number.isFinite(costPerUnit) ? costPerUnit : 0,
              });

              onClose();
              setDraft({ name: "", currentStock: "", minStock: "", unit: "pieces", costPerUnit: "" });
            }}
            className="w-full mt-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-200 text-white rounded-xl py-4 font-semibold"
          >
            Add Ingredient
          </button>
        </div>
      </div>
    </div>
  );
}
