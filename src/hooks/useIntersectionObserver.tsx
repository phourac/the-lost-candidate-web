import { useEffect, useState, useRef, RefObject } from "react";

interface IntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

function useIntersectionObserver<T extends Element>(
  options: IntersectionOptions = {}
): [RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Unobserve after it becomes visible
        }
      },
      { ...options }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

export default useIntersectionObserver;
