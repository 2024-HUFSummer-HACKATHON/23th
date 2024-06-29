import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../../css/writebutton.module.css";
import { useNavigate } from "react-router-dom";
import recipImg from "../../img/recipeImg.png";

function WriteButton() {
  return (
    <>
      <div className={styles.my}>
        <Link to="/write">
          <div className={styles.menuDiv}>
            <div className={styles.content}>
              <span>+레시피 작성하기</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default WriteButton;
