import styles from "./Dashboard.module.css";

function DashboardCards(props) {
  return (
    <div
      className={
        styles.dashboardCardsContainer + " row justify-content-center "
      }
    >
      {" "}
      <div className={styles.dashboardCard + " col-lg-4 "}>
        <div>
          {" "}
          <span>{props.data.lectures.length}</span>
          <span>Lectures</span>
        </div>
      </div>
      <div className={styles.dashboardCard + " col-lg-4 "}>
        <div>
          <span>{props.data.teachers.length}</span>
          <span>Teachers</span>
        </div>
      </div>
      <div className={styles.dashboardCard + " col-lg-4 "}>
        <div>
          {" "}
          <span>{props.data.students.length}</span>
          <span>Students</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
