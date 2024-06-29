import { useNavigate } from "react-router-dom";
import styles from "../css/purchase.module.css";
import vegetables from "../img/vegetable.svg";
import rice from "../img/rice.svg";
import chicken from "../img/chicken.svg";
import fruit from "../img/fruit.svg";
import egg from "../img/egg.svg";
import fish from "../img/fish.svg";
import protein from "../img/protein.svg";
import creatin from "../img/creatin.svg";
import bcaa from "../img/bcaa.svg";
import vitamin from "../img/vitamin.svg";
import arginine from "../img/arginine.svg";
import omega3 from "../img/omega3.svg";

export default function Purchase() {
  const foodItems = [
    { id: 1, name: "야채/채소", imageUrl: vegetables },
    { id: 2, name: "쌀/잡곡/즉석밥", imageUrl: rice },
    { id: 3, name: "닭가슴살", imageUrl: chicken },
    { id: 4, name: "과일", imageUrl: fruit },
    { id: 5, name: "우유/계란", imageUrl: egg },
    { id: 6, name: "생선", imageUrl: fish },
  ];
  const supplementItems = [
    { id: 7, name: "프로틴", imageUrl: protein },
    { id: 8, name: "크레아틴", imageUrl: creatin },
    { id: 9, name: "BCAA", imageUrl: bcaa },
  ];
  const vitaminItems = [
    { id: 10, name: "멀티비타민", imageUrl: vitamin },
    { id: 11, name: "아르기닌", imageUrl: arginine },
    { id: 12, name: "오메가3", imageUrl: omega3 },
  ];
  const navigate = useNavigate();

  const goToPage = (id) => {
    navigate(`/purchase/${id}`, { state: { itemId: id } });
    console.log(id);
  };

  return (
    <div className={styles.purchaseContainer}>
      <h3 className={styles.category}>공동구매</h3>
      <div className={styles.box}>
        <div className={styles.message}>
          오늘도 {3}명이나 구매 완료했어요!
          <br />
          필요한 물품이 있는지 찾아보세요.
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.food}>
          <h3>음식</h3>
          <div className={`${styles.section}`}>
            {foodItems.map((item) => (
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
        <div className={styles.supplement}>
          <h3>보충제</h3>
          <div className={`${styles.section}`}>
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
        <div className={styles.vitamin}>
          <h3>영양제</h3>
          <div className={`${styles.section} `}>
            {vitaminItems.map((item) => (
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
      </div>
    </div>
  );
}
