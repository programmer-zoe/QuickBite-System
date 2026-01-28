"use client";

export type ProductsTab = "Products" | "Combo Meals" | "Categories";

export default function ProductsTabs({
  value,
  onChange,
}: {
  value: ProductsTab;
  onChange: (tab: ProductsTab) => void;
}) {
  const tabs: ProductsTab[] = ["Products", "Combo Meals", "Categories"];

  return (
    <div className="inline-flex items-center gap-2 rounded-2xl bg-[#f6f3f0] p-2 mb-5">
      {tabs.map((t) => {
        const active = value === t;

        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={[
              "px-6 py-2 rounded-xl text-sm font-semibold transition",
              active ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900",
            ].join(" ")}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}







