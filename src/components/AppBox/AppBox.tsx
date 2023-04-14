import { cn } from "@/utils";
import React, { useState } from "react";
import Icon from "../Icon/Icon";
import AppBoxWindow from "../Windows/AppBoxWindow";
import styles from "./AppBox.module.scss";

interface Props {
  title: string;
  apps: AppProps[];
  className?: string;
}

const AppBox: React.FC<Props> = ({ title, apps, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={cn(styles.appBox, className)} onClick={handleOpen}>
        <div className={styles.appGrid}>
          {apps.slice(0, 4).map((app, index) => (
            <div className={styles.appIcon} key={index}>
              <Icon
                appName={""}
                appIconUrl={app.appIconUrl}
                appUrl={app.appUrl}
                size={25}
                type={app.type}
              />
            </div>
          ))}
        </div>
      </div>
      <span className={styles.title}>{title}</span>

      {isOpen && (
        <AppBoxWindow title={title} apps={apps} onClose={handleClose} />
      )}
    </div>
  );
};

export default AppBox;
