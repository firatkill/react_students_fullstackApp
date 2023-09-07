import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { getAllTeachers } from "../redux/teacherSlice";
import { uiActions } from "../redux/uiSlice";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { postLecture } from "../redux/lectureSlice";

function CreateLectureView() {
  const teachers = useSelector((state) => state.teachers.teachers);
  const lecture = { name: "", classroom: "", studentCapacity: 0, teacher: {} };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lectureInfo, setLectureInfo] = useState(lecture);

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "LectureNameInput":
        setLectureInfo({ ...lectureInfo, name: e.target.value });
        break;
      case "LectureClassroomInput":
        setLectureInfo({ ...lectureInfo, classroom: e.target.value });
        break;
      case "LectureStudentCapacityInput":
        setLectureInfo({ ...lectureInfo, studentCapacity: e.target.value });
        break;
      case "LectureTeacherInput":
        setLectureInfo({
          ...lectureInfo,
          teacher: teachers.find(
            (teacher) => teacher.id === Number.parseInt(e.target.value)
          ),
        });
        break;
      default:
        break;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(postLecture(lectureInfo));
  };
  useEffect(() => {
    dispatch(getAllTeachers());
    return () => {};
  }, [dispatch]);
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label" htmlFor="LectureNameInput">
          Lecture Name
        </label>
        <input
          value={lectureInfo.name}
          onChange={changeHandler}
          className="form-control"
          id="LectureNameInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="LectureClassroomInput">
          Classroom
        </label>
        <input
          value={lectureInfo.classroom}
          onChange={changeHandler}
          className="form-control"
          id="LectureClassroomInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="LectureStudentCapacityInput">
          Student Capacity
        </label>
        <input
          value={lectureInfo.studentCapacity}
          onChange={changeHandler}
          className="form-control"
          id="LectureStudentCapacityInput"
          type="number"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="LectureTeacherInput">
          Teacher
        </label>
        <select
          onChange={changeHandler}
          className="form-select"
          id="LectureTeacherInput"
        >
          <option defaultValue={"Please select a Teacher"}>
            Please select a Teacher
          </option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.firstName + " " + teacher.lastName}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 ">
        <Link className="btn btn-outline-secondary" to="/lectures">
          Cancel
        </Link>
        <button type="submit" className="btn btn-outline-success">
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateLectureView;
