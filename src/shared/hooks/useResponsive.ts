import { useState, useEffect } from "react";

export const BREAKPOINTS = {
  MIN_WIDTH: 1024,
} as const;

export function useResponsive() {
  const [isAppVisible, setIsAppVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkViewport = () => {
      const width = window.innerWidth;
      setIsAppVisible(width >= BREAKPOINTS.MIN_WIDTH);
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  return {
    isAppVisible: isClient ? isAppVisible : true,
  };
}
