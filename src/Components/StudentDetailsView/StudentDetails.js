import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import StudentDetailsForm from "./StudentDetailsForm";
function StudentDetails(props) {
  const students = useSelector((state) => state.data.data.students);

  const params = useParams();
  const student = students.find(
    (student) => student.id === Number.parseInt(params.studentId)
  );
  const [studentInfo, setStudentInfo] = useState(student);

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
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(studentInfo);
  };
  return (
    <StudentDetailsForm
      studentInfo={studentInfo}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
}

export default StudentDetails;
