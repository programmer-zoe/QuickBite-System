"use client";

import { Search, Plus } from "lucide-react";

export default function UsersToolbar({
  query,
  onQueryChange,
  onAdd,
}: {
  query: string;
  onQueryChange: (v: string) => void;
  onAdd: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-5">
      <div className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2 w-full max-w-md">
        <Search size={18} className="text-gray-400" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search users..."
          className="w-full outline-none text-sm"
        />
      </div>

      <button
        onClick={onAdd}
        className="shrink-0 rounded-xl bg-orange-500 px-4 py-2 text-white font-semibold flex items-center gap-2 hover:bg-orange-600"
      >
        <Plus size={18} />
        Add User
      </button>
    </div>
  );
}
