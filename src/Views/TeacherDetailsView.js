import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getAllTeachers,
  teacherActions,
  updateTeacher,
} from "../redux/teacherSlice";

function TeacherDetailsView(props) {
  const dispatch = useDispatch();

  const params = useParams();

  const data = useSelector((state) => state.teachers);
  const teacher = useSelector((state) => state.teachers.selectedTeacher);

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "TeacherFirstNameInput":
        dispatch(
          teacherActions.updateTeacher({
            ...teacher,
            firstName: e.target.value,
          })
        );
        break;
      case "TeacherLastNameInput":
        dispatch(
          teacherActions.updateTeacher({
            ...teacher,
            lastName: e.target.value,
          })
        );
        break;
      case "TeacherEmailInput":
        dispatch(
          teacherActions.updateTeacher({
            ...teacher,
            email: e.target.value,
          })
        );
        break;
      default:
        break;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(teacher);
    let response = await fetch(
      "http://localhost:18181/api/teachers/" + params.teacherId,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: teacher.firstName,
          lastName: teacher.lastName,
          email: teacher.email,
        }),
      }
    );
    response = await response.json();
    console.log(response);

    return response;
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllTeachers());
      await dispatch(
        teacherActions.selectTeacher(Number.parseInt(params.teacherId))
      );
    };
    fetchData();
    return () => {};
  }, [dispatch, params.teacherId]);

  return (
    <>
      {data.pending && "pending"}
      {teacher && (
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label" htmlFor="TeacherFirstNameInput">
              First Name
            </label>
            <input
              value={teacher.firstName}
              onChange={changeHandler}
              className="form-control"
              id="TeacherFirstNameInput"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="TeacherLastNameInput">
              Last Name
            </label>
            <input
              value={teacher.lastName}
              onChange={changeHandler}
              className="form-control"
              id="TeacherLastNameInput"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="TeacherEmailInput">
              Last Name
            </label>
            <input
              value={teacher.email}
              onChange={changeHandler}
              className="form-control"
              id="TeacherEmailInput"
              type="text"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3 ">
            <Link className="btn btn-outline-secondary" to="/teachers">
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

export default TeacherDetailsView;
