import { dockApplications } from "@/data";
import Icon from "../Icon/Icon";
import styles from "./Dock.module.scss";

const Dock = () => {
  return (
    <div className={styles.dock}>
      <ul>
        {dockApplications.map((each, ind) => (
          <li
            key={each.appName}
            className={`${
              ind === dockApplications.length - 4 ? styles.border : ""
            }`}
          >
            <Icon
              appName={each.appName}
              appIconUrl={each.appIconUrl}
              appUrl={each.appUrl}
              type={each.type}
              size={35}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dock;
