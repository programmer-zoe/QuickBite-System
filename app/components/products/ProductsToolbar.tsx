"use client";

import { Plus, Search, ChevronDown } from "lucide-react";

export default function ProductsToolbar({
  query,
  onQueryChange,
  category,
  categories,
  onCategoryChange,
  onAddProduct,
}: {
  query: string;
  onQueryChange: (v: string) => void;
  category: string;
  categories: string[];
  onCategoryChange: (v: string) => void;
  onAddProduct: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 items-center mb-5">
      {/* Search */}
      <div className="flex items-center gap-2 border rounded-xl px-4 py-3 bg-white w-[460px] max-w-full">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search products..."
          className="outline-none text-sm w-full"
        />
      </div>

      {/* Category dropdown */}
      <div className="relative">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="appearance-none border rounded-xl bg-white px-4 py-3 pr-10 text-sm w-56"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* Add Product */}
      <button
        onClick={onAddProduct}
        className="ml-auto flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold text-sm"
      >
        <Plus className="h-4 w-4" />
        Add Product
      </button>
    </div>
  );
}
