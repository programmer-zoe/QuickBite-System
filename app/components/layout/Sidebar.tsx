"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Package,
  Boxes,
  BarChart3,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "POS", icon: ShoppingCart, href: "/pos" },
  { name: "Orders", icon: ClipboardList, href: "/orders" },
  { name: "Products", icon: Package, href: "/products" },
  { name: "Inventory", icon: Boxes, href: "/inventory" },
  { name: "Reports", icon: BarChart3, href: "/reports" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#2b1e17] text-white flex flex-col">
      
      {/* Logo / Title */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-lg font-bold">FastFood POS</h1>
        <p className="text-sm text-white/60">Admin</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-500 transition"
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="mb-4">
          <p className="font-semibold">System Admin</p>
          <p className="text-sm text-white/60">admin@fastfood.com</p>
        </div>

        <button className="flex items-center gap-3 text-white/70 hover:text-white">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
