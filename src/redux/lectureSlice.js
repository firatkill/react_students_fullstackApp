import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import alertify from "alertifyjs";
const apiRoute = "http://localhost:18181/api";

const initialState = {
  lectures: [],
  pending: false,
  error: "",
  selectedLecture: null,
};

export const postLecture = createAsyncThunk("postLecture", async (lecture) => {
  let lectureResponse = await fetch(apiRoute + "/lectures", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: lecture.name,
      classroom: lecture.classroom,
      studentCapacity: lecture.studentCapacity,
    }),
  });
  lectureResponse = await lectureResponse.json();
  if (lecture.teacher.id !== null) {
    let teacherResponse = await fetch(
      apiRoute +
        "/lectures/" +
        Number.parseInt(lectureResponse.id) +
        "/appendTeacher/" +
        Number.parseInt(lecture.teacher.id),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    teacherResponse = await teacherResponse.json();
    return teacherResponse;
  }

  return lectureResponse;
});

export const getAllLectures = createAsyncThunk("getAllLectures", async () => {
  let response = await fetch(apiRoute + "/lectures");

  response = await response.json();

  return response;
});

export const updateSelectedLecture = createAsyncThunk(
  "updateSelectedLecture",
  async (lecture) => {
    let lectureResponse = await fetch(apiRoute + "/lectures/" + lecture.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lecture.name,
        classroom: lecture.classroom,
        studentCapacity: lecture.studentCapacity,
      }),
    });
    lectureResponse = await lectureResponse.json();

    if (lecture.teacher) {
      let teacherResponse = await fetch(
        apiRoute +
          "/lectures/" +
          Number.parseInt(lectureResponse.id) +
          "/appendTeacher/" +
          Number.parseInt(lecture.teacher.id),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      teacherResponse = await teacherResponse.json();
      return teacherResponse;
    }

    return lectureResponse;
  }
);

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    selectLecture(state, action) {
      state.selectedLecture = state.lectures.find(
        (lecture) => lecture.id === action.payload
      );
    },
    updateLecture(state, action) {
      state.selectedLecture = action.payload;
    },
    clearSelectedLecture(state) {
      state.selectedLecture = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllLectures.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(getAllLectures.fulfilled, (state, action) => {
      state.lectures = action.payload;
      state.pending = false;
      state.error = "";
    });
    builder.addCase(getAllLectures.rejected, (state, action) => {
      state.data = [];
      state.pending = false;
      state.error = action.error;
      alertify.error(action.error.message);
    });
    builder.addCase(updateSelectedLecture.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(updateSelectedLecture.fulfilled, (state, action) => {
      state.pending = false;
      state.error = "";
      alertify.success("Lecture updated.");
    });
    builder.addCase(updateSelectedLecture.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      alertify.error(action.error.message);
    });
    builder.addCase(postLecture.pending, (state, action) => {
      state.pending = true;
      state.error = "";
    });
    builder.addCase(postLecture.fulfilled, (state, action) => {
      state.pending = false;
      state.error = "";
      alertify.success("Lecture Successfully added to DB.");
    });
    builder.addCase(postLecture.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      alertify.error(action.error.message);
    });
  },
});

export default lectureSlice;
export const lectureActions = lectureSlice.actions;
