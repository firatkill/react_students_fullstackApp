import { Link } from "react-router-dom";
import styles from "./LectureDetailsForm.module.css";
function LectureDetailsForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" for="LectureNameInput">
          Lecture Name
        </label>
        <input
          value={props.lecture.name}
          onChange={props.changeHandler}
          className="form-control"
          id="LectureNameInput"
          type="text"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" for="LectureClassroomInput">
          Classroom
        </label>
        <input
          value={props.lecture.classroom}
          onChange={props.changeHandler}
          className="form-control"
          id="LectureClassroomInput"
          type="text"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" for="LectureStudentCapacityInput">
          Student Capacity
        </label>
        <input
          value={props.lecture.studentCapacity}
          onChange={props.changeHandler}
          className="form-control"
          id="LectureStudentCapacityInput"
          type="number"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" for="LectureTeacherInput">
          Teacher
        </label>
        <select
          onChange={props.changeHandler}
          class={`${styles.selectForm} form-select`}
          id="LectureTeacherInput"
        >
          <option value={null} selected={props.lecture.teacher == null}>
            Select a teacher
          </option>
          {props.teachers.map((teacher) => (
            <option
              selected={
                props.lecture.teacher != null &&
                teacher.id === props.lecture.teacher.id
              }
              lecture
              value={teacher.id}
            >
              {teacher.firstName + " " + teacher.lastName}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 ">
        <Link
          className={`${styles.cancelButton} btn btn-outline-secondary`}
          to="/lectures"
        >
          Cancel
        </Link>
        <div className="d-flex ">
          <button
            type="button"
            onClick={props.deleteHandler}
            className={`${styles.deleteButton} btn btn-outline-danger me-2`}
          >
            Delete
          </button>
          <button
            type="submit"
            className={`${styles.updateButton} btn btn-outline-secondary`}
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}

export default LectureDetailsForm;
