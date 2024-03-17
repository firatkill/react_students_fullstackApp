import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Lectures.module.css";
import { Link } from "react-router-dom";
import { getAllLectures } from "../../redux/lectureSlice";
function Lectures() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lectures);

  useEffect(() => {
    dispatch(getAllLectures());
  }, [dispatch]);

  return (
    <>
      <div
        className={`${styles.lecturesContainer} d-flex align-items-center justify-content-between `}
      >
        <h1 className={styles.listHeader}>Lectures</h1>
        <Link
          className={styles.createButton + " btn btn-outline-success"}
          to="/lectures/create"
        >
          Create Lecture
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
        {data.lectures.length > 0 &&
          data.lectures.map((lecture) => (
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
                    : lecture.teacher.firstName +
                      " " +
                      lecture.teacher.lastName}
                </span>
              </div>

              <Link
                className={`${styles.viewButton} d-flex align-items-center justify-content-center col-1 rounded fw-bold btn btn-outline-secondary `}
                to={"/lectures/view/" + lecture.id}
              >
                View
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Lectures;
