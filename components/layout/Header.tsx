// app/components/layout/Header.tsx

"use client";

import { useState } from "react";
import { Bell, Menu} from "lucide-react";
import { useDispatch} from "react-redux";
import { toggleSidebar } from "@/redux/features/uiSlice";



export default function Header() {
  const dispatch = useDispatch();
 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 bg-white border-b border-gray-200 shadow-sm">
      <div className="relative flex h-full items-center px-4 md:px-6">
        {/* Left: Mobile Menu */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg md:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>

   
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          <h1 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
            Dashboard Overview
          </h1>

        
        </div>

        {/* Right: Notification + User */}
        <div className="ml-auto flex items-center gap-5">
          <button
            className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ring-2 ring-white">
              3
            </span>
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 hover:bg-gray-100 rounded-full p-1 transition-colors"
              aria-expanded={dropdownOpen}
            >
              <div className="h-9 w-9 rounded-full bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                TU
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">Tuhin</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                <div className="px-5 py-4 border-b bg-gray-50">
                  <p className="font-medium text-gray-900">Tuhin</p>
                  <p className="text-sm text-gray-500 mt-0.5">tuhin@example.com</p>
                </div>
                <div className="py-1">
                  <button className="w-full px-5 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    Profile
                  </button>
                  <button className="w-full px-5 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 transition-colors">
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}