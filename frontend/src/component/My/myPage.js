import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/myPage.module.css";
import logo from "../img/logoCircle.svg";

export default function myPage() {
  return (
    <>
      <div className={styles.my}>
        <h3 className={styles.category}>MY</h3>
        <div className={styles.myContent}>
          <img src={logo} alt="Logo" />
          <div className={styles.buttonDiv}>
            <Link className={styles.btn} to="/signup">
              <div>회원가입</div>
            </Link>
            <Link className={styles.btn} to="/login">
              <div>로그인</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
