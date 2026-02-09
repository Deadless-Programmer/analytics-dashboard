"use client";

import { useState } from "react";
import clsx from "clsx";

const menu = [
  { label: "Dashboard", icon: "📊" },
  { label: "Analytics", icon: "📈" },
  { label: "Users", icon: "👥" },
  { label: "Orders", icon: "🛒" },
  { label: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "fixed top-0 left-0 h-screen bg-white border-r transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b">
        {!collapsed && <span className="font-bold">Admin</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4 space-y-1">
        {menu.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-blue-50 text-gray-700"
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}