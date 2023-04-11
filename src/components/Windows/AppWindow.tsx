import React, { useEffect, useRef, useState } from "react";
import styles from "./AppWindow.module.scss";
import Window from "./Window";

interface Props {
  url: string;
  onClose: () => void;
  className?: string;
}

const AppWindow: React.FC<Props> = ({ url, onClose, className }) => {
  const [isClosing, setIsClosing] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleLoad = () => {
      if (iframeRef.current) {
        iframeRef.current.focus();
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleLoad);
      }
    };
  }, [onClose]);

  const handleMainDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (windowRef.current && windowRef.current.contains(event.target as Node)) {
      // Click is inside the appGrid, do nothing
      return;
    }

    // Click is outside the appGrid, close the window
    handleClose();
  };

  return (
    <Window onClose={onClose}>
      <iframe
        className={styles.iframe}
        src={url}
        ref={iframeRef}
        tabIndex={0}
      ></iframe>
    </Window>
  );
};

export default AppWindow;
