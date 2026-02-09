import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/uiSlice";
import dashboardReducer from "./features/dashboardSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    dashboard: dashboardReducer,
  },
});

// TypeScript-এর জন্য
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;