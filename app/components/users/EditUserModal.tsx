"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import type { UserRole, UserRow } from "./types";

type Draft = {
  username: string;
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
};

export default function EditUserModal({
  open,
  user,
  onClose,
  onSubmit,
}: {
  open: boolean;
  user: UserRow | null;
  onClose: () => void;
  onSubmit: (id: number, patch: Draft) => void;
}) {
  const [draft, setDraft] = useState<Draft>({
    username: "",
    name: "",
    email: "",
    role: "Cashier",
    active: true,
  });

  useEffect(() => {
    if (!user) return;
    setDraft({
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      active: user.status === "Active",
    });
  }, [user]);

  const canSave = useMemo(() => {
    return (
      draft.username.trim().length > 0 &&
      draft.name.trim().length > 0 &&
      draft.email.trim().length > 0
    );
  }, [draft]);

  if (!open || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-[620px] max-w-[92vw] rounded-2xl bg-white shadow-xl border">
        <div className="flex items-center justify-between px-8 py-6">
          <h3 className="text-xl font-bold text-gray-900">Edit User</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900" aria-label="Close">
            <X />
          </button>
        </div>

        <div className="px-8 pb-7 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Username *</label>
            <input
              value={draft.username}
              onChange={(e) => setDraft((p) => ({ ...p, username: e.target.value }))}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name *</label>
            <input
              value={draft.name}
              onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Email *</label>
            <input
              value={draft.email}
              onChange={(e) => setDraft((p) => ({ ...p, email: e.target.value }))}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Role *</label>
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

          <div className="flex items-center justify-between pt-1">
            <p className="text-sm font-semibold text-gray-800">Active</p>

            <button
              type="button"
              onClick={() => setDraft((p) => ({ ...p, active: !p.active }))}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
                draft.active ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label="Toggle active"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                  draft.active ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <button
            disabled={!canSave}
            onClick={() => {
              if (!canSave) return;
              onSubmit(user.id, draft);
            }}
            className={`w-full rounded-xl py-3 font-semibold text-white ${
              canSave ? "bg-orange-500 hover:bg-orange-600" : "bg-orange-300 cursor-not-allowed"
            }`}
          >
            Update User
          </button>
        </div>
      </div>
    </div>
  );
}
