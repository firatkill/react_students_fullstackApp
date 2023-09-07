import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Students.module.css";
import { Link } from "react-router-dom";

import { getAllStudents } from "../../redux/studentSlice";
function Students() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between ">
        <h1>Students</h1>
        <Link
          className={styles.createButton + " btn btn-outline-success"}
          to="/students/create"
        >
          Create Student
        </Link>
      </div>
      <hr />{" "}
      <ul className="container  d-flex justify-content-between align-items-center list-group ">
        {data.pending && "Pending..."}
        {data.error !== "" && (
          <div class="alert alert-danger w-100 text-center" role="alert">
            {data.error.message}
          </div>
        )}
        {data.students.length > 0 &&
          data.students.map((student) => (
            <li
              key={student.id}
              className={
                "list-group-item w-100 mb-2 row d-flex " + styles.listItem
              }
            >
              <div className="d-flex col-2 flex-column align-items-start">
                <h6 className="m-0 border-bottom">Student Number</h6>
                <span>{student.studentNumber}</span>
              </div>
              <div className="d-flex  col-3 flex-column align-items-start">
                <h6 className="m-0 border-bottom">First Name</h6>
                <span>{student.firstName}</span>
              </div>
              <div className="d-flex col-3 flex-column align-items-start">
                <h6 className="m-0 border-bottom">Last Name</h6>
                <span>{student.lastName}</span>
              </div>
              <div className="d-flex  col-3 flex-column align-items-start">
                <h6 className="m-0 border-bottom">Email</h6>
                <span>{student.email}</span>
              </div>

              <Link
                className=" d-flex align-items-center justify-content-center col-1 rounded fw-bold btn btn-outline-secondary "
                to={"/students/view/" + student.id}
              >
                View
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Students;
