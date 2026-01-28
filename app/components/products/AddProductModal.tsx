"use client";

import { X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type ProductDraft = {
  name: string;
  description: string;
  price: string;
  category: string;
  available: boolean;
};

export default function AddProductModal({
  open,
  onClose,
  categories,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  categories: string[];
  onSubmit: (draft: ProductDraft) => void;
}) {
  const [form, setForm] = useState<ProductDraft>({
    name: "",
    description: "",
    price: "",
    category: "",
    available: true,
  });

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        available: true,
      });
    }
  }, [open]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) return;
    if (!form.price.trim()) return;
    if (!form.category.trim()) return;

    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl border overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6">
            <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={submit} className="px-8 pb-8">
            {/* Name */}
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              placeholder="Product name"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              autoFocus
            />

            {/* Description */}
            <label className="block text-sm font-semibold text-gray-800 mt-5 mb-2">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((p) => ({ ...p, description: e.target.value }))
              }
              placeholder="Product description"
              className="w-full min-h-[110px] rounded-xl border px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            />

            {/* Price + Category */}
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.price}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, price: e.target.value }))
                  }
                  placeholder="0.00"
                  inputMode="decimal"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, category: e.target.value }))
                    }
                    className="w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    {categories
                      .filter((c) => c !== "All Categories")
                      .map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                  </select>
                  <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Available toggle */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm font-semibold text-gray-800">Available</p>

              <button
                type="button"
                onClick={() =>
                  setForm((p) => ({ ...p, available: !p.available }))
                }
                className={[
                  "w-14 h-8 rounded-full relative transition",
                  form.available ? "bg-orange-500" : "bg-gray-300",
                ].join(" ")}
                aria-pressed={form.available}
              >
                <span
                  className={[
                    "absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition",
                    form.available ? "translate-x-6" : "translate-x-0",
                  ].join(" ")}
                />
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
