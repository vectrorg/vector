"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { ReactNode, Children } from "react";

export const AnimateOnScroll = ({
  children,
  offset = 10,
}: {
  children: ReactNode;
  offset?: number;
}) => {
  const totalCards = Children.count(children);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return (
    <div className="flex flex-col min-w-full items-center p-5" style={{ backgroundColor: "black" }}>
      {Children.map(children, (child, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, {
          once: false,
          margin: "0px 0px -90px 0px",
        });

        const isScrollingDown = scrollDirection === "down";

        const y = isInView
          ? 0
          : isScrollingDown
          ? -40
          : 40;

        const opacity = isInView ? 1 : 0;

        return (
          <motion.div
            className="w-[90%]"
            key={index}
            ref={ref}
            initial={false}
            animate={{
              y,
              opacity,
              zIndex: totalCards - index,
            }}
            transition={{
              type: "spring",
              damping: 14,
              stiffness: 100,
              mass: 0.5,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};
