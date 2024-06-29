import { useState, useEffect } from "react";
import styles from "../css/detailpurchase.module.css";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Detailpurchase() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: 0,
    category: "",
    memberid: 0,
    title: "",
    link: "",
    maxPeople: 0,
    endDate: "",
    price: 0,
    account: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/posts", {
          headers: { Authorization: "token" },
        });
        setFormData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axiosInstance.post("/posts", formData, {
        headers: { Authorization: "token" },
      });
      console.log("Success:", response.data);
      navigate("/detail"); // 예시: 성공 페이지로 이동
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={styles.detailContainer}>
        <h3>공동구매</h3>
        <div className={styles.box}>
          <h4>구매하기</h4>
          <a href={formData.link} target="_blank" rel="noopener noreferrer">
            🔗 구매 링크 바로가기
          </a>
          <div className={styles.people}>
            공동구매자 모집 현황 {formData.memberid}/{formData.maxPeople}
          </div>
          <div className={styles.deadline}>
            <div>마감기한</div>
            <div>{formData.endDate}</div>
          </div>
          <div className={styles.amount}>
            <div>1/n 금액 {formData.price / formData.maxPeople}</div>
          </div>
          <div className={styles.bankaccount}>
            <div>대표 계좌</div>
            <div className={styles.date}>{formData.account}</div>
          </div>
          <div className={styles.sale}>
            -{formData.price - formData.price / formData.maxPeople}원 할인!
          </div>
          <button onClick={handleSubmit}>공동구매하기</button>
        </div>
      </div>
    </>
  );
}
