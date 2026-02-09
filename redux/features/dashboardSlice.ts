// redux/features/dashboardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  filter: "7d" | "30d" | "12m";
  userType: "all" | "free" | "premium" | "enterprise";
}

const initialState: DashboardState = {
  filter: "7d",
  userType: "all",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<DashboardState["filter"]>) {
      state.filter = action.payload;
    },
    setUserType(state, action: PayloadAction<DashboardState["userType"]>) {
      state.userType = action.payload;
    },
  },
});

export const { setFilter, setUserType } = dashboardSlice.actions;
export default dashboardSlice.reducer;