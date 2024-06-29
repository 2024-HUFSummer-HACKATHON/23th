import React, { useState } from "react";
import styles from "../css/loading.module.css";
import logo from "../img/logo.svg";

export default function loading() {
  return (
    <>
      <div className={styles.loadingDiv}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
}
