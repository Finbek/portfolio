import { dockApplications } from "@/data";
import useCheckMobileSize from "@/hooks/useCheckMobileSize";
import Icon from "../Icon/Icon";
import styles from "./Dock.module.scss";

const Dock = () => {
  const { isMobileSize } = useCheckMobileSize();
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
              size={isMobileSize ? 10 : 35}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dock;
