import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../rec_ui/rec_button";
import styles from "../../css/recmain.module.css";
import recipImg from "../../img/recipeImg.png";
import { Link } from "react-router-dom";
import WriteButton from "../rec_ui/rec_writebutton";

export default function Recmain() {
  return (
    <div>
      <h3 className={styles.category}>레시피 추천</h3>
      <WriteButton />
      <Button />
    </div>
  );
}
