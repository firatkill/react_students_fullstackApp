import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import StudentAppendLectureList from "./StudentAppendLectureList";
import { useDispatch } from "react-redux";
import { studentActions } from "../../redux/studentSlice";
function StudentDetailsForm(props) {
  const dispatch = useDispatch();
  const [selectedLectures, setSelectedLectures] = useState([]);

  useEffect(() => {
    const tempArr = [];
    props.lectures.forEach((elem) => {
      if (selectedLectures.indexOf(elem.id) > -1) {
        tempArr.push(elem);
      }
    });
    dispatch(studentActions.setStudentsLectures(tempArr));
  }, [selectedLectures, dispatch, props.lectures]);

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
      <StudentAppendLectureList
        setSelectedLectures={setSelectedLectures}
        selectedLectures={selectedLectures}
        studentsLectures={props.studentsLectures}
        lectures={props.lectures}
      />
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
