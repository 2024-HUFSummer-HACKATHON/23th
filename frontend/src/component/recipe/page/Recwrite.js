import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/recwrite.module.css";

export default function Recwrite() {
  const navigate = useNavigate();
  const inputs = [
    { label: "레시피명을 작성해주세요!", placeholder: "ex> 닭가슴살 샐러드" },
    {
      label: "재료는 무엇인가요?",
      placeholder: "ex> 닭가슴살, 양상추(,를 기준으로작성해주세요)",
    },
    {
      label: "레시피를 작성해주세요?",
      placeholder: "ex> 5(숫자만 입력해주세요)",
    },
    {
      label: "사진이 있다면 사진을 추가해주세요!",
      placeholder: "사진업로드하기",
    },
  ];
  const handleBackClick = () => {
    navigate("/recipe"); // 이전 페이지로 이동
  };

  return (
    <>
      <div>
        <div className={styles.title}>
          <button className={styles.backButton} onClick={handleBackClick}>
            ⬅️
          </button>
          <h3 className={styles.category}>레시피 추천</h3>
        </div>
        {inputs.map((input, index) => (
          <div key={index} className={styles.inputDiv}>
            <span>{input.label}</span>
            <input type="text" placeholder={input.placeholder} />
          </div>
        ))}
        <div className={styles.buttonDiv}>
          <button
            className={styles.btn}
            type="submit"
            onClick={handleBackClick}
          >
            <div>제출하기</div>
          </button>
        </div>
      </div>
    </>
  );
}
