"use client";

import { useMemo, useState } from "react";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsTabs, { ProductsTab } from "@/components/products/ProductsTabs";
import ProductsToolbar from "@/components/products/ProductsToolbar";
import ProductsGrid from "@/components/products/ProductsGrid";
import AddProductModal from "@/components/products/AddProductModal";

// ✅ COMBO IMPORTS
import ComboToolbar from "@/components/products/combo/ComboToolbar";
import CombosGrid from "@/components/products/combo/CombosGrid";
import AddComboModal from "@/components/products/combo/AddComboModal";
import type { Combo } from "@/components/products/combo/types";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  icon: string;
  available: boolean;
};

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Burger",
    desc: "Beef patty with lettuce, tomato, pickles",
    price: 5.99,
    category: "Burgers",
    icon: "🍔",
    available: true,
  },
  {
    id: 2,
    name: "Cheese Burger",
    desc: "Classic burger with melted cheddar",
    price: 6.99,
    category: "Burgers",
    icon: "🍔",
    available: true,
  },
];

// ✅ COMBO MOCK (FIXED: itemsText -> desc)
const MOCK_COMBOS: Combo[] = [
  {
    id: 1,
    name: "Classic Burger Meal",
    desc: "Classic Burger + Medium Fries + Medium Soda",
    price: 8.99,
    originalPrice: 11.47,
  },
  {
    id: 2,
    name: "Cheese Burger Meal",
    desc: "Cheese Burger + Medium Fries + Medium Soda",
    price: 9.99,
    originalPrice: 12.47,
  },
];

// ✅ ICON MAP (re-used for products)
const iconMap: Record<string, string> = {
  Burgers: "🍔",
  Chicken: "🍗",
  Sides: "🍟",
  Beverages: "🥤",
  Desserts: "🍦",
  "Combo Meals": "🧩",
  "Add-ons": "➕",
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<ProductsTab>("Products");

  // products state
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [openAdd, setOpenAdd] = useState(false);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);

  // ✅ combos state
  const [combos, setCombos] = useState<Combo[]>(MOCK_COMBOS);
  const [comboQuery, setComboQuery] = useState("");
  const [openAddCombo, setOpenAddCombo] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All Categories", ...Array.from(set)];
  }, [products]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);
      const okCat = category === "All Categories" || p.category === category;
      return okQuery && okCat;
    });
  }, [products, query, category]);

  // ✅ combo filter (FIXED: itemsText -> desc)
  const filteredCombos = useMemo(() => {
    const q = comboQuery.trim().toLowerCase();
    if (!q) return combos;
    return combos.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.desc ?? "").toLowerCase().includes(q)
    );
  }, [combos, comboQuery]);

  return (
    <main className="flex-1 p-6">
      <ProductsHeader />
      <ProductsTabs value={activeTab} onChange={setActiveTab} />

      {activeTab === "Products" && (
        <>
          <ProductsToolbar
            query={query}
            onQueryChange={setQuery}
            category={category}
            categories={categories}
            onCategoryChange={setCategory}
            onAddProduct={() => setOpenAdd(true)}
          />

          <ProductsGrid
            products={filtered}
            onEdit={(p) => alert(`Edit: ${p.name}`)}
            onDelete={(p) => alert(`Delete: ${p.name}`)}
          />

          <AddProductModal
            open={openAdd}
            onClose={() => setOpenAdd(false)}
            categories={categories}
            onSubmit={(draft) => {
              const price = Number(draft.price);
              const safePrice = Number.isFinite(price) ? price : 0;

              setProducts((prev) => [
                {
                  id: Date.now(),
                  name: draft.name.trim(),
                  desc: draft.description.trim(),
                  price: safePrice,
                  category: draft.category,
                  icon: iconMap[draft.category] ?? "🏷️",
                  available: draft.available,
                },
                ...prev,
              ]);

              setOpenAdd(false);
            }}
          />
        </>
      )}

      {/* ✅ COMBO MEALS TAB */}
      {activeTab === "Combo Meals" && (
        <>
          <ComboToolbar
            query={comboQuery}
            onQueryChange={setComboQuery}
            onAddCombo={() => setOpenAddCombo(true)}
          />

          <CombosGrid
            combos={filteredCombos}
            onEdit={(c) => alert(`Edit: ${c.name}`)}
            onDelete={(c) =>
              setCombos((prev) => prev.filter((x) => x.id !== c.id))
            }
          />

          <AddComboModal
            open={openAddCombo}
            onClose={() => setOpenAddCombo(false)}
            onSubmit={(draft: any) => {
              const price = Number(draft.price);
              const originalPrice = Number(draft.originalPrice);

              setCombos((prev) => [
                {
                  id: Date.now(),
                  name: String(draft.name ?? "").trim(),
                  desc: String(draft.desc ?? "").trim(), // FIXED
                  price: Number.isFinite(price) ? price : 0,
                  originalPrice: Number.isFinite(originalPrice)
                    ? originalPrice
                    : 0,
                },
                ...prev,
              ]);

              setOpenAddCombo(false);
            }}
          />
        </>
      )}
    </main>
  );
}
