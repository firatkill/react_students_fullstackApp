import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import StudentAppendLectureList from "./StudentAppendLectureList";
function StudentDetailsForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="mb-3">
        <label className="form-label" for="StudentNumberInput">
          Student Number
        </label>
        <input
          value={props.studentInfo.studentNumber}
          onChange={props.changeHandler}
          className="form-control"
          id="StudentNumberInput"
          type="number"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="StudentFirstNameInput">
          First Name
        </label>
        <input
          value={props.studentInfo.firstName}
          onChange={props.changeHandler}
          className="form-control"
          id="StudentFirstNameInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="StudentLastNameInput">
          Last Name
        </label>
        <input
          value={props.studentInfo.lastName}
          onChange={props.changeHandler}
          className="form-control"
          id="StudentLastNameInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="StudentEmailInput">
          Last Name
        </label>
        <input
          value={props.studentInfo.email}
          onChange={props.changeHandler}
          className="form-control"
          id="StudentEmailInput"
          type="text"
        />
      </div>
      <StudentAppendLectureList />
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

export default StudentDetailsForm;
