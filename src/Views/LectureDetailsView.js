import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
function LectureDetailsView(props) {
  const teachers = useSelector((state) => state.data.data.teachers);
  const lectures = useSelector((state) => state.data.data.lectures);
  const params = useParams();
  const lecture = lectures.find(
    (lecture) => lecture.id === Number.parseInt(params.lectureId)
  );
  const [lectureInfo, setLectureInfo] = useState(lecture);

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "LectureNameInput":
        setLectureInfo({ ...lectureInfo, name: e.target.value });
        break;
      case "LectureClassroomInput":
        setLectureInfo({ ...lectureInfo, classroom: e.target.value });
        break;
      case "LectureStudentCapacityInput":
        setLectureInfo({ ...lectureInfo, studentCapacity: e.target.value });
        break;
      case "LectureTeacherInput":
        setLectureInfo({
          ...lectureInfo,
          teacher: teachers.find(
            (teacher) => teacher.id === Number.parseInt(e.target.value)
          ),
        });
        break;
      default:
        break;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(lectureInfo);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label" for="LectureNameInput">
          Lecture Name
        </label>
        <input
          value={lectureInfo.name}
          onChange={changeHandler}
          className="form-control"
          id="LectureNameInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="LectureClassroomInput">
          Classroom
        </label>
        <input
          value={lectureInfo.classroom}
          onChange={changeHandler}
          className="form-control"
          id="LectureClassroomInput"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="LectureStudentCapacityInput">
          Student Capacity
        </label>
        <input
          value={lectureInfo.studentCapacity}
          onChange={changeHandler}
          className="form-control"
          id="LectureStudentCapacityInput"
          type="number"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" for="LectureTeacherInput">
          Teacher
        </label>
        <select
          onChange={changeHandler}
          class="form-select"
          id="LectureTeacherInput"
        >
          <option disabled selected={lectureInfo.teacher == null}>
            Select a teacher
          </option>
          {teachers.map((teacher) => (
            <option
              selected={
                lectureInfo.teacher != null &&
                teacher.id === lectureInfo.teacher.id
              }
              value={teacher.id}
            >
              {teacher.firstName + " " + teacher.lastName}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 ">
        <Link className="btn btn-outline-secondary" to="/lectures">
          Cancel
        </Link>
        <button type="submit" className="btn btn-outline-success">
          Update
        </button>
      </div>
    </form>
  );
}

export default LectureDetailsView;
