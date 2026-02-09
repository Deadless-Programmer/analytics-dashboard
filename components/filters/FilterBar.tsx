// components/filters/FilterBar.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setFilter, setUserType } from "@/redux/features/dashboardSlice";
import clsx from "clsx";

const dateFilters = [
  { label: "Last 7 Days", value: "7d" },
  { label: "Last 30 Days", value: "30d" },
  { label: "Last 12 Months", value: "12m" },
] as const;

export default function FilterBar() {
  const dispatch = useDispatch();
  const { filter, userType } = useSelector(
    (state: RootState) => state.dashboard,
  );

  return (
    <div className="flex  flex-wrap items-center gap-3 bg-white p-4 mt-8 rounded-xl shadow">
      {dateFilters.map((f) => (
        <button
          key={f.value}
          onClick={() => dispatch(setFilter(f.value))}
          className={clsx(
            "px-4 py-2 rounded-lg text-sm font-medium transition",
            filter === f.value
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200",
          )}
        >
          {f.label}
        </button>
      ))}

      <select
        value={userType}
        onChange={(e) => dispatch(setUserType(e.target.value as "all" | "free" | "premium" | "enterprise"))}
        className="ml-auto border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="all">All Users</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="enterprise">Enterprise</option>
      </select>
    </div>
  );
}
