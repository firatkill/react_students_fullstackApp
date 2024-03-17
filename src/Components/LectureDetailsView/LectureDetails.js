import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteSelectedLecture,
  getAllLectures,
  lectureActions,
  updateSelectedLecture,
} from "../../redux/lectureSlice";
import { getAllTeachers } from "../../redux/teacherSlice";
import LectureDetailsForm from "./LectureDetailsForm";
function LectureDetails(props) {
  const data = useSelector((state) => state.lectures);
  const teachers = useSelector((state) => state.teachers.teachers);
  const lecture = useSelector((state) => state.lectures.selectedLecture);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    switch (e.target.id) {
      case "LectureNameInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            name: e.target.value,
          })
        );
        break;
      case "LectureClassroomInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            classroom: e.target.value,
          })
        );
        break;
      case "LectureStudentCapacityInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            studentCapacity: e.target.value,
          })
        );
        break;
      case "LectureTeacherInput":
        dispatch(
          lectureActions.updateLecture({
            ...lecture,
            teacher:
              e.target.value !== null &&
              teachers.find(
                (teacher) => teacher.id === Number.parseInt(e.target.value)
              ),
          })
        );
        break;
      default:
        break;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateSelectedLecture(lecture));
    navigate("/lectures");
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteSelectedLecture(lecture));
    navigate("/lectures");
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllTeachers());
      await dispatch(getAllLectures());
      await dispatch(
        lectureActions.selectLecture(Number.parseInt(params.lectureId))
      );
    };
    fetchData();
    return () => {};
  }, [dispatch, params.lectureId]);

  return (
    <>
      {data.pending && "pending"}
      {data.error !== "" && (
        <div class="alert alert-danger w-100 text-center" role="alert">
          {data.error.message}
        </div>
      )}
      {lecture && (
        <LectureDetailsForm
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          deleteHandler={deleteHandler}
          lecture={lecture}
          teachers={teachers}
        />
      )}
    </>
  );
}

export default LectureDetails;
