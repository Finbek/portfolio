import { cn } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import AppWindow from "../Windows/AppWindow";
import Attributions from "../apps/Attributions/Attributions";
import Calculator from "../apps/Calculator/Calculator";
import Portfolio from "../apps/Portfolio/Portfolio";
import Wallpapers from "../apps/Wallpapers/Wallpapers";
import styles from "./Icon.module.scss";

const Icon: React.FC<AppProps> = ({
  appName,
  appIconUrl,
  appUrl,
  type,
  className,
  size = 60,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderApp = () => {
    switch (appName) {
      case "Me":
        return <Portfolio onClose={() => setIsOpen(false)} />;
      case "Calculator":
        return <Calculator onClose={() => setIsOpen(false)} />;
      case "Wallpapers":
        return <Wallpapers onClose={() => setIsOpen(false)} />;
      case "Attributes":
        return <Attributions onClose={() => setIsOpen(false)} />;
      case "Books":
      // return <Books onClose={() => setIsOpen1(false)} />;
      default:
        return <AppWindow onClose={() => setIsOpen(false)} url={appUrl} />;
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    switch (type) {
      case "page":
        window.location.href = appUrl;
        break;
      default:
        setIsOpen(true);
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
      {isOpen && renderApp()}
    </>
  );
};

export default Icon;
