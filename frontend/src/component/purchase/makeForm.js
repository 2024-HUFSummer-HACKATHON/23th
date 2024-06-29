import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/makeForm.module.css";
import axiosInstance from "../../api/axiosInstance";

export default function MakeForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemId } = location.state || {};
  const [formData, setFormData] = useState({
    category: itemId,
    title: "",
    link: "",
    maxPeople: "",
    endDate: "",
    price: "",
    account: "",
  });
  if (!itemId) {
    navigate("/error"); // 또는 이전 페이지로 이동하거나 오류 메시지 표시
    return null;
  }
  const inputs = [
    {
      label: "구매하고자하는 식료품명을 작성해주세요!",
      placeholder: "ex>양파 (이런식으로 식료품명만 작성해주세요)",
      name: "title",
      type: "text",
    },
    {
      label: "구매사이트는 어디인가요?",
      placeholder: "ex> 구매 링크를 복사 + 붙여넣기 해주세요",
      name: "link",
      type: "text",
    },
    {
      label: "몇명이 함께 구매하고자 하나요?",
      placeholder: "ex> 5 (숫자만 입력해주세요)",
      name: "maxPeople",
      type: "number",
    },
    {
      label: "언제까지 구매하고자 하나요?",
      placeholder: "ex> 2024.06.28 (날짜 형식을 맞춰주세요!)",
      name: "endDate",
      type: "date", // 날짜 입력 필드
    },
    {
      label: "총 구매가격은 얼마인가요?",
      placeholder: "ex> 50000원",
      name: "price",
      type: "number",
    },
    {
      label: "공구를 진행할 계좌번호를 입력해주세요!",
      placeholder: "ex> 은행 + 계좌번호 입력",
      name: "account",
      type: "text",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axiosInstance.post("/post", formData, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      console.log("Success:", response.data);
      // 서버 응답에 따라 추가 작업 수행
      navigate("/detail"); // 예시: 성공 페이지로 이동
    } catch (error) {
      console.error("Error:", error);
      // 오류 처리
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>공동구매</h3>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index} className={styles.inputDiv}>
            <span>{input.label}</span>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className={styles.buttonDiv}>
          <button type="submit" className={styles.btn}>
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
}
