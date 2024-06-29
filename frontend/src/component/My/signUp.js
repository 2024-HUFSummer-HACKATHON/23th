import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/signUp.module.css";
import logo from "../img/logoCircle.svg";
import axiosInstance from "../../api/axiosInstance";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });

  const inputs = [
    { label: "이름", name: "name", placeholder: "ex> 이름을 입력하세요" },
    { label: "별명", name: "nickname", placeholder: "ex> 자취왕" },
    { label: "이메일", name: "email", placeholder: "ex> Example@hufs.ac.kr" },
    {
      label: "비밀번호",
      name: "password",
      placeholder: "비밀번호를 입력하세요",
      type: "password",
    },
    {
      label: "비밀번호 확인",
      name: "confirmPassword",
      placeholder: "비밀번호를 한번 더 입력해주세요",
      type: "password",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axiosInstance.post("/register", {
        name: formData.name,
        nickname: formData.nickname,
        email: formData.email,
        password: formData.password,
      });
      console.log(response);
      if (response.status === 200) {
        alert("회원가입이 완료되었습니다.");
        navigate("/"); // 회원가입 후 홈으로 이동
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <div className={styles.my}>
        <h3 className={styles.category}>MY</h3>
        <h4 className={styles.categoryDetail}>회원가입</h4>
        <div className={styles.signUpContent}>
          <img src={logo} alt="Logo" />
          <form onSubmit={handleSignUp}>
            {inputs.map((input, index) => (
              <div key={index} className={styles.inputDiv}>
                <span>{input.label}</span>
                <input
                  type={input.type || "text"}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={formData[input.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className={styles.buttonDiv}>
              <button className={styles.btn} type="submit">
                <div>회원가입</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
