"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  y?: number;
};

const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
  y = 24,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const style = {
    transitionDelay: `${delay}ms`,
    ["--reveal-y" as string]: `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal-section ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
