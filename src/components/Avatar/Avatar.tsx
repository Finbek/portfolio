import { useEffect, useRef } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  transition: transform 0.2s ease-in-out;
`;

const ImageComponent = () => {
  const imageRef = useRef<HTMLImageElement>(null); // Update type to HTMLImageElement

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update event type to MouseEvent
      const image = imageRef.current;
      const imageRect = image?.getBoundingClientRect(); // Add optional chaining for null check
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (image && imageRect) {
        // Add null check for image and imageRect
        // Calculate the angle between the image's center and the mouse cursor
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;
        const angle = Math.atan2(mouseY - imageCenterY, mouseX - imageCenterX);
        const angleDegrees = (angle * 180) / Math.PI;

        // Update the image's transform property to rotate it toward the mouse cursor
        image.style.transform = `rotate(${angleDegrees}deg)`;
      }
    };

    // Attach event listener to track mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ImageContainer>
      <Image
        ref={imageRef}
        src="/appIcons/me.webp"
        alt="Image looking toward mouse cursor"
      />
    </ImageContainer>
  );
};

export default ImageComponent;
