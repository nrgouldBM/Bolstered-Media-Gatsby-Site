import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export function useWindowDimensions(): { width: number; height: number } {
  function isBrowser() {
    return typeof window !== "undefined";
  }

  const [windowDimensions, setWindowDimensions] = useState(
    isBrowser() && getWindowDimensions()
  );

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
