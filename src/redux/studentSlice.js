import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import alertify from "alertifyjs";
const apiRoute = "http://localhost:18181/api";

const initialState = {
  students: [],
  pending: false,
  error: "",
  selectedStudent: null,
  studentsLectures: null,
};
export const postStudent = createAsyncThunk("postStudent", async (student) => {
  let response = await fetch(apiRoute + "/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      studentNumber: student.studentNumber,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
    }),
  });
  response = await response.json();
  return response;
});

export const getStudentsLectures = createAsyncThunk(
  "getStudentsLectures",
  async (id) => {
    let response = await fetch(apiRoute + "/students/" + id + "/lectures");

    response = await response.json();
    return response;
  }
);

export const getAllStudents = createAsyncThunk("getAllStudents", async () => {
  let response = await fetch(apiRoute + "/students");

  response = await response.json();
  return response;
});

export const updateStudent = createAsyncThunk(
  "updateStudent",
  async (student, lectures) => {
    let StudentResponse = await fetch(apiRoute + "/students/" + student.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: student.firstName,
        lastName: student.lastName,
        studentNumber: student.studentNumber,
        email: student.email,
      }),
    });
    StudentResponse = await response.json();

    return StudentResponse;
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    selectStudent(state, action) {
      state.selectedStudent = state.students.find(
        (student) => student.id === action.payload
      );
    },
    updateStudent(state, action) {
      state.selectedStudent = action.payload;
    },
    clearSelectedStudent(state) {
      state.selectedStudent = null;
    },
    setStudentsLectures(state, action) {
      state.studentsLectures = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.students = action.payload;
      state.pending = false;
    });
    builder.addCase(getAllStudents.rejected, (state, action) => {
      state.data = [];
      state.pending = false;
      state.error = action.error;
      alertify.error(action.error.message);
    });
    builder.addCase(updateStudent.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      state.pending = false;
      alertify.success("Student updated.");
    });
    builder.addCase(updateStudent.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      alertify.error(action.error.message);
    });
    builder.addCase(postStudent.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(postStudent.fulfilled, (state, action) => {
      state.pending = false;
      state.error = "";
      alertify.success("Successfully created student.");
    });
    builder.addCase(postStudent.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      alertify.error(action.error.message);
    });
    builder.addCase(getStudentsLectures.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(getStudentsLectures.fulfilled, (state, action) => {
      state.pending = false;
      state.error = "";
      state.studentsLectures = action.payload;
    });
    builder.addCase(getStudentsLectures.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.studentsLectures = [];
      alertify.error(action.error.message);
    });
  },
});

export default studentSlice;
export const studentActions = studentSlice.actions;
