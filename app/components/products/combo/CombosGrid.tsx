// app/components/products/combo/CombosGrid.tsx

"use client";

import ComboCard from "./ComboCard";
import type { Combo } from "./types";

type Props = {
  combos: Combo[];
  onEdit: (c: Combo) => void;
  onDelete: (c: Combo) => void;
};

export default function CombosGrid({ combos, onEdit, onDelete }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {combos.map((c) => (
        <ComboCard key={c.id} combo={c} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
