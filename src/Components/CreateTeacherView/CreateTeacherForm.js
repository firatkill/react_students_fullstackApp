import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postTeacher } from "../../redux/teacherSlice";

import styles from "./CreateTeacherForm.module.css";

function CreateTeacherForm(props) {
  const navigate = useNavigate();
  const teacher = { firstName: "", lastName: "", email: "" };
  const [teacherInfo, setTeacherInfo] = useState(teacher);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    switch (e.target.id) {
      case "TeacherFirstNameInput":
        setTeacherInfo({ ...teacherInfo, firstName: e.target.value });
        break;
      case "TeacherLastNameInput":
        setTeacherInfo({ ...teacherInfo, lastName: e.target.value });
        break;
      case "TeacherEmailInput":
        setTeacherInfo({
          ...teacherInfo,
          email: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postTeacher(teacherInfo));
    navigate("/teachers");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="TeacherFirstNameInput">
          First Name
        </label>
        <input
          value={teacherInfo.firstName}
          onChange={changeHandler}
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
          value={teacherInfo.lastName}
          onChange={changeHandler}
          className="form-control"
          id="TeacherLastNameInput"
          type="text"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="TeacherEmailInput">
          Last Name
        </label>
        <input
          value={teacherInfo.email}
          onChange={changeHandler}
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
        <button
          type="submit"
          className={`${styles.createButton} btn btn-outline-secondary`}
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default CreateTeacherForm;
