import styles from "./Dashboard.module.css";
function LectureList(props) {
  const lectures = props.lectures;
  return (
    <ul className="container  d-flex justify-content-between align-items-center list-group ">
      {lectures.map((lecture) => (
        <li
          className={"list-group-item w-100 mb-2 row d-flex " + styles.listItem}
        >
          <div className="d-flex col-2 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Name</h6>
            <span>{lecture.name}</span>
          </div>
          <div className="d-flex  col-3 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Classroom</h6>
            <span>{lecture.classroom}</span>
          </div>
          <div className="d-flex col-3 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Student Capacity</h6>
            <span>{lecture.studentCapacity}</span>
          </div>
          <div className="d-flex  col-4 flex-column align-items-start">
            <h6 className="m-0 border-bottom">Teacher Name</h6>
            <span>
              {lecture.teacher === null
                ? "-"
                : lecture.teacher.firstName + " " + lecture.teacher.lastName}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LectureList;
