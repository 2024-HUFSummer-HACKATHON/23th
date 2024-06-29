import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WriteButton from "../rec_ui/rec_writebutton";
import BackButton from "../rec_ui/rec_back";
import styles from "../../css/recview.module.css";
import recipImg from "../../img/recipeImg.png";

export default function Recview() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/recipe"); // 이전 페이지로 이동
  };
  return (
    <>
      <div className={styles.my}>
        <div className={styles.row}>
          <button className={styles.backButton} onClick={handleBackClick}>
            ⬅️
          </button>
          <h3 className={styles.category}>레시피 추천</h3>
        </div>
        <div className={styles.menuDiv}>
          <div className={styles.containtitle}>
            <div className={styles.contentname}>
              <h4>닭가슴살 볶음밥</h4>
            </div>
            <div className={styles.content}>
              <img src={recipImg}></img>
            </div>
          </div>
          <div className={styles.contentrec}>
            <span>재료: 숙주, 계란, 양파, 버섯, 굴소스, 마요네즈</span>
            <div>레시피: </div>
            <span>1. 양파를 먼저 볶아주세요</span>
            <span>2. 버섯을 볶아주세요</span>
            <span>3. 숙주와 남은 냉장고 재료들을 넣어주세요</span>
            <span>4. 굴소스를 넣어서 볶아주세요</span>
            <span>5. 밥 위에 볶은 야채들을 올리고</span>
            <span>마요네즈를 취향껏 뿌려주세요</span>
            <span>6. 맛있게 먹어요</span>
          </div>
        </div>
      </div>
    </>
  );
}
