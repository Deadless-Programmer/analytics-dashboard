import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "7d",
  userType: "all",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export const { setFilter, setUserType } = dashboardSlice.actions;
export default dashboardSlice.reducer;