// app/components/layout/Sidebar.tsx

"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSidebar, closeSidebar } from "@/redux/features/uiSlice";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  ChevronLeft,
  ChevronRight,
  X, 
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Users", icon: Users, href: "/users" },
  { label: "Orders", icon: ShoppingCart, href: "/orders" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  
  const isCollapsed = !isOpen;

  return (
    <>
      {/* Mobile overlay / backdrop */}
    

      {/* Sidebar */}
      <aside
        className={clsx(
          // Base styles
          "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] bg-white border-r border-gray-200",
          "transition-transform duration-300 ease-in-out",
          // Mobile behavior
          "w-72", 
          isOpen ? "translate-x-0" : "-translate-x-full",
          // Desktop behavior
          "md:static md:top-0 md:h-screen md:translate-x-0 md:transition-none",
          isCollapsed ? "md:w-16" : "md:w-64"
        )}
      >
        {/* Header section */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          {/* Logo / Title */}
          {!isCollapsed && (
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Admin
            </span>
          )}

          {/* Desktop collapse toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleSidebar());
            }}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          {/* Mobile close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(closeSidebar());
            }}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="mt-2 px-2 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                
                  if (window.innerWidth < 768) {
                    dispatch(closeSidebar());
                  }
                }}
                className={clsx(
                  "group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  isCollapsed && "justify-center px-3"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon
                  size={20}
                  className={clsx(
                    "shrink-0",
                    isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"
                  )}
                />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}