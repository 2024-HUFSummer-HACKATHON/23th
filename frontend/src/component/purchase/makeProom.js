import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../css/makeProom.module.css";

export default function MakeProom() {
  const [rooms, setRooms] = useState([]); // 진행 중인 방 상태
  const navigate = useNavigate();
  const location = useLocation();
  const { itemId } = location.state || {};

  const goToPage = () => {
    navigate("/purchase/detail", { state: { itemId } });
  };

  const handleButtonClick = () => {
    setRooms([
      ...rooms,
      { id: rooms.length + 1, name: `Room ${rooms.length + 1}` },
    ]);
    navigate("/purchase/form", { state: { itemId } });
  };

  return (
    <div className={styles.roomContainer}>
      <h3 className={styles.category}>공동구매</h3>
      <div className={styles.roomDiv}>
        <div className={styles.room} onClick={goToPage}>
          <div className={styles.buying}> 구매하기</div>
          <div className={styles.people}>공동구매자 모집 현황 1/n</div>
          <div className={styles.date}>마감기한 2024.06.28</div>
        </div>
        <div className={styles.discount}>-{5420}원 할인!</div>
      </div>
      <div className={styles.buttonDiv}>
        <button onClick={handleButtonClick}>+공구방만들기</button>
      </div>
    </div>
  );
}
