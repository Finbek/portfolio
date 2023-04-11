import { useEffect, useState } from "react";
import styled from "styled-components";

const Descript = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Cursor = styled.span`
  animation: blink 0.7s infinite;

  opacity: 1;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Desc = ({ Texts }: any) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 50; // adjust typing speed here
    const deletingSpeed = 10; // adjust deleting speed here
    const delay = 1000; // adjust delay between typing and deleting here
    const interval = isDeleting ? deletingSpeed : typingSpeed;

    const currentTextLength = currentText.length;
    const nextTextIndex = (currentTextIndex + 1) % Texts.length;
    const nextText = Texts[nextTextIndex];

    const typingTimer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(nextText.slice(0, currentTextLength + 1));
      } else {
        setCurrentText(currentText.slice(0, currentTextLength - 1));
      }
    }, interval);

    if (isDeleting && currentTextLength === 0) {
      setIsDeleting(false);
      setCurrentTextIndex(nextTextIndex);
    }

    if (!isDeleting && currentText === nextText) {
      setTimeout(() => setIsDeleting(true), delay);
    }

    return () => clearTimeout(typingTimer);
  }, [currentText, currentTextIndex, Texts, isDeleting]);

  return (
    <Descript>
      {currentText}
      <Cursor>|</Cursor>
    </Descript>
  );
};

export default Desc;
