import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteTeacher,
  getAllTeachers,
  teacherActions,
  updateTeacher,
} from "../../redux/teacherSlice";
import TeacherDetailsForm from "./TeacherDetailsForm";

function TeacherDetails(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const data = useSelector((state) => state.teachers);
  const teacher = useSelector((state) => state.teachers.selectedTeacher);

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "TeacherFirstNameInput":
        dispatch(
          teacherActions.updateTeacher({
            ...teacher,
            firstName: e.target.value,
          })
        );
        break;
      case "TeacherLastNameInput":
        dispatch(
          teacherActions.updateTeacher({
            ...teacher,
            lastName: e.target.value,
          })
        );
        break;
      case "TeacherEmailInput":
        dispatch(
          teacherActions.updateTeacher({
            ...teacher,
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
    if (
      window.confirm(
        "are you sure? This teacher's lectures will have null teacher."
      )
    ) {
      dispatch(deleteTeacher(teacher));
      navigate("/teachers");
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(updateTeacher(teacher));
    navigate("/teachers");
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllTeachers());
      await dispatch(
        teacherActions.selectTeacher(Number.parseInt(params.teacherId))
      );
    };
    fetchData();
    return () => {};
  }, [dispatch, params.teacherId]);

  return (
    <>
      {data.pending && "pending"}
      {data.error !== "" && (
        <div class="alert alert-danger w-100 text-center" role="alert">
          {data.error.message}
        </div>
      )}
      {teacher && (
        <TeacherDetailsForm
          teacher={teacher}
          submitHandler={submitHandler}
          deleteHandler={deleteHandler}
          changeHandler={changeHandler}
        />
      )}
    </>
  );
}

export default TeacherDetails;
