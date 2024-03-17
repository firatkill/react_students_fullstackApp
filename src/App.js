import { Navigate, Route, Routes } from "react-router-dom";
import DashboardView from "./Views/DashboardView";
import StudentsView from "./Views/StudentsView";
import LecturesView from "./Views/LecturesView.js";
import TeachersView from "./Views/TeachersView";
import Layout from "./Components/Global/Layout/Layout";
import StudentDetailsView from "./Views/StudentDetailsView";
import LectureDetailsView from "./Views/LectureDetailsView";
import CreateStudentView from "./Views/CreateStudentView";
import CreateLectureView from "./Views/CreateLectureView";
import TeacherDetailsView from "./Views/TeacherDetailsView";
import CreateTeacherView from "./Views/CreateTeacherView";

import Spinner from "./Components/Global/UI/Spinner";

function App() {
  return (
    <div className="App">
      <Spinner />
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/students" element={<StudentsView />} />
          <Route
            path="/students/view/:studentId"
            element={<StudentDetailsView />}
          />
          <Route path="/students/create" element={<CreateStudentView />} />
          <Route path="/lectures" element={<LecturesView />} />
          <Route
            path="/lectures/view/:lectureId"
            element={<LectureDetailsView />}
          />
          <Route path="/lectures/create" element={<CreateLectureView />} />
          <Route path="/teachers" element={<TeachersView />} />
          <Route
            path="/teachers/view/:teacherId"
            element={<TeacherDetailsView />}
          />
          <Route path="/teachers/create" element={<CreateTeacherView />} />
          <Route path="/*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
