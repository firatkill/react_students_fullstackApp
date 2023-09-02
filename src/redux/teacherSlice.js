import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiRoute = "http://localhost:18181/api";

const initialState = {
  teachers: [],
  pending: false,
  error: "",
  selectedTeacher: null,
};

export const getAllTeachers = createAsyncThunk("getAllTeachers", async () => {
  let response = await fetch(apiRoute + "/teachers");
  response = await response.json();
  return response;
});

export const updateTeacher = createAsyncThunk(
  "updateTeacher",
  async (id, teacher) => {
    let response = await fetch(apiRoute + "/teachers/" + id, {
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
    });
    builder.addCase(getAllTeachers.rejected, (state, action) => {
      state.data = [];
      state.pending = false;
      state.error = "";
    });
    builder.addCase(updateTeacher.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(updateTeacher.fulfilled, (state, action) => {
      state.pending = false;
    });
    builder.addCase(updateTeacher.rejected, (state, action) => {
      state.pending = false;

      state.error = action.error;
    });
  },
});

export default teacherSlice;
export const teacherActions = teacherSlice.actions;
