import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../../css/backbutton.module.css";
import { useNavigate } from "react-router-dom";
import backImg from "../../img/back.png";

function BackButton() {
    const navigate = useNavigate();
    return (
        <>
      
        <Link to="/recipe">
          <div className={styles.content}>
          <img src={backImg} className="back-image"></img>
          </div>
        
        </Link>
    </>
    );
}

export default BackButton;