import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css";
import home from "../img/home.svg";
import purchase from "../img/purchase.svg";
import recommendation from "../img/recommendation.svg";
import my from "../img/my.svg";

const menuItems = [
  { src: home, label: "Home", path: "/" },
  { src: purchase, label: "공동구매", path: "/purchase" },
  { src: recommendation, label: "레시피추천", path: "/recipe" },
  { src: my, label: "MY", path: "/mypage" },
];

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.menuContainer}>
          <Link className={styles.menu} to={item.path}>
            <img src={item.src} alt={item.label} />
            <br />
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
