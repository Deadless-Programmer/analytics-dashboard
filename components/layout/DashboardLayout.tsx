"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {mobileSidebar && (
        <div className="fixed inset-0 z-50 bg-black/30">
          <div className="w-64 bg-white h-full">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="md:ml-64">
        <Header onMenuClick={() => setMobileSidebar(true)} />

        <main className="pt-20 px-4 md:px-6">
          {children}
        </main>
      </div>
    </div>
  );
}