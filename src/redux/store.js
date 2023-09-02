import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import dataSlice from "./dataSlice";
import teacherSlice from "./teacherSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
    teachers: teacherSlice.reducer,
  },
});
export default store;
