import { useState, useEffect } from "react";

export function useScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > threshold);
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrolled(); // Initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
