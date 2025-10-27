import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 480) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

  useEffect(() => {
    const maxWidth = Math.max(breakpoint, 769);
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleChange = (e) => setIsMobile(e.matches);

    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;
