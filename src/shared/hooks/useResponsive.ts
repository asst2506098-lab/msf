import { useState, useEffect, useCallback } from "react";

export const BREAKPOINTS = {
  MIN_WIDTH: 1024,
} as const;

export function useResponsive() {
  const [isAppVisible, setIsAppVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const checkViewport = useCallback(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    setIsAppVisible(width >= BREAKPOINTS.MIN_WIDTH);
  }, []);

  useEffect(() => {
    setIsClient(true);
    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, [checkViewport]);

  return {
    isAppVisible: isClient ? isAppVisible : true,
    isClient,
  };
}
