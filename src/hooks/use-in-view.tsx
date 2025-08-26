
import { useEffect, useRef, useState } from "react";

/**
 * Simple useInView hook to detect if an element is visible in viewport.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);
  return { ref, inView };
}
