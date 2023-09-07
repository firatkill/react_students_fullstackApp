import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Teachers.module.css";
import { Link } from "react-router-dom";
import { getAllTeachers } from "../../redux/teacherSlice";
function Teachers() {
  const teachers = useSelector((state) => state.data.data.teachers);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between ">
        <h1>Teachers</h1>
        <Link
          className={styles.createButton + " btn btn-outline-success"}
          to="/teachers/create"
        >
          Create Teacher
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
        {data.teachers.length > 0 &&
          data.teachers.map((teacher) => (
            <li
              key={teacher.id}
              className={
                "list-group-item w-100 mb-2 row d-flex " + styles.listItem
              }
            >
              <div className="d-flex  col-2 flex-column align-items-start">
                <h6 className="m-0 border-bottom">First Name</h6>
                <span>{teacher.firstName}</span>
              </div>
              <div className="d-flex col-2 flex-column align-items-start">
                <h6 className="m-0 border-bottom">Last Name</h6>
                <span>{teacher.lastName}</span>
              </div>
              <div
                style={{ overflow: "hidden" }}
                className="d-flex  col-6 flex-column align-items-start"
              >
                <h6 className="m-0 border-bottom">Email</h6>
                <span>{teacher.email}</span>
              </div>

              <Link
                className="col-2 d-flex align-items-center justify-content-center col-1 rounded fw-bold btn btn-outline-secondary "
                to={"/teachers/view/" + teacher.id}
              >
                View
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Teachers;
