"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  italicWords?: string[];
}

export function SplitText({
  children,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  as = "div",
  italicWords = [],
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();

  const MotionTag = motion[as] as typeof motion.div;
  const words = children.split(" ");
  const italics = new Set(italicWords.map((w) => w.toLowerCase()));

  return (
    <MotionTag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pr-[0.25em]"
        >
          <motion.span
            className={`inline-block ${
              italics.has(word.toLowerCase().replace(/[.,]/g, ""))
                ? "italic font-light"
                : ""
            } ${wordClassName ?? ""}`}
            initial={{ y: "110%" }}
            animate={
              reduced
                ? { y: "0%" }
                : inView
                  ? { y: "0%" }
                  : { y: "110%" }
            }
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
