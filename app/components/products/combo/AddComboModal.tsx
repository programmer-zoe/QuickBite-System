// app/components/products/combo/AddComboModal.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import type { ComboDraft } from "./types";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (draft: ComboDraft) => void;
};

export default function AddComboModal({ open, onClose, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");

  useEffect(() => {
    if (!open) return;
    setName("");
    setDesc("");
    setPrice("");
    setOriginalPrice("");
  }, [open]);

  const computedSave = useMemo(() => {
    const p = Number(price);
    const o = Number(originalPrice);
    if (!Number.isFinite(p) || !Number.isFinite(o)) return 0;
    return Math.max(0, o - p);
  }, [price, originalPrice]);

  if (!open) return null;

  const submit = () => {
    if (!name.trim()) return;

    onSubmit({
      name: name.trim(),
      desc: desc.trim(),
      price,
      originalPrice,
      icon: "🧩",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
        aria-label="Close overlay"
      />

      {/* modal */}
      <div className="relative w-[680px] max-w-[92vw] bg-white rounded-2xl shadow-xl border border-black/10">
        {/* header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <h2 className="text-xl font-bold">Add New Combo</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl">
            ✕
          </button>
        </div>

        {/* body */}
        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Combo name"
              className="w-full border border-black/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Combo description"
              className="w-full min-h-[96px] border border-black/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Combo Price *</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                inputMode="decimal"
                className="w-full border border-black/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Original Price</label>
              <input
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="0.00"
                inputMode="decimal"
                className="w-full border border-black/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />
              {computedSave > 0 && (
                <p className="text-xs text-green-700 mt-2">
                  Save ${computedSave.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={submit}
            className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl py-4"
          >
            Add Combo
          </button>
        </div>
      </div>
    </div>
  );
}
