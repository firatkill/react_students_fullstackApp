import styles from "./Dashboard.module.css";
function TeacherList(props) {
  const teachers = props.teachers;
  return (
    <ul className="container  d-flex justify-content-between align-items-center list-group ">
      {teachers.map((teacher) => (
        <li
          className={"list-group-item w-100 mb-2 row d-flex " + styles.listItem}
        >
          <div className="d-flex col-3 flex-column align-items-start">
            <h6 className="m-0 border-bottom">First Name</h6>
            <span>{teacher.firstName}</span>
          </div>
          <div className="d-flex  col-3 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Last Name</h6>
            <span>{teacher.lastName}</span>
          </div>
          <div className="d-flex  col-6 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Email</h6>
            <span style={{ maxWidth: "auto", overflow: "hidden" }}>
              {teacher.email}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TeacherList;
