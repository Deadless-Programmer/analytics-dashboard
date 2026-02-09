"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeSidebar } from "@/redux/features/uiSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(
    (state: RootState) => state.ui.sidebarOpen
  );

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => dispatch(closeSidebar())}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full bg-slate-900 text-white
          transition-all duration-300
          ${sidebarOpen ? "w-64" : "w-0"}
          md:w-64
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 text-xl font-bold border-b border-slate-700">
          Admin Panel
        </div>

        <nav className="p-4 space-y-3">
          <Link href="/">Dashboard</Link>
          <Link href="/users">Users</Link>
          <Link href="/reports">Reports</Link>
        </nav>
      </aside>
    </>
  );
}