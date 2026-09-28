"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const Component = as;
  const setElementRef = (element: HTMLDivElement | HTMLLIElement | null) => {
    elementRef.current = element;
  };

  return (
    <Component
      ref={setElementRef}
      className={`reveal-on-scroll ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
