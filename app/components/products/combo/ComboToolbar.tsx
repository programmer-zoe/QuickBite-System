// app/components/products/combo/ComboToolbar.tsx

"use client";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  onAddCombo: () => void;
};

export default function ComboToolbar({ query, onQueryChange, onAddCombo }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-5 mb-6">
      {/* Search */}
      <div className="flex items-center gap-2 border border-black/10 bg-white rounded-xl px-4 py-3 w-[420px] max-w-full">
        <span className="text-gray-400">🔍</span>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search combos..."
          className="w-full outline-none text-sm bg-transparent"
        />
      </div>

      {/* Add button */}
      <button
        onClick={onAddCombo}
        className="ml-0 sm:ml-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-6 py-3 flex items-center gap-2"
      >
        <span className="text-lg leading-none">＋</span>
        <span>Add Combo</span>
      </button>
    </div>
  );
}
