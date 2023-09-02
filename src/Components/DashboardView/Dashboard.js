import React from "react";
import LectureList from "./LectureList";
import TeacherList from "./TeacherList";
import StudentList from "./StudentList";
import { Link } from "react-router-dom";
import DashboardCards from "./DashboardCards";

import { useSelector } from "react-redux";
function Dashboard() {
  const data = useSelector((state) => state.data.data);
  return (
    <div>
      <DashboardCards data={data} />
      <div className="d-flex justify-content-between align-items-center">
        <h4>Lectures</h4>
        <Link
          type="button"
          className="btn btn-outline-secondary "
          to="/lectures"
        >
          View All
        </Link>
      </div>
      <hr />
      <LectureList lectures={data.lectures} />
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h4>Teachers</h4>
        <Link
          type="button"
          className="btn btn-outline-secondary "
          to="/teachers"
        >
          View All
        </Link>
      </div>

      <hr />
      <TeacherList teachers={data.teachers} />
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h4>Students</h4>
        <Link
          type="button"
          className="btn btn-outline-secondary "
          to="/students"
        >
          View All
        </Link>
      </div>
      <hr />
      <StudentList students={data.students} />
    </div>
  );
}

export default Dashboard;
