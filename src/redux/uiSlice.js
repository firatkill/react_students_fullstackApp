import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isToastOpen: "false",
    toastInfo: {
      type: "alert",
      message: "Something went wrong.",
    },
  },
  reducers: {
    triggerToast(state, action) {
      state.toastInfo = action.payload;
      state.isToastOpen = "true";
    },
    resetToast(state) {
      state.toastInfo = {
        type: "alert",
        message: "Something went wrong.",
      };
      state.isToastOpen = "false";
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
