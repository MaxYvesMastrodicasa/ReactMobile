import styles from "@/styles/game.module.css";
import { useEffect, useState } from "react";

export default function game() {
  const [answer, setAnswer] = useState("");
  const [answerList, setAnswerList] = useState([]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleAddAnswer = () => {
    if (answer.trim() !== "" && answer.length < 36) {
      setAnswerList([...answerList, answer]);
      setAnswer("");
    }
  };
  const handleDeleteAnswer = (index) => {
    const newAnswerList = [...answerList];
    newAnswerList.splice(index, 1);
    setAnswerList(newAnswerList);
  };

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch('/api/flag');
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.gamecard}>
        <div>
          <h1>A quel pays appartient ce drapeau ?</h1>
        </div>
        <div className={styles.apiDataFlag}>{data && <img className={style.p} src={data}></img>}</div>
        <div className={styles.inputAndButton}>
          <input
            className={styles.input}
            type="text"
            placeholder=" Ex: France"
            value={answer}
            onChange={handleAnswerChange}
          />
          <button className={styles.inputButton} onClick={handleAddAnswer}>
            Ajouter
          </button>
        </div>
      </div>
    </>
  );
}
