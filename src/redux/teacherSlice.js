import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import alertify from "alertifyjs";
const apiRoute = "http://localhost:18181/api";

const initialState = {
  teachers: [],
  pending: false,
  error: "",
  selectedTeacher: null,
};

export const postTeacher = createAsyncThunk("postTeacher", async (teacher) => {
  let response = await fetch(apiRoute + "/teachers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      email: teacher.email,
    }),
  });
  response = await response.json();
  return response;
});

export const getAllTeachers = createAsyncThunk("getAllTeachers", async () => {
  let response = await fetch(apiRoute + "/teachers");
  if (response) {
    response = await response.json();
    return response;
  } else {
    console.log(response);
  }
});

export const updateTeacher = createAsyncThunk(
  "updateTeacher",
  async (teacher) => {
    let response = await fetch(apiRoute + "/teachers/" + teacher.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        email: teacher.email,
      }),
    });
    response = await response.json();
    console.log(response);

    return response;
  }
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    selectTeacher(state, action) {
      state.selectedTeacher = state.teachers.find(
        (teacher) => teacher.id === action.payload
      );
    },
    updateTeacher(state, action) {
      state.selectedTeacher = action.payload;
    },
    clearSelectedTeacher(state) {
      state.selectedTeacher = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTeachers.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(getAllTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.pending = false;
      state.error = "";
    });
    builder.addCase(getAllTeachers.rejected, (state, action) => {
      state.data = [];
      state.pending = false;
      state.error = action.error;
      alertify.danger(action.error.message);
    });
    builder.addCase(updateTeacher.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(updateTeacher.fulfilled, (state, action) => {
      state.pending = false;
      state.error = "";
      alertify.success("Teacher updated.");
    });
    builder.addCase(updateTeacher.rejected, (state, action) => {
      state.pending = false;

      state.error = action.error;
      alertify.danger(action.error.message);
    });
    builder.addCase(postTeacher.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(postTeacher.fulfilled, (state, action) => {
      state.pending = false;
      state.error = "";
      alertify.success("Teacher Added to DB.");
    });
    builder.addCase(postTeacher.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      alertify.danger(action.error.message);
    });
  },
});

export default teacherSlice;
export const teacherActions = teacherSlice.actions;
