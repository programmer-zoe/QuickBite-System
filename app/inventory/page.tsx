"use client";

import { useMemo, useState } from "react";
import InventoryHeader from "@/components/inventory/InventoryHeader";
import InventoryStats from "@/components/inventory/InventoryStats";
import InventoryToolbar from "@/components/inventory/InventoryToolbar";
import InventoryTable from "@/components/inventory/InventoryTable";
import AddIngredientModal from "@/components/inventory/AddIngredientModal";
import UpdateIngredientModal from "@/components/inventory/UpdateIngredientModal";
import type { Ingredient } from "@/components/inventory/types";

const MOCK: Ingredient[] = [
  { id: 1, name: "Beef Patty", currentStock: 500, minStock: 100, unit: "pieces", costPerUnit: 1.5 },
  { id: 2, name: "Chicken Breast", currentStock: 50, minStock: 10, unit: "kg", costPerUnit: 8.0 },
  { id: 3, name: "Burger Buns", currentStock: 300, minStock: 50, unit: "pieces", costPerUnit: 0.3 },
  { id: 4, name: "Cheese Slices", currentStock: 400, minStock: 80, unit: "pieces", costPerUnit: 0.25 },
  { id: 5, name: "Bacon", currentStock: 20, minStock: 5, unit: "kg", costPerUnit: 12.0 },
];

export default function InventoryPage() {
  const [items, setItems] = useState<Ingredient[]>(MOCK);
  const [query, setQuery] = useState("");
  const [openAdd, setOpenAdd] = useState(false);

  const [openUpdate, setOpenUpdate] = useState(false);
  const [selected, setSelected] = useState<Ingredient | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => i.name.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <main className="flex-1 p-6">
      <div className="flex items-start justify-between">
        <InventoryHeader />
      </div>

      <InventoryStats items={items} />

      <InventoryToolbar
        query={query}
        onQueryChange={setQuery}
        onAdd={() => setOpenAdd(true)}
      />

      <InventoryTable
        items={filtered}
        onUpdate={(item) => {
          setSelected(item);
          setOpenUpdate(true);
        }}
      />

      <AddIngredientModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSubmit={(draft) => {
          setItems((prev) => [
            { id: Date.now(), ...draft },
            ...prev,
          ]);
        }}
      />

      <UpdateIngredientModal
        open={openUpdate}
        item={selected}
        onClose={() => setOpenUpdate(false)}
        onSave={(next) => {
          setItems((prev) => prev.map((x) => (x.id === next.id ? next : x)));
        }}
      />
    </main>
  );
}
