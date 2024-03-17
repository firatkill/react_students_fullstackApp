import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import StudentDetailsForm from "./StudentDetailsForm";
import {
  deleteStudent,
  getAllStudents,
  getStudentsLectures,
  studentActions,
  updateStudent,
} from "../../redux/studentSlice";
import { getAllLectures } from "../../redux/lectureSlice";

function StudentDetails(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const data = useSelector((state) => state.student);
  const student = useSelector((state) => state.student.selectedStudent);
  const lectures = useSelector((state) => state.lectures.lectures);
  const studentsLectures = useSelector(
    (state) => state.student.studentsLectures
  );
  const changeHandler = (e) => {
    switch (e.target.id) {
      case "StudentNumberInput":
        dispatch(
          studentActions.updateStudent({
            ...student,
            studentNumber: e.target.value,
          })
        );
        break;
      case "StudentFirstNameInput":
        dispatch(
          studentActions.updateStudent({
            ...student,
            firstName: e.target.value,
          })
        );
        break;
      case "StudentLastNameInput":
        dispatch(
          studentActions.updateStudent({
            ...student,
            lastName: e.target.value,
          })
        );
        break;
      case "StudentEmailInput":
        dispatch(
          studentActions.updateStudent({
            ...student,
            email: e.target.value,
          })
        );
        break;
      default:
        break;
    }
  };

  const deleteHandler = async (e) => {
    e.preventDefault();

    if (window.confirm("Are you sure?")) {
      await dispatch(deleteStudent(student));
      navigate("/students");
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    await dispatch(updateStudent(student, studentsLectures));
    navigate("/students");
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllStudents());
      await dispatch(getAllLectures());

      await dispatch(
        studentActions.selectStudent(Number.parseInt(params.studentId))
      );
      await dispatch(getStudentsLectures(Number.parseInt(params.studentId)));
    };
    fetchData();

    return () => {};
  }, [dispatch, params.studentId]);

  return (
    <>
      {data.pending && "pending"}
      {data.error !== "" && (
        <div class="alert alert-danger w-100 text-center" role="alert">
          {data.error.message}
        </div>
      )}
      {studentsLectures && student && (
        <StudentDetailsForm
          lectures={lectures}
          studentInfo={student}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          deleteHandler={deleteHandler}
          studentsLectures={studentsLectures}
        />
      )}
    </>
  );
}

export default StudentDetails;
