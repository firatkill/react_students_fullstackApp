import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postTeacher } from "../API/teacherRequests";
function CreateTeacherView(props) {
  const teacher = { firstName: "", lastName: "", email: "" };
  const [teacherInfo, setTeacherInfo] = useState(teacher);

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "TeacherFirstNameInput":
        setTeacherInfo({ ...teacherInfo, firstName: e.target.value });
        break;
      case "TeacherLastNameInput":
        setTeacherInfo({ ...teacherInfo, lastName: e.target.value });
        break;
      case "TeacherEmailInput":
        setTeacherInfo({
          ...teacherInfo,
          email: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await postTeacher({
      firstName: "somename",
      lastName: "someLastName",
      email: "someEmail@gmail.com",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label" htmlFor="TeacherFirstNameInput">
          First Name
        </label>
        <input
          value={teacherInfo.firstName}
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
          value={teacherInfo.lastName}
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
          value={teacherInfo.email}
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
  );
}

export default CreateTeacherView;
