import React, { useEffect, useRef } from "react";

const Me: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const sourceImages = Array.from(
      { length: 12 },
      (_, i) => `/portfolioApp/Me/${i}.webp`
    );
    const targetImages = Array.from(
      { length: 12 },
      (_, i) => `/portfolioApp/Me/${(i + 1) % 12}.webp`
    );
    const numFrames = 6; // Number of intermediate frames
    const transitionDuration = 1000; // Transition duration in milliseconds
    const delayBetweenTransitions = 2000; // Delay between transitions in milliseconds

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    let transitionValue = 0;
    let currentImageIndex = 0;

    const animateTransition = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the canvas

      if (transitionValue <= 1) {
        const sourceImage = new Image();
        sourceImage.src = sourceImages[currentImageIndex];
        sourceImage.onload = () => {
          ctx.globalAlpha = 1 - transitionValue;
          ctx.drawImage(sourceImage, 0, 0, canvasWidth, canvasHeight);
        };

        const targetImage = new Image();
        targetImage.src = targetImages[currentImageIndex];
        targetImage.onload = () => {
          ctx.globalAlpha = transitionValue;
          ctx.drawImage(targetImage, 0, 0, canvasWidth, canvasHeight);
        };

        transitionValue += 1 / numFrames;

        setTimeout(animateTransition, transitionDuration / numFrames);
      } else {
        setTimeout(() => {
          currentImageIndex = (currentImageIndex + 1) % sourceImages.length;
          transitionValue = 0;
          animateTransition();
        }, delayBetweenTransitions);
      }

      ctx.globalAlpha = 1; // Reset global alpha to 1
    };

    animateTransition();

    return () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    };
  }, []);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default Me;
