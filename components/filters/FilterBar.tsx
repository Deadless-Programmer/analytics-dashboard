"use client";

import { useDispatch, useSelector } from "react-redux";
import { setFilter, setUserType } from "@/redux/features/dashboardSlice";
import { RootState } from "@/redux/store";

const filters = [
  { label: "Last 7 Days", value: "7d" },
  { label: "Last 30 Days", value: "30d" },
  { label: "Last 12 Months", value: "12m" },
];

export default function FilterBar() {
  const dispatch = useDispatch();
  const { filter, userType } = useSelector(
    (state: RootState) => state.dashboard
  );

  return (
    <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-xl shadow">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => dispatch(setFilter(f.value))}
          className={`px-4 py-2 rounded-lg text-sm border transition ${
            filter === f.value
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {f.label}
        </button>
      ))}

      <select
        value={userType}
        onChange={(e) => dispatch(setUserType(e.target.value))}
        className="ml-auto border rounded-lg px-3 py-2 text-sm"
      >
        <option value="all">All Users</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="enterprise">Enterprise</option>
      </select>
    </div>
  );
}