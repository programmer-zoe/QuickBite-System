export type Unit = "pieces" | "kg" | "liters";

export type IngredientStatus = "In Stock" | "Low Stock";

export type Ingredient = {
  id: number;
  name: string;
  currentStock: number;
  minStock: number;
  unit: Unit;
  costPerUnit: number;
};

export function getStatus(i: Ingredient): IngredientStatus {
  return i.currentStock <= i.minStock ? "Low Stock" : "In Stock";
}

export function formatQty(qty: number, unit: Unit) {
  const label = unit;
  return `${qty} ${label}`;
}

export function money(n: number) {
  return `$${n.toFixed(2)}`;
}
