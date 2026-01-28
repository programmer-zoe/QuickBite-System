"use client";

import { Search, Plus } from "lucide-react";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  onAdd: () => void;
};

export default function InventoryToolbar({ query, onQueryChange, onAdd }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2 border rounded-xl px-4 py-2 bg-white w-[420px]">
        <Search size={18} className="text-gray-400" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search ingredients..."
          className="outline-none text-sm w-full bg-transparent"
        />
      </div>

      <button
        onClick={onAdd}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-5 py-3 font-semibold flex items-center gap-2 shadow-sm"
      >
        <Plus size={18} />
        Add Ingredient
      </button>
    </div>
  );
}
