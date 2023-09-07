import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getAllLectures,
  lectureActions,
  updateSelectedLecture,
} from "../redux/lectureSlice";
import { getAllTeachers } from "../redux/teacherSlice";
function LectureDetailsView(props) {
  const data = useSelector((state) => state.lectures);
  const teachers = useSelector((state) => state.teachers.teachers);
  const lecture = useSelector((state) => state.lectures.selectedLecture);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    switch (e.target.id) {
      case "LectureNameInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            name: e.target.value,
          })
        );
        break;
      case "LectureClassroomInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            classroom: e.target.value,
          })
        );
        break;
      case "LectureStudentCapacityInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            studentCapacity: e.target.value,
          })
        );
        break;
      case "LectureTeacherInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            teacher:
              e.target.value !== null &&
              teachers.find(
                (teacher) => teacher.id === Number.parseInt(e.target.value)
              ),
          })
        );
        break;
      default:
        break;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateSelectedLecture(lecture));
    navigate("/lectures");
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllTeachers());
      await dispatch(getAllLectures());
      await dispatch(
        lectureActions.selectLecture(Number.parseInt(params.lectureId))
      );
    };
    fetchData();
    return () => {};
  }, [dispatch, params.lectureId]);

  return (
    <>
      {data.pending && "pending"}
      {data.error !== "" && (
        <div class="alert alert-danger w-100 text-center" role="alert">
          {data.error.message}
        </div>
      )}
      {lecture && (
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label" for="LectureNameInput">
              Lecture Name
            </label>
            <input
              value={lecture.name}
              onChange={changeHandler}
              className="form-control"
              id="LectureNameInput"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="LectureClassroomInput">
              Classroom
            </label>
            <input
              value={lecture.classroom}
              onChange={changeHandler}
              className="form-control"
              id="LectureClassroomInput"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="LectureStudentCapacityInput">
              Student Capacity
            </label>
            <input
              value={lecture.studentCapacity}
              onChange={changeHandler}
              className="form-control"
              id="LectureStudentCapacityInput"
              type="number"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="LectureTeacherInput">
              Teacher
            </label>
            <select
              onChange={changeHandler}
              class="form-select"
              id="LectureTeacherInput"
            >
              <option value={null} selected={lecture.teacher == null}>
                Select a teacher
              </option>
              {teachers.map((teacher) => (
                <option
                  selected={
                    lecture.teacher != null && teacher.id === lecture.teacher.id
                  }
                  lecture
                  value={teacher.id}
                >
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
              Update
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default LectureDetailsView;
