import { cn } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import AppWindow from "../Windows/AppWindow";
import Portfolio from "../apps/Portfolio/Portfolio";
import styles from "./Icon.module.scss";

const Icon: React.FC<AppProps> = ({
  appName,
  appIconUrl,
  appUrl,
  openOnClick,
  className,
  size = 60,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    switch (openOnClick) {
      case "page":
        window.location.href = appUrl;
        break;
      case "AppWindow":
        setIsOpen(true);
        break;
      case "Portfolio":
        setIsOpen1(true);
        break;
    }

    event.stopPropagation();
  };
  return (
    <>
      <div
        className={cn(styles.iconContainer, className)}
        onClick={handleClick}
      >
        <div
          className={styles.icon}
          style={{ width: size, height: size, fontSize: size * 0.6 }}
        >
          <Image
            src={appIconUrl}
            alt={appName}
            width={size * 0.8}
            height={size * 0.8}
          />
        </div>
        {appName !== "" && (
          <div className={styles.appName} style={{ fontSize: size * 0.25 }}>
            {appName}
          </div>
        )}
      </div>
      {isOpen && <AppWindow onClose={() => setIsOpen(false)} url={appUrl} />}
      {isOpen1 && <Portfolio onClose={() => setIsOpen1(false)} />}
      {}
    </>
  );
};

export default Icon;
