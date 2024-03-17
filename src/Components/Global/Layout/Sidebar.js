import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

function Sidebar() {
  return (
    <div>
      <div
        className={`offcanvas offcanvas-start ${styles.sidebarContainer}`}
        tabIndex="-1"
        id="myOffCanvas"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className=" offcanvas-title" id="offcanvasExampleLabel">
            <img style={{ width: "60%" }} src="/images/logo.png" alt="logo" />
          </h5>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="px-0 d-flex flex-column" style={{ listStyle: "none" }}>
            <Link className={styles.sidebar_link} to="/dashboard">
              Dashboard
            </Link>
            <Link className={styles.sidebar_link} to="/lectures">
              Lectures
            </Link>
            <Link className={styles.sidebar_link} to="/students">
              Students
            </Link>
            <Link className={styles.sidebar_link} to="/teachers">
              Teachers
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
