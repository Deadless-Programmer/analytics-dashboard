"use client";

import { useState } from "react";

export default function Header({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center justify-between px-4 z-30">
      {/* Mobile menu */}
      <button onClick={onMenuClick} className="md:hidden text-xl">
        ☰
      </button>

      <h1 className="font-semibold text-lg hidden md:block">
        Dashboard Overview
      </h1>

      <div className="flex items-center gap-4 relative">
        {/* Notification */}
        <div className="relative cursor-pointer">
          🔔
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

        {/* Avatar */}
        <div
          onClick={() => setOpen(!open)}
          className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer"
        />

        {open && (
          <div className="absolute right-0 top-12 w-40 bg-white border rounded-lg shadow-md">
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </p>
          </div>
        )}
      </div>
    </header>
  );
}