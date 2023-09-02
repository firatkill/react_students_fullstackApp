import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data/DUMMY_DATA";

const dataSlice = createSlice({
  name: "data",
  initialState: { data: data },
  reducers: {},
});

export default dataSlice;
export const dataActions = dataSlice.actions;
