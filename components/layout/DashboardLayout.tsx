"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={clsx(
          "sidebar-container transition-all duration-300 ease-in-out",
          "fixed inset-y-0 left-0 z-50 w-64 md:static md:w-auto",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <Sidebar />
      </div>

   
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => {
           
          }}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />

        <main className="flex-1 pt-16 px-4 pb-8 md:px-6">
          <div className="mx-auto max-w-7xl w-full space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}