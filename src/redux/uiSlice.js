import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isSidebarOpen: false, windowSize: 0 },
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    updateWindowSize(state, action) {
      state.windowSize = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
