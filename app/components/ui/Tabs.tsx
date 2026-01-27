"use client";

import { useState } from "react";

interface TabsProps {
  categories: string[];
}

const categoryIcons: Record<string, string> = {
  "Combo Meals": "🧩",
  Burgers: "🍔",
  Chicken: "🍗",
  Sides: "🍟",
  Beverages: "🥤",
  Desserts: "🍦",
  "Add-ons": "➕",
};

export default function Tabs({ categories }: TabsProps) {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="w-full min-w-0">
      <div
        className="flex min-w-0 gap-2 overflow-x-auto pb-2 whitespace-nowrap"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap ${
              active === cat ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            <span className="text-lg">{categoryIcons[cat] ?? "🏷️"}</span>
            <span>{cat}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
