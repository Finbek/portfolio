import { BREAKPOINT } from "@/constants/ui";
import { useEffect, useState } from "react";

const useCheckMobileSize = () => {
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    setIsMobileSize(BREAKPOINT >= window.innerWidth);

    const listener = () => {
      setIsMobileSize(BREAKPOINT >= window.innerWidth);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.addEventListener("resize", listener);
    };
  }, []);

  return { isMobileSize };
};

export default useCheckMobileSize;
