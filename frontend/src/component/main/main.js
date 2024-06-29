import React, { useState } from "react";
import styles from "../css/main.module.css";

import { useNavigate } from "react-router-dom";
import Button from "../recipe/rec_ui/rec_button";
import recipImg from "../img/recipeImg.png";
import { Link } from "react-router-dom";
import styles2 from "../css/purchase.module.css";
import protein from "../img/protein.svg";
import creatin from "../img/creatin.svg";
import bcaa from "../img/bcaa.svg";
import foodImg2 from "../img/foodImg2.png";

export default function Main() {
  const supplementItems = [
    { id: 7, name: "프로틴", imageUrl: protein },
    { id: 8, name: "크레아틴", imageUrl: creatin },
    { id: 9, name: "BCAA", imageUrl: bcaa },
  ];
  const goToPage = (id) => {
    navigate(`/purchase/${id}`, { state: { itemId: id } });
    console.log(id);
  };
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Link to="/recipe">
          <div className={styles.box}>
            <div className={styles.message}>
              <div className={styles.banerTitle}>
                오늘의 HOT 레시피
                <img src={recipImg}></img>
              </div>
            </div>
            <div className={styles.btnDiv}>
              <div className={styles.btn}>구경하기 </div>
            </div>
          </div>
        </Link>
        <Link to="/recipe">
          <div className={styles.mainTitle}>
            <h3 className={styles.category}>공동구매</h3>
            <span className={styles.category}>전체 보기</span>{" "}
          </div>

          <div className={styles2.supplement}>
            <div className={`${styles2.section}`}>
              {supplementItems.map((item) => (
                <div
                  className={styles.category}
                  key={item.id}
                  onClick={() => goToPage(item.id)}
                >
                  <div className={styles.item}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                  </div>
                  <div className={styles.itemName}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </Link>
        <Link to="/recipe">
          <div className={styles.mainTitle}>
            <h3 className={styles.category}>레시피 추천</h3>
            <span className={styles.category}>전체 보기</span>{" "}
          </div>

          <div>
            <Button />
          </div>
          <div>
            <Link to="/view">
              <div className={styles.menuDiv}>
                <div className={styles.content}>
                  <img src={foodImg2}></img>
                  <span>계란 양배추 토스트</span>
                </div>
              </div>
            </Link>
          </div>
        </Link>
      </div>
    </>
  );
}
