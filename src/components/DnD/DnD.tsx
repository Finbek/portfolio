import { useEffect, useRef, useState } from "react";
import styles from "./DnD.module.scss";

interface Props {
  initialPosition: {
    x: number | string;
    y: number | string;
  };
  children: any;
}

const DragAndDrop: React.FC<Props> = ({ initialPosition, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(initialPosition);
  const [originalPosition, setOriginalPosition] = useState(initialPosition);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current) {
      const { x, y } = parentRef.current.getBoundingClientRect();
      setOriginalPosition({ x, y });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  const onMouseUp = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (isDragging) {
      const { clientX, clientY } = event;
      const { x: offsetX, y: offsetY } = dragOffset;

      const newX = clientX - offsetX;
      const newY = clientY - offsetY;

      const { innerHeight, innerWidth } = window;

      const isOverTop = newY < innerHeight * 0.05;
      const isOverLeft = newX < innerWidth * 0.02;
      const isOverRight = newX + dragOffset.x > innerWidth * 0.98;
      const isOverBottom = newY + dragOffset.y > innerHeight * 0.85;

      if (
        !isOverTop &&
        !isOverLeft &&
        !isOverRight &&
        !isOverBottom &&
        !isIntersecting()
      ) {
        setOriginalPosition({ x: newX, y: newY });
      } else {
        setPosition(originalPosition);
      }
      setIsDragging(false);
    }
  };
  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button === 0) {
      let timeout: NodeJS.Timeout;

      const handleMouseDown = () => {
        setIsDragging(true);

        const { clientX, clientY } = event;
        const { top, left } = parentRef.current?.getBoundingClientRect() || {
          top: 0,
          left: 0,
        };
        setDragOffset({ x: clientX - left, y: clientY - top });
      };

      timeout = setTimeout(handleMouseDown, 1000);

      const onMouseUp = () => {
        clearTimeout(timeout);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mouseup", onMouseUp);
    }
  };

  const onMouseMove = (event: MouseEvent) => {
    event.preventDefault();

    if (isDragging) {
      const { clientX, clientY } = event;
      const { x: offsetX, y: offsetY } = dragOffset;

      setPosition({ x: clientX - offsetX, y: clientY - offsetY });
      event.stopPropagation();
    }
  };

  const isIntersecting = () => {
    if (parentRef.current) {
      const { left, right, top, bottom } =
        parentRef.current.getBoundingClientRect();
      const dnd = document.getElementsByClassName("dnd");
      for (let i = 0; i < dnd.length; i++) {
        const draggable = dnd[i] as HTMLElement;

        if (draggable !== parentRef.current) {
          const rect = draggable.getBoundingClientRect();

          if (
            left < rect.right &&
            right > rect.left &&
            top < rect.bottom &&
            bottom > rect.top
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <div
      ref={parentRef}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
      }}
      className={isDragging ? styles.draggable : "dnd"}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
};
export default DragAndDrop;
