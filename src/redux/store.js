import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import dataSlice from "./dataSlice";
import teacherSlice from "./teacherSlice";
import lectureSlice from "./lectureSlice";
import studentSlice from "./studentSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
    teachers: teacherSlice.reducer,
    lectures: lectureSlice.reducer,
    student: studentSlice.reducer,
  },
});
export default store;
