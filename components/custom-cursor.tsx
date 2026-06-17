"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { stiffness: 400, damping: 35, mass: 0.4 });
  const y = useSpring(cursorY, { stiffness: 400, damping: 35, mass: 0.4 });

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
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-full bg-clay"
        animate={{
          width: hovering ? 10 : 7,
          height: hovering ? 10 : 7,
          opacity: hovering ? 0.9 : 0.65,
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
