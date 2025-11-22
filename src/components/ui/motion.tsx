
import React, { useEffect, useRef, ReactNode, createElement } from 'react';

type MotionProps = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

// Add AnimatePresence component
export const AnimatePresence = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

const createMotionComponent = (elementType: string) => {
  return ({ children, className = "", ...props }: MotionProps) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return createElement(
      elementType,
      { 
        ref, 
        className: `animate-on-scroll ${className}`,
        ...props
      },
      children
    );
  };
};

export const motion = {
  div: createMotionComponent('div'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  h4: createMotionComponent('h4'),
  p: createMotionComponent('p'),
  span: createMotionComponent('span'),
  img: createMotionComponent('img'),
  section: createMotionComponent('section'),
  article: createMotionComponent('article'),
  a: createMotionComponent('a'),
  button: createMotionComponent('button'),
};
