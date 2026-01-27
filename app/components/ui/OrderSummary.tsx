"use client";

import { useState } from "react";
import OrderItem from "./OrderItem";

const TAX_RATE = 0.08;

export default function OrderSummary() {
  const [order, setOrder] = useState([
    { id: 1, name: "Double Burger", price: 8.99, quantity: 1 },
  ]);

  const subtotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const updateQuantity = (id: number, quantity: number) => {
    setOrder((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setOrder((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#fffaf6] rounded-3xl border border-black/10 shadow-sm flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-5">
        <h2 className="text-xl font-extrabold text-gray-900">Current Order</h2>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-5">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="bg-orange-500 text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
          >
            🍴 <span>Dine In</span>
          </button>

          <button
            type="button"
            className="bg-[#fffaf6] border border-black/15 rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
          >
            🥡 <span>Take Out</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/10" />

      {/* Items */}
      <div className="px-6 py-5 flex-1 overflow-y-auto">
        {order.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            onQuantityChange={(q) => updateQuantity(item.id, q)}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-black/10" />

      {/* Totals */}
      <div className="px-6 pt-5 pb-6 bg-[#fffaf6]">
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-3 border-t border-black/10 pt-4 flex items-end justify-between">
          <span className="text-lg font-extrabold text-gray-900">Total</span>
          <span className="text-xl font-extrabold text-orange-500">${total.toFixed(2)}</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="bg-[#fffaf6] border border-black/15 rounded-xl py-3 font-semibold"
          >
            Clear
          </button>

          <button
            type="button"
            className="bg-orange-500 text-white rounded-xl py-3 font-semibold"
          >
            Pay ${total.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
