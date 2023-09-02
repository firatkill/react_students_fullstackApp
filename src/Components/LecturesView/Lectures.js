import React from "react";
import { useSelector } from "react-redux";
import styles from "./Lectures.module.css";
import { Link } from "react-router-dom";
function Lectures() {
  const lectures = useSelector((state) => state.data.data.lectures);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between ">
        <h1>Lectures</h1>
        <Link
          className={styles.createButton + " btn btn-outline-success"}
          to="/lectures/create"
        >
          Create Lecture
        </Link>
      </div>
      <hr />{" "}
      <ul className="container  d-flex justify-content-between align-items-center list-group ">
        {lectures.map((lecture) => (
          <li
            className={
              "list-group-item w-100 mb-2 row d-flex " + styles.listItem
            }
          >
            <div
              className={
                styles.lectureActiveBox +
                `${lecture.teacher === null ? " bg-danger" : " bg-success"}`
              }
            ></div>
            <div className="d-flex col-2 flex-column align-items-start">
              <h6 className="m-0 border-bottom">Name</h6>
              <span>{lecture.name}</span>
            </div>
            <div className="d-flex  col-3 flex-column align-items-start">
              <h6 className="m-0 border-bottom">Classroom</h6>
              <span>{lecture.classroom}</span>
            </div>
            <div className="d-flex col-3 flex-column align-items-start">
              <h6 className="m-0 border-bottom">Student Capacity</h6>
              <span>{lecture.studentCapacity}</span>
            </div>
            <div className="d-flex  col-3 flex-column align-items-start">
              <h6 className="m-0 border-bottom">Teacher Name</h6>
              <span>
                {lecture.teacher === null
                  ? "-"
                  : lecture.teacher.firstName + " " + lecture.teacher.lastName}
              </span>
            </div>

            <Link
              className=" d-flex align-items-center justify-content-center col-1 rounded fw-bold btn btn-outline-secondary "
              to={"/lectures/view/" + lecture.id}
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lectures;
