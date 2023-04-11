import React, { useRef, useState } from "react";
import styles from "./Window.module.scss";

interface Props {
  onClose: () => void;
  className?: string;
  children: any;
}

const Window: React.FC<Props> = ({ onClose, className, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

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
    <div className={styles.windowContainer} onClick={handleMainDivClick}>
      <div className={styles.windowBody} ref={windowRef}>
        {children}
      </div>
    </div>
  );
};

export default Window;
