import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../../css/recmain.module.css";
import { useNavigate } from "react-router-dom";
import recipImg from "../../img/recipeImg.png";

function Button() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.my}>
        <Link to="/view">
          <div className={styles.menuDiv}>
            <div className={styles.content}>
              <img src={recipImg}></img>
              <span>닭가슴살 볶음밥</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Button;
