"use client";

import { X } from "lucide-react";
import { useMemo, useState } from "react";
import type { UserRole, UserRow } from "./types";

type Draft = {
  name: string;
  email: string;
  username: string;
  role: UserRole;
};

export default function AddUserModal({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (draft: Draft) => void;
}) {
  const [draft, setDraft] = useState<Draft>({
    name: "",
    email: "",
    username: "",
    role: "Cashier",
  });

  const canSave = useMemo(() => {
    return (
      draft.name.trim().length > 0 &&
      draft.email.trim().length > 0 &&
      draft.username.trim().length > 0
    );
  }, [draft]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-[560px] max-w-[92vw] rounded-2xl bg-white shadow-xl border">
        <div className="flex items-center justify-between px-6 py-5">
          <h3 className="text-xl font-bold text-gray-900">Add User</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900" aria-label="Close">
            <X />
          </button>
        </div>

        <div className="px-6 pb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
              <input
                value={draft.name}
                onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))}
                placeholder="Full name"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
              <input
                value={draft.email}
                onChange={(e) => setDraft((p) => ({ ...p, email: e.target.value }))}
                placeholder="email@fastfood.com"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Username</label>
                <input
                  value={draft.username}
                  onChange={(e) => setDraft((p) => ({ ...p, username: e.target.value }))}
                  placeholder="username"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Role</label>
                <select
                  value={draft.role}
                  onChange={(e) => setDraft((p) => ({ ...p, role: e.target.value as UserRole }))}
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Cashier">Cashier</option>
                </select>
              </div>
            </div>
          </div>

          <button
            disabled={!canSave}
            onClick={() => {
              if (!canSave) return;
              onSubmit(draft);
              setDraft({ name: "", email: "", username: "", role: "Cashier" });
            }}
            className={`mt-6 w-full rounded-xl py-3 font-semibold text-white ${
              canSave ? "bg-orange-500 hover:bg-orange-600" : "bg-orange-300 cursor-not-allowed"
            }`}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}
