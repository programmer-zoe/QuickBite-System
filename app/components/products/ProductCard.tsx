"use client";

import { Pencil, Trash2 } from "lucide-react";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  icon: string;
  available: boolean;
};

export default function ProductCard({
  product,
  onEdit,
  onDelete,
}: {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 flex flex-col">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="text-xl">{product.icon}</div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500 text-white">
          {product.available ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className="font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
        <p className="text-xl font-extrabold text-orange-500 mt-3">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={onEdit}
          className="flex-1 border rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>

        <button
          onClick={onDelete}
          className="w-12 h-12 rounded-xl bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
          aria-label="Delete"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
