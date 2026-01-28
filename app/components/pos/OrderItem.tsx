"use client";

import QuantitySelector from "./QuantitySelector";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface OrderItemProps {
  item: Product & { quantity: number };
  onQuantityChange?: (quantity: number) => void;
  onRemove?: () => void;
}

export default function OrderItem({ item, onQuantityChange, onRemove }: OrderItemProps) {
  return (
    <div className="bg-[#f3f1ee] rounded-2xl px-6 py-5">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <p className="font-bold text-gray-900">{item.name}</p>
          <p className="text-orange-500 font-semibold">${item.price.toFixed(2)}</p>
        </div>

        {/* Middle + right */}
        <div className="flex items-center gap-6">
          <QuantitySelector
            value={item.quantity}
            onChange={onQuantityChange || (() => {})}
          />

          <button
            type="button"
            onClick={onRemove}
            className="text-red-500 text-xl px-2"
            aria-label="Remove item"
          >
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}
