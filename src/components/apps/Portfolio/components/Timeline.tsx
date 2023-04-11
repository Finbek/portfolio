import { useState } from "react";
import styles from "./Timeline.module.scss";

const timelineData = [
  {
    text: "Wrote my first blog post ever on Medium",
    date: "March 03 2017",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
  },
  {
    text: "Wrote my first blog post ever on Medium",
    date: "March 03 2017",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
  },
  {
    text: "Wrote my first blog post ever on Medium",
    date: "March 03 2017",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
  },
];

const timelineData2 = [
  {
    text: "Wrote my first blog post ever on Medium",
    date: "March 03 2017",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
  },
  {
    text: "Wrote my first blog post ever on Medium",
    date: "March 03 2017",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
  },
  {
    text: "Wrote my first blog post ever on Medium",
    date: "March 03 2017",
    category: {
      tag: "cap",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
  },
];
const Timeline = () => {
  const [isWork, setIsWork] = useState(true);
  const handleClicked = () => {
    setIsWork(!isWork);
  };
  return (
    <>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleClicked}>
          <span className="fa-layers fa-fw">
            <i className="fas fa-briefcase"></i>
          </span>
          Work
        </button>
        <button className={styles.button} onClick={handleClicked}>
          <span className="fa-layers fa-fw">
            <i className="fas fa-graduation-cap"></i>
          </span>
          Education
        </button>
      </div>
      {isWork ? (
        <div>
          {timelineData.length > 0 && (
            <div className={styles["timeline-container"]}>
              {timelineData.map((data, idx) => (
                <div className={styles["timeline-item"]}>
                  <div className={styles["timeline-item-content"]}>
                    <span
                      className={styles["tag"]}
                      style={{ background: data.category.color }}
                    >
                      {data.category.tag}
                    </span>
                    <time>{data.date}</time>
                    <p>{data.text}</p>
                    {data.link && (
                      <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.link.text}
                      </a>
                    )}
                    <span className={styles["circle"]} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          {timelineData2.length > 0 && (
            <div className={styles["timeline-container"]}>
              {timelineData2.map((data, idx) => (
                <div className={styles["timeline-item"]}>
                  <div className={styles["timeline-item-content"]}>
                    <span
                      className={styles["tag"]}
                      style={{ background: data.category.color }}
                    >
                      {data.category.tag}
                    </span>
                    <time>{data.date}</time>
                    <p>{data.text}</p>
                    {data.link && (
                      <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.link.text}
                      </a>
                    )}
                    <span className={styles["circle"]} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Timeline;
