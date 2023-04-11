import Image from "next/image";
import { useState } from "react";
import styles from "./Card.module.scss";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const setBack = () => {
    setIsFlipped(true);
  };
  const setFront = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flip : ""}`}
      onMouseEnter={setBack}
      onMouseLeave={setFront}
    >
      <div className={`${styles.card__face} ${styles["card__face--front"]}`}>
        <h2>Front</h2>
        <p>This is the front of the card.</p>
      </div>
      <div className={`${styles.card__face} ${styles["card__face--back"]}`}>
        <h2>Back</h2>
        <p>This is the back of the card.</p>
        {isFlipped && (
          <div className={styles.siteWindow}>
            <Image src={"pdf.svg"} alt={""} width={40} height={40}></Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
