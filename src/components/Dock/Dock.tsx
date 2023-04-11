import styles from "./Dock.module.scss";

const Dock = () => {
  const dockApplications = [
    "fab fa-safari",
    "fab fa-apple",
    "fas fa-calendar",
    "fas fa-music",
    "fas fa-envelope",
    "fab fa-safari",
    "fab fa-apple",
    "fas fa-calendar",
    "fas fa-music",
    "fas fa-envelope",
    "fab fa-safari",
    "fab fa-apple",
    "fas fa-calendar",
    "fas fa-music",
    "fas fa-envelope",
  ];
  return (
    <div className={styles.dock}>
      <ul>
        {dockApplications.map((each, ind) => (
          <li
            key={each}
            className={`${
              ind === dockApplications.length - 4 ? styles.border : ""
            }`}
          >
            <a href="#">
              <i className={each}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dock;
