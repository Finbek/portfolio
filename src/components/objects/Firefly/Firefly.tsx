import { useEffect, useState } from "react";
import styles from "./Firefly.module.scss";

const Firefly = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const fireflyStyle = {
    top: position.y,
    left: position.x,
    transition: "all 1s ease-in-out",
  };

  return <div className={styles.firefly} style={fireflyStyle} />;
};

export default Firefly;
