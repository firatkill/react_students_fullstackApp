import { Link } from "react-router-dom";
import styles from "./TeacherDetailsForm.module.css";

function TeacherDetailsForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="TeacherFirstNameInput">
          First Name
        </label>
        <input
          value={props.teacher.firstName}
          onChange={props.changeHandler}
          className="form-control"
          id="TeacherFirstNameInput"
          type="text"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="TeacherLastNameInput">
          Last Name
        </label>
        <input
          value={props.teacher.lastName}
          onChange={props.changeHandler}
          className="form-control"
          id="TeacherLastNameInput"
          type="text"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="TeacherEmailInput">
          Email
        </label>
        <input
          value={props.teacher.email}
          onChange={props.changeHandler}
          className="form-control"
          id="TeacherEmailInput"
          type="text"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 ">
        <Link
          className={`${styles.cancelButton} btn btn-outline-secondary`}
          to="/teachers"
        >
          Cancel
        </Link>
        <div>
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

export default TeacherDetailsForm;
