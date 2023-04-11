import { useEffect, useState } from "react";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    const dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const dayOfMonth = date.getDate();

    const formattedTime = `${hour % 12 === 0 ? 12 : hour % 12}:${
      minute < 10 ? "0" : ""
    }${minute} ${ampm}`;
    const formattedDate = `${dayOfWeek.slice(0, 3)} ${month} ${dayOfMonth}`;

    return { formattedTime, formattedDate };
  };

  const { formattedTime, formattedDate } = formatTime(time);

  return (
    <div className={styles.topbar}>
      <div className={styles.dateTime}>
        <div>{formattedTime}</div>
        <div>{formattedDate}</div>
      </div>
      <div className={styles.icons}>
        <div className={styles.wifiIcon}>
          <i className="fas fa-wifi" />
        </div>
        <div className={styles.chargeIcon}>
          <i className="fas fa-battery-full" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
