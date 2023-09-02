import React from "react";

import { data } from "../../Data/DUMMY_DATA";
import styles from "./Dashboard.module.css";
function StudentList(props) {
  const students = props.students;
  return (
    <ul className="container  d-flex justify-content-between align-items-center list-group ">
      {students.map((student) => (
        <li
          className={"list-group-item w-100 mb-2 row d-flex " + styles.listItem}
        >
          <div className="d-flex  col-3 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Student Number</h6>
            <span>{student.studentNumber}</span>
          </div>
          <div className="d-flex col-2 flex-column align-items-start">
            <h6 className="m-0 border-bottom">First Name</h6>
            <span>{student.firstName}</span>
          </div>
          <div className="d-flex  col-2 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Last Name</h6>
            <span>{student.lastName}</span>
          </div>
          <div className="d-flex col-5 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Email </h6>
            <span>{student.email}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
