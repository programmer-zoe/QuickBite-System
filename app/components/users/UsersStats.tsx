import { Shield, UserCog, ShoppingCart } from "lucide-react";
import type { UserRow } from "./types";

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-gradient-to-b from-[#fff4ea] to-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="text-orange-300">{icon}</div>
      </div>
    </div>
  );
}

export default function UsersStats({ users }: { users: UserRow[] }) {
  const admins = users.filter((u) => u.role === "Admin").length;
  const managers = users.filter((u) => u.role === "Manager").length;
  const cashiers = users.filter((u) => u.role === "Cashier").length;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-5">
      <StatCard title="Admins" value={admins} icon={<Shield size={28} />} />
      <StatCard title="Managers" value={managers} icon={<UserCog size={28} />} />
      <StatCard title="Cashiers" value={cashiers} icon={<ShoppingCart size={28} />} />
    </div>
  );
}
