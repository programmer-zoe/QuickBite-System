"use client";

import Tabs from "@/components/pos/Tabs";
import ProductCard from "@/components/pos/ProductCard";
import OrderSummary from "@/components/pos/OrderSummary";

const products = [
  { id: 1, name: "Classic Burger", price: 5.99, desc: "Beef patty with lettuce, tomato, pickles" },
  { id: 2, name: "Cheese Burger", price: 6.99, desc: "Classic burger with melted cheddar" },
  { id: 3, name: "Double Burger", price: 8.99, desc: "Two beef patties with special sauce" },
  { id: 4, name: "Bacon Burger", price: 7.99, desc: "Cheese burger with crispy bacon" },
];

export default function POSPage() {
  return (
    <div className="w-full bg-[#fffaf6]">
      <div className="flex gap-8 p-8 min-h-[calc(100vh-0px)]">
        {/* LEFT */}
        <section className="flex-1 min-w-0">
          <h1 className="text-3xl font-extrabold text-gray-900">Point of Sale</h1>
          <p className="text-gray-500 mt-2">Select items to add to the order</p>

          <div className="mt-5">
            <Tabs
              categories={[
                "Combo Meals",
                "Burgers",
                "Chicken",
                "Sides",
                "Beverages",
                "Desserts",
                "Add-ons",
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* RIGHT */}
        <aside className="w-[420px] shrink-0">
          <OrderSummary />
        </aside>
      </div>
    </div>
  );
}
