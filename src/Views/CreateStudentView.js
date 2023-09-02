import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postStudent } from "../API/studentRequests";
function CreateStudentView(props) {
  const student = {
    studentNumber: 0,
    firstName: "",
    lastName: "",
    email: "",
  };
  const [studentInfo, setStudentInfo] = useState(student);

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "StudentNumberInput":
        setStudentInfo({ ...studentInfo, studentNumber: e.target.value });
        break;
      case "StudentFirstNameInput":
        setStudentInfo({ ...studentInfo, firstName: e.target.value });
        break;
      case "StudentLastNameInput":
        setStudentInfo({ ...studentInfo, lastName: e.target.value });
        break;
      case "StudentEmailInput":
        setStudentInfo({
          ...studentInfo,
          email: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await postStudent({
      studentNumber: 156,
      firstName: "somename",
      lastName: "someLastName",
      email: "someEmail@gmail.com",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label" htmlFor="StudentNumberInput">
          Student Number
        </label>
        <input
          value={studentInfo.studentNumber}
          onChange={changeHandler}
          className="form-control"
          id="StudentNumberInput"
          type="number"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="StudentFirstNameInput">
          First Name
        </label>
        <input
          value={studentInfo.firstName}
          onChange={changeHandler}
          className="form-control"
          id="StudentFirstNameInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="StudentLastNameInput">
          Last Name
        </label>
        <input
          value={studentInfo.lastName}
          onChange={changeHandler}
          className="form-control"
          id="StudentLastNameInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="StudentEmailInput">
          Last Name
        </label>
        <input
          value={studentInfo.email}
          onChange={changeHandler}
          className="form-control"
          id="StudentEmailInput"
          type="text"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 ">
        <Link className="btn btn-outline-secondary" to="/students">
          Cancel
        </Link>
        <button type="submit" className="btn btn-outline-success">
          Update
        </button>
      </div>
    </form>
  );
}

export default CreateStudentView;
