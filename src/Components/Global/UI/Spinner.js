import styles from "./Spinner.module.css";
import { useSelector } from "react-redux";
function Spinner() {
  const teachersPending = useSelector((state) => state.teachers.pending);
  const studentsPending = useSelector((state) => state.student.pending);
  const lecturespending = useSelector((state) => state.lectures.pending);

  return (
    <div
      style={{
        visibility:
          teachersPending || studentsPending || lecturespending
            ? "visible"
            : "hidden",
      }}
      class={styles.spinnerBackdrop}
    >
      <div class={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
