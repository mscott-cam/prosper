"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 160, damping: 20, mass: 0.6 });
  const ringY = useSpring(cursorY, { stiffness: 160, damping: 20, mass: 0.6 });
  const dotX = useSpring(cursorX, { stiffness: 600, damping: 30, mass: 0.2 });
  const dotY = useSpring(cursorY, { stiffness: 600, damping: 30, mass: 0.2 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches || reduced) return;

    setEnabled(true);
    document.documentElement.setAttribute("data-cursor-mounted", "true");

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const isHover = !!target?.closest(
        'a, button, [role="button"], [data-cursor="hover"]',
      );
      setHovering(isHover);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeAttribute("data-cursor-mounted");
    };
  }, [cursorX, cursorY, reduced]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="rounded-full border border-bone"
          animate={{
            width: hovering ? 56 : 28,
            height: hovering ? 56 : 28,
            opacity: 0.7,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="rounded-full bg-clay"
          animate={{
            width: hovering ? 4 : 6,
            height: hovering ? 4 : 6,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
