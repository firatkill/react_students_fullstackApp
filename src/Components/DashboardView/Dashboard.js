import { useEffect } from "react";
import LectureList from "./LectureList";
import TeacherList from "./TeacherList";
import StudentList from "./StudentList";
import { Link } from "react-router-dom";
import DashboardCards from "./DashboardCards";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/teacherSlice";
import { getAllLectures } from "../../redux/lectureSlice";
import { getAllStudents } from "../../redux/studentSlice";
import styles from "./Dashboard.module.css";
function Dashboard() {
  const data = {
    students: useSelector((state) => state.student.students),
    lectures: useSelector((state) => state.lectures.lectures),
    teachers: useSelector((state) => state.teachers.teachers),
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllTeachers());
      await dispatch(getAllLectures());
      await dispatch(getAllStudents());
    };
    fetchData();
    return () => {};
  }, [dispatch]);
  return (
    <div>
      <DashboardCards data={data} />
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h3 className={styles.listHeader}>Lectures</h3>
        <Link
          type="button"
          className={`btn btn-outline-secondary ${styles.viewButton}`}
          to="/lectures"
        >
          View All
        </Link>
      </div>
      <hr />
      <LectureList lectures={data.lectures.slice(0, 5)} />
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h3 className={styles.listHeader}>Teachers</h3>
        <Link
          type="button"
          className={`btn btn-outline-secondary ${styles.viewButton}`}
          to="/teachers"
        >
          View All
        </Link>
      </div>

      <hr />
      <TeacherList teachers={data.teachers.slice(0, 5)} />
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h3 className={styles.listHeader}> Students</h3>
        <Link
          type="button"
          className={`btn btn-outline-secondary ${styles.viewButton}`}
          to="/students"
        >
          View All
        </Link>
      </div>
      <hr />
      <StudentList students={data.students.slice(0, 5)} />
    </div>
  );
}

export default Dashboard;
