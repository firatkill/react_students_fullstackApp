import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import Header from "./Header";
function Layout(props) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className={styles.mainContainer + " container "}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
