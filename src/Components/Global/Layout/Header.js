import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

function Header() {
  const newDate = new Date();
  const date = newDate.toUTCString();
  console.log(date);
  const dateArr = date.split(" ");
  dateArr[0] = dateArr[0].slice(0, dateArr[0].length - 1);
  console.log(dateArr);

  return (
    <div
      className={
        "d-flex justify-content-between align-items-center border " +
        styles.headerContainer
      }
    >
      <div className="d-flex align-items-center">
        <button
          className={styles.sidebarButton}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#myOffCanvas"
          aria-controls="offcanvasExample"
        >
          <RxHamburgerMenu />
        </button>

        <div className={"d-flex align-items-center " + styles.dateContainer}>
          <div className={"d-flex flex-column align-items-start "}>
            <span>{dateArr[0]}</span>
            <span>{dateArr[2]}</span>
            <span>{dateArr[3]}</span>
          </div>
          <div>
            <p>{dateArr[1]}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/dashboard">
          <img
            style={{
              maxHeight: "100px",
            }}
            src="/images/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <select className={styles.langSelect}>
        <option defaultValue={"en"} value="en">
          English
        </option>
        <option value="tr">Turkish</option>
      </select>
    </div>
  );
}

export default Header;
