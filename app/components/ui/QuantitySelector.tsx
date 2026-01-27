"use client";

interface QuantitySelectorProps {
  value: number;
  onChange: (val: number) => void;
}

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  const dec = () => onChange(Math.max(1, value - 1));
  const inc = () => onChange(value + 1);

  return (
    <div className="flex items-center gap-6">
      <button
        type="button"
        onClick={dec}
        className="text-gray-700 text-xl leading-none px-2"
        aria-label="Decrease quantity"
      >
        –
      </button>

      <span className="min-w-[18px] text-center font-semibold text-gray-900">
        {value}
      </span>

      <button
        type="button"
        onClick={inc}
        className="text-gray-700 text-xl leading-none px-2"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
