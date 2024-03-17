import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postStudent } from "../../redux/studentSlice";
import styles from "./CreateStudentForm.module.css";
function CreateStudentForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [studentInfo, setStudentInfo] = useState({
    studentNumber: 0,
    firstName: "",
    lastName: "",
    email: "",
  });

  const changeHandler = (e) => {
    switch (e.target.id) {
      case "StudentNumberInput":
        setStudentInfo({ ...studentInfo, studentNumber: e.target.value });
        break;
      case "StudentFirstNameInput":
        setStudentInfo({ ...studentInfo, firstName: e.target.value });
        break;
      case "StudentLastNameInput":
        setStudentInfo({ ...studentInfo, lastName: e.target.value });
        break;
      case "StudentEmailInput":
        setStudentInfo({
          ...studentInfo,
          email: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(postStudent(studentInfo));
    navigate("/students");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="StudentNumberInput">
          Student Number
        </label>
        <input
          value={studentInfo.studentNumber}
          onChange={changeHandler}
          className="form-control"
          id="StudentNumberInput"
          type="number"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="StudentFirstNameInput">
          First Name
        </label>
        <input
          value={studentInfo.firstName}
          onChange={changeHandler}
          className="form-control"
          id="StudentFirstNameInput"
          type="text"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="StudentLastNameInput">
          Last Name
        </label>
        <input
          value={studentInfo.lastName}
          onChange={changeHandler}
          className="form-control"
          id="StudentLastNameInput"
          type="text"
        />
      </div>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" htmlFor="StudentEmailInput">
          Last Name
        </label>
        <input
          value={studentInfo.email}
          onChange={changeHandler}
          className="form-control"
          id="StudentEmailInput"
          type="text"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 ">
        <Link
          className={`${styles.cancelButton} btn btn-outline-secondary`}
          to="/students"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className={`${styles.createButton} btn btn-outline-secondary`}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateStudentForm;
