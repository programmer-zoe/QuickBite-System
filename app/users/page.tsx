"use client";

import { useMemo, useState } from "react";
import UsersHeader from "@/components/users/UsersHeader";
import UsersStats from "@/components/users/UsersStats";
import UsersToolbar from "@/components/users/UsersToolbar";
import UsersTable from "@/components/users/UsersTable";
import AddUserModal from "@/components/users/AddUserModal";
import type { UserRow } from "@/components/users/types";
import EditUserModal from "@/components/users/EditUserModal";



const MOCK_USERS: UserRow[] = [
  {
    id: 1,
    name: "System Admin",
    email: "admin@fastfood.com",
    username: "admin",
    role: "Admin",
    status: "Active",
    created: "Jan 01, 2024",
  },
  {
    id: 2,
    name: "Store Manager",
    email: "manager@fastfood.com",
    username: "manager",
    role: "Manager",
    status: "Active",
    created: "Jan 15, 2024",
  },
  {
    id: 3,
    name: "John Cashier",
    email: "cashier@fastfood.com",
    username: "cashier",
    role: "Cashier",
    status: "Active",
    created: "Feb 01, 2024",
  },
];

export default function UsersPage() {

  const [openEdit, setOpenEdit] = useState(false);
  const [editing, setEditing] = useState<UserRow | null>(null);

  const [users, setUsers] = useState<UserRow[]>(MOCK_USERS);
  const [query, setQuery] = useState("");
  const [openAdd, setOpenAdd] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => {
      return (
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
      );
    });
  }, [users, query]);

  return (
    <main className="flex-1 p-6">
      <div className="flex items-start justify-between gap-4">
        <UsersHeader />
      </div>

      <UsersStats users={users} />

      <UsersToolbar
        query={query}
        onQueryChange={setQuery}
        onAdd={() => setOpenAdd(true)}
      />

      <UsersTable
        users={filtered}
        onEdit={(u) => {
            setEditing(u);
            setOpenEdit(true);
        }}
        onToggleStatus={(id) => {
            setUsers((prev) =>
            prev.map((u) =>
                u.id === id
                ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
                : u
            )
            );
        }}
        />


      <AddUserModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSubmit={(draft) => {
          setUsers((prev) => [
            {
              id: Date.now(),
              name: draft.name.trim(),
              email: draft.email.trim(),
              username: draft.username.trim(),
              role: draft.role,
              status: "Active",
              created: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }),
            },
            ...prev,
          ]);
          setOpenAdd(false);
        }}
      />

      <EditUserModal
        open={openEdit}
        user={editing}
        onClose={() => {
            setOpenEdit(false);
            setEditing(null);
        }}
        onSubmit={(id, patch) => {
            setUsers((prev) =>
            prev.map((u) =>
                u.id !== id
                ? u
                : {
                    ...u,
                    username: patch.username.trim(),
                    name: patch.name.trim(),
                    email: patch.email.trim(),
                    role: patch.role,
                    status: patch.active ? "Active" : "Inactive",
                    }
            )
            );
            setOpenEdit(false);
            setEditing(null);
        }}
        />


    </main>
  );
}
