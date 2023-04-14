import { cn } from "@/utils";
import React, { useRef } from "react";
import Icon from "../Icon/Icon";
import styles from "./AppBoxWindow.module.scss";

interface Props {
  title: string;
  apps: AppProps[];

  onClose: () => void;
  className?: string;
}

const AppBoxWindow: React.FC<Props> = ({ title, apps, onClose, className }) => {
  const appGridRef = useRef<HTMLDivElement>(null);

  const handleMainDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (
      appGridRef.current &&
      appGridRef.current.contains(event.target as Node)
    ) {
      // Click is inside the appGrid, do nothing
      return;
    }

    // Click is outside the appGrid, close the window
    onClose();
  };
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div
      className={cn(styles.appBoxWindow, className)}
      onClick={handleMainDivClick}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.appGrid} ref={appGridRef}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.apps}>
          {apps.map((app, index) => (
            <div className={styles.appIcon} key={index}>
              <Icon
                appName={app.appName}
                appIconUrl={app.appIconUrl}
                appUrl={app.appUrl}
                type={app.type}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppBoxWindow;
