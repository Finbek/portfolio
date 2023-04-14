import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Window.module.scss";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

const Window: React.FC<Props> = ({ onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const windowId = useRef<string>(`window_${Date.now()}`); // Generate unique id

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  const handleMainDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (windowRef.current && windowRef.current.contains(event.target as Node)) {
      return;
    }

    // Click is outside the appGrid, close the window
    handleClose();
  };

  return ReactDOM.createPortal(
    <div
      className={styles.windowContainer}
      onClick={handleMainDivClick}
      id={windowId.current}
    >
      <div className={styles.windowBody} ref={windowRef}>
        {isClosing ? null : children}
      </div>
    </div>,
    document.body
  );
};

export default Window;
