import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import logoko from "../img/logoko.svg";

export default function Navbar() {
  return (
    <>
      <div className={styles.navContainer}>
        <Link to="/">
          <img src={logoko} alt="Logo" />
        </Link>
      </div>
    </>
  );
}
