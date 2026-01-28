// app/components/products/combo/ComboCard.tsx

"use client";

import type { Combo } from "./types";

type Props = {
  combo: Combo;
  onEdit: (c: Combo) => void;
  onDelete: (c: Combo) => void;
};

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function ComboCard({ combo, onEdit, onDelete }: Props) {
  const save = Math.max(0, combo.originalPrice - combo.price);

  return (
    <div className="bg-white rounded-2xl border border-black/10 shadow-sm p-5">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="text-2xl">{combo.icon ?? "🧩"}</div>

        {save > 0 && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            Save {money(save)}
          </span>
        )}
      </div>

      {/* Name + desc */}
      <div className="mt-3">
        <h3 className="text-lg font-bold">{combo.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{combo.desc}</p>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-end gap-3">
        <span className="text-2xl font-bold text-orange-500">{money(combo.price)}</span>
        {combo.originalPrice > combo.price && (
          <span className="text-gray-400 line-through">{money(combo.originalPrice)}</span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={() => onEdit(combo)}
          className="flex-1 border border-black/10 rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-orange-50"
        >
          <span>✏️</span>
          <span>Edit</span>
        </button>

        <button
          onClick={() => onDelete(combo)}
          className="w-12 h-12 rounded-xl bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
          aria-label="Delete"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
