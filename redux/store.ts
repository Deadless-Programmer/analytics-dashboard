import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboardSlice";
import uiReducer from "./features/uiSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;