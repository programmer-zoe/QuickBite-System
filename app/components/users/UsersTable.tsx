"use client";

import { Pencil } from "lucide-react";
import type { UserRow, UserRole, UserStatus } from "./types";

function RolePill({ role }: { role: UserRole }) {
  const base = "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold";
  if (role === "Admin") return <span className={`${base} bg-orange-500 text-white`}>🛡️ Admin</span>;
  if (role === "Manager") return <span className={`${base} bg-orange-500 text-white`}>🧑‍💼 Manager</span>;
  return <span className={`${base} bg-orange-100 text-orange-700`}>🛒 Cashier</span>;
}

function StatusPill({ status }: { status: UserStatus }) {
  const base = "inline-flex rounded-full px-3 py-1 text-xs font-semibold";
  if (status === "Active") return <span className={`${base} bg-orange-500 text-white`}>Active</span>;
  return <span className={`${base} bg-gray-200 text-gray-700`}>Inactive</span>;
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return (
    <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
      {initials}
    </div>
  );
}

export default function UsersTable({
  users,
  onEdit,
  onToggleStatus,
}: {
  users: UserRow[];
  onEdit: (u: UserRow) => void;
  onToggleStatus: (id: number) => void;
}) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="grid grid-cols-[2.5fr_1fr_1.2fr_1fr_1fr_1fr] px-5 py-4 text-sm font-semibold text-gray-600 border-b">
        <div>User</div>
        <div>Username</div>
        <div>Role</div>
        <div>Status</div>
        <div>Created</div>
        <div className="text-right">Actions</div>
      </div>

      {users.map((u) => (
        <div
          key={u.id}
          className="grid grid-cols-[2.5fr_1fr_1.2fr_1fr_1fr_1fr] items-center px-5 py-4 border-b last:border-b-0"
        >
          <div className="flex items-center gap-3">
            <InitialsAvatar name={u.name} />
            <div>
              <p className="font-semibold text-gray-900 leading-5">{u.name}</p>
              <p className="text-sm text-gray-500">{u.email}</p>
            </div>
          </div>

          <div className="text-sm text-gray-900">{u.username}</div>
          <div><RolePill role={u.role} /></div>
          <div><StatusPill status={u.status} /></div>
          <div className="text-sm text-gray-600">{u.created}</div>

          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => onEdit(u)}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Edit user"
              title="Edit"
            >
              <Pencil size={18} />
            </button>

            <button
              onClick={() => onToggleStatus(u.id)}
              className="text-sm font-semibold text-gray-900 hover:text-orange-600"
            >
              {u.status === "Active" ? "Deactivate" : "Activate"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
