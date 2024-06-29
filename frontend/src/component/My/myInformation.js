import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/myInformation.module.css";
import logo from "../img/logoCircle.svg";
import axiosInstance from "../../api/axiosInstance";

export default function MyInformation() {
  const [userData, setUserData] = useState({ name: "", nickname: "" });
  const tokenData = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenData) {
      axiosInstance
        .post("/Authentication", { token: tokenData })
        .then((response) => {
          setUserData({
            name: response.data.name,
            nickname: response.data.nickname,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      navigate("/mypage");
    }
  }, [tokenData, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // 로그아웃 후 리디렉션할 페이지
  };

  return (
    <>
      <div className={styles.my}>
        <h3 className={styles.category}>MY</h3>
        <div className={styles.infoContent}>
          <img src={logo} alt="Logo" />
          <p className={styles.userInfo}>
            이름: {userData.name}
            <br />
            별명: {userData.nickname}
          </p>
          <div className={styles.buttonDiv}>
            <button type="submit" className={styles.btn} onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
